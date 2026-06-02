import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PROJECTS = [
  {
    name: "Laracake",
    year: "2026",
    blurb:
      "A multi-tenant web application for bakery management — cake orders and custom cake design. Built with Laravel: authentication, product management and tenant-specific database operations.",
    tags: ["Laravel", "Multi-tenancy", "Auth", "MySQL"],
    kind: "Personal Project",
    link: "https://laracake.store/",
  },
  {
    name: "Meditrust",
    year: "2025",
    blurb:
      "A medical platform for managing patient files — secure records, medical history and patient data. Laravel + Filament power the back-office, paired with a React Native mobile app for access on the go.",
    tags: ["Laravel", "Filament", "React Native", "Healthcare"],
    kind: "Freelance Project",
  },
  {
    name: "Uplodio",
    year: "2024",
    blurb:
      "A mini web app for video uploading and management. Front-end built in React and wired into a Laravel + Inertia.js back-end, handling uploads, processing and UI.",
    tags: ["React", "Laravel", "Inertia.js"],
    kind: "Internship",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="Selected Work" title="Things I've built" />
        </Reveal>

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(196,123,106,0.7)]">
                {/* decorative header */}
                <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-rose-soft/70 to-rose/40">
                  <span className="font-serif text-6xl font-black text-paper/80 transition-transform duration-500 group-hover:scale-110">
                    {p.name.charAt(0)}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-paper/80 px-3 py-1 text-xs font-semibold text-rose-deep">
                    {p.year}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="eyebrow text-[0.6rem]">{p.kind}</span>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                    {p.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {"link" in p && p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-rose-deep transition-colors hover:text-ink"
                    >
                      Visit site
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 text-center text-ink-soft">
            More on my{" "}
            <a
              href="https://github.com/asmarahali"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-rose-deep underline decoration-rose/50 underline-offset-4 transition-colors hover:text-ink"
            >
              GitHub profile
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
