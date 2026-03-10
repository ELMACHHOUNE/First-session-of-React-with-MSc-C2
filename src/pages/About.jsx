import React from "react";
import { Card } from "../components/ui/Card";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl flex-1">
      <Card className="p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            About Us
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
            Welcome to the React Learning Hub. We believe in making React
            documentation interactive and accessible.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-lg font-semibold leading-8 text-slate-900">
              Our Mission
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              To empower developers to build beautiful, fast, and robust web
              applications using modern web technologies. We aim to bridge the
              gap between complex concepts and easy-to-understand interactive
              examples.
            </p>
          </div>
          <div className="rounded-2xl border border-sky-100 p-8 bg-sky-50 shadow-sm text-sky-900">
            <h3 className="text-lg font-semibold leading-8">Why React?</h3>
            <p className="mt-4 text-base leading-7 text-sky-800/80">
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application, and React will
              efficiently update and render just the right components when your
              data changes.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
