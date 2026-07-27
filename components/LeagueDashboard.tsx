export default function LeagueDashboard() {
  return (
    <section className="rounded-3xl border border-blue-400/20 bg-slate-900 p-8 shadow-xl">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.4em] text-blue-300">
          League Pulse
        </p>

        <h2 className="mt-2 text-3xl font-black text-white">
          Current Season
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-800 p-6">
          <p className="text-sm text-slate-400">
            Current Week
          </p>

          <p className="mt-3 text-4xl font-black text-white">
            Week 1
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800 p-6">
          <p className="text-sm text-slate-400">
            League Leader
          </p>

          <p className="mt-3 text-4xl font-black text-blue-300">
            TBD
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800 p-6">
          <p className="text-sm text-slate-400">
            Top Score
          </p>

          <p className="mt-3 text-4xl font-black text-white">
            TBD
          </p>
        </div>
      </div>
    </section>
  );
}