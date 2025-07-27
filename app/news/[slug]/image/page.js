import { notFound } from "next/navigation";

import { NEWS } from "@/public/DUMMY/news-data";
import Image from "next/image";

export default function ImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
