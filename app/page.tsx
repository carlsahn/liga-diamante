import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />

      <h2>Latest Updates</h2>

      <div>
        <h3>Week 1 Recap</h3>
        <p>
          The season is underway. Who dominated? Who got embarrassed?
        </p>
      </div>

      <div>
        <h3>League News</h3>
        <p>
          Commissioner updates, trades, injuries, and announcements.
        </p>
      </div>
    </main>
  );
}
