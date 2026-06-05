import {
  BookOpen,
  FileText,
  Image,
  Library,
  Mail,
  MessageSquareText,
} from 'lucide-react';
import type { FeatureCard, HeroSlide, NavGroup, NewsItem, SiteStat, Tile } from '../types/content';

export const portrait =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Official%20Photograph%20of%20Prime%20Minister%20Narendra%20Modi%20Portrait.png';

export const navGroups: NavGroup[] = [
  { heading: 'ABOUT NM', links: ['Biography', 'BJP Connect', "People's Corner", 'Timeline'] },
  { heading: 'NEWS', links: ['News Updates', 'Media Coverage', 'Newsletter', 'Reflections'] },
  { heading: 'TUNE IN', links: ['Mann Ki Baat', 'Watch Live'] },
  { heading: 'GOVERNANCE', links: ['Governance Paradigm', 'Global Recognition', 'Infographics', 'Insights'] },
  { heading: 'CATEGORIES', links: ['NaMo Merchandise', 'Celebrating Motherhood', 'International', 'Kashi Vikas Yatra'] },
  { heading: 'NM THOUGHTS', links: ['Exam Warriors', 'Quotes', 'Speeches', 'Text Speeches', 'Interviews', 'Blog'] },
  { heading: 'NM LIBRARY', links: ['Photo Gallery', 'Ebooks', 'Poet & Author', 'E-Greetings', 'Stalwarts', 'Photo Booth'] },
  { heading: 'CONNECT', links: ['Write to PM', 'Serve The Nation', 'Contact Us'] },
];

export const footerGroups = navGroups;

export const utilityLinks = ['Mera Saansad', 'Download App', 'Login / Register'];

export const languages = [
  'English',
  'Gujarati',
  'Hindi',
  'Bengali',
  'Kannada',
  'Malayalam',
  'Telugu',
  'Tamil',
  'Marathi',
  'Assamese',
  'Manipuri',
  'Odia',
  'Urdu',
  'Punjabi',
];

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'Mann Ki Baat',
    title: 'PM Modi shares tips to beat the summer heat, advises citizens to stay hydrated in Mann Ki Baat',
    description:
      'The monthly address brings citizen stories, public awareness and practical guidance into a single national conversation.',
    image:
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1800&q=80',
  },
  {
    eyebrow: 'Vikas Yatra',
    title: 'Vikas Yatra',
    description:
      'Explore milestones across infrastructure, digital public services, welfare delivery and national transformation.',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=80',
  },
  {
    eyebrow: 'Kashi Vikas Yatra',
    title: 'Kashi Vikas Yatra',
    description:
      'A visual story of heritage, civic upgrades, riverfront renewal and people-powered progress.',
    image:
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1800&q=80',
  },
];

export const quickLinks = [
  'Biography',
  'News Updates',
  'Mann Ki Baat',
  'Watch Live',
  'Governance',
  'Photo Gallery',
];

