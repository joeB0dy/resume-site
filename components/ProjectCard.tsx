"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Project = {
  name: string;
  category: string;
  bullets: string[];
};

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition w-full cursor-pointer select-none"
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex items-start justify-between gap-2 p-4 sm:p-6">
        <div className="flex-1 min-w-0">
          <span className="text-xs font-semibold uppercase tracking-wide text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full">
            {project.category}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2 leading-tight">
            {project.name}
          </h3>
        </div>
        <span className="text-cyan-500 shrink-0 mt-1">
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </div>

      {!open && (
        <div className="px-4 sm:px-6 pb-3 text-xs text-cyan-600 font-medium">
          Click for more info
        </div>
      )}

      <div
        style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <ul className="space-y-2 px-4 sm:px-6 pb-5">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-700">
              <span className="text-cyan-500 mt-0.5 shrink-0">▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
