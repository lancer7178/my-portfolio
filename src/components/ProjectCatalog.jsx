"use client";

import { useRef, useState } from "react";
import ProjectCard from "@/components/ProjectCard";

const pageSize = 6;

export default function ProjectCatalog({ entries, filters, id }) {
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [hasChanged, setHasChanged] = useState(false);
  const resultsRef = useRef(null);
  const availableFilters = filters.filter(({ id }) => entries.some((item) => item.filters.includes(id)));
  const matches = category === "all" ? entries : entries.filter((item) => item.filters.includes(category));
  const pageCount = Math.max(1, Math.ceil(matches.length / pageSize));
  const start = (page - 1) * pageSize;
  const visible = matches.slice(start, start + pageSize);

  function selectCategory(value) {
    if (value === category && page === 1) return;
    setHasChanged(true);
    setCategory(value);
    setPage(1);
  }

  function changePage(value) {
    if (value === page || value < 1 || value > pageCount) return;
    setHasChanged(true);
    setPage(value);
    resultsRef.current?.focus({ preventScroll: true });
    resultsRef.current?.scrollIntoView({ block: "start" });
  }

  return (
    <>
      <fieldset>
        <legend className="sr-only">Filter projects by category</legend>
        <div className="flex flex-wrap gap-2">
          {[{ id: "all", label: "All Projects" }, ...availableFilters].map((filter) => (
            <button key={filter.id} type="button" aria-pressed={filter.id === category} aria-controls={`${id}-results`} onClick={() => selectCategory(filter.id)} className="action action-secondary aria-pressed:border-accent-cyan aria-pressed:bg-accent-cyan aria-pressed:text-dark aria-pressed:hover:text-dark">
              {filter.label}
            </button>
          ))}
        </div>
      </fieldset>

      <p ref={resultsRef} id={`${id}-summary`} role="status" tabIndex={-1} className="my-4 w-fit scroll-mt-24 rounded-sm text-sm text-txt-muted">
        {visible.length ? `Showing ${start + 1}–${start + visible.length} of ${matches.length} ${matches.length === 1 ? "project" : "projects"}` : "No matching projects"}
      </p>
      <ul key={`${category}-${page}`} data-changing={hasChanged || undefined} id={`${id}-results`} aria-describedby={`${id}-summary`} className="catalog-results grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((item) => <li key={item.id}><ProjectCard item={item} /></li>)}
      </ul>
      {pageCount > 1 && (
        <nav aria-label="Project results pages" className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <button type="button" className="action action-secondary" aria-disabled={page === 1} onClick={() => changePage(page - 1)}>Previous</button>
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
            <button key={number} type="button" aria-label={`Page ${number}`} aria-current={number === page ? "page" : undefined} onClick={() => changePage(number)} className="action action-secondary min-w-11 !px-2.5 aria-[current=page]:border-accent-cyan aria-[current=page]:text-accent-cyan">{number}</button>
          ))}
          <button type="button" className="action action-secondary" aria-disabled={page === pageCount} onClick={() => changePage(page + 1)}>Next</button>
        </nav>
      )}
    </>
  );
}
