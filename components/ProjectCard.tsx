type Project = {
  name: string;
  category: string;
  bullets: string[];
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="mb-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full">
          {project.category}
        </span>
        <h3 className="text-lg font-bold text-slate-900 mt-2">{project.name}</h3>
      </div>
      <ul className="space-y-1">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-sm text-slate-700">
            <span className="text-cyan-500 mt-0.5 shrink-0">▸</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
