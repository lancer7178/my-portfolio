import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function UiUxPageIntro() {
  return (
    <section className="px-6 md:px-12 pt-10 pb-2">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 min-h-11 text-sm font-semibold text-accent-cyan hover:text-white transition-colors duration-200"
        >
          <FaArrowLeft aria-hidden="true" /> Back to Home
        </Link>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-outfit font-black tracking-tight text-white">
          UI/UX Designs
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-txt-secondary leading-relaxed">
          Apps and interfaces I have designed. No account or design tools
          needed: select any design to see it full size.
        </p>
      </div>
    </section>
  );
}
