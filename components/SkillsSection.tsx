type Skills = {
  languages: string[];
  software: string[];
  frameworks: string[];
};

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
        {label}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-sm bg-slate-100 text-slate-800 px-3 py-1 rounded-full border border-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection({ skills }: { skills: Skills }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
      <SkillGroup label="Languages" items={skills.languages} />
      <SkillGroup label="Frameworks & Libraries" items={skills.frameworks} />
      <SkillGroup label="Software & Tools" items={skills.software} />
    </div>
  );
}
