import type { NewsItem } from '../../types/content';

type NewsCardProps = {
  item: NewsItem;
  variant?: 'default' | 'media' | 'governance';
};

export function UINewsCard({ item, variant = 'default' }: NewsCardProps) {
  if (variant === 'media') {
    return (
      <article className="group grid grid-cols-[88px_1fr] gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0 select-none font-sans">
        <img className="h-20 w-22 object-cover rounded-none" src={item.image} alt="" />
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-orange-300">{item.date}</p>
          <h3 className="mt-1 line-clamp-2 text-sm font-extrabold leading-snug text-white transition duration-200 group-hover:text-orange-200">
            {item.title}
          </h3>
          <a className="mt-2 inline-flex text-xs font-black text-cyan-200 hover:text-orange-300 transition" href="#">
            Click Here
          </a>
        </div>
      </article>
    );
  }

  if (variant === 'governance') {
    return (
      <article className="group border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-bjp-saffron hover:shadow-md select-none font-sans rounded-none">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-bjp-saffron">{item.date}</p>
        <h3 className="mt-3 text-xl font-black leading-snug tracking-normal text-slate-950 transition duration-200 group-hover:text-bjp-saffron">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{item.excerpt}</p>
        <a className="mt-5 inline-flex font-black text-sky-700 transition group-hover:text-bjp-saffron" href="#">
          Click Here
        </a>
      </article>
    );
  }

  return (
    <article className="group overflow-hidden border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-bjp-saffron hover:shadow-md flex flex-col select-none font-sans rounded-none">
      <img className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" src={item.image} alt="" />
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <time className="text-xs font-black uppercase tracking-[0.16em] text-bjp-saffron">{item.date}</time>
          <h3 className="mt-3 text-lg font-extrabold leading-snug tracking-normal text-slate-950 transition duration-200 group-hover:text-bjp-saffron">{item.title}</h3>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{item.excerpt}</p>
        </div>
        <a className="mt-4 inline-flex text-sm font-black text-sky-700 transition group-hover:text-bjp-saffron" href="#">
          Click Here
        </a>
      </div>
    </article>
  );
}
