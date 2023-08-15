import {
  ContactData,
  ExperienceData,
  FeedbackData,
  TypePortfolio,
  PortfolioData,
  ProfileData,
  EducationData,
} from "./types";

export const profile: ProfileData = {
  name: "Juan Camilo Bustamante",
  avatar:
    "https://media.licdn.com/dms/image/D4E03AQH9pn0dGDuAbA/profile-displayphoto-shrink_800_800/0/1689358780179?e=1697068800&v=beta&t=dablLgJtciYNQ-2XyozRFQ6Us3DaplyJqw0StW8fKB0",
};
export const TITLE: string = "Front-end Developer";
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
    text: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    reporter: {
      photoUrl:
        "https://media.licdn.com/dms/image/D4E03AQH9pn0dGDuAbA/profile-displayphoto-shrink_800_800/0/1689358780179?e=1697068800&v=beta&t=dablLgJtciYNQ-2XyozRFQ6Us3DaplyJqw0StW8fKB0",
      name: "John Doe",
      citeUrl: "https://www.citeexample.com",
    },
  },
  {
    text: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    reporter: {
      photoUrl:
        "https://media.licdn.com/dms/image/D4E03AQH9pn0dGDuAbA/profile-displayphoto-shrink_800_800/0/1689358780179?e=1697068800&v=beta&t=dablLgJtciYNQ-2XyozRFQ6Us3DaplyJqw0StW8fKB0",
      name: "John Doe",
      citeUrl: "https://www.citeexample.com",
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
    title: "Ministry App",
    description: "Back-end in nest to connect with soap api",
    card: 1,
    source: "/",
    type: TypePortfolio.nest,
  },
  {
    id: 2,
    title: "React App",
    description: "Front-end in nest to connect with soap api",
    card: 2,
    source: "/",
    type: TypePortfolio.react,
  },
  {
    id: 3,
    title: "Ministry App",
    description: "Back-end in nest to connect with soap api",
    card: 1,
    source: "/",
    type: TypePortfolio.nest,
  },
  {
    id: 4,
    title: "React App",
    description: "Front-end in nest to connect with soap api",
    card: 2,
    source: "/",
    type: TypePortfolio.react,
  },
];
