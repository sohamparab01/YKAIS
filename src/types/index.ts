export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface Sport {
  id: string;
  title: string;
  description: string;
  category?: 'Combat' | 'Team' | 'Racquet' | 'Athletics & Fitness' | 'Specialty';
  image?: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  year?: string;
  category: 'National' | 'International' | 'State / Award';
  description?: string;
}

export interface FounderProfile {
  name: string;
  role: string;
  image?: string;
  instagram?: string;
  biography: string[];
  credentials: string[];
  honours: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
  width?: number;
  height?: number;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  description: string;
  badge?: string;
  features?: string[];
  width?: number;
  height?: number;
  aspectRatio?: string;
  isFeatured?: boolean;
}

export interface SiteConfig {
  instituteName: string;
  founderName: string;
  tagline: string;
  contacts: {
    phone1: string;
    phone2: string;
    whatsapp?: string;
    email: string;
  };
  socials?: {
    instagram: string;
    instagramHandle: string;
  };
  navigation: NavItem[];
}

