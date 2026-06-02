import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const GROUPS = [
  {
    title: "Front-End",
    items: ["React", "Next.js", "React Native", "Inertia.js", "Tailwind CSS"],
  },
  {
    title: "Back-End",
    items: ["Laravel", "Filament", "Node.js", "REST APIs", "Telegram Bots"],
  },
  {
    title: "Data & DevOps",
    items: [
      "MySQL",
      "Docker",
      "Microservices",
      "Git",
      "Machine Learning",
      "Data Mining",
    ],
  },
  {
    title: "Beyond Code",
    items: ["Web Exploitation", "Cryptography", "CTF Player", "Problem-solving"],
  },
];

const LANGUAGES = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Fluent" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 py-28 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-7xl rounded-[2.5rem] bg-paper-deep/40" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="Toolbox" title="Skills & expertise" />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-line bg-paper p-6 transition-transform duration-300 hover:-translate-y-1">
                <h3 className="font-serif text-xl font-bold text-rose-deep">
                  {g.title}
                </h3>
                <div className="mt-4 h-px w-full bg-line" />
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-ink-soft"
                    >
                      <span className="text-gold">✿</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* languages */}
        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-line bg-paper px-8 py-6">
            <span className="eyebrow">Languages</span>
            {LANGUAGES.map((l) => (
              <span key={l.name} className="text-ink-soft">
                <span className="font-serif text-lg font-semibold text-ink">
                  {l.name}
                </span>{" "}
                <span className="text-sm">· {l.level}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
