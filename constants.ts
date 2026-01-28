import { 
  Code, 
  Layout, 
  Server, 
  Smartphone, 
  Database, 
  Cpu, 
  Github, 
  Facebook, 
  Linkedin, 
  Mail 
} from 'lucide-react';
import { NavItem, Project, Service, Skill, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'Frontend', icon: Layout, description: 'React.js, Next.js, Tailwind CSS, Material UI, Bootstrap' },
  { name: 'Backend', icon: Server, description: 'Node.js, Express.js, MongoDB, Firebase' },
  { name: 'Mobile', icon: Smartphone, description: 'React Native' },
  { name: 'Tools', icon: Code, description: 'GitHub, VS Code, Postman' },
];

export const SERVICES: Service[] = [
  {
    title: 'MERN Stack Development',
    description: 'Full-stack web applications using MongoDB, Express, React, and Node.js. Scalable and secure.',
    icon: Code,
    price: 'Starting at $1k'
  },
  {
    title: 'Frontend Engineering',
    description: 'Responsive and interactive UIs with React, Next.js, and modern CSS frameworks like Tailwind.',
    icon: Layout,
    price: 'Hourly or Fixed'
  },
  {
    title: 'API Development',
    description: 'Robust RESTful APIs with Node.js and Express, integrated with MongoDB or Firebase.',
    icon: Database,
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Lumina Dashboard',
    description: 'A real-time analytics dashboard for e-commerce platforms featuring data visualization and AI-driven insights.',
    tags: ['React', 'D3.js', 'Supabase'],
    imageUrl: 'https://picsum.photos/seed/lumina/800/600',
    link: '#',
    featured: true
  },
  {
    id: '2',
    title: 'Nexus Chat',
    description: 'Secure, end-to-end encrypted messaging application for enterprise teams with file sharing capabilities.',
    tags: ['TypeScript', 'WebSockets', 'Node.js'],
    imageUrl: 'https://picsum.photos/seed/nexus/800/600',
    link: '#',
    featured: true
  },
  {
    id: '3',
    title: 'Aero Marketing',
    description: 'High-conversion landing page generator for digital marketing agencies.',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    imageUrl: 'https://picsum.photos/seed/aero/800/600',
    link: '#',
    featured: false
  },
  {
    id: '4',
    title: 'CryptoFolio',
    description: 'Cryptocurrency portfolio tracker with real-time price alerts and tax calculation.',
    tags: ['React Native', 'Firebase', 'API'],
    imageUrl: 'https://picsum.photos/seed/crypto/800/600',
    link: '#',
    featured: false
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/SojibMir', icon: Github },
  { platform: 'Facebook', url: 'https://www.facebook.com/SOJIBMIR098', icon: Facebook },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/shafikul-islam-sojib-772669212/', icon: Linkedin },
  { platform: 'Email', url: 'mailto:sojibmir098@gmail.com', icon: Mail },
];