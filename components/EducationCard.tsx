"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Education = {
  school: string;
  location: string;
  degree: string;
  major: string;
  concentration: string;
  graduated: string;
};

export function EducationCard({ edu }: { edu: Education }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition w-full cursor-pointer select-none"
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between gap-1 p-4 sm:p-6">
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
            {edu.school}
          </h3>
          <p className="text-slate-700 text-sm sm:text-base">
            {edu.degree} · {edu.major}
          </p>
        </div>
        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
          <div className="text-left sm:text-right text-xs sm:text-sm text-slate-500">
            <p>{edu.location}</p>
            <p>Graduated {edu.graduated}</p>
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
          maxHeight: open ? "200px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <div className="px-4 sm:px-6 pb-5 text-sm text-slate-600">
          <p>Concentration: {edu.concentration}</p>
        </div>
      </div>
    </div>
  );
}
