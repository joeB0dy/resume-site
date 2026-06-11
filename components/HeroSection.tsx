import { Github, Linkedin, Mail, Phone } from "lucide-react";

type Contact = {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
};

export function HeroSection({
  name,
  title,
  objective,
  contact,
}: {
  name: string;
  title: string;
  objective: string;
  contact: Contact;
}) {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-2">{name}</h1>
        <p className="text-cyan-400 text-xl font-medium mb-6">{title}</p>
        <p className="text-slate-300 text-base leading-relaxed max-w-2xl mx-auto mb-8">
          {objective}
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-full transition"
          >
            <Mail size={15} /> {contact.email}
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-full transition"
          >
            <Phone size={15} /> {contact.phone}
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-full transition"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-full transition"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
