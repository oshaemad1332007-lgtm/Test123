export type Language = 'ar' | 'en';
export type Theme = 'dark' | 'light';

export type SkillCategory = 'all' | 'frontend' | 'languages' | 'tools' | 'core';
export type ProjectCategory = 'all' | 'react' | 'fullstack' | 'ui-tools';

export interface LocalizedString {
  ar: string;
  en: string;
}

export interface LocalizedList {
  ar: string[];
  en: string[];
}

export interface Project {
  id: string;
  title: LocalizedString;
  shortDesc: LocalizedString;
  fullDesc: LocalizedString;
  category: 'react' | 'fullstack' | 'ui-tools';
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
  metrics?: LocalizedString;
  highlights: LocalizedList;
}

export interface Certificate {
  id: string;
  title: LocalizedString;
  issuer: LocalizedString;
  date: string;
  credentialId: string;
  credentialUrl: string;
  image: string;
  skills: string[];
  verified: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'languages' | 'tools' | 'core';
  badge?: string;
  color: string;
}

export interface EducationItem {
  id: string;
  degree: LocalizedString;
  faculty: LocalizedString;
  institution: LocalizedString;
  period: string;
  status: LocalizedString;
  description: LocalizedString;
  highlights: LocalizedList;
  relevantCourses: LocalizedList;
}

export interface NavItem {
  id: string;
  label: LocalizedString;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
