export interface Partner {
    id: number | string;
    name: string;
    desc: string;
    subDesc?: string;
    image: string;
    link: string;
    category?: 'product' | 'partner' | 'coming-soon';
  }
  
  // DATA CAROUSEL
  export const carouselItems = [
    {
      id: 1,
      image: "/img/Partner/Collab Partner Room.png",
      link: "#",
      alt: "Collab Partner Room"
    },
    {
      id: 2,
      image: "/img/Partner2/Bantupersediaan.png",
      link: "https://www.instagram.com/p/CheHW0lBcG0/?img_index=2",
      alt: "Bantu Persediaan"
    },
    {
      id: 3,
      image: "/img/Partner2/Berbagiberas.png",
      link: "https://www.instagram.com/p/C5aohe4B6Nd/?img_index=2",
      alt: "Berbagi Beras"
    },
    {
      id: 4,
      image: "/img/Partner2/Berbagiroti.png",
      link: "https://www.instagram.com/p/DGUyG7SyRnF/",
      alt: "Berbagi Roti"
    },
    {
      id: 5,
      image: "/img/content/donasibarang.jpg",
      link: "https://www.instagram.com/p/DRO6fX4kkR9/",
      alt: "Donasi Barang"
    },
  ];
  
  // DATA PARTNERS
  export const partnerItems: Partner[] = [
    {
      id: "hubungi-kami",
      name: "Hubungi Kami",
      desc: "Pasang Iklan di Polimeritas",
      subDesc: "polimeritas group",
      image: "/img/Partner2/Product-Polimeritas.png",
      link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20ingin%20pasang%20iklan%20"
    },
    {
      id: "toko-polimeritas",
      name: "Toko Polimeritas",
      desc: "Pesan Disini",
      subDesc: "polimeritas group",
      image: "/img/Partner2/Toko Polimeritas.jpg",
      link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20ingin%20beli%20bahan sembako%20"
    },
    {
      id: "konsultasi-cv",
      name: "Layanan Konsultasi CV",
      desc: "Pesan Disini",
      subDesc: "polimeritas group",
      image: "/img/Partner2/Konsultasi CV Polimeritas.jpg",
      link: "https://www.instagram.com/infokanorangdalam"
    },
    {
      id: "konsultasi-usaha",
      name: "Layanan Konsultasi Usaha",
      desc: "Pesan Disini",
      subDesc: "polimeritas group",
      image: "/img/Partner2/ukm dan umkm.jpg",
      link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20ingin%20konsultasi Usaha%20"
    },
    {
      id: "482",
      name: "482",
      desc: "Coming Soon",
      subDesc: "Coming Soon",
      image: "/img/Partner2/PasangIklanProdukPolimeritas.jpg",
      link: "https://www.instagram.com/stories/highlights/18050248186951277/"
    },
    {
      id: "481",
      name: "481",
      desc: "Coming Soon",
      subDesc: "Coming Soon",
      image: "/img/Partner2/PasangIklanProdukPolimeritas.jpg",
      link: "https://www.instagram.com/stories/highlights/18050248186951277/"
    },
    {
      id: "480",
      name: "480",
      desc: "Zefa Valindo Jaya",
      subDesc: "Indonesia",
      image: "/img/Partner/zefalindojaya.png",
      link: "https://www.instagram.com/zefavalindojaya/"
    },
    {
      id: "479",
      name: "479",
      desc: "Biomass Resin Holdings",
      subDesc: "Indonesia",
      image: "/img/Partner/resin.png",
      link: "https://www.instagram.com/biomass_resin_holdings/"
    },
    {
      id: "478",
      name: "478",
      desc: "Briket Indonesia",
      subDesc: "Indonesia",
      image: "/img/Partner2/Briket Indonesia.jpg",
      link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20ingin%20beli briket%20"
    },
    {
      id: "477",
      name: "477",
      desc: "Dagangan bu Asrie",
      subDesc: "Online",
      image: "/img/Partner2/Dagangan bu Asrie.jpg",
      link: "https://www.instagram.com/ffeb_riyanti17?igsh=MXdoa3J1dG03Z2lrdQ=="
    },
    {
      id: "476",
      name: "476",
      desc: "Custom Cosplay Eko",
      subDesc: "Tulungagung",
      image: "/img/Partner2/Custom Cosplay Eko.jpg",
      link: "https://www.instagram.com/satya_robot?utm_source=qr&igsh=NGJuZnl6bTJ6eTc1"
    },
    {
      id: "475",
      name: "475",
      desc: "Jilbab Arfa (Mirna)",
      subDesc: "Depok",
      image: "/img/Partner2/reseller jilbab arfa.jpg",
      link: "https://api.whatsapp.com/send?phone=6285719849428&text=Hi%20Polimeritas!%20Saya%20ingin%20beli jilbabnya%20"
    }
  ];