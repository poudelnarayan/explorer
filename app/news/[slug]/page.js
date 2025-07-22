import { NEWS } from "@/public/DUMMY/news-data";

export default function NewsDetailsPage({ params }) {
  const { slug } = params;
  const news = NEWS.find((newsItm) => newsItm.slug === slug);
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
