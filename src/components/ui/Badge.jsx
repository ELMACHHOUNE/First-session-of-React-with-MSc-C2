import React from "react";

export function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-sky-100 text-sky-800 border-sky-200",
    neutral: "bg-slate-100 text-slate-700 border-slate-200",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
