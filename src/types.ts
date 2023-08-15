import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ProfileData {
  name: string;
  avatar: string;
}

export interface ContactData {
  id: number;
  icon: IconProp;
  href: string;
  text: string;
  isWeb: boolean;
  media?: string;
}
export interface ExperienceData {
  date: string;
  info: {
    company: string;
    job: string;
    description: string;
  };
}

export interface FeedbackData {
  text: string;
  reporter: {
    photoUrl: string;
    name: string;
    citeUrl: string;
  };
}

export interface PortfolioData {
  id: number;
  title: string;
  description: string;
  card: number;
  source: string;
  type: TypePortfolio;
}

export enum TypePortfolio {
  nest = "nest",
  react = "react",
}

export interface EducationData {
  date: number;
  title: string;
  text: string;
}
