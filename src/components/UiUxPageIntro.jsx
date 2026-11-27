import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { designLabDescription } from "@/data/engineering";

export default function UiUxPageIntro() {
  return (
    <section className="section-wrap pt-10 sm:pt-16 pb-8">
      <div className="max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 min-h-11 text-sm font-semibold text-accent-cyan hover:text-white transition-colors duration-200"
        >
          <FaArrowLeft aria-hidden="true" /> Back to Home
        </Link>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-outfit font-black tracking-tight text-white">
          Design Lab
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-txt-secondary leading-relaxed">
          {designLabDescription}
        </p>
      </div>
    </section>
  );
}
