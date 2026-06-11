type Education = {
  school: string;
  location: string;
  degree: string;
  major: string;
  concentration: string;
  graduated: string;
};

export function EducationCard({ edu }: { edu: Education }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{edu.school}</h3>
          <p className="text-slate-700">
            {edu.degree} · {edu.major}
          </p>
          <p className="text-sm text-slate-500">Concentration: {edu.concentration}</p>
        </div>
        <div className="text-right text-sm text-slate-500 shrink-0">
          <p>{edu.location}</p>
          <p>Graduated {edu.graduated}</p>
        </div>
      </div>
    </div>
  );
}
