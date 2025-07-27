"use client";

import { NEWS } from "@/public/DUMMY/news-data";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";

export default function InterceptedImagePage({ params }) {
  const router = useRouter();
  const slugParam = params?.slug;
  const newsItemSlug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  if (!newsItemSlug) {
    console.error("Missing slug param in intercepted route:", params);
    notFound();
  }

  const newsItem = NEWS.find((item) => item.slug === newsItemSlug);

  if (!newsItem) {
    console.error("News item not found for slug:", newsItemSlug);
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
