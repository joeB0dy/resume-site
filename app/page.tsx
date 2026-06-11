import resume from "@/data/resume.json";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationCard } from "@/components/EducationCard";
import { FadeIn } from "@/components/FadeIn";
import { LinkedInFeed } from "@/components/LinkedInFeed";

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col lg:flex-row gap-10">
        <main className="flex-1 min-w-0 space-y-14">
          <section>
            <FadeIn>
              <SectionTitle>Experience</SectionTitle>
            </FadeIn>
            <div className="space-y-4">
              {resume.experience.map((job, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <ExperienceCard job={job} />
                </FadeIn>
              ))}
            </div>
          </section>

          <section>
            <FadeIn>
              <SectionTitle>Projects</SectionTitle>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-4">
              {resume.projects.map((project, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <ProjectCard project={project} />
                </FadeIn>
              ))}
            </div>
          </section>

          <section>
            <FadeIn>
              <SectionTitle>Skills</SectionTitle>
            </FadeIn>
            <FadeIn delay={100}>
              <SkillsSection skills={resume.skills} />
            </FadeIn>
          </section>

          <section>
            <FadeIn>
              <SectionTitle>Education</SectionTitle>
            </FadeIn>
            {resume.education.map((edu, i) => (
              <FadeIn key={i} delay={100}>
                <EducationCard edu={edu} />
              </FadeIn>
            ))}
          </section>
        </main>

        <FadeIn>
          <LinkedInFeed />
        </FadeIn>
      </div>

      <footer className="text-center text-sm text-slate-400 py-8 border-t border-slate-200">
        © {new Date().getFullYear()} {resume.name} · Built with Next.js
      </footer>
    </div>
  );
}
