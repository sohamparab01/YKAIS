import type { FacilityItem } from '../types';
import { assetUrl } from '../utils/assetUrl';

export const facilityCategories = [
  'All',
  'Combat Arena',
  'Striking Zone',
  'Form & Conditioning',
  'Equipment & Armour',
] as const;

export type FacilityCategory = (typeof facilityCategories)[number];

const rawFacilitiesData: FacilityItem[] = [
  {
    id: 'facility-01',
    title: 'Main Martial Arts Arena & Tatami Combat Floor',
    category: 'Combat Arena',
    src: '/assets/facilities/facility-01.webp',
    alt: 'YKAIS main indoor combat training arena featuring high-density blue and red tatami interlocking matting and heavy bag line',
    description: 'Spacious combat dojo equipped with regulation high-density interlocking tatami flooring engineered for impact absorption, dynamic sparring, and martial arts safety.',
    badge: 'Primary Arena',
    features: [
      'High-density shock-absorbing tatami matting',
      'Full panoramic natural lighting & ventilation',
      'Multi-station striking zones & perimeter clearance',
      'Agility & footwork training perimeter',
    ],
    aspectRatio: '16/9',
    width: 1920,
    height: 897,
    isFeatured: true,
  },
  {
    id: 'facility-02',
    title: 'Heavy Bag & Striking Conditioning Station',
    category: 'Striking Zone',
    src: '/assets/facilities/facility-02.webp',
    alt: 'Row of suspended heavy combat punching bags hanging from steel ceiling mounts overlooking the scenic outdoor landscape',
    description: 'Reinforced overhead steel mounting system holding multiple Gokaido heavy combat bags for power generation, combination drills, and striking endurance.',
    badge: 'Power & Conditioning',
    features: [
      'Heavy-duty Gokaido combat bags',
      'Reinforced ceiling steel girder rigging',
      'Multi-athlete simultaneous striking lanes',
      'Cross-ventilation with scenic hill views',
    ],
    aspectRatio: '16/9',
    width: 1920,
    height: 897,
  },
  {
    id: 'facility-04',
    title: 'Combat Equipment & Protective Gear Arsenal',
    category: 'Equipment & Armour',
    src: '/assets/facilities/facility-04.webp',
    alt: 'Organized equipment wall displaying boxing gloves, focus pads, curved mitts, kick shields, body protectors, and speed reaction targets',
    description: 'Professional rack of tournament-grade protective armour, curved focus mitts, kick shields, boxing gloves, and specialized speed reaction targets.',
    badge: 'Gear & Armour',
    features: [
      'Tournament-approved sparring gloves & mitts',
      'Heavy kick shields & body protection pads',
      'Speed reaction target discs & focus paddles',
      'Sanitized and organized equipment storage',
    ],
    aspectRatio: '16/9',
    width: 1920,
    height: 897,
  },
  {
    id: 'facility-05',
    title: 'Form Correction Mirror Wall & Conditioning Tools',
    category: 'Form & Conditioning',
    src: '/assets/facilities/facility-05.webp',
    alt: 'Full-length wall mirrors reflecting the combat floor alongside Swiss stability ball, agility hurdles, agility cones, sound system, and martial weapons',
    description: 'Floor-to-ceiling mirror arrays for real-time form correction, footwork analysis, and body mechanics, complemented by agility hurdles, stability balls, and rhythm sound systems.',
    badge: 'Technique Analysis',
    features: [
      'Full-height distortion-free form mirrors',
      'Speed agility hurdles & marker cones',
      'Core stability swiss balls & foam rollers',
      'Integrated rhythm & cadence sound system',
    ],
    aspectRatio: '16/9',
    width: 1920,
    height: 897,
  },
  {
    id: 'facility-06',
    title: 'Indoor Training Arena & Spectator Vantage',
    category: 'Combat Arena',
    src: '/assets/facilities/facility-06.webp',
    alt: 'Wide training hall perspective showing the full combat floor, air purifier, ceiling cooling fans, reflection mirrors, and viewing area',
    description: 'Full unobstructed training hall layout providing ample clearance for group drills, sparring rounds, kata demonstrations, and tactical coaching reviews.',
    badge: 'Full Hall Overview',
    features: [
      'Spacious multi-zone floor plan',
      'Overhead climate control & ceiling fans',
      'HEPA air purification system',
      'Dedicated observation & coaching vantage',
    ],
    aspectRatio: '16/9',
    width: 1920,
    height: 897,
  },
];

export const facilitiesData: FacilityItem[] = rawFacilitiesData.map((item) => ({
  ...item,
  src: assetUrl(item.src),
}));

