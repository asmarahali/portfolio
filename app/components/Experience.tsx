import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const JOBS = [
  {
    role: "Full Stack Web Developer",
    company: "Chargily Pay",
    period: "Oct 2024 — Present",
    points: [
      "Develop and maintain web applications using Laravel and Filament.",
      "Built a Telegram bot notification system to alert users of payment updates in real time.",
      "Participate in maintenance and ship new features driven by user feedback.",
    ],
    tags: ["Laravel", "Filament", "Telegram Bot"],
  },
  {
    role: "Web Developer Intern",
    company: "Chargily Startup",
    period: "Sep 2024 · 15 days",
    points: [
      "Learned React and applied it to “Uplodio”, a mini app for video uploading and management.",
      "Developed front-end components and integrated them with a Laravel + Inertia.js back-end.",
      "Gained hands-on experience with video uploads, processing and UI design.",
    ],
    tags: ["React", "Laravel", "Inertia.js"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-28 lg:px-10"
    >
      {/* panel background */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-7xl rounded-[2.5rem] bg-paper-deep/40" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="Career" title="Where I've worked" />
        </Reveal>

        <div className="mt-16 space-y-2">
          {/* vertical line container */}
          <ol className="relative ml-3 border-l-2 border-line/80 pl-8 sm:ml-6 sm:pl-12">
            {JOBS.map((job, i) => (
              <li key={job.role + job.company} className="relative pb-14 last:pb-0">
                {/* dot */}
                <span className="absolute -left-[42px] top-1 flex h-5 w-5 items-center justify-center sm:-left-[58px]">
                  <span className="h-5 w-5 rounded-full border-4 border-paper bg-rose-deep" />
                </span>

                <Reveal delay={i * 120}>
                  <div className="rounded-2xl border border-line bg-paper px-7 py-6 shadow-[0_18px_40px_-28px_rgba(196,123,106,0.6)] transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-serif text-2xl font-bold text-ink">
                        {job.role}
                      </h3>
                      <span className="text-sm font-medium tracking-wide text-rose-deep">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-1 text-base font-medium text-ink-soft">
                      {job.company}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {job.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-3 text-ink-soft"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-rose-soft/50 px-3 py-1 text-xs font-medium text-ink"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
