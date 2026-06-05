import { quickLinks } from '../../data/mockData';

export function HomeQuickLinks() {
  return (
    <section className="bg-white pt-10 select-none font-sans" aria-label="Quick links">
      <div className="site-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-collapse">
        {quickLinks.map((item) => (
          <a
            className="min-h-16 border border-slate-100 px-3 py-5 text-center text-sm font-black uppercase text-slate-700 transition-colors duration-200 hover:bg-[#19b8c9] hover:text-white"
            href="#"
            key={item}
          >
            {item}
          </a>
        ))}
      </div>
    </section>
  );
}
