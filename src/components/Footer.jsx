import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-auto">
      <div className="mx-auto max-w-6xl px-4 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} React Hub. All rights reserved.</p>
        <p className="mt-2">
          Built with React, React Router, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
