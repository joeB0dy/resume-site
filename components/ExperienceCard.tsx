type Job = {
  company: string;
  location: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
};

export function ExperienceCard({ job }: { job: Job }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
          <p className="text-slate-600 font-medium">{job.company}</p>
        </div>
        <div className="text-right text-sm text-slate-500 shrink-0">
          <p>{job.location}</p>
          <p>
            {job.start} – {job.end}
          </p>
        </div>
      </div>
      <ul className="space-y-1">
        {job.bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-sm text-slate-700">
            <span className="text-cyan-500 mt-0.5 shrink-0">▸</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
