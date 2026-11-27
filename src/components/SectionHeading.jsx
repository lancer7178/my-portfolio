export default function SectionHeading({ id, label, children, accent, description, italic = false }) {
  return (
    <header data-reveal className="mb-8 max-w-5xl sm:mb-10">
      {label && <p className="mono mb-4 text-xs tracking-[0.3em] text-accent-cyan">{`// ${label}`}</p>}
      <h2 id={id} className={`text-[clamp(2rem,5.7vw,4.5rem)] leading-[1.02] font-black tracking-tight text-balance text-white uppercase ${italic ? "italic" : ""}`}>
        {children}{accent && <> <span className="text-outline-accent">{accent}</span></>}
      </h2>
      <div aria-hidden="true" className="mt-6 flex gap-2">
        <span className="h-1 w-16 rounded-full bg-linear-to-r from-accent-cyan to-accent-indigo" />
        <span className="h-1 w-8 rounded-full bg-accent-indigo/50" />
        <span className="h-1 w-4 rounded-full bg-accent-violet/40" />
      </div>
      {description && <p className="mt-5 max-w-2xl text-base leading-relaxed sm:mt-6 text-txt-secondary">{description}</p>}
    </header>
  );
}
