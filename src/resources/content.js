import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Inderjit",
  lastName: "Singh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "inderaulakh032@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Punjabi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Inderaulakh",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/inderjit-singh-50a241200/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning ideas into full-stack web apps</>,
  featured: {
    display: false,
    title: (
      <>
        Recent project: <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Inderjit Singh, a full-stack developer with years of experience. I
      specialise in building sleek, user-friendly interfaces and powerful,
      scalable backend systems. From design to deployment — I take care of the
      entire web development journey.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Versatile Full-Stack Developer with years of hands-on experience
        delivering high-quality, business-ready web applications. Skilled in
        crafting responsive and user-friendly interfaces, as well as building
        robust and scalable backend systems. Proven ability to manage end-to-end
        development workflows — from planning and design to deployment and
        maintenance. Experienced in leading Agile teams as a Scrum Master,
        driving sprint planning, daily standups, and cross-functional
        coordination to ensure timely and efficient delivery. Comfortable
        working in both collaborative and independent environments, including
        remote and freelance settings. Passionate about streamlining development
        processes, integrating automation and AI tools to boost productivity and
        accelerate delivery timelines.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FieldAssist",
        timeframe: "January 2023 - Present",
        role: "Software Developer",
        achievements: [
          <>
            Developing and maintaining modern web applications using Vue.js and
            Nuxt js for internal business tools.
          </>,
          <>
            Building reusable UI components and ensuring responsive,
            cross-browser compatible interfaces.
          </>,
          <>
            Automating internal workflows using AI tools reducing manual
            reporting efforts by 40%. Collaborating with cross functional teams
            for expense tracking and cost optimization strategies.
          </>,
          <>
            Integrating REST APIs for real-time financial data display and
            reporting dashboards.
          </>,
          <>
            Leading sprint ceremonies and acting as Scrum Master to manage
            tasks, track progress, and unblock team members.
          </>,
          <>
            Collaborating with product and finance teams to design features that
            streamline expense tracking and budget forecasting.
          </>,
          <>
            Leading sprint ceremonies and acting as Scrum Master to manage
            tasks, track progress, and unblock team members.
          </>,
          <>
            Writing clean, maintainable code and using Git for version control
            and code reviews.
          </>,
          <>
            Implementing backend services using Node.js for handling business
            logic and data validation.
          </>,
          <>
            Implemented lazy loading, route-based code splitting, and other
            performance optimisations for faster load times.
          </>,
          <>
            Translated Figma/Adobe XD designs into responsive user interfaces
            using Tailwind CSS
          </>,
          <>
            Wrote unit tests and snapshot tests using Jest for key components.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Clerisy Solutions",
        timeframe: "July 2022- December 2022",
        role: "Software Developer Intern",
        achievements: [
          <>
            Assisted in developing and debugging features for web applications
            using HTML, CSS, JavaScript, and React.js and Node js
          </>,
          <>
            Collaborated with senior developers to build responsive UI
            components and fix frontend and backend issues.
          </>,
          <>
            Worked on basic API integration tasks and handled JSON data
            rendering on the frontend
          </>,
          <>
            Worked on DOM manipulation, event handling, and component-based UI
            development.
          </>,
          <>
            Wrote reusable code snippets and contributed to component libraries
            used in multiple projects.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Chandigarh University ",
        description: (
          <>
            Bachelor of Engineering (B.E / B.Tech) – Computer Science
            Engineering
          </>
        ),
      },
      {
        name: "CBSE Board, Delhi ",
        description: <>Senior Secondary (Class 12 – Science Stream)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Next.js and React Js",
        description: <>Building next gen apps with Next.js and Typescript</>,
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-04.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Nuxt js and Vue.js",
        description: <>Building next gen apps with Next.js and Typescript</>,
      },
      {
        title: "Node js and Nest js",
        description: <>Building scalable and optimized Apis</>,
      },
      {
        title: "SQL and NoSQL Databases",
        description: <>Experience with SQL and NoSQL databases</>,
      },
      {
        title: "Tailwind CSS",
        description: <>Building responsive and modern user interfaces</>,
      },
      {
        title: "Git and GitHub",
        description: <>Version control and collaboration on code</>,
      },
      {
        title: "Agile Methodologies",
        description: (
          <>
            Experienced in Agile methodologies, including Scrum, with a focus on
            delivering high-quality software in iterative cycles.
          </>
        ),
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
