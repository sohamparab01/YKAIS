import type { FounderProfile } from '../types';
import { assetUrl } from '../utils/assetUrl';

export const founderData: FounderProfile = {
  name: 'Dr. Yogita Khade Ayare',
  role: 'Sports Coach & Founder',
  image: assetUrl('/assets/founder/founder-main.jpg'),
  instagram: 'https://www.instagram.com/dr.yogitakhadeayare/',
  biography: [
    'Dr. Yogita Khade Ayare is an international martial arts player, sports coach, and founder of the Dr. Yogita Khade Ayare Institute of Sports (YKAIS), with more than 25 years of experience as a player and 22+ years as a coach and instructor.',
    'She has represented herself at the international level across multiple martial arts disciplines including Karate, Kickboxing, Pankration, Belt Wrestling, Mass Wrestling, Kudo and SQAY.',
    'A Ph.D. in Physical Education and M.A. in Yogashastra, she serves as Sports Coordinator at the Department of Physical Education, University of Mumbai, and leads sports development across multiple disciplines.',
  ],
  credentials: [
    'Ph.D. in Physical Education',
    'M.A. Yogashastra',
    'Sports Coach & Founder — YKAIS',
    'National Aerobics & Rugby Player',
    'Sports Coordinator, Department of Physical Education, University of Mumbai',
    'Ex. Gym Instructor, University of Mumbai',
  ],
  honours: [
    'Gold Medalist — 37th National Games, Goa 2023',
    'Multiple International Championship Medals (Gold, Silver and Bronze)',
    'Best Fighter Award — WAKO Asian Kickboxing Championship',
    'Ratnagiri Bhushan Award 2015–16',
    '25+ Years as a Player',
    '22+ Years as a Coach / Instructor',
  ],
};

