import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import ArticleCard from "@/components/ArticleCard";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeader
          eyebrow="The Mines"
          title="Latest League News"
        />

        <div className="grid gap-6 md:grid-cols-3">
          <ArticleCard
            category="Week Recap"
            title="The Battle for the Diamond Begins"
            description="The opening week delivered surprises, heartbreak, and early championship contenders."
          />

          <ArticleCard
            category="League News"
            title="Trade Rumors Start Flying"
            description="Managers are already making moves as the race heats up."
          />

          <ArticleCard
            category="Power Rankings"
            title="Who Owns the Mountain?"
            description="The first rankings of the season reveal the early favorites."
          />
        </div>
      </div>
    </main>
  );
}