import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Pragash Daniel",
  initials: "PD",
  url: "https://media.licdn.com/dms/image/v2/D5603AQFsRWisgUV-SA/profile-displayphoto-shrink_200_200/B56ZQypudYG8AY-/0/1736016587848?e=2147483647&v=beta&t=8Nq0FfLZ3z4GK4kbo5fvW_EKhqSPtC7lzGgqLXb-sKg",
  location: "Tamil Nadu, India",
  locationLink: "https://www.google.com/maps/place/Tamil+Nadu",
  description:
    "Software Developer specializing in Java, Spring Boot, and Microservices. Passionate about building scalable solutions and optimizing system performance.",
  summary:
    "Currently working at Vivant360 Software Services as a Software Developer. Skilled in Java, Spring Boot, PostgreSQL, and Microservices architecture. Experienced in API development, caching, data pipelines, and cloud-based storage solutions.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Microservices",
    "Apache NiFi",
    "Kong API Gateway",
    "Hibernate",
    "Design Patterns",
    "Multithreading",
    "Agile",
    "Kafka",
     "Data Structures and Algorithms",
    "Operating System",
    "Networking",
    "Database",
    "Low Level Design",
    "Git",
    "GitHub"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "pragashdaniel69@gmail.com",
    tel: "+91-9790447115",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/PragashDaniel",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pragash-daniel-p-070316203/",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/Pragash_Daniel/",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:pragashdaniel69@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Vivant360 Software Services",
      href: "#",
      badges: [],
      location: "Tamil Nadu, India",
      title: "Software Developer",
      logoUrl: "/vivant360_logo.jpg",
      start: "Nov 2023",
      end: "Present",
      description:
        "Contributed to CRM development, API optimization, caching, and data pipeline management. Implemented dynamic storage, API traffic management, and NLP applications using PostgresML.",
    },
  ],
  education: [
    {
      school: "St. Xavier’s College, Tamil Nadu, India",
      href: "#",
      degree: "Master of Computer Applications (MCA)",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/2/21/XavierPalayam.png",
      start: "July 2021",
      end: "Mar 2023",
      cgpa: "8.12",
    },
  ],
  projects: [
    {
      title: "PDF and Word Translation",
      href: "#",
      dates: "Ongoing",
      active: true,
      image: "",
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      video: "",
      description:
        "Developed a translation application using Spring Boot and Google Translation API to support native and non-native document translations (Spanish to English) for PDF and Word files.",
      technologies: [
        "Spring Boot",
        "Google Translation API",
        "Spring Security",
      ],
    },
    {
      title: "NLP with PostgresML",
      href: "#",
      dates: "Ongoing",
      active: true,
      description:
        "Built a natural language processing (NLP) application leveraging PostgresML and Spring Boot for efficient data-driven text analysis and predictions.",
      technologies: ["PostgresML", "Spring Boot"],
      image: "",
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      video: "",
    },
  ],
  achievements: [
    "Solved 100+ Data Structures and Algorithmic problems on LeetCode, GFG, AlgoExpert, and CodingNinjas.",
  ],
} as const;
