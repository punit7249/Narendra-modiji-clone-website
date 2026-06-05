import { useEffect, useState } from 'react';
import { heroSlides } from '../../data/mockData';

export function HomeHeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(2);
  const slide = heroSlides[activeSlide];
  const isKashiSlide = slide.title.toLowerCase().includes('kashi');

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-white pb-[45px] pt-[12px] font-sans select-none" aria-label="Featured stories">
      <div className="relative mx-auto h-[686px] w-[min(76vw,1442px)] overflow-visible bg-black max-[900px]:w-[calc(100vw-32px)] max-lg:h-[56vw] max-lg:min-h-[420px] max-sm:min-h-[320px]">
        <div className="absolute inset-0 overflow-hidden">
          {heroSlides.map((item, index) => (
            <img
              className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ${
                index === activeSlide ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
              }`}
              src={item.image}
              alt=""
              key={item.title}
            />
          ))}
        </div>

        <div className="absolute right-0 top-0 z-20 flex h-[94px] bg-black/45 text-white backdrop-blur-[1px] max-sm:h-14">
          <a className="grid w-[78px] place-items-center text-[42px] font-black leading-none transition hover:bg-[#1bb8c9]" href="#" aria-label="Facebook">
            f
          </a>
          <span className="my-6 border-l border-white/40" />
          <a className="grid w-[86px] place-items-center text-[36px] font-light leading-none transition hover:bg-[#1bb8c9]" href="#" aria-label="X">
            X
          </a>
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/72 via-black/20 to-transparent" />

        <div className="absolute bottom-[167px] left-[102px] z-20 max-w-[890px] text-white max-lg:bottom-28 max-lg:left-12 max-sm:bottom-24 max-sm:left-5">
          <p
            className={`${
              isKashiSlide ? 'font-serif italic' : 'font-sans'
            } text-[48px] leading-[1.4] tracking-wide text-white/95 max-lg:text-3xl max-sm:text-xl`}
          >
            {isKashiSlide
              ? 'Experience the essence of Vikas bhi, Virasat bhi'
              : 'Check out interesting anecdotes and details from'}
          </p>
          <h1
            className={`mt-2 max-w-[850px] tracking-normal drop-shadow-xl max-lg:text-7xl max-sm:text-4xl ${
              isKashiSlide
                ? 'text-[102px] font-black uppercase leading-[0.9] text-[#fff6a4]'
                : 'text-[88px] font-light leading-[1.05] text-[#d8c477]'
            }`}
          >
            {isKashiSlide ? (
              <>
                Kashi Vikas
                <br />
                Yatra
              </>
            ) : (
              "Narendra Modi's life"
            )}
          </h1>
        </div>

        <div className="group absolute bottom-0 left-1/2 z-20 flex h-[148px] w-[870px] -translate-x-1/2 items-center justify-center bg-[#282681]/90 text-[28px] font-medium text-white max-lg:h-24 max-lg:w-[60%] max-lg:text-xl max-sm:left-0 max-sm:w-full max-sm:translate-x-0">
          <button
            className="absolute left-0 top-0 grid h-full w-[49px] place-items-center bg-[#237daf]/90 text-[48px] font-light text-white opacity-0 transition group-hover:opacity-100 hover:bg-[#19b8c9]"
            onClick={() => setActiveSlide((current) => (current + heroSlides.length - 1) % heroSlides.length)}
            aria-label="Previous slide"
          >
            {'‹'}
          </button>
          <span className="line-clamp-2 px-14 text-center text-[20px] md:text-[24px]">{slide.title}</span>
          <button
            className="absolute right-0 top-0 grid h-full w-[49px] place-items-center bg-[#237daf]/90 text-[48px] font-light text-white opacity-0 transition group-hover:opacity-100 hover:bg-[#19b8c9]"
            onClick={() => setActiveSlide((current) => (current + 1) % heroSlides.length)}
            aria-label="Next slide"
          >
            {'›'}
          </button>
        </div>

        <div className="absolute bottom-[-20px] right-0 z-30 flex gap-[12px] pr-1">
          {heroSlides
            .concat(heroSlides, heroSlides)
            .slice(0, 9)
            .map((item, index) => (
              <button
                key={`${item.title}-${index}`}
                className={`h-[15px] w-[15px] transition ${
                  index % heroSlides.length === activeSlide ? 'bg-[#302d82]' : 'bg-[#bdbdbd]'
                }`}
                onClick={() => setActiveSlide(index % heroSlides.length)}
                aria-label={`Show slide ${(index % heroSlides.length) + 1}`}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
