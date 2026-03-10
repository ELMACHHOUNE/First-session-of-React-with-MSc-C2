import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
