import ArticleCard from "@/components/article-card";
import { Footer } from "@/components/layout";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 items-center justify-center py-6">
        <ArticleCard />
      </main>

      <Footer />
    </>
  );
}
