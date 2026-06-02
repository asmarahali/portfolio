import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow="Profile" title="A little about me" />
        </Reveal>

        <Reveal>
          <div className="mt-14 space-y-5 text-center text-lg leading-relaxed text-ink-soft">
            <p>
              I&apos;m a Full Stack Web Developer with a strong background in
              front-end development, UI design and database management. I love
              turning ideas into{" "}
              <span className="font-medium text-ink">
                efficient, user-friendly solutions
              </span>{" "}
              — and I&apos;m always sharpening my technical skills along the way.
            </p>
            <p>
              Currently a developer at{" "}
              <span className="font-medium text-ink">Chargily Pay</span>, where I
              build and maintain web applications with Laravel and Filament.
              Outside of work you&apos;ll find me playing CTFs, focused on web
              exploitation and cryptography.
            </p>
            <p className="font-serif text-xl italic text-rose-deep">
              “Creating things that are both beautiful and genuinely useful.”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