export const featuredTiles: Tile[] = [
  {
    title: 'Celebrating Motherhood',
    kicker: 'Categories',
    image:
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Empowering our Farmers',
    kicker: 'Categories',
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Biography',
    kicker: 'About NM',
    image: portrait,
  },
  {
    title: "PM Modi's Journey captured in Timeline",
    kicker: 'About NM',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
];

export const latestNews: NewsItem[] = [
  {
    date: 'Jun 05, 2026',
    title: "Share your ideas and suggestions for 'Mann Ki Baat' now!",
    excerpt: 'Citizens can contribute stories, local innovations and public suggestions for the next episode.',
    image:
      'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80',
  },
  {
    date: 'Jun 04, 2026',
    title: 'Prime Minister Inaugurates First World Yogasana Championship In Ahmedabad, Gujarat',
    excerpt: 'The championship celebrates wellness, discipline and global enthusiasm around yoga.',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80',
  },
  {
    date: 'Jun 04, 2026',
    title: 'UK Foreign Secretary meets Prime Minister',
    excerpt: 'The meeting reviewed strategic ties, economic cooperation and shared global priorities.',
    image:
      'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=80',
  },
  {
    date: 'Jun 04, 2026',
    title: 'Social Media Corner 4th June 2026',
    excerpt: 'A curated snapshot of citizen appreciation, governance updates and online conversations.',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80',
  },
];

export const mediaCoverage: NewsItem[] = [
  {
    date: 'Times of India',
    title: '500 ethanol pumps by year-end: Union minister Hardeep Singh Puri',
    excerpt: 'Energy transition and green mobility continue to gain pace across the country.',
    source: 'timesofindia.indiatimes.com',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80',
  },
  {
    date: 'Economic Times',
    title: "Govt sets up six sector groups to fast-track 'Make in India 2.0' push",
    excerpt: 'Sectoral groups aim to speed up industrial growth and domestic manufacturing.',
    source: 'economictimes.indiatimes.com',
    image:
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80',
  },
  {
    date: 'Economic Times',
    title: "India's rise is coming at an important time... because the world needs India, says Jane Fraser",
    excerpt: "Global business leaders continue to underline India's growth and strategic importance.",
    source: 'economictimes.indiatimes.com',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
  },
  {
    date: 'Business Standard',
    title: "Defence Ministry enhances armed forces' spending powers, boosts efficiency",
    excerpt: 'Procurement flexibility supports operational readiness and quicker decision-making.',
    source: 'business-standard.com',
    image:
      'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?auto=format&fit=crop&w=900&q=80',
  },
  {
    date: 'Times of India',
    title: 'India, UK launch initiatives for minerals, maritime cooperation',
    excerpt: 'Partnerships expand in critical minerals, maritime security and long-term economic cooperation.',
    source: 'timesofindia.indiatimes.com',
    image:
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80',
  },
];

export const siteStats: SiteStat[] = [
  { value: '24x7', label: 'Updates' },
  { value: '14', label: 'Languages' },
  { value: '1000+', label: 'Speeches' },
];

export const featureCards: FeatureCard[] = [
  {
    title: 'Infographics',
    tag: 'Schemes',
    icon: FileText,
    copy: 'Latest schemes of the Modi Government and achievements to date, presented through crisp explainers.',
  },
  {
    title: 'Speeches',
    tag: 'Updates',
    icon: MessageSquareText,
    copy: "PM Narendra Modi's latest speeches, live event details, speech videos and text transcripts.",
  },
  {
    title: 'Gallery',
    tag: 'Photos',
    icon: Image,
    copy: 'Download NaMo App and get real time updates about PM Modi on the go.',
  },
  {
    title: 'Write to the PM',
    tag: 'Connect',
    icon: Mail,
    copy: 'Dive into the creative world of Narendra Modi and share ideas through official channels.',
  },
  {
    title: 'Subscribe to Newsletter',
    tag: 'Email',
    icon: BookOpen,
    copy: 'Get customized emails, timely updates, articles and a personalized birthday message from the PM.',
  },
  {
    title: 'NM Library',
    tag: 'Library',
    icon: Library,
    copy: 'Download and read ebooks in Hindi, English and other Indian languages.',
  },
];

export const governanceArticles: NewsItem[] = [
  {
    date: 'Governance',
    title: '6 Years of Jal Jeevan Mission: Transforming Lives, One Tap at a Time',
    excerpt: 'Jal Jeevan Mission has become a major development parameter to provide water to every household.',
  },
  {
    date: 'Governance',
    title: "PM Modi's Vision Fuels Delhi's Development",
    excerpt: 'The last ten years have brought new transport, civic upgrades and urban transformation to the capital.',
  },
  {
    date: 'North-East',
    title: "Mizoram Leads North-East's Drive for Development",
    excerpt: 'The promise of transformation by transportation continues to reshape growth across sectors.',
  },
  {
    date: 'Union Territories',
    title: 'Welfare of Union Territories In The Last Decade',
    excerpt: 'Democratic governance, public delivery and development outcomes have improved across Union Territories.',
  },
  {
    date: 'Nagaland',
    title: 'Nagaland Under Modi Government',
    excerpt: 'Recent years have witnessed positive transformation in the developmental landscape of Nagaland.',
  },
  {
    date: 'Meghalaya',
    title: "Meghalaya at the Heart of PM Modi's North-East Outreach",
    excerpt: "Nature, progress, conservation and eco-sustainability shape Meghalaya's growth story.",
  },
  {
    date: 'Sikkim',
    title: 'Sikkim - Propelling towards Transformative Growth',
    excerpt: 'The Himalayan state continues to build on connectivity, tourism, public welfare and sustainability.',
  },
  {
    date: 'Leadership',
    title: 'Narendra Modi: From RSS to BJP, A Journey of Leadership and Vision',
    excerpt: 'A political journey shaped by organization, public service and a long record of electoral leadership.',
  },
];

export const recognition = [
  'Bem-vindo ao Brasil',
  "PM Modi in Windhoek as a 'Highest Civilian'",
  'PM Modi Shines in Argentina',
  'Neighbourhood 1st Policy continues',
  'The Royal Welcome',
  'Taking cooperation to space!',
  'Leading agencies with thumbs-up to NDA Government',
  'In humanity we trust',
];

export const socials = ['Facebook', 'X', 'YouTube', 'LinkedIn', 'Instagram', 'Spotify'];
