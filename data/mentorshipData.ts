export interface MentorshipItem {
  id: string;
  category: "Konsultasi" | "Pelatihan" | "Sertifikasi";
  title: string;
  image: string;
  link: string;
}

export const mentorshipData: MentorshipItem[] = [
  //TAB KONSULTASI
  {
    id: "kon-1",
    category: "Konsultasi",
    title: "Coming Soon!",
    image: "/img/Partner2/Coming Soon.jpg",
    link: "#",
  },
  {
    id: "kon-2",
    category: "Konsultasi",
    title: "Coming Soon!",
    image: "/img/Partner2/Coming Soon.jpg",
    link: "#",
  },
  {
    id: "kon-3",
    category: "Konsultasi",
    title: "Coming Soon!",
    image: "/img/Partner2/Coming Soon.jpg",
    link: "#",
  },

  //TAB PELATIHAN
  {
    id: "pel-1",
    category: "Pelatihan",
    title: "Coming Soon!",
    image: "/img/Partner2/Coming Soon.jpg",
    link: "#",
  },
  {
    id: "pel-2",
    category: "Pelatihan",
    title: "Coming Soon!",
    image: "/img/Partner2/Coming Soon.jpg",
    link: "#",
  },
  {
    id: "pel-3",
    category: "Pelatihan",
    title: "Coming Soon!",
    image: "/img/Partner2/Coming Soon.jpg",
    link: "#",
  },

  // TAB SERTIFIKASI
  {
    id: "ser-1",
    category: "Sertifikasi",
    title: "Volunteer Polimeritas",
    image: "/img/Partner2/sertifikasi-relawan polimeritas.jpg",
    link: "https://bit.ly/opvolunteerpolimeritas2",
  },
  {
    id: "ser-2",
    category: "Sertifikasi",
    title: "Coming Soon!",
    image: "/img/Partner2/Coming Soon.jpg",
    link: "#",
  },
  {
    id: "ser-3",
    category: "Sertifikasi",
    title: "Coming Soon!",
    image: "/img/Partner2/Coming Soon.jpg",
    link: "#",
  },
];
