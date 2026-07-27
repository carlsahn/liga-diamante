import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedStory from "@/components/FeaturedStory";
import LeagueDashboard from "@/components/LeagueDashboard";
import WeeklySpotlight from "@/components/WeeklySpotlight";
import ArticleCard from "@/components/ArticleCard";
import MatchupCard from "@/components/MatchupCard";
import PowerRanking from "@/components/PowerRanking";
import ChatPreview from "@/components/ChatPreview";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.12),transparent_40%)]">
      <Header />

      <Hero />

      <div className="mx-auto max-w-6xl space-y-16 px-6 pb-16">
        <section className="relative">
  <FeaturedStory />
</section>

        <div className="grid gap-6 lg:grid-cols-2">
  <LeagueDashboard />

  <WeeklySpotlight />
</div>

        <section>
          <SectionHeader
  eyebrow="Latest Updates"
  title="From the Mines"
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
        </section>

        <section>
          <SectionHeader
  eyebrow="Weekly Battles"
  title="Matchup Center"
/>

          <MatchupCard
            homeTeam="Team Alpha"
            awayTeam="Team Bravo"
          />
        </section>

        <section>
          <SectionHeader
  eyebrow="League Hierarchy"
  title="Power Rankings"
/>

          <div className="space-y-3">
            <PowerRanking rank={1} team="Team Alpha" />
            <PowerRanking rank={2} team="Team Bravo" />
            <PowerRanking rank={3} team="Team Charlie" />
          </div>
        </section>

        <ChatPreview />
      </div>
    </main>
  );
}