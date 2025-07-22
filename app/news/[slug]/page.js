import { NEWS } from "@/public/DUMMY/news-data";
import { notFound } from "next/navigation";

export default function NewsDetailsPage({ params }) {
  const { slug } = params;
  const news = NEWS.find((newsItm) => newsItm.slug === slug);

  if (!news) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${news.image}`} alt={news.date} />
        <h1>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}
