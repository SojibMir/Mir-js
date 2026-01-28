import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  featured: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  price?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}