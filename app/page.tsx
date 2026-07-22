import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />

      <section>
        <h2>Welcome to Liga Diamante</h2>
        <p>
          The official home of our fantasy football league.
          News, standings, matchups, and league chaos all in one place.
        </p>
      </section>

      <section>
        <h2>🏆 League Dashboard</h2>

        <div>
          <h3>Current Week</h3>
          <p>Week 1 Matchups Coming Soon</p>
        </div>

        <div>
          <h3>Standings</h3>
          <p>League rankings will appear here.</p>
        </div>
      </section>


      <section>
        <h2>📰 Latest Updates</h2>

        <article>
          <h3>Week 1 Recap</h3>
          <p>
            Who dominated? Who suffered the worst loss?
            The season story begins here.
          </p>
        </article>

        <article>
          <h3>Commissioner Updates</h3>
          <p>
            Trades, announcements, and league news.
          </p>
        </article>
      </section>


      <section>
        <h2>💬 League Chat</h2>
        <p>
          Live league conversations will appear here soon.
        </p>
      </section>

    </main>
  );
}