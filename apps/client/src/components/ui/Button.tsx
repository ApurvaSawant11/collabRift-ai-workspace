import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  primary: "bg-violet-500 hover:bg-violet-600 text-white",
  secondary: "bg-slate-800 hover:bg-slate-700 text-white",
  ghost: "hover:bg-slate-800 text-slate-300",
};

export const Button = ({ variant = "primary", className, ...props }: Props) => {
  return (
    <button
      className={clsx(
        "rounded-2xl px-4 py-3 font-medium transition-all duration-200",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
};
