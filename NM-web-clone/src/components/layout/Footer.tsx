import { footerGroups } from '../../data/mockData';

const footerGroupsWithHome = [
  { heading: 'HOME', links: ['Login', 'Register', 'Subscribe'] },
  ...footerGroups.filter((group) => group.heading !== 'CONNECT'),
];

const socialLabels = ['f', 'X', 'You', 'in', 'ig', 'sp'];

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#e5e5e5] font-sans text-[#101820]">
      <div className="mx-auto max-w-[1450px] px-[18px] pb-[6px] pt-[48px]">
        <div className="grid gap-0 lg:grid-cols-8">
          {footerGroupsWithHome.map((group) => (
            <div className="min-h-[160px] border-r border-dotted border-slate-700 px-[16px] last:border-r-0" key={group.heading}>
              <h3 className="mb-[8px] text-[18px] font-black uppercase leading-none text-[#282681]">{group.heading}</h3>
              <div className="grid gap-[6px]">
                {group.links.map((link) => (
                  <a className="text-[16px] font-normal leading-[1.15] transition hover:text-[#22b8c9]" href="#" key={link}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[42px] flex items-center gap-[24px]">
          <strong className="text-[17px] font-black text-[#282681]">Connect with the PM</strong>
          <div className="flex gap-[12px]">
            {socialLabels.map((label) => (
              <a className="grid h-[36px] w-[36px] place-items-center rounded-full border-2 border-slate-400 text-[14px] font-black text-slate-500 transition hover:border-[#22b8c9] hover:text-[#22b8c9]" href="#" key={label}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
