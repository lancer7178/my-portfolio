import Link from "next/link";
import { FaArrowUp, FaEnvelope, FaFileAlt } from "react-icons/fa";
import ProfileLinks from "@/components/ProfileLinks";
import { navigation, profile } from "@/data/profile";

const footerLinks = [...navigation, { label: "Design Lab", href: "/ui-ux" }];
const textLink =
  "inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-txt-secondary transition-colors hover:text-accent-cyan focus-visible:text-accent-cyan";

export default function Footer() {
  return (
    <footer className="relative bg-[#05050A] pt-10 pb-[calc(6rem+env(safe-area-inset-bottom))] sm:pt-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-cyan/35 to-transparent" />

      <div className="section-wrap">
        <div className="grid gap-y-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_auto] md:gap-x-10">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-xl border border-dark-elevated bg-dark-card">
                <span className="gradient-text font-mono text-sm font-bold">AS</span>
              </span>
              <div>
                <p className="text-lg leading-tight font-bold text-txt-primary">{profile.name}</p>
                <p className="mt-0.5 text-sm text-txt-secondary">{profile.title}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-txt-secondary">Full-Stack · Backend · Mobile · E-commerce</p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="section-label mb-1">Explore</p>
            <ul className="grid grid-cols-2 gap-x-4 sm:grid-cols-4 md:grid-cols-2">
              {footerLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={textLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="section-label mb-1">Connect</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 md:flex-col md:items-start">
              <ul className="flex gap-4">
                <li>
                  <a href={`mailto:${profile.email}`} className={textLink}>
                    <FaEnvelope aria-hidden="true" className="shrink-0 text-xs" /> Email
                  </a>
                </li>
                <li>
                  <a href={profile.resume.href} className={textLink}>
                    <FaFileAlt aria-hidden="true" className="shrink-0 text-xs" /> Resume
                  </a>
                </li>
              </ul>
              <ProfileLinks iconOnly />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 border-t border-white/10 pt-3">
          <p className="text-xs text-txt-muted">© {new Date().getFullYear()} {profile.name}</p>
          <a href="#main-content" className={`${textLink} group`}>
            Back to top <FaArrowUp aria-hidden="true" className="text-xs transition-transform motion-safe:group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
