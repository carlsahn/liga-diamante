import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedStory from "@/components/FeaturedStory";
import NewsCard from "@/components/NewsCard";
import MatchupCard from "@/components/MatchupCard";
import PowerRanking from "@/components/PowerRanking";
import ChatPreview from "@/components/ChatPreview";
import LeagueDashboard from "@/components/LeagueDashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Header />

      <Hero />

      <div className="mx-auto max-w-6xl space-y-16 px-6 pb-16">
        <FeaturedStory />

        <LeagueDashboard />

        <section>
          <h2 className="mb-6 text-3xl font-bold">
            🔥 Latest Headlines
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <NewsCard
              title="Week 1 Recap"
              description="The season begins with surprising performances and brutal losses."
            />

            <NewsCard
              title="Diamond of the Week"
              description="The league's top performer earns the first weekly honor."
            />
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-bold">
            🏈 Matchup Center
          </h2>

          <MatchupCard
            homeTeam="Team Alpha"
            awayTeam="Team Bravo"
          />
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-bold">
            📊 Power Rankings
          </h2>

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