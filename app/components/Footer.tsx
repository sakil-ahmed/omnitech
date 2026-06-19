"use client";

import Link from "next/link";
import { Logo } from "@/app/components/Logo";
import { openCookieSettings } from "@/app/components/CookieBanner";
import {
  company,
  emails,
  footerCompanyLinks,
  footerResourceLinks,
} from "@/app/data/site-content";

export function Footer() {
  const year = new Date().getFullYear();
  const hq = company.headquarters;

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <Logo size="md" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {company.shortDescription}
            </p>
            <p className="mt-3 text-xs text-muted">{company.partnerLabel}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              📍 {hq.street}
              <br />
              {hq.city}, {hq.state} {hq.zip}
            </p>
            <a
              href={`tel:${company.phone.tel}`}
              className="mt-2 block text-xs text-accent hover:underline"
            >
              {company.phone.display}
            </a>
            <a
              href={`mailto:${emails.hello}`}
              className="mt-1 block text-xs text-accent hover:underline"
            >
              {emails.hello}
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Company</h4>
            <ul className="mt-4 space-y-3">
              {footerCompanyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Resources</h4>
            <ul className="mt-4 space-y-3">
              {footerResourceLinks.map((link) => (
                <li key={link.label}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Get updates</h4>
            <p className="mt-4 text-sm text-muted">
              New app launches, Shopify tips, and product updates from {company.shortName}.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@store.com"
                className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs text-muted">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {company.founded}–{year} {company.name} All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/refund" className="hover:text-foreground">
              Refund
            </Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="hover:text-foreground"
            >
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
