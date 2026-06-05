import { Building2, Newspaper, Radio } from 'lucide-react';
import { useState } from 'react';
import { latestNews, mediaCoverage, portrait } from '../../data/mockData';

function Dots({ count = 6 }: { count?: number }) {
  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: count }).map((_, index) => (
        <span className={`h-[14px] w-[14px] ${index === 3 ? 'bg-[#2c2c8a]' : 'bg-[#b6b6b6]'}`} key={index} />
      ))}
    </div>
  );
}

function SectionTitle({
  title,
  icon,
  showDots = true,
  regular = false,
}: {
  title: string;
  icon: React.ReactNode;
  showDots?: boolean;
  regular?: boolean;
}) {
  return (
    <div className="mb-[14px] flex items-center justify-between border-b-2 border-[#19b8c9] pb-0">
      <div className="flex items-center gap-[14px]">
        <span className="grid h-[47px] w-[50px] place-items-center bg-[#22b8c9] text-white">{icon}</span>
        <h2 className={regular ? 'text-[24px] font-normal uppercase leading-none text-[#1f2630]' : 'nm-heading'}>{title}</h2>
      </div>
      {showDots ? <Dots /> : null}
    </div>
  );
}

export function HomeNewsMediaSection() {
  const [activeTuneTab, setActiveTuneTab] = useState<'watch' | 'mann'>('mann');
  const mainNews = latestNews[0];
  const topNews = latestNews[1];
  const smallNews = latestNews.slice(2, 4);
  const media = mediaCoverage[3] ?? mediaCoverage[0];
  const youtubeChannelUrl = 'https://www.youtube.com/channel/UC1NF71EwP41VdjAU1iXdLkw';

  return (
    <>
      <section className="site-container pt-[45px] font-sans">
        <SectionTitle title="More News" icon={<Newspaper className="h-8 w-8" />} showDots={false} />
        <div className="grid gap-[29px] pt-[16px] lg:grid-cols-[1fr_1fr]">
          <a className="group relative h-[592px] overflow-hidden bg-slate-900" href="#">
            <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={mainNews.image} alt="" />
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-[#282681]/85 px-[25px] py-[17px] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <h3 className="text-[21px] font-normal leading-[1.3] text-white">{mainNews.title}</h3>
              <p className="mt-3 text-[18px] font-black uppercase text-white/15">File Photo</p>
            </div>
          </a>

          <div className="grid gap-[26px]">
            <a className="group relative h-[284px] overflow-hidden bg-slate-900" href="#">
              <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={topNews.image} alt="" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-[#282681]/85 px-[25px] py-[17px] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="nm-card-title text-white">{topNews.title}</h3>
              </div>
            </a>
            <div className="grid gap-[22px] sm:grid-cols-2">
              {smallNews.map((item) => (
                <a className="group relative h-[284px] overflow-hidden bg-slate-900" href="#" key={item.title}>
                  <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={item.image} alt="" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-[#282681]/85 px-[25px] py-[17px] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="nm-card-title text-white">{item.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-container grid gap-[30px] pt-[72px] font-sans lg:grid-cols-2">
        <div>
          <SectionTitle title="Media Coverage" icon={<Newspaper className="h-8 w-8" />} regular />
          <a className="group block overflow-hidden bg-[#22b8c9]" href="#">
            <img className="h-[335px] w-full object-cover transition duration-500 group-hover:scale-105" src={media.image} alt="" />
            <h3 className="px-[29px] py-[18px] text-[24px] font-normal leading-[1.22] text-[#282681]">{media.title}</h3>
          </a>
        </div>

        <div>
          <SectionTitle title="Tune In" icon={<Radio className="h-8 w-8" />} regular />
          <div className="grid h-[54px] grid-cols-2 text-[24px] text-white">
            <button
              className={activeTuneTab === 'watch' ? 'bg-[#22b8c9]' : 'bg-[#858585]'}
              onClick={() => setActiveTuneTab('watch')}
            >
              Watch Live
            </button>
            <button
              className={activeTuneTab === 'mann' ? 'bg-[#22b8c9]' : 'bg-[#858585]'}
              onClick={() => setActiveTuneTab('mann')}
            >
              Mann Ki Baat
            </button>
          </div>
          {activeTuneTab === 'watch' ? (
            <a
              className="group relative block h-[398px] overflow-hidden bg-[#111] text-white"
              href={youtubeChannelUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-75"
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1100&q=80"
                alt="Watch live on YouTube"
              />
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid h-[92px] w-[92px] place-items-center rounded-full bg-red-600 text-[44px] shadow-2xl transition group-hover:scale-110">
                  ▶
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-[19px] bg-[#22b8c9] px-[38px] py-[18px]">
                <h3 className="text-[28px] font-normal text-[#282681]">Watch Live on YouTube</h3>
              </div>
            </a>
          ) : (
            <div className="group relative h-[398px] overflow-hidden bg-white">
              <img className="mx-auto h-full object-cover object-top" src={portrait} alt="Narendra Modi speaking on radio" />
              <div className="absolute inset-x-0 bottom-[19px] flex translate-y-full items-center justify-between bg-[#22b8c9] px-[38px] py-[18px] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-[28px] font-normal text-[#282681]">Mann Ki Baat is currently Off Air</h3>
                <a className="bg-[#282681] px-[23px] py-[8px] text-[18px] font-black text-white" href="#">
                  View All
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
