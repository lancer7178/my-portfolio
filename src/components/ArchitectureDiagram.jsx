import { FaArrowDown, FaArrowRight } from "react-icons/fa";

export default function ArchitectureDiagram({ flows }) {
  return (
    <div className="grid gap-5">
      {flows.map(({ title, nodes }) => (
        <figure key={title} className="rounded-xl border border-white/12 bg-dark-surface p-4 sm:p-5">
          <figcaption className="mb-4 text-sm font-semibold text-txt-primary">{title}</figcaption>
          <ol className="architecture-flow" style={{ "--architecture-columns": nodes.length }}>
            {nodes.map(({ title, detail }, index) => (
              <li key={title} className="relative min-w-0 rounded-lg border border-accent-cyan/22 bg-dark-card p-4">
                {index > 0 && (
                  <span aria-hidden="true" className="architecture-arrow absolute text-xs text-accent-cyan">
                    <FaArrowDown className="sm:hidden" />
                    <FaArrowRight className="hidden sm:block" />
                  </span>
                )}
                <h3 className="font-semibold text-txt-primary">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-txt-secondary">{detail}</p>
              </li>
            ))}
          </ol>
        </figure>
      ))}
    </div>
  );
}
