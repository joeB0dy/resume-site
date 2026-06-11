"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Skills = {
  languages: string[];
  software: string[];
  frameworks: string[];
};

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
        {label}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs sm:text-sm bg-slate-100 text-slate-800 px-2 sm:px-3 py-1 rounded-full border border-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection({ skills }: { skills: Skills }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition w-full cursor-pointer select-none"
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex items-center justify-between p-4 sm:p-6">
        <p className="text-base sm:text-lg font-bold text-slate-900">
          Languages, Frameworks &amp; Tools
        </p>
        <span className="text-cyan-500">
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
          maxHeight: open ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <div className="px-4 sm:px-6 pb-5 space-y-6">
          <SkillGroup label="Languages" items={skills.languages} />
          <SkillGroup label="Frameworks & Libraries" items={skills.frameworks} />
          <SkillGroup label="Software & Tools" items={skills.software} />
        </div>
      </div>
    </div>
  );
}
