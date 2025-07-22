import { NEWS } from "@/public/DUMMY/news-data";
import Image from "next/image";
import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>WELCOME TO NEWS</h1>
      {!NEWS && <p>NO NEWS FOUND</p>}
      <ul className="news-list">
        {NEWS.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <img src={`/images/news/${news.image}`} fill alt={news.title} />
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
