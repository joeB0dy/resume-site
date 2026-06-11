"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Job = {
  company: string;
  location: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
};

export function ExperienceCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition w-full"
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 p-4 sm:p-6 cursor-pointer select-none">
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
            {job.role}
          </h3>
          <p className="text-slate-600 font-medium text-sm sm:text-base">{job.company}</p>
        </div>
        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
          <div className="text-left sm:text-right text-xs sm:text-sm text-slate-500">
            <p>{job.location}</p>
            <p>{job.start} – {job.end}</p>
          </div>
          <span className="text-cyan-500">
            {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        </div>
      </div>

      {!open && (
        <div className="px-4 sm:px-6 pb-3 text-xs text-cyan-600 font-medium">
          Click for more info
        </div>
      )}

      <div
        style={{
          maxHeight: open ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <ul className="space-y-2 px-4 sm:px-6 pb-5">
          {job.bullets.map((b, i) => (
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
