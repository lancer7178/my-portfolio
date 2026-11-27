import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import ContactForm, { CopyEmail } from "@/components/ContactForm";
import ProfileLinks from "@/components/ProfileLinks";
import { profile } from "@/data/profile";

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-dark px-6 py-16 sm:py-20 md:px-12">
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 h-100 w-150 -translate-x-1/2 rounded-full bg-cyan-400/4 blur-[200px]" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <header data-reveal className="mb-8 text-center">
          <p className="mono mb-6 text-xs tracking-[0.3em] text-accent-cyan">{"// GET IN TOUCH"}</p>
          <h2 id="contact-title" className="text-[clamp(2.1rem,8vw,4.5rem)] leading-none font-black tracking-tight uppercase">
            Let’s Build <span className="gradient-text">Something</span><br /> <span className="text-outline-accent">Meaningful.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-txt-secondary sm:text-lg">
            I’m open to software development opportunities, full-stack engineering roles, mobile development, and collaborations on innovative digital products.
          </p>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-txt-secondary">
            Whether you need a complete web application, backend integration, mobile solution, or e-commerce platform, I’m interested in discussing how technology can solve your business challenges.
          </p>
        </header>
        <div className="mb-4 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="action action-primary">Get in Touch</a>
          <a href={profile.resume.href} className="action action-secondary">View Resume</a>
          <CopyEmail email={profile.email} />
          <ProfileLinks />
        </div>
        <address className="mb-6 flex flex-wrap items-center justify-center gap-x-5 text-sm font-normal not-italic text-txt-secondary">
          <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center gap-2 rounded-md hover:text-accent-cyan"><FaEnvelope aria-hidden="true" /> {profile.email}</a>
          <a href={`tel:${profile.phone.replaceAll(" ", "")}`} className="inline-flex min-h-11 items-center gap-2 rounded-md hover:text-accent-cyan"><FaPhoneAlt aria-hidden="true" /> {profile.phone}</a>
          <span className="inline-flex min-h-11 items-center gap-2"><FaMapMarkerAlt aria-hidden="true" /> {profile.location}</span>
        </address>
        <ContactForm email={profile.email} />
      </div>
    </section>
  );
}
