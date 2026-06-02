import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Where I learned" />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-line bg-paper-deep/40">
            <div className="flex flex-col gap-6 p-8 sm:flex-row sm:items-start">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-rose-deep font-serif text-2xl font-bold text-paper">
                ESI
              </div>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-serif text-2xl font-bold text-ink">
                    Higher School of Computer Science
                  </h3>
                  <span className="text-sm font-medium text-rose-deep">
                    2021 — 2026
                  </span>
                </div>
                <p className="mt-1 font-medium text-ink-soft">
                  ESI-SBA · Sidi Bel Abbès · Specialization in Web Development
                </p>
                <p className="mt-4 text-ink-soft">
                  Key subjects: Software Engineering, Databases, Web
                  Technologies, Machine Learning &amp; Data Mining. Built
                  academic and personal projects with Laravel, Next.js, React
                  and Node.js.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
