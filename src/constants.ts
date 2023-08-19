import {
  ContactData,
  ExperienceData,
  FeedbackData,
  TypePortfolio,
  PortfolioData,
  ProfileData,
  EducationData,
} from "./types";

export const ERROR_FETCH_EDUCATION =
  '"Something went wrong; please review your server connection!';

export const profile: ProfileData = {
  name: "Juan Camilo Bustamante",
  avatar:
    "https://media.licdn.com/dms/image/D4E03AQH9pn0dGDuAbA/profile-displayphoto-shrink_800_800/0/1689358780179?e=1697068800&v=beta&t=dablLgJtciYNQ-2XyozRFQ6Us3DaplyJqw0StW8fKB0",
};
export const TITLE: string = "Front-End Developer";
export const DESCRIPTION: string =
  "Javascript developer with knowledge of ReactJS and NestJS frameworks";

export const aboutMe: string = `
I am an electronic engineer with 20 years of experience in sales and 
marketing. My passion is software development since university, so I decided to 
switch careers in 2022, becoming a freelance back-end developer.
I worked for 3 years with UiPath and Microsoft Power Automate.
Since 2023 I am a Front-end developer full-time.
I have studied various programming languages and frameworks such as HTML, 
CSS, JavaScript, React, Salesforce (Apex, Visualforce, LWC, and Aura Components), 
Java, and Python. `;

export const experiences: ExperienceData[] = [
  {
    date: "2023",
    info: {
      company: "EPAM",
      job: "Front-end Developer | ReactJS ",
      description: "Junior software enginer in training.",
    },
  },
  {
    date: "2022-2023",
    info: {
      company: "OS Group",
      job: "Freelance Backend Developer | NodeJS",
      description:
        "Develope the back-end for CRM App to connect to Transport Ministry SOAP API. Development in NestJS, Typescript and PostgreSQL.",
    },
  },
  {
    date: "2020-2023",
    info: {
      company: "EPM",
      job: "RPA Developer",
      description:
        "Automate sales processes with UiPath, Power Automate and Visual Basic for Excel.",
    },
  },
];

export const education: EducationData[] = [
  {
    date: 2023,
    title: "Introduction to JavaScript Development",
    text: "EPAM",
  },
  {
    date: 2022,
    title: "Full-stack Developer Certificate Program",
    text: "OIT",
  },
  {
    date: 2005,
    title: "Marketing Specialist",
    text: "Eafit University",
  },
  {
    date: 2002,
    title: "Electronic Enginer",
    text: "University of Antioquia ",
  },
];

export const feedbacks: FeedbackData[] = [
  {
    text: "Juan Camilo automated the tracking of sales in the Department of Large Costumer at EPM, and developed our application for case creation, handling, and tracking.",
    reporter: {
      photoUrl:
        "https://media.licdn.com/dms/image/D4E03AQHBTQ2aub-S9w/profile-displayphoto-shrink_200_200/0/1691003415253?e=1697673600&v=beta&t=HEejkwRjFs6d1_XKgxdhFHCAYQElEPeBopm6nqvlc5k",
      name: "Ana Isabel Rendon",
      citeUrl: "https://www.epm.com.co",
      site: "epm.com.co",
    },
  },
  {
    text: "Juan was part of the backend development team for the migration project of our application to NestJS. He did an excellent job as a freelancer.",
    reporter: {
      photoUrl:
        "https://media.licdn.com/dms/image/D4E03AQGdQ6zRrNRcug/profile-displayphoto-shrink_800_800/0/1677857953879?e=1697673600&v=beta&t=jA6aO6a3Za3m-7MurHsad55zMUElkDbaCxUJtydLky8",
      name: "John Agudelo",
      citeUrl: "https://www.osgroup.co/",
      site: "osgroup.co",
    },
  },
];

export const contacts: ContactData[] = [
  {
    id: 1,
    icon: ["fas", "phone"],
    href: "tel:+573017559951",
    text: "+57 301 755 9951",
    isWeb: false,
  },
  {
    id: 2,
    icon: ["fas", "envelope"],
    href: "mailto:Juan_Bustamante1@epam.com",
    text: "Juan_Bustamante1@epam.com",
    isWeb: false,
  },
  {
    id: 3,
    icon: ["fab", "linkedin"],
    href: "https://www.linkedin.com/in/juancamilobustamante",
    text: "linkedin.com/in/juancamilobustamante",
    isWeb: true,
    media: "LinkedIn",
  },
  {
    id: 4,
    icon: ["fab", "github"],
    href: "https://github.com/jbustara",
    text: "github.com/jbustara",
    isWeb: true,
    media: "GitHub",
  },
];

export const portfolio: PortfolioData[] = [
  {
    id: 1,
    title: "Ministry Soap Api",
    description:
      "Back-end in nest to connect with Transport Ministry Soap Api to cargo registry ",
    card: 2,
    source:
      "https://rndc.mintransporte.gov.co/portals/0/Documentos/MANUAL%20RNDC%20WEB-SERVICE%20v2.3%2020140119.pdf",
    type: TypePortfolio.backend,
  },
  {
    id: 2,
    title: "Best Habits Android App",
    description:
      "App developed in Android Studio.  Created to practice mobile development, MVC patterns, Firebase...",
    card: 1,
    source:
      "https://play.google.com/store/apps/details?id=com.k1000.habitchanger&pli=1",
    type: TypePortfolio.frontend,
  },
  {
    id: 3,
    title: "CV App",
    description: "React app builded in typescript",
    card: 1,
    source: "/",
    type: TypePortfolio.frontend,
  },
];
