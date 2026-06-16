import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-teal-500 font-semibold text-zinc-100 hover:bg-teal-600 active:bg-teal-700 active:text-zinc-100/70 dark:bg-teal-600 dark:hover:bg-teal-500 dark:active:bg-teal-600 dark:active:text-zinc-100/70',
  secondary:
    'border border-teal-500 bg-zinc-50 font-medium text-teal-500 hover:bg-zinc-100 active:bg-zinc-100 active:text-teal-500/60 dark:border-teal-300 dark:bg-zinc-800/50 dark:text-teal-300 dark:hover:border-teal-200 dark:hover:bg-zinc-800 dark:hover:text-teal-200 dark:active:bg-zinc-800/50 dark:active:text-teal-100/70',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
