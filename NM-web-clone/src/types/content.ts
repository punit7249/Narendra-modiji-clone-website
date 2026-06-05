import type { LucideIcon } from 'lucide-react';

export type NavGroup = {
  heading: string;
  links: string[];
};

export type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export type Tile = {
  title: string;
  kicker: string;
  image: string;
};

export type NewsItem = {
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  source?: string;
};

export type FeatureCard = {
  title: string;
  copy: string;
  tag: string;
  icon: LucideIcon;
};

export type SiteStat = {
  value: string;
  label: string;
};
