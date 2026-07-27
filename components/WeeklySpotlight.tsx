export default function WeeklySpotlight() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      <article className="rounded-3xl border border-blue-400/20 bg-slate-900 p-6 shadow-xl">
        <p className="text-xs uppercase tracking-[0.4em] text-blue-300">
          💎 Diamond of the Week
        </p>

        <h3 className="mt-4 text-2xl font-black text-white">
          TBD
        </h3>

        <p className="mt-3 text-slate-400">
          The league's top performer earns this week's spotlight.
        </p>
      </article>

      <article className="rounded-3xl border border-blue-400/20 bg-slate-900 p-6 shadow-xl">
        <p className="text-xs uppercase tracking-[0.4em] text-blue-300">
          ⛏️ Down in the Mines
        </p>

        <h3 className="mt-4 text-2xl font-black text-white">
          TBD
        </h3>

        <p className="mt-3 text-slate-400">
          Every champion has a loser. This is their story.
        </p>
      </article>

      <article className="rounded-3xl border border-blue-400/20 bg-slate-900 p-6 shadow-xl">
        <p className="text-xs uppercase tracking-[0.4em] text-blue-300">
          🔥 Rivalry Watch
        </p>

        <h3 className="mt-4 text-2xl font-black text-white">
          TBD
        </h3>

        <p className="mt-3 text-slate-400">
          The matchups everyone is watching.
        </p>
      </article>
    </section>
  );
}
