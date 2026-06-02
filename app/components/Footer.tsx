export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
        <span className="ornament text-gold">
          <svg width="8" height="8" viewBox="0 0 10 10" aria-hidden>
            <path
              d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8Z"
              fill="currentColor"
            />
          </svg>
        </span>

        <p className="text-sm text-ink-soft">
          © {new Date().getFullYear()} · Crafted with care &amp; a little pink.
        </p>
      </div>
    </footer>
  );
}
