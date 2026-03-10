export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-50 via-slate-50 to-slate-100 text-slate-900">
      {children}
    </div>
  );
}
