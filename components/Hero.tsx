export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="mb-4 text-sm uppercase tracking-[0.4em] text-blue-300">
        Fantasy Football League • Season 2026
      </p>

      <h2 className="max-w-4xl text-6xl font-black leading-tight text-white">
        The Harder the Season,
        <span className="block text-blue-300">
          The Brighter the Diamond.
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">
        Liga Diamante is the underground home for league news,
        weekly battles, rankings, rivalries, and championship glory.
      </p>

      <div className="mt-8 flex gap-6 text-sm uppercase tracking-wide text-slate-400">
        <span>💎 Season 2026</span>
        <span>🏈 14 Managers</span>
        <span>🏆 1 Champion</span>
      </div>
    </section>
  );
}