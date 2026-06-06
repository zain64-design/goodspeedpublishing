import { twMerge } from 'tailwind-merge'
import type { BadgeProps, BadgeVariant } from '@/app/_types'

const variantMap: Record<BadgeVariant, string> = {
  primary:   'bg-primary text-mid',
  secondary: 'bg-secondary text-white',
  outline:   'bg-transparent text-mid border border-primary',
  ghost:     'bg-transparent text-mid',
}

export default function Badge({
  label,
  variant  = 'primary',
  leftIcon,
  rightIcon,
  className,
}: BadgeProps) {

  return (
    <span
      className={twMerge(
        'inline-flex items-center leading-none whitespace-nowrap select-none px-[9.6px] py-[6.5px] rounded-[13px]',
        variantMap[variant],
        className,
      )}
    >
      {leftIcon && (
        <span className="flex items-center shrink-0">{leftIcon}</span>
      )}

      <span>{label}</span>

      {rightIcon && (
        <span className="flex items-center shrink-0">{rightIcon}</span>
      )}
    </span>
  )
}