export default function LeagueDashboard() {
  return (
    <section className="rounded-2xl border border-blue-400/30 bg-slate-800 p-8 shadow-xl">
      <h2 className="mb-6 text-3xl font-bold text-white">
        💎 League Dashboard
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-wide text-blue-300">
            Current Week
          </p>

          <p className="mt-2 text-3xl font-black text-white">
            Week 1
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-blue-300">
            League Leader
          </p>

          <p className="mt-2 text-3xl font-black text-white">
            TBD
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-blue-300">
            Top Score
          </p>

          <p className="mt-2 text-3xl font-black text-white">
            TBD
          </p>
        </div>
      </div>
    </section>
  );
}