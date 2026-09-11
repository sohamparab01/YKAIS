export type Language = 'en' | 'hi' | 'mr';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
}

export interface NavTranslations {
  home: string;
  sports: string;
  about: string;
  gallery: string;
  contact: string;
  more: string;
  language: string;
  coaches: string;
  facilities: string;
  achievements: string;
  testimonials: string;
  events: string;
}

export interface CommonTranslations {
  selectLanguage: string;
  currentLanguage: string;
  enquireNow: string;
  viewAllSports: string;
  aboutYkais: string;
  aboutDrYogita: string;
  viewFullGallery: string;
  returnHome: string;
  contactCoachingOffice: string;
  followInstagram: string;
  visitInstagram: string;
  explorePrograms: string;
  details: string;
  discipline: string;
  close: string;
  previous: string;
  next: string;
  photoOf: string;
}

export interface HomeTranslations {
  eyebrowDisciplines: string;
  sportsHeading: string;
  sportsSubtitle: string;
  highlight1Title: string;
  highlight1Desc: string;
  highlight2Title: string;
  highlight2Desc: string;
  highlight3Title: string;
  highlight3Desc: string;
  photoStripEyebrow: string;
  photoStripTitle: string;
  photoStripSubtitle: string;
  instaEyebrow: string;
  instaTitle: string;
  instaSubtitle1: string;
  instaSubtitle2: string;
  instaCtaEyebrow: string;
  instaCtaText: string;
  instaCtaButton: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton1: string;
  ctaButton2: string;
  exploreEyebrow: string;
  exploreTitle: string;
  exploreSubtitle: string;
  exploreItems: {
    sports: { title: string; subtitle: string; tag: string };
    coaches: { title: string; subtitle: string; tag: string };
    facilities: { title: string; subtitle: string; tag: string };
    achievements: { title: string; subtitle: string; tag: string };
    gallery: { title: string; subtitle: string; tag: string };
    events: { title: string; subtitle: string; tag: string };
    testimonials: { title: string; subtitle: string; tag: string };
  };
  founderEyebrow: string;
  founderTitle: string;
  founderBadge: string;
  founderSubhead: string;
  founderTag1: string;
  founderTag2: string;
  founderBio: string[];
  founderCredHeading: string;
  founderCredentials: string[];
}

export interface AboutTranslations {
  bannerEyebrow: string;
  bannerTitle: string;
  bannerSubtitle: string;
  founderRole: string;
  founderSubhead: string;
  visionEyebrow: string;
  visionTitle: string;
  intro: string;
  internationalDisciplinesIntro: string;
  disciplinesList: string[];
  experience: {
    playerYears: string;
    playerLabel: string;
    coachYears: string;
    coachLabel: string;
  };
  specialtiesHeading: string;
  specialties: string[];
  academicHeading: string;
  academicProfile: string[];
  leadershipHeading: string;
  leadershipRoles: string[];
  awardsHeading: string;
  awards: string[];
  instagramEyebrow: string;
  instagramText: string;
  instagramBtn: string;
  enquireBtn: string;
}

export interface SportsTranslations {
  bannerEyebrow: string;
  bannerTitle: string;
  bannerSubtitle: string;
  gridEyebrow: string;
  gridTitle: string;
  gridSubtitle: string;
  categories: {
    combat: string;
    team: string;
    racquet: string;
    athleticsFitness: string;
    specialty: string;
  };
  descriptions: Record<string, string>;
}

export interface CoachesTranslations {
  bannerEyebrow: string;
  bannerTitle: string;
  bannerSubtitle: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionSubtitle: string;
  founderRole: string;
  bio: string[];
  contactBtn: string;
}

export interface FacilitiesTranslations {
  bannerEyebrow: string;
  bannerTitle: string;
  bannerSubtitle: string;
  highlights: {
    matsTitle: string;
    matsDesc: string;
    strikingTitle: string;
    strikingDesc: string;
    gearTitle: string;
    gearDesc: string;
    airTitle: string;
    airDesc: string;
  };
  gridEyebrow: string;
  gridTitle: string;
  gridSubtitle: string;
  categories: Record<string, string>;
  standardsEyebrow: string;
  standardsTitle: string;
  standardsDesc: string;
  standardsList: string[];
  items: Record<
    string,
    {
      title: string;
      category: string;
      description: string;
      badge?: string;
      features?: string[];
    }
  >;
}

