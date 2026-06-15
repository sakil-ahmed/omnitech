import type { App } from "@/app/data/apps";

type AppIconProps = {
  iconPath: string;
  className?: string;
  strokeWidth?: number;
};

export function AppIcon({ iconPath, className = "h-6 w-6", strokeWidth = 1.5 }: AppIconProps) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
    </svg>
  );
}

export function AppIconBox({ app, size = "md" }: { app: App; size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "h-10 w-10 rounded-lg",
    md: "h-12 w-12 rounded-xl",
    lg: "h-16 w-16 rounded-2xl",
  };

  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br ${app.color} text-white shadow-lg ${sizes[size]}`}
    >
      <AppIcon
        iconPath={app.iconPath}
        className={size === "lg" ? "h-8 w-8" : size === "md" ? "h-6 w-6" : "h-5 w-5"}
      />
    </div>
  );
}
