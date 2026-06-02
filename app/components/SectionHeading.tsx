type Props = {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: Props) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : "text-left"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      <div className={`mt-5 ${centered ? "flex justify-center" : ""}`}>
        <span className="ornament">
          <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
            <path
              d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
