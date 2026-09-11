import { assetUrl } from '../utils/assetUrl';

export interface AchievementStoryMeta {
  id: string;
  youtubeUrl: string;
  image?: string;
  imageAlt?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  year?: string;
  round?: string;
  fighter1?: {
    name: string;
    countryCode: string;
  };
  fighter2?: {
    name: string;
    countryCode: string;
  };
  location?: string;
}

export const achievementStoriesMeta = {
  story1: {
    id: 'the-journey',
    youtubeUrl: 'https://youtu.be/mPjIbG4rCJA?si=u-1XqjbGTlMFzsgj',
    image: assetUrl('/assets/founder/founder-main.jpg'),
    imageAlt: 'Dr. Yogita Khade Ayare — International Martial Arts Player, Sports Coach & Founder',
  },
  story2: {
    id: 'world-combat-games-2013',
    youtubeUrl: 'https://youtu.be/Lqv0OhYcIhE?si=PkQJ0ewWtQmEiAxu',
    year: '2013',
    round: 'QUARTER FINAL',
    fighter1: {
      name: 'EVELYN NEYENS',
      countryCode: 'BEL',
    },
    fighter2: {
      name: 'YOGITA KHADE',
      countryCode: 'IND',
    },
  },
  story3: {
    id: 'world-nomad-games',
    youtubeUrl: 'https://www.youtube.com/live/D6Ujh9GpKl4?si=An7rf2-WXTK1i4Bt',
    location: 'BISHKEK, KYRGYZSTAN',
    image: assetUrl('/assets/gallery/gallery-15.webp'),
    imageAlt: 'Team India sports delegation and Dr. Yogita Khade Ayare alongside official mascot at World Nomad Games',
    secondaryImage: assetUrl('/assets/gallery/gallery-13.webp'),
    secondaryImageAlt: 'Team India athletic delegation and Dr. Yogita Khade Ayare with the national flag in Kyrgyzstan',
  },
} as const;

export const achievementsData = Object.values(achievementStoriesMeta);
