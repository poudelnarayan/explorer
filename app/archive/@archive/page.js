import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

const links = getAvailableNewsYears();
export default function ArchivePage() {
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}> {link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
