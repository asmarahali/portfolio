import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:px-10"
    >
      {/* soft decorative blooms */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-rose-soft/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-rose/20 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        {/* text */}
        <div>
          <span className="rise eyebrow" style={{ animationDelay: "0.05s" }}>
            ✿ Full Stack Web Developer
          </span>

          <h1
            className="rise mt-5 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.15s" }}
          >
            Hi, I&apos;m{" "}
            <span className="italic text-rose-deep">Asma Rahali</span>
          </h1>

          <p
            className="rise mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
            style={{ animationDelay: "0.3s" }}
          >
            A motivated developer crafting efficient, user-friendly web
            applications with{" "}
            <span className="font-medium text-ink">Laravel</span>,{" "}
            <span className="font-medium text-ink">Next.js</span> and{" "}
            <span className="font-medium text-ink">React</span> — with a soft
            spot for clean UI and a curious eye for security.
          </p>

          <div
            className="rise mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="#projects"
              className="rounded-full bg-rose-deep px-7 py-3 text-sm font-semibold text-paper shadow-[0_12px_30px_-10px_rgba(196,123,106,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-7 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-rose-deep hover:text-rose-deep"
            >
              Get in touch
            </a>
          </div>

          <div
            className="rise mt-10 flex items-center gap-6 text-sm text-ink-soft"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://github.com/asmarahali"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-rose-deep"
            >
              GitHub ↗
            </a>
            <span className="h-4 w-px bg-line" />
            <a
              href="mailto:rahali.asma.dev@gmail.com"
              className="transition-colors hover:text-rose-deep"
            >
              Email ↗
            </a>
          </div>
        </div>

        {/* portrait / monogram card */}
        <div
          className="rise relative mx-auto w-full max-w-sm"
          style={{ animationDelay: "0.35s" }}
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-rose/50" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-paper-deep to-rose-soft/60 p-5 shadow-[0_30px_60px_-25px_rgba(196,123,106,0.55)]">
            <div className="relative aspect-square overflow-hidden rounded-3xl ring-1 ring-line">
              <Image
                src="/asma.jpg"
                alt="Portrait of Asma Rahali"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 360px"
                className="object-cover"
              />
              {/* warm vintage tint over the photo */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-deep/25 via-transparent to-transparent mix-blend-multiply" />
            </div>
            <p className="mt-5 text-center font-serif text-sm tracking-[0.3em] text-ink-soft uppercase">
              Web Developer · ESI-SBA
            </p>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-ink-soft uppercase"
      >
        <span className="block animate-bounce text-center text-rose-deep">↓</span>
        scroll
      </a>
    </section>
  );
}
