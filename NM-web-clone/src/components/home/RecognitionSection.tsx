import { Building2, Plane } from 'lucide-react';

function Dots() {
  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: 8 }).map((_, index) => (
        <span className={`h-[14px] w-[14px] ${index === 7 || index === 2 ? 'bg-[#2c2c8a]' : 'bg-[#b6b6b6]'}`} key={index} />
      ))}
    </div>
  );
}

function Title({ text, icon }: { text: string; icon: React.ReactNode }) {
  return (
    <div className="mb-[10px] flex items-center justify-between border-b-2 border-[#19b8c9]">
      <div className="flex items-center gap-[14px]">
        <span className="grid h-[47px] w-[50px] place-items-center bg-[#22b8c9] text-white">{icon}</span>
        <h2 className="nm-heading">{text}</h2>
      </div>
      <Dots />
    </div>
  );
}

export function HomeRecognitionSection() {
  return (
    <section className="site-container grid gap-[14px] pb-[50px] pt-[42px] font-sans lg:grid-cols-2">
      <div>
        <Title text="Global Recognition" icon={<Building2 className="h-8 w-8" />} />
        <a className="group relative block overflow-hidden bg-[#22b8c9]" href="#">
          <img
            className="h-[334px] w-full object-cover transition duration-500 group-hover:scale-105"
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1100&q=80"
            alt=""
          />
          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-[#22b8c9] px-[25px] py-[18px] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="text-[25px] font-normal text-[#282681]">In humanity we trust</h3>
          </div>
        </a>
      </div>
      <div>
        <Title text="International Visits & Summits" icon={<Plane className="h-8 w-8" />} />
        <a className="group relative block overflow-hidden bg-[#22b8c9]" href="#">
          <img
            className="h-[334px] w-full object-cover transition duration-500 group-hover:scale-105"
            src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1100&q=80"
            alt=""
          />
          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-[#22b8c9] px-[25px] py-[18px] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="text-[25px] font-normal text-[#282681]">Modi In Sweden</h3>
          </div>
        </a>
      </div>
    </section>
  );
}
