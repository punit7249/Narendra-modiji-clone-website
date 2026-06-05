import { featuredTiles } from '../../data/mockData';

export function HomeFeaturedTiles() {
  return (
    <section className="site-container py-8 select-none font-sans">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {featuredTiles.map((tile, index) => (
          <a
            className="animate-rise group relative aspect-[4/3] overflow-hidden bg-slate-900 shadow-sm rounded-none"
            href="#"
            key={tile.title}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <img className="h-full w-full object-cover transition duration-500 group-hover:scale-110" src={tile.image} alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 bg-[#282681]/85 p-5 text-white">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-300">{tile.kicker}</p>
              <h2 className="mt-2 text-xl font-black leading-tight tracking-normal">{tile.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
