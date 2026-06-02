import Reveal from "./Reveal";

const CONTACTS = [
  {
    label: "Email",
    value: "rahali.asma.dev@gmail.com",
    href: "mailto:rahali.asma.dev@gmail.com",
  },
  {
    label: "Phone",
    value: "+213 541 428 215",
    href: "tel:+213541428215",
  },
  {
    label: "GitHub",
    value: "github.com/asmarahali",
    href: "https://github.com/asmarahali",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-gradient-to-br from-rose/30 via-rose-soft/40 to-paper-deep px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-rose/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-rose-soft/40 blur-3xl" />

            <div className="relative">
              <span className="eyebrow">Let&apos;s work together</span>
              <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Have a project in mind?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
                I&apos;m always happy to talk about new opportunities,
                collaborations, or just a friendly chat about web development.
              </p>

              <a
                href="mailto:rahali.asma.dev@gmail.com"
                className="mt-9 inline-block rounded-full bg-ink px-8 py-4 text-sm font-semibold text-paper shadow-[0_16px_40px_-12px_rgba(63,45,40,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep"
              >
                Say hello ✿
              </a>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {CONTACTS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      c.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="rounded-2xl border border-line/70 bg-paper/60 px-5 py-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-rose-deep"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-widest text-rose-deep">
                      {c.label}
                    </span>
                    <span className="mt-1 block break-words text-sm font-medium text-ink">
                      {c.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
