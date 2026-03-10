import React from "react";
import {
  BookOpen,
  Code2,
  GraduationCap,
  Sparkles,
  Terminal,
  PlayCircle,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

// Simple shadcn/ui-style primitives
function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-[#044396] bg-white/90 shadow-sm backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
function Badge({ children, variant = "default" }) {
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

function Button({ children, variant = "default", className = "", ...props }) {
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

const sections = [
  {
    id: "what-is-react",
    icon: GraduationCap,
    title: "What is React?",
    level: "Beginner",
    summary:
      "React is a JavaScript library for building fast, interactive user interfaces using reusable components.",
    bullets: [
      "Build UI as a tree of components instead of manual DOM updates",
      "Used by companies like Meta, Netflix, and Airbnb",
      "Works with any backend (Node, Django, Laravel, etc.)",
    ],
  },
  {
    id: "components",
    icon: BookOpen,
    title: "Components & Props",
    level: "Core Concept",
    summary:
      "Components are reusable pieces of UI. Props let you pass data into them, like function parameters.",
    bullets: [
      "A component is just a JavaScript function that returns JSX",
      "Props are read-only inputs passed from parent to child",
      "Composition: small components combine into complex screens",
    ],
  },
  {
    id: "jsx",
    icon: Code2,
    title: "JSX Syntax",
    level: "Core Concept",
    summary:
      "JSX lets you write HTML-like syntax directly in JavaScript, which React turns into real UI.",
    bullets: [
      "Looks like HTML, but is actually JavaScript under the hood",
      "You can embed variables and expressions inside {curly braces}",
      "Everything must return a single root element",
    ],
  },
  {
    id: "thinking",
    icon: Sparkles,
    title: "Thinking in React",
    level: "Mindset",
    summary:
      "Break your UI into components, build a data model, then make the UI update automatically when data changes.",
    bullets: [
      "Identify components based on visual and logical groupings",
      "Keep state as high as necessary, but no higher",
      "Derive everything you can from state instead of duplicating",
    ],
  },
];

const codeSample = `function WelcomeMessage({ name }) {
  return (
    <h1 className="text-2xl font-semibold text-slate-900">
      Hello, {name}! 
    </h1>
  );
}

export default function App() {
  return (
    <div className="space-y-4">
      <WelcomeMessage name="React learner" />
      <WelcomeMessage name="Frontend developer" />
    </div>
  );
}`;

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-slate-50 to-slate-100 text-slate-900">
      {/* Top hero / header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600 text-white shadow-sm">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-sky-700">
                React Learning Hub
              </p>
              <h1 className="text-base font-semibold leading-tight text-slate-900">
                React Foundations
              </h1>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Badge variant="neutral">React 18+ Ready</Badge>
            <Button variant="outline" className="h-9 px-3 text-xs">
              View Docs
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:px-8 lg:py-10">
        {/* Left: overview & code */}
        <div className="flex-1 space-y-6">
          {/* Hero card */}
          <Card className="relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-y-0 right-0 hidden w-48 bg-gradient-to-t from-sky-100/80 via-sky-50/40 to-transparent sm:block" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800 ring-1 ring-sky-100">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Mini course • 15–20 minutes</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Learn the core ideas of React, visually.
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
                  This page is an interactive documentation-style lesson. It
                  uses real React + Tailwind CSS to teach the mental model
                  behind components, props, and JSX—exactly how you&apos;ll
                  build modern UIs.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    No prior React experience required
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-slate-500" />
                    Based on a real Vite + React project
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:min-w-[220px] sm:items-end">
                <Button className="w-full sm:w-auto">
                  <PlayCircle className="h-4 w-4" />
                  Start lesson
                </Button>
                <p className="text-xs text-slate-500">
                  Scroll down to follow the guided explanation.
                </p>
              </div>
            </div>
          </Card>

          {/* Code sample */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Example: Components & Props
              </p>
              <Badge>Beginner friendly</Badge>
            </div>

            <Card className="overflow-hidden bg-slate-950 p-0 text-slate-50">
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-2.5">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-800/80">
                    <Code2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-mono">WelcomeMessage.jsx</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                  React component example
                </span>
              </div>
              <pre className="overflow-x-auto bg-gradient-to-b from-slate-950 to-slate-900 p-4 text-xs leading-relaxed sm:p-5 sm:text-[13px]">
                <code>{codeSample}</code>
              </pre>
            </Card>
          </div>
        </div>

        {/* Right: structured documentation */}
        <aside className="w-full space-y-4 lg:w-[320px]">
          <Card className="p-4 sm:p-5">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              React Foundations Map
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Work through the topics in order. Each section below is a
              documentation-style explanation of a core React idea.
            </p>

            <div className="mt-4 space-y-3">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.id}
                    className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/80 px-3 py-2.5 text-xs hover:border-sky-200 hover:bg-sky-50/80"
                  >
                    <div className="mt-[2px] flex h-7 w-7 items-center justify-center rounded-md bg-white shadow-sm">
                      <Icon className="h-3.5 w-3.5 text-sky-600" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[13px] font-semibold text-slate-900">
                          {section.title}
                        </p>
                        <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-50">
                          {section.level}
                        </span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-600">
                        {section.summary}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-900">
                  How to use this page
                </p>
                <ul className="list-disc space-y-1.5 pl-4 text-xs text-slate-600">
                  <li>
                    Read the explanation cards from left to right, top to
                    bottom.
                  </li>
                  <li>
                    Compare the written explanation with the live React code
                    sample.
                  </li>
                  <li>
                    Open the project files and try editing the component to see
                    changes instantly.
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </aside>
      </main>
    </div>
  );
}
