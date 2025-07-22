import NewsList from "@/components/news-list";
import { getNewsForYear, getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function FilterdNewsPage({ params }) {
  const filter = params.filter;
  const links = getAvailableNewsYears();

  console.log(filter);
  //   const news = getNewsForYear(newsYear);
  //   return <NewsList news={news} />;
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
