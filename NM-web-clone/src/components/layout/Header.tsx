import { ChevronDown, Menu, Search, Smartphone, X } from 'lucide-react';
import { useState } from 'react';
import { languages, navGroups, socials } from '../../data/mockData';

const brandBlue = '#26318c';

function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socials.map((item) => (
        <a
          className="grid h-10 w-10 place-items-center rounded-full border-2 border-white/70 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#19b8c9]"
          href="#"
          key={item}
          aria-label={item}
        >
          {item === 'Facebook'
            ? 'f'
            : item === 'YouTube'
              ? 'yt'
              : item === 'LinkedIn'
                ? 'in'
                : item === 'Instagram'
                  ? 'ig'
                  : item === 'Spotify'
                    ? 'sp'
                    : 'X'}
        </a>
      ))}
    </div>
  );
}

function MegaMenu({ open }: { open: boolean }) {
  return (
    <div
      className={`absolute left-1/2 top-full z-40 w-[min(76vw,1442px)] -translate-x-1/2 overflow-hidden bg-[#1bb8c9] shadow-xl transition duration-300 max-[900px]:w-[calc(100vw-32px)] ${
        open ? 'pointer-events-auto translate-y-0 opacity-100 font-sans' : 'pointer-events-none -translate-y-3 opacity-0'
      }`}
      aria-hidden={!open}
    >
      <div className="grid grid-cols-2 gap-0 px-[18px] py-[38px] sm:grid-cols-3 lg:grid-cols-8">
        {navGroups.map((group, index) => (
          <div
            className="min-h-[200px] px-[19px] text-white lg:border-r lg:border-dotted lg:border-[#0b7e9c] last:border-r-0"
            key={group.heading}
          >
            <h3 className="mb-3 text-[18px] font-black uppercase leading-tight tracking-normal" style={{ color: brandBlue }}>
              {group.heading}
            </h3>
            <div className="grid gap-2">
              {group.links.map((link) => (
                <a className="text-[16px] font-normal leading-[1.2] text-white transition hover:translate-x-1 hover:text-blue-950" href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
            {index === 0 ? <div className="mt-[84px] lg:hidden" /> : null}
          </div>
        ))}
      </div>

      <div className="px-[17px] pb-[10px] sm:px-[17px]">
        <SocialLinks />
      </div>
    </div>
  );
}

function SearchPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-[70] grid place-items-start bg-black/55 px-4 pt-28 transition font-sans ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className={`mx-auto w-full max-w-3xl bg-white p-6 shadow-2xl transition ${open ? 'translate-y-0' : '-translate-y-4'}`}>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-950">Search</h2>
          <button className="grid h-10 w-10 place-items-center text-black" onClick={onClose} aria-label="Close search">
            <X className="h-8 w-8 stroke-[3]" />
          </button>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_150px_150px_auto]">
          <input className="h-12 border border-slate-300 px-4 font-medium outline-none focus:border-[#1bb8c9]" placeholder="Enter Keyword" />
          <input className="h-12 border border-slate-300 px-4 font-medium outline-none focus:border-[#1bb8c9]" placeholder="From" />
          <input className="h-12 border border-slate-300 px-4 font-medium outline-none focus:border-[#1bb8c9]" placeholder="To" />
          <button className="h-12 bg-[#1bb8c9] px-6 font-bold text-white hover:bg-[#159dad]">Search</button>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="relative z-50 bg-white pt-[38px] select-none font-sans">
        <div className="mx-auto flex h-[83px] w-[min(76vw,1442px)] items-end justify-between gap-[70px] border-b-2 border-[#1bb8c9] bg-white pb-[8px] max-[900px]:w-[calc(100vw-32px)]">
          <div className="flex min-w-0 items-center gap-[29px]">
            <button
              className="grid h-[52px] w-[52px] shrink-0 place-items-center text-black transition hover:text-[#1bb8c9]"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={menuOpen ? 'Close navigation' : 'Toggle navigation'}
            >
              {menuOpen ? <X className="h-10 w-10 stroke-[3.4]" /> : <Menu className="h-10 w-10 stroke-[3.4]" />}
            </button>
            <a className="whitespace-nowrap text-[40px] font-light leading-none tracking-normal max-lg:text-4xl max-sm:text-3xl" href="#" style={{ color: brandBlue }}>
              Narendra <span className="font-black">Modi</span>
            </a>
          </div>

          <nav className="hidden shrink-0 items-center text-[20px] font-normal leading-none text-slate-950 xl:flex" aria-label="Utility navigation">
            <a className="whitespace-nowrap px-[12px] transition hover:text-[#1bb8c9]" href="#">
              Mera Saansad
            </a>
            <span className="h-8 border-l border-slate-500" />
            <a className="inline-flex whitespace-nowrap items-center gap-2 px-[12px] transition hover:text-[#1bb8c9]" href="#">
              Download App
              <Smartphone className="h-7 w-5 text-[#1bb8c9]" />
            </a>
            <span className="h-8 border-l border-slate-500" />
            <a className="whitespace-nowrap px-[12px] transition hover:text-[#1bb8c9]" href="#">
              <strong>Login</strong> / Register
            </a>
            <span className="h-8 border-l border-slate-500" />
            <button className="inline-flex whitespace-nowrap items-center gap-1 px-[12px] transition hover:text-[#1bb8c9]" onClick={() => setSearchOpen(true)}>
              Search
              <Search className="h-8 w-8 stroke-[3] text-[#1bb8c9]" />
            </button>
            <span className="h-8 border-l border-slate-500" />
            <label className="inline-flex items-center gap-1 pl-[12px] pr-0 cursor-pointer">
              <select className="appearance-none bg-transparent text-[20px] font-normal leading-none outline-none cursor-pointer">
                {languages.map((language) => (
                  <option key={language}>{language}</option>
                ))}
              </select>
              <ChevronDown className="h-5 w-5 fill-[#1bb8c9] text-[#1bb8c9]" />
            </label>
          </nav>

          <button className="grid h-12 w-12 place-items-center text-[#1bb8c9] xl:hidden" onClick={() => setSearchOpen(true)} aria-label="Open search">
            <Search className="h-8 w-8 stroke-[3]" />
          </button>
        </div>

        <MegaMenu open={menuOpen} />
      </header>
      <SearchPanel open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
