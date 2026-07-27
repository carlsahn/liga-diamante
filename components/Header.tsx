export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white">
            💎 Liga Diamante
          </h1>

          <p className="mt-1 text-xs uppercase tracking-[0.35em] text-blue-300">
            The Underground Fantasy League
          </p>
        </div>

        <nav className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
          <a
            className="transition hover:text-blue-300"
            href="/"
          >
            Home
          </a>

          <a
            className="transition hover:text-blue-300"
            href="/news"
          >
            News
          </a>

          <a
            className="transition hover:text-blue-300"
            href="/standings"
          >
            Standings
          </a>

          <a
            className="transition hover:text-blue-300"
            href="/chat"
          >
            League Chat
          </a>
        </nav>
      </div>
    </header>
  );
}