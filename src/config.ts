import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://www.chrisbradshaw.net/",
  author: "Chris Bradshaw",
  desc: "Personal website of Chris Bradshaw, New York City based software engineer.",
  title: "Chris Bradshaw: NYC based Software Engineer",
  ogImage:
    "https://res.cloudinary.com/dgxvjwyhm/image/upload/v1675958290/chris-bradshaw.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/chrisbradshaw",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "http://facebook.com/cbradshaw1",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/_chrisbradshaw",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chrisbradshaw3",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:bradshaw.chris@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
