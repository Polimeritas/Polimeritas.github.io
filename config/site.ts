import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SiteConfig {
  name: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
    address: string;
  };
  socials: {
    name: string;
    icon: IconDefinition;
    href: string;
  }[];
  links: {
    volunteer: string;
  };
  navItems: {
    name: string;
    href: string;
  }[];
  gameLinks: {
    name: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Polimeritas",
  description:
    "Komunitas yang bergerak di bidang polymer sains dan teknologi dari hulu hingga produk jadi.",
  contact: {
    email: "polimeritas.official@gmail.com",
    phone: "+6285214991705",
    phoneDisplay: "+62 852-1499-1705",
    address: "Pangkalpinang, Bangka Belitung, Indonesia",
  },
  socials: [
    {
      name: "Facebook",
      icon: faFacebookF,
      href: "https://www.facebook.com/polimeritas.official/",
    },
    {
      name: "LinkedIn",
      icon: faLinkedinIn,
      href: "https://www.linkedin.com/in/polimeritas2018/",
    },
    {
      name: "Instagram",
      icon: faInstagram,
      href: "https://www.instagram.com/polimeritas.official/",
    },
    {
      name: "Youtube",
      icon: faYoutube,
      href: "https://youtu.be/fFBCvaFNq0Y?si=FPrgA7VkiMX2gARD",
    },
  ],

  links: {
    volunteer:
      "https://docs.google.com/forms/d/e/1FAIpQLSdh2xrushDA4S9wnhQjHJxWYNqOVtpqFBYAGauejHlCkROB3A/viewform?pli=1&pli=1&fbzx=2657530912750765225",
  },

  navItems: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Education", href: "/education" },
    { name: "Mentorship", href: "/mentorship" },
    { name: "Partner Room", href: "/partner-room" },
  ],

  gameLinks: [
    { name: "Polymer Sorting Challenge", href: "/game/sorting-game" },
    { name: "Polymer Quiz Challenge", href: "/game/quiz-game" },
    { name: "Polymer Typing Challenge", href: "/game/typing-game" },
    { name: "Polymer Interactive Lab", href: "/game/polymer-lab" },
    { name: "Polymer Match Challenge", href: "/game/match-game" },
  ],
};
