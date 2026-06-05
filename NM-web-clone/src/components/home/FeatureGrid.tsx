import { FilePenLine, Images, Library, Mic, Newspaper, SquareChartGantt } from 'lucide-react';

const links = [
  { title: 'Infographics', icon: SquareChartGantt },
  { title: 'Speeches', icon: Mic },
  { title: 'Gallery', icon: Images },
  { title: 'Write to the PM', icon: FilePenLine },
  { title: 'Subscribe to Newsletter', icon: Newspaper },
  { title: 'NM Library', icon: Library },
];

export function HomeFeatureGrid() {
  return (
    <section className="site-container border-y border-dotted border-slate-600 py-[34px] font-sans">
      <div className="grid sm:grid-cols-3">
        {links.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              className={`grid h-[192px] place-items-center border-dotted border-slate-600 text-center text-[#282681] transition hover:bg-slate-50 ${
                index % 3 !== 2 ? 'sm:border-r' : ''
              } ${index < 3 ? 'border-b' : ''}`}
              href="#"
              key={item.title}
            >
              <span>
                <Icon className="mx-auto h-[61px] w-[61px] stroke-[1.5]" />
                <span className="mt-[11px] block text-[28px] font-normal">{item.title}</span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
