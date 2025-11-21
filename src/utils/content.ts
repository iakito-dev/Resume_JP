// コンテンツ読み込み用のユーティリティ
// 必要に応じて拡張可能

export interface ResumeContent {
  summary?: string;
  skills?: string[];
  experience?: ExperienceItem[];
  projects?: ProjectItem[];
  education?: EducationItem[];
  certifications?: CertificationItem[];
  links?: LinkItem[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

export interface LinkItem {
  name: string;
  url: string;
}

