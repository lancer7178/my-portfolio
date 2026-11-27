import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="section-wrap section-space min-h-[55vh]">
      <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Page not found</h1>
      <p className="mt-3 text-txt-secondary">Find engineering and design work in the project catalog.</p>
      <Link href="/projects" className="action action-primary mt-6">Browse Projects</Link>
    </main>
  );
}
