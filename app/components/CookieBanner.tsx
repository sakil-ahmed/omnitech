"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_NAME = "omnitech_cookie_consent";
const LEGACY_STORAGE_KEY = "omnitech-cookie-consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year
export const COOKIE_SETTINGS_EVENT = "omnitech:open-cookie-settings";

type CookieCategory = "necessary" | "analytics" | "preferences" | "marketing";

type CookiePreferences = Record<CookieCategory, boolean>;

const copy = {
  banner: {
    title: "Your privacy matters",
    description:
      "Omnitech Inc. uses cookies and similar technologies to operate this website, remember your settings, and understand how our Shopify marketing pages are used. You can accept all cookies, allow only essential ones, or manage your preferences by category.",
    privacyLink: "Read our Privacy Policy",
  },
  customize: {
    title: "Manage cookie preferences",
    description:
      "Select the cookies you are comfortable with. Essential cookies are required for the site to function and cannot be disabled. You can update these settings at any time from the Cookies link in the footer.",
    save: "Save my preferences",
    back: "Back to banner",
    close: "Close",
  },
  buttons: {
    customize: "Customize",
    essential: "Essential only",
    acceptAll: "Accept all cookies",
  },
};

const cookieCategories: {
  id: CookieCategory;
  label: string;
  description: string;
  required?: boolean;
}[] = [
  {
    id: "necessary",
    label: "Essential cookies",
    description:
      "Required for core site functionality, security, accessibility, and storing your cookie consent choice in your browser. These cannot be turned off.",
    required: true,
  },
  {
    id: "analytics",
    label: "Analytics cookies",
    description:
      "Help us measure traffic and understand which pages visitors view so we can improve content, navigation, and performance.",
  },
  {
    id: "preferences",
    label: "Preference cookies",
    description:
      "Remember choices you make—such as light or dark theme—so the site works the way you expect on return visits.",
  },
  {
    id: "marketing",
    label: "Marketing cookies",
    description:
      "Allow us to measure the effectiveness of campaigns and share relevant Omnitech product updates with interested visitors.",
  },
];

const allEnabled: CookiePreferences = {
  necessary: true,
  analytics: true,
  preferences: true,
  marketing: true,
};

const essentialOnly: CookiePreferences = {
  necessary: true,
  analytics: false,
  preferences: false,
  marketing: false,
};

function parseStoredConsent(raw: string | null): CookiePreferences | null {
  if (!raw) return null;
  if (raw === "accepted") return allEnabled;
  if (raw === "essential") return essentialOnly;

  try {
    const parsed = JSON.parse(raw) as Partial<CookiePreferences>;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      preferences: Boolean(parsed.preferences),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));

  if (!match) return null;
  return decodeURIComponent(match.slice(name.length + 1));
}

function setCookie(name: string, value: string) {
  const secure =
    typeof window !== "undefined" && window.location.protocol === "https:";

  const parts = [
    `${name}=${encodeURIComponent(value)}`,
    "path=/",
    `max-age=${COOKIE_MAX_AGE}`,
    "SameSite=Lax",
  ];

  if (secure) parts.push("Secure");

  document.cookie = parts.join("; ");
}

function readStoredConsent(): CookiePreferences | null {
  const fromCookie = parseStoredConsent(getCookie(COOKIE_NAME));
  if (fromCookie) return fromCookie;

  // Migrate older localStorage consent into a browser cookie once.
  if (typeof window === "undefined") return null;

  const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
  if (!legacy) return null;

  const parsed = parseStoredConsent(legacy);
  if (parsed) {
    savePreferences(parsed);
  }
  localStorage.removeItem(LEGACY_STORAGE_KEY);
  return parsed;
}

function savePreferences(preferences: CookiePreferences) {
  setCookie(COOKIE_NAME, JSON.stringify(preferences));
  localStorage.removeItem(LEGACY_STORAGE_KEY);
}

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
        disabled
          ? "cursor-not-allowed bg-accent/40"
          : checked
            ? "bg-accent"
            : "bg-border"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

