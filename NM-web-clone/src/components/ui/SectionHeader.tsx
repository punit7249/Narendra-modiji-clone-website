type SectionHeaderProps = {
  title: string;
  eyebrow?: string;
  action?: string;
  inverse?: boolean;
};

export function UISectionHeader({
  title,
  eyebrow = 'NarendraModi.in',
  action = 'View All',
  inverse = false,
}: SectionHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between select-none font-sans">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-500">{eyebrow}</p>
        <h2 className={`mt-2 text-3xl font-black tracking-normal sm:text-4xl ${inverse ? 'text-white' : 'text-slate-950'}`}>
          {title}
        </h2>
      </div>
      {action && (
        <a
          className={`text-sm font-black transition hover:text-orange-500 ${
            inverse ? 'text-cyan-200' : 'text-sky-700'
          }`}
          href="#"
        >
          {action}
        </a>
      )}
    </div>
  );
}
