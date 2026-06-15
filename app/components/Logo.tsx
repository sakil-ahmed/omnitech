"use client";

import { useId } from "react";

/** Shared SVG paths for logo mark — used in component & static favicon files */
export const LOGO_VIEWBOX = "0 0 48 48";

type LogoMarkProps = {
  size?: number;
  className?: string;
};

export function LogoMark({ size = 32, className = "" }: LogoMarkProps) {
  const gradId = useId();
  const glossId = useId();
  const ringId = useId();
  const glowId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox={LOGO_VIEWBOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="4" y1="2" x2="44" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00f5c4" />
          <stop offset="0.4" stopColor="#00a67e" />
          <stop offset="1" stopColor="#003d32" />
        </linearGradient>
        <linearGradient id={glossId} x1="24" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.35" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={ringId} x1="14" y1="10" x2="34" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.95" />
          <stop offset="1" stopColor="white" stopOpacity="0.55" />
        </linearGradient>
        <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="48" height="48" rx="15" fill={`url(#${gradId})`} />
      <ellipse cx="24" cy="13" rx="18" ry="9" fill={`url(#${glossId})`} />

      {/* Bold orbital O — reads clearly at favicon size */}
      <circle
        cx="24"
        cy="25"
        r="11"
        stroke={`url(#${ringId})`}
        strokeWidth="3.25"
        strokeLinecap="round"
        strokeDasharray="52 18"
        transform="rotate(-35 24 25)"
      />

      {/* Inner hub */}
      <circle cx="24" cy="25" r="4" fill="white" />
      <circle cx="24" cy="25" r="1.75" fill="#00c49a" />

      {/* Accent node */}
      <circle cx="34" cy="15" r="3" fill="#7dffe8" filter={`url(#${glowId})`} />
      <path
        d="M29 20.5L32 17"
        stroke="#7dffe8"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Tech ticks */}
      <path
        d="M24 11v3M24 36v3M11 25h3M34 25h3"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.28"
      />
    </svg>
  );
}

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
};

const sizes = {
  sm: { mark: 36, text: "text-base", gap: "gap-2.5", tracking: "tracking-[0.18em]" },
  md: { mark: 44, text: "text-xl", gap: "gap-3", tracking: "tracking-[0.2em]" },
  lg: { mark: 52, text: "text-3xl", gap: "gap-3.5", tracking: "tracking-[0.22em]" },
};

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const s = sizes[size];

  return (
    <div className={`flex items-center ${s.gap} ${className}`}>
      <LogoMark size={s.mark} className="shrink-0 drop-shadow-md" />
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-display ${s.text} ${s.tracking} font-extrabold uppercase`}
          >
            <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
              OMNI
            </span>
            <span className="text-foreground">TECH</span>
          </span>
          {size === "lg" && (
            <span className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.32em] text-muted">
              Shopify Apps
            </span>
          )}
        </div>
      )}
    </div>
  );
}
