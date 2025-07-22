import NewsList from "@/components/news-list";
import { NEWS } from "@/public/DUMMY/news-data";

export default function NewsPage() {
  return (
    <>
      <h1>WELCOME TO NEWS</h1>
      {!NEWS && <p>NO NEWS FOUND</p>}
      <NewsList news={NEWS} />
    </>
  );
}
