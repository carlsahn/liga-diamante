export default function ArticleCard({
  category,
  title,
  description,
}: {
  category: string;
  title: string;
  description: string;
}) {
  return (
    <article className="group rounded-3xl border border-blue-400/20 bg-slate-900 p-6 shadow-xl transition hover:-translate-y-1 hover:border-blue-300/50">
      <p className="text-xs uppercase tracking-[0.4em] text-blue-300">
        {category}
      </p>

      <h3 className="mt-4 text-2xl font-black text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        {description}
      </p>

      <p className="mt-6 text-sm font-medium text-blue-300">
        Read Article →
      </p>
    </article>
  );
}