export interface GalleryTranslations {
  bannerEyebrow: string;
  bannerTitle: string;
  bannerSubtitle: string;
  gridEyebrow: string;
  gridTitle: string;
  gridSubtitle: string;
  categories: Record<string, string>;
  noticeTitle: string;
  noticeDesc: string;
  items: Record<
    string,
    {
      title: string;
      category: string;
      caption?: string;
    }
  >;
}

export interface AchievementsTranslations {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  nationalGames: {
    eyebrow: string;
    badge: string;
    title: string;
    event: string;
    description: string;
  };
  internationalChampionships: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    disciplinesTag: string;
  };
  wakoAward: {
    eyebrow: string;
    title: string;
    championship: string;
    description: string;
  };
  ratnagiriBhushan: {
    eyebrow: string;
    title: string;
    year: string;
    description: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    playerYears: string;
    playerLabel: string;
    coachYears: string;
    coachLabel: string;
    description: string;
  };
  watchOnYoutube: string;
  story1: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    founderRole: string;
    badges: string[];
  };
  story2: {
    eyebrow: string;
    title: string;
    sublabel: string;
    fighter1: {
      name: string;
      country: string;
      countryCode: string;
    };
    fighter2: {
      name: string;
      country: string;
      countryCode: string;
    };
    vs: string;
    description: string;
  };
  story3: {
    eyebrow: string;
    title: string;
    location: string;
    paragraphs: string[];
    imageCaption: string;
  };
  finalCta: {
    eyebrow: string;
    line1: string;
    line2: string;
    line3: string;
    button: string;
  };
}

export interface TestimonialsTranslations {
  bannerEyebrow: string;
  bannerTitle: string;
  bannerSubtitle: string;
  comingSoonTitle: string;
  comingSoonSubtitle: string;
  comingSoonTag: string;
}

export interface EventsTranslations {
  bannerEyebrow: string;
  bannerTitle: string;
  bannerSubtitle: string;
  instaCtaEyebrow: string;
  instaCtaText: string;
  instaCtaButton: string;
}

export interface ContactTranslations {
  bannerEyebrow: string;
  bannerTitle: string;
  bannerSubtitle: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionSubtitle: string;
  form: {
    heading: string;
    firstNameLabel: string;
    firstNamePlaceholder: string;
    lastNameLabel: string;
    lastNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    enquiryTypeLabel: string;
    enquiryTypeSelect: string;
    enquiryOptions: {
      admission: string;
      sportsProgram: string;
      coaching: string;
      fees: string;
      trainingSchedule: string;
      generalEnquiry: string;
    };
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    successTitle: string;
    successDesc: string;
    reopenWhatsApp: string;
    sendAnother: string;
    errors: {
      firstName: string;
      emailRequired: string;
      emailValid: string;
      enquiryType: string;
      message: string;
    };
  };
  details: {
    eyebrow: string;
    title: string;
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    connectTitle: string;
    visitInstagram: string;
  };
}

export interface FooterTranslations {
  brandDescription: string;
  quickLinksHeading: string;
  instituteHeading: string;
  directContactHeading: string;
  rights: string;
  tagline: string;
  location: string;
  links: {
    home: string;
    aboutDrYogita: string;
    sports13: string;
    photoGallery: string;
    contactUs: string;
    coachingLeadership: string;
    trainingFacilities: string;
    honoursMedals: string;
    testimonials: string;
    upcomingEvents: string;
  };
}

export interface NotFoundTranslations {
  badge: string;
  title: string;
  message: string;
  returnHome: string;
}

export interface TranslationDictionary {
  nav: NavTranslations;
  languages: {
    en: string;
    hi: string;
    mr: string;
  };
  common: CommonTranslations;
  home: HomeTranslations;
  about: AboutTranslations;
  sports: SportsTranslations;
  coaches: CoachesTranslations;
  facilities: FacilitiesTranslations;
  gallery: GalleryTranslations;
  achievements: AchievementsTranslations;
  testimonials: TestimonialsTranslations;
  events: EventsTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
  notFound: NotFoundTranslations;
}
