import type { PropsWithChildren } from "react"
import clsx from "clsx"

type Props = PropsWithChildren<{
  className?: string
}>

export const GlassCard = ({
  children,
  className,
}: Props) => {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  )
}