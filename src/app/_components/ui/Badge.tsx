import { twMerge } from "tailwind-merge";
import type { BadgeProps, BadgeVariant } from "@/app/_types";

const variantMap: Record<BadgeVariant, string> = {
  primary: "bg-primary text-mid",
  secondary: "bg-secondary text-white",
  outline: "bg-transparent text-mid border border-primary",
  ghost: "bg-transparent text-mid",
};

export default function Badge({
  label,
  variant = "primary",
  leftIcon,
  rightIcon,
  className,
}: BadgeProps) {
  return (
    <span
      className={twMerge(
        "inline-flex items-center rounded-[13px] px-[9.6px] py-[6.5px] leading-none select-none",
        variantMap[variant],
        className,
      )}
    >
      {leftIcon && (
        <span className="flex shrink-0 items-center">{leftIcon}</span>
      )}

      <span>{label}</span>

      {rightIcon && (
        <span className="flex shrink-0 items-center">{rightIcon}</span>
      )}
    </span>
  );
}
