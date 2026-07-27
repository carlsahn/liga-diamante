export default function FeaturedStory() {
  return (
    <article className="rounded-2xl border border-blue-400/30 bg-slate-800 p-8 shadow-xl">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-300">
        Featured Story
      </p>

      <h2 className="mb-4 text-4xl font-black text-white">
        The Battle for the Diamond Begins
      </h2>

      <p className="max-w-3xl text-lg leading-8 text-slate-300">
        A new fantasy football season brings new rivalries,
        unexpected contenders, and another chance to claim
        the Liga Diamante championship.
      </p>
    </article>
  );
}