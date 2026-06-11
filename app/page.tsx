import resume from "@/data/resume.json";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationCard } from "@/components/EducationCard";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection
        name={resume.name}
        title={resume.title}
        objective={resume.objective}
        contact={resume.contact}
      />

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-14">
        <section>
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-4">
            {resume.experience.map((job, i) => (
              <ExperienceCard key={i} job={job} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Projects</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-4">
            {resume.projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsSection skills={resume.skills} />
        </section>

        <section>
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-4">
            {resume.education.map((edu, i) => (
              <EducationCard key={i} edu={edu} />
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center text-sm text-slate-400 py-8 border-t border-slate-200">
        © {new Date().getFullYear()} {resume.name} · Built with Next.js
      </footer>
    </div>
  );
}
