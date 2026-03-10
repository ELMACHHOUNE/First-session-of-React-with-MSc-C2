import React from "react";

export function Button({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-sky-600 text-white hover:bg-sky-700 shadow-sm",
    outline:
      "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 shadow-sm",
    ghost: "text-slate-600 hover:bg-slate-100",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
