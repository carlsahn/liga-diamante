import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsCard from "@/components/NewsCard";
import MatchupCard from "@/components/MatchupCard";
import PowerRanking from "@/components/PowerRanking";
import ChatPreview from "@/components/ChatPreview";


export default function Home() {
  return (
    <main>

      <Header />

      <Hero />


      <section>
        <h2>🔥 Latest Headlines</h2>

        <NewsCard
          title="Week 1 Recap"
          description="The season begins with surprising performances and brutal losses."
        />

        <NewsCard
          title="Diamond of the Week"
          description="The league's top performer earns the first weekly honor."
        />

      </section>


      <section>
        <h2>🏈 Matchup Center</h2>

        <MatchupCard
          homeTeam="Team Alpha"
          awayTeam="Team Bravo"
        />

      </section>


      <section>
        <h2>📊 Power Rankings</h2>

        <PowerRanking rank={1} team="Team Alpha" />
        <PowerRanking rank={2} team="Team Bravo" />
        <PowerRanking rank={3} team="Team Charlie" />

      </section>


      <ChatPreview />

    </main>
  );
}