function CookieIcon() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3 4.87v-2.66m0 2.66c-1.355 0-2.697-.055-4.024-.165C6.845 17.49 6 16.527 6 15.392v-2.513m6 4.87V18.75"
        />
      </svg>
    </span>
  );
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(essentialOnly);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      setPreferences(stored);
    } else {
      setVisible(true);
    }

    const openSettings = () => {
      const current = readStoredConsent();
      if (current) setPreferences(current);
      setCustomizeOpen(true);
      setVisible(true);
    };

    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  useEffect(() => {
    if (!visible || !customizeOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCustomizeOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [visible, customizeOpen]);

  const close = () => {
    setVisible(false);
    setCustomizeOpen(false);
  };

  const acceptAll = () => {
    savePreferences(allEnabled);
    setPreferences(allEnabled);
    close();
  };

  const rejectOptional = () => {
    savePreferences(essentialOnly);
    setPreferences(essentialOnly);
    close();
  };

  const saveCustom = () => {
    savePreferences(preferences);
    close();
  };

  const updateCategory = (id: CookieCategory, enabled: boolean) => {
    if (id === "necessary") return;
    setPreferences((prev) => ({ ...prev, [id]: enabled }));
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {customizeOpen && (
            <motion.button
              type="button"
              aria-label="Close cookie preferences"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCustomizeOpen(false)}
              className="fixed inset-0 z-[99] bg-black/50 backdrop-blur-sm"
            />
          )}

          {customizeOpen ? (
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookie-customize-title"
              aria-describedby="cookie-customize-description"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            >
              <div className="w-full max-w-lg rounded-2xl border border-border/80 bg-surface p-6 shadow-2xl shadow-black/20 sm:max-w-xl sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <CookieIcon />
                    <div>
                      <h2
                        id="cookie-customize-title"
                        className="font-display text-xl font-semibold sm:text-2xl"
                      >
                        {copy.customize.title}
                      </h2>
                      <p
                        id="cookie-customize-description"
                        className="mt-2 text-sm leading-relaxed text-muted"
                      >
                        {copy.customize.description}{" "}
                        <Link href="/privacy" className="font-medium text-accent hover:underline">
                          {copy.banner.privacyLink}
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCustomizeOpen(false)}
                    aria-label={copy.customize.close}
                    className="rounded-lg p-1.5 text-muted transition-colors hover:bg-border/50 hover:text-foreground"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mt-6 max-h-[min(52vh,360px)] space-y-3 overflow-y-auto pr-1">
                  {cookieCategories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-start justify-between gap-4 rounded-xl border border-border/80 bg-background/80 p-4"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-semibold">{category.label}</p>
                          {category.required && (
                            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted">
                          {category.description}
                        </p>
                      </div>
                      <Toggle
                        label={category.label}
                        checked={preferences[category.id]}
                        disabled={category.required}
                        onChange={(value) => updateCategory(category.id, value)}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setCustomizeOpen(false)}
                    className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {copy.customize.back}
                  </button>
                  <button
                    type="button"
                    onClick={saveCustom}
                    className="rounded-full bg-gradient-to-r from-accent to-accent-light px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-opacity hover:opacity-90"
                  >
                    {copy.customize.save}
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              role="dialog"
              aria-labelledby="cookie-banner-title"
              aria-describedby="cookie-banner-description"
              aria-live="polite"
              initial={{ y: 48, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 48, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
            >
              <div className="mx-auto max-w-4xl rounded-2xl border border-border/80 bg-surface/95 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-6">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="mb-3 flex items-center gap-2">
                      <CookieIcon />
                      <h2 id="cookie-banner-title" className="font-display text-lg font-semibold">
                        {copy.banner.title}
                      </h2>
                    </div>
                    <p id="cookie-banner-description" className="text-sm leading-relaxed text-muted">
                      {copy.banner.description}{" "}
                      <Link href="/privacy" className="font-medium text-accent hover:underline">
                        {copy.banner.privacyLink}
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:shrink-0">
                    <button
                      type="button"
                      onClick={() => setCustomizeOpen(true)}
                      className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {copy.buttons.customize}
                    </button>
                    <button
                      type="button"
                      onClick={rejectOptional}
                      className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {copy.buttons.essential}
                    </button>
                    <button
                      type="button"
                      onClick={acceptAll}
                      className="rounded-full bg-gradient-to-r from-accent to-accent-light px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-opacity hover:opacity-90"
                    >
                      {copy.buttons.acceptAll}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
}

export function getCookiePreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  return readStoredConsent();
}

export function isCookieAllowed(category: CookieCategory): boolean {
  const prefs = getCookiePreferences();
  if (!prefs) return category === "necessary";
  return prefs[category];
}
