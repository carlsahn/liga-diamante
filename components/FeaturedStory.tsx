export default function FeaturedStory() {
  return (
    <article className="group overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-slate-800 to-slate-900 p-10 shadow-2xl transition hover:border-blue-300/40">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-blue-300">
        Featured Story
      </p>

      <h2 className="max-w-4xl text-5xl font-black leading-tight text-white">
        The Battle for the Diamond Begins
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        A new fantasy football season brings new rivalries,
        unexpected contenders, and another chance to claim
        the Liga Diamante championship.
      </p>

      <div className="mt-8 flex items-center gap-4 text-sm uppercase tracking-wide text-slate-400">
        <span>Season 2026</span>
        <span>•</span>
        <span>League News</span>
      </div>
    </article>
  );
}