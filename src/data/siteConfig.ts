import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  instituteName: 'Dr. Yogita Khade Ayare Institute of Sports',
  founderName: 'Dr. Yogita Khade Ayare',
  tagline: 'Excellence in Athletic Training & Sports Leadership',
  contacts: {
    phone1: '+91 87883 83113',
    phone2: '+91 95525 54335',
    whatsapp: '+91 87883 83113',
    email: 'ykais.institute@gmail.com',
  },
  socials: {
    instagram: 'https://www.instagram.com/ykais.institute/',
    instagramHandle: '@ykais.institute',
  },
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Sports', path: '/sports' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
    {
      label: 'More',
      path: '#',
      children: [
        { label: 'Coaches', path: '/coaches' },
        { label: 'Facilities', path: '/facilities' },
        { label: 'Achievements', path: '/achievements' },
        { label: 'Testimonials', path: '/testimonials' },
        { label: 'Upcoming Events', path: '/events' },
      ],
    },
  ],
};
