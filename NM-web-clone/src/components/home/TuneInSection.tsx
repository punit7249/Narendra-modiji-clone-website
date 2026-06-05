import { Radio, Tv } from 'lucide-react';

export function TuneInSection() {
  return (
    <section className="site-container grid items-center gap-8 py-10 lg:grid-cols-[1fr_420px] select-none font-sans">
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-bjp-saffron">Tune In</p>
        <h2 className="mt-3 text-4xl font-black tracking-normal text-slate-900">Watch Live and Mann Ki Baat</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Follow live events, view recent addresses, and listen to episodes from the monthly radio programme.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded-none bg-emerald-700 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-600 cursor-pointer">
            <Tv className="h-4 w-4" />
            Watch Live
          </button>
          <button className="inline-flex items-center gap-2 rounded-none border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-100 cursor-pointer">
            <Radio className="h-4 w-4 text-bjp-saffron" />
            Mann Ki Baat
          </button>
        </div>
      </div>
      <div className="rounded-none border border-slate-200 bg-white p-8 text-center shadow-xs">
        <span className="mx-auto block h-6 w-6 animate-pulse rounded-full bg-red-500 shadow-[0_0_0_14px_rgba(239,68,68,.14)]" />
        <h3 className="mt-7 text-2xl font-black tracking-normal text-slate-950">Mann Ki Baat is currently Off Air</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">Archive episodes, highlights and transcripts are available any time.</p>
        <a className="mt-5 inline-flex font-black text-sky-700 transition hover:text-bjp-saffron" href="#">
          View All
        </a>
      </div>
    </section>
  );
}
