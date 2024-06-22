import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,

} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "خانه",
  },
  {
    id: "about",
    title: "درباره ما",
  },
  {
    id: "projects",
    title: "پروژه ها",
  },
  {
    id: "services",
    title: "خدمات",
  },
  {
    id: "testimonials",
    title: "نظرات",
  },
  {
    id: "contact",
    title: "تماس با ما",
  },
];


export const feedback = [
  {
    id: "feedback-1",
    content:
      "این سایت واقعاً عالی است! همیشه به موقع و دقیق به سوالاتم پاسخ داده شده است. طراحی سایت هم بسیار کاربرپسند و جذاب است. از خدمات شما بسیار راضی هستم و به دوستانم نیز پیشنهاد کرده‌ام.👍🏻😍",
    name: " جنیدی",
    title: "موسس ",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "من به تازگی با این سایت آشنا شدم و از کیفیت محتوای ارائه شده بسیار خوشم آمده است. اطلاعات جامع و مفید هستند و کمک بزرگی به من کرده‌اند. از تیم پشتیبانی نیز نهایت تشکر را دارم که همیشه پاسخگو هستند.🌹🌹👌🏻",
    name: " مرادی",
    title: " Designer ",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "این سایت یکی از بهترین منابع آنلاین است که تا به حال دیده‌ام. مطالب به‌روز و کاربردی هستند و استفاده از سایت بسیار راحت است. پشتیبانی عالی و تجربه کاربری فوق‌العاده‌ای دارم. پیشنهاد می‌کنم همه از این سایت استفاده کنند.😍",
    name: " گل‌محمدی",
    title: " Graphic designer",
    img: people03,
  },
];

export const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    image: '/Project1.png', // Corrected to 'image'
    href: "https://foodielove24.netlify.app/",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    image: "/Project2.png",
    href: "https://real-estate-app-fsub.onrender.com/",
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    image: "/Project3.png",
    href: "https://chimerical-sopapillas-8538be.netlify.app/",
  },
  {
    title: "Project 4",
    description: "Description of Project 4",
    image: "/Project4.png",
    href: "https://article-summarizer-ai2.netlify.app/",
  },
  {
    title: "Project 5",
    description: "Description of Project 5",
    image: "/Project5.png",
    href: "https://portfolio-ebrahim-beiatiasl.netlify.app/",
  },
];


export const footerLinks = [
  {
    title: "لینک‌های مفید",
    links: [
      {
        name: "محتوا",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "چگونه کار می‌کند",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "ایجاد کردن",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "کاوش",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "قوانین و خدمات",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "جامعه",
    links: [
      {
        name: "مرکز کمک",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "شرکا",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "پیشنهادات",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "وبلاگ",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "خبرنامه‌ها",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "همکار",
    links: [
      {
        name: "همکار ما",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "شریک شدن",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  //github
  // {
  //   id: "social-media-4",
  //   icon: github,
  //   href: "https://github.com/Web-designanddev",
  // },

  {
    id: "social-media-5",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
