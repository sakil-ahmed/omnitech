import type { Theme } from "@/app/data/themes";

type ThemePreviewProps = {
  theme: Theme;
  className?: string;
  compact?: boolean;
};

export function ThemePreviewBox({
  theme,
  size = "md",
}: {
  theme: Theme;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-10 w-10 rounded-lg text-xs",
    md: "h-12 w-12 rounded-xl text-sm",
    lg: "h-16 w-16 rounded-2xl text-lg",
  };

  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br font-display font-bold text-white shadow-lg ${theme.color} ${sizes[size]}`}
    >
      {theme.title.charAt(0)}
    </div>
  );
}

export function ThemePreview({ theme, className = "", compact = false }: ThemePreviewProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border/60 bg-surface shadow-2xl ${className}`}>
      <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <span className="truncate text-xs text-muted">{theme.title} · Preview</span>
      </div>

      <div className={`bg-gradient-to-br ${theme.color} ${compact ? "p-4" : "p-6"} text-white`}>
        <div className="flex items-center justify-between gap-3">
          <span className="font-display text-sm font-bold tracking-wide">{theme.title}</span>
          <div className="flex gap-2 text-[10px] uppercase tracking-widest text-white/70">
            <span>Shop</span>
            <span>About</span>
            <span>Cart</span>
          </div>
        </div>
        <div className={`mt-4 rounded-xl bg-white/15 backdrop-blur-sm ${compact ? "p-3" : "p-4"}`}>
          <p className={`font-display font-bold ${compact ? "text-base" : "text-lg"}`}>
            {theme.tagline}
          </p>
          <p className={`mt-1 text-white/80 ${compact ? "text-[10px]" : "text-xs"}`}>
            {theme.category}
          </p>
          {!compact && (
            <div className="mt-4 inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-foreground">
              Shop collection
            </div>
          )}
        </div>
      </div>

      <div className={`grid gap-2 bg-background ${compact ? "p-3" : "p-4"} ${compact ? "grid-cols-2" : "grid-cols-3"}`}>
        {[1, 2, 3].slice(0, compact ? 2 : 3).map((n) => (
          <div key={n} className="overflow-hidden rounded-lg border border-border/60">
            <div className={`bg-gradient-to-br ${theme.color} opacity-40 ${compact ? "h-12" : "h-16"}`} />
            <div className={`space-y-1 ${compact ? "p-2" : "p-2.5"}`}>
              <div className="h-1.5 w-2/3 rounded bg-border" />
              <div className="h-1.5 w-1/3 rounded bg-border/70" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
