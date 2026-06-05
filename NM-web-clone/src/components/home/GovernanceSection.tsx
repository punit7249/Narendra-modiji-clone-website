import { Building2 } from 'lucide-react';
import { governanceArticles } from '../../data/mockData';

function Dots() {
  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: 8 }).map((_, index) => (
        <span className={`h-[14px] w-[14px] ${index === 3 ? 'bg-[#2c2c8a]' : 'bg-[#b6b6b6]'}`} key={index} />
      ))}
    </div>
  );
}

export function HomeGovernanceSection() {
  const left = governanceArticles[2];
  const right = governanceArticles[3];

  return (
    <section className="site-container pt-[54px] font-sans">
      <div className="mb-[12px] flex items-center justify-between border-b-2 border-[#19b8c9]">
        <div className="flex items-center gap-[14px]">
          <span className="grid h-[47px] w-[50px] place-items-center bg-[#22b8c9] text-white">
            <Building2 className="h-8 w-8" />
          </span>
          <h2 className="nm-heading">Governance</h2>
        </div>
        <Dots />
      </div>

      <div className="grid h-[464px] grid-cols-[260px_1fr_200px] overflow-hidden bg-[#282681] text-white max-lg:h-auto max-lg:grid-cols-1">
        <article className="flex flex-col justify-between p-[28px]">
          <div>
            <h3 className="text-[42px] font-light leading-[1.18]">{left.title}</h3>
            <p className="mt-[25px] text-[18px] font-bold leading-[1.55]">{left.excerpt}</p>
          </div>
          <div className="flex gap-[20px]">
            <span className="grid h-[58px] w-[58px] place-items-center rounded-full border-2 border-white text-[34px] font-black">f</span>
            <span className="grid h-[58px] w-[58px] place-items-center rounded-full border-2 border-white text-[30px]">X</span>
          </div>
        </article>
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1598520106830-8c45c2035460?auto=format&fit=crop&w=1300&q=80"
          alt=""
        />
        <article className="flex flex-col justify-between p-[28px] text-right">
          <div>
            <h3 className="text-[42px] font-light leading-[1.18]">{right.title}</h3>
            <p className="mt-[25px] text-[18px] font-bold leading-[1.55]">{right.excerpt}</p>
          </div>
          <a className="self-end bg-[#34349c] px-[22px] py-[9px] text-[16px] font-black" href="#">
            Read More
          </a>
        </article>
      </div>
    </section>
  );
}
