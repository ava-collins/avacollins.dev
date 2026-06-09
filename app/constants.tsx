type mediaimage = {
  type: 'image' | 'video';
  url: string;
  alt?: string;
  title?: string;
};

type workdetail = {
  title: string;
  text: string[];
  media: mediaimage[];
};

export interface WorklistProp {
  name: string;
  description: string;
  image: string;
  details: workdetail[];
}

export const worklist: WorklistProp[] = [
  {
    name: "Expedia",
    description:
      "Expedia is a travel company that provides travel services and products to customers.",
    image: "/work/expedia/logo.png",
    details: [
      {
        title: "Expedia Group Virtual Agent Chat",
        text: [
          `The Conversational Experiences Platform manages white-label Virtual Agent Chat AI integrations for Expedia brands. The VAC can handle common customer requests and answer internal questions for human agents during support sessions. Brands can customize capabilities using internal tools and configurations.`,
          `My initiatives supported internal brands by investigating issues using APM tools to identify and trace requests across the distributed system. After each investigation, metrics reports were shared with remediation recommendations for various teams across different organizations and time zones.`,
        ],
        media: [
          {
            type: "image",
            url: "/work/expedia/expediaVAC.png",
            alt: "Screenshot of Expedia's Virtual Agent Chat interface.",
          },
        ],
      },
    ],
  },
  {
    name: "Porch",
    description:
      "Porch is a home services platform that connects homeowners with quality home improvement professionals.",
    image: "/work/porch/logo.png",
    details: [
      {
        title: "Porch Group & Inspection Support Network Mobile Apps",
        text: [
          `Served as a catalyst for Porch Group’s growth by establishing the groundwork for two mobile development teams proficient in React to jump-start two React Native applications.`,
          `Initially overseeing the engineering efforts for both apps simultaneously, I walked both teams through setting up development environments and assessing critical launch components to encourage existing customers to use the new applications.`,
          `My time was divided between scrum master responsibilities, DevOps, writing code, and reviewing code.`,
        ],
        media: [
          {
            type: "image",
            url: "/work/porch/isn-app.jpg",
            alt: "Mobile app screenshots for Porch Group and Inspection Support Network.",
          },
        ],
      },
    ],
  },
  {
    name: "Sansar",
    description:
      "Sansar is a social virtual reality platform that allows users to create, share, and monetize their own VR experiences.",
    image: "/work/sansar/logo.png",
    details: [
      {
        title: "Sansar Virtual Reality Platform",
        text: [
          `Linden Lab, a pioneer in virtual worlds, endeavored to build a platform for creating and monetizing 3D content called Project Sansar. I spent four years growing as a developer and a human while helping to grow Sansar as a ‘place’ to be. Campfires, concerts, games, classrooms, businesses and hackers, nothing will ever compare. I hold so much gratitude for the investors who allowed artists and scientists to lead and build this incredibly ahead-of-its-time platform and for my coworkers who united around a common goal. It was truly an amazing team to be a part of.`,
        ],
        media: [
          {
            type: "image",
            url: "/work/sansar/homepage-evolution.png",
            alt: "Screenshot montage showing the evolution of Sansar's homepage.",
          },
        ],
      },
      {
        title: "Sansar Web",
        text: [
          `I primarily contributed to the web frontend of Sansar. As one of five web engineers, I helped bring to life pre-launch marketing and supporting applications for accessing the game through beta and launch.`,
          `Sansar’s web was built using microservices for user account management, the web store, and the game atlas. We designed a modular UI library of themed components shared across different frontend applications in a federated system.`,
          `Once the web was templatized, the team cross-trained. Our microservice architecture allowed for easily spinning up new apps using scripts and Docker configurations.`,
        ],
        media: [
          {
            type: "image",
            url: "/work/sansar/atlas3.jpg",
            alt: "Screenshot of the Sansar web atlas experience browser.",
          },
        ],
      },
      {
        title: "Sansar Game UI",
        text: [
          `The Sansar game engine, built for Windows and written in C++, used XAML through Noesis to create a highly performant UI. However, this resulted in a time-consuming process for small teams, as building a new panel layout took about the same time as solving complex engine issues.`,
          `I was given a chance to work on the game code’s UI. XAML was easy to grasp, but learning C++ and its compiler tools was challenging. I received dedicated mentorship and over the course of one year we were able to implement UI initiatives that would have been otherwise shelved due to resource constraints.`,
        ],
        media: [
          {
            type: "video",
            url: "https://www.youtube.com/embed/VQAbuIJW-kg",
            title: "Sansar Client Marketplace",
          },
          {
            type: "video",
            url: "https://www.youtube.com/embed/3n4i3Ivnoo4",
            title: "Sansar Chat UI",
          },
          {
            type: "video",
            url: "https://www.youtube.com/embed/Ow80IEhEgMQ",
            title: "Sansar Quest UI",
          },
        ],
      },
      {
        title: "Sansar Mobile",
        text: [
          `Sansar Mobile was an extension of the Sansar virtual events platform, adding the ability to view events from iPhone and Android. Our first show was part of the renowned Glastonbury concert series in England. The 2020 Shangri-La festival went full virtual reality for Lost Horizon shows, with artists performing via avatars in Sansar to a live virtual audience.`,
          `The event was extravagant. Custom stages were built to replicate the outdoor experience, state-of-the-art image capture technology was used to stream performers, and every detail was professionally crafted to AAA game quality. Merchandise, coined ‘Verch’, was designed and sold to concertgoers through the store, injecting earnings into resident wallets and introducing a whole new audience to the platform. It was rumored that Fatboy Slim was hanging out on the dance floor completely anonymously, enjoying himself as much as everyone else.`,
          `Unfortunately this event would be the last of such proportions under Linden Lab. The high cost of production and maintenance was not sustainable as the barrier to entry for VR hardware remained high and the number of daily active users remained low.`,
        ],
        media: [
          {
            type: "image",
            url: "/work/sansar/iphone-screenshots.jpg",
            alt: "iPhone screenshots of the Sansar mobile events experience.",
          },
          {
            type: "image",
            url: "/work/sansar/ticket_test.jpg",
            alt: "Sansar virtual event ticket artwork for Lost Horizon.",
          },
        ],
      },
    ],
  },
  {
    name: "Apollo",
    description:
      "Apollo Education Group, Inc. is an American corporation that owns several for-profit educational institutions.",
    image: "/work/apollo/logo.png",
    details: [
      {
        title: "Apollo Education Career Bootcamp",
        text: [
          `Apollo Education Group was a small SaaS company acquired by University of Phoenix to build educational software products for their students. I worked on a small team of three engineers, using Angular and D3 JavaScript frameworks to build highly interactive animations and data visualizations.`,
          `Career Bootcamp was a multi-tenant web application that helped students get their careers started after graduation. Through a series of interactive exercises, job-seeking skills were taught in a video series and supplemented with written articles and online tasks completed on the LinkedIn platform to build a profile and resume. Analytics were added to the application and its third-party integrations to measure success rates as applicants searched for new jobs.`,
        ],
        media: [
          {
            type: "image",
            url: "/work/apollo/careerbootcamp.png",
            alt: "Screenshot of the Apollo Education Career Bootcamp web application.",
          },
        ],
      },
    ],
  },
  {
    name: "Amazon",
    description:
      "Amazon is an American multinational technology company that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    image: "/work/amazon/logo.png",
    details: [
      {
        title: "Amazon Creative Services",
        text: [
          `The Amazon Creative Services team improved the look and feel of the amazon.com retail store and patented UX patterns, such as mega dropdowns, that are now commonplace on retail websites.`,
          `As a team member, I assisted UX designers in demonstrating rapid prototyping of dynamic widgets that pulled live data from the recommendations engine. The widgets were designed assuming dynamic backend data for user choices and product browsing, but the data was actually static upon page load. To address this, we hacked an AJAX proxy page via CMS to expose internal APIs by converting Perl query responses into JSON text on a page. This was before the fetch API was added to browsers, and asynchronous activity was more laborious to achieve. However, trusted iframes and JSON-formatted text were easy to grab from the DOM and parse into plain JavaScript to make dynamic widgets that required no page reloads.`,
        ],
        media: [
          {
            type: "image",
            url: "/work/amazon/homepage.png",
            alt: "Screenshot of an Amazon homepage retail experience.",
          },
        ],
      },
    ],
  },
  {
    name: "Nordstrom",
    description: "Nordstrom is an American luxury department store chain.",
    image: "/work/nordstrom/logo.png",
    details: [
      {
        title: "Nordstrom Online",
        text: [
          `Supported the Nordstrom frontend by developing interactive shopping experiences that enhanced the overall user experience. Collaborated closely with the UX team to conduct usability tests and other data-driven feedback mechanisms to ensure that features were vetted thoroughly.`,
        ],
        media: [
          {
            type: "image",
            url: "/work/nordstrom/view-all.png",
            alt: "Screenshot of a Nordstrom online shopping interface.",
          },
        ],
      },
    ],
  },
  {
    name: "Disney",
    description:
      "The Walt Disney Company, commonly known as Disney, is an American diversified multinational mass media and entertainment conglomerate.",
    image: "/work/disney/logo.png",
    details: [
      {
        title: "Disney Interactive",
        text: [
          `Disney Interactive produced the children’s video games Club Penguin and Pixie Hollow. These were multiplayer online games for children that allowed interactivity with other players while maintaining communication barriers to safeguard personal information and protect minors from harassment or vulgar language.`,
          `I worked on features like the "Disney Like Button" and “Disney Social Chat” to create embeddable XMPP widgets that could be used across Disney websites, allowing kids to participate in an online social network inside protected games like Club Penguin.`,
        ],
        media: [
          {
            type: "image",
            url: "/work/disney/disney-chat.png",
            alt: "Screenshot of Disney Social Chat interface components.",
          },
        ],
      },
    ],
  },
  {
    name: "Real Networks",
    description:
      "RealNetworks is a provider of Internet streaming media delivery software and services based in Seattle, Washington, United States.",
    image: "/work/realnetworks/logo.png",
    details: [
      {
        title: "Real Networks Superpass",
        text: [
          `RealNetworks is legendary in internet history for bringing video to the web via RealPlayer.`,
          `My first role as a ‘real’ web developer (pun intended) was maintaining the frontend of the real.com flagship website. After some time, I was promoted to the SuperPass team as one of a handful of web developers responsible for streaming the CBS Big Brother Live Feeds online via RealPlayer.`,
        ],
        media: [
          {
            type: "image",
            url: "/work/realnetworks/superpassscreen.png",
            alt: "Screenshot of the RealNetworks SuperPass website.",
          },
        ],
      },
    ],
  },
];

export const playlist = [
  {
    title: "PLAY",
    name: "Tarot",
    description: "Tarot is a card game that is played with a deck of 78 cards.",
    image: "/play/tarot/logo.png",
    link: "/play/tarot",
  },
  {
    name: "Sansar Scripts",
    description:
      "Sansar Scripts is a C# scripting language for creating interactive experiences in Sansar.",
    image: "/work/sansar/logo.png",
    link: "/play/sansar-scripts",
  },
];
