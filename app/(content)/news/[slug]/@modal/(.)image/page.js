import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound, useRouter } from "next/navigation";

export default async function InterceptedImagePage({ params }) {
  const slugParam = params?.slug;
  const newsItemSlug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  if (!newsItemSlug) {
    console.error("Missing slug param in intercepted route:", params);
    notFound();
  }

  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    console.error("News item not found for slug:", newsItemSlug);
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
