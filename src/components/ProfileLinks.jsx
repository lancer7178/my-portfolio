import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "@/data/profile";

const icons = { GitHub: FaGithub, LinkedIn: FaLinkedin };

export default function ProfileLinks({ iconOnly = false }) {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {socialLinks.map(({ label, href }) => {
        const Icon = icons[label];
        return (
          <li key={label}>
            <a className={`action action-secondary social-link ${iconOnly ? "size-11 !p-0" : ""}`} aria-label={iconOnly ? label : undefined} href={href} target="_blank" rel="noopener noreferrer">
              <Icon aria-hidden="true" /> {!iconOnly && label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
