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
  },
  {
    id: "474",
    name: "474",
    desc: "Jasuke Leon",
    subDesc: "Jakarta",
    image: "/img/Partner2/jasuke leon.jpg",
    link: "https://www.instagram.com/reel/DIs15N_SWor/"
  },
  {
    id: "473",
    name: "473",
    desc: "Dirham Antam",
    subDesc: "Indonesia",
    image: "/img/Partner2/Dirham Antam.jpg",
    link: "https://s.shopee.co.id/1B8z7reTjt"
  },
  {
    id: "472",
    name: "472",
    desc: "Emas Antam",
    subDesc: "Indonesia",
    image: "/img/Partner2/Emas Antam.jpg",
    link: "https://s.shopee.co.id/3VX0IhqzaB"
  },
  {
    id: "471",
    name: "471",
    desc: "Nasi Kuning Mba Selvi",
    subDesc: "Indonesia",
    image: "/img/Partner2/Nasi Kuning Mba Silvi.jpg",
    link: "https://www.instagram.com/p/DIYgkh9SsMf/"
  },
  {
    id: "470",
    name: "470",
    desc: "LuminousStar23",
    subDesc: "Indonesia",
    image: "/img/Partner2/rasistar23.jpg",
    link: "https://www.instagram.com/luminousstar23"
  },
  {
    id: "469",
    name: "469",
    desc: "Ketapang Manis - Ecoprint",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/ketapang manis ecoprint.jpg",
    link: "https://www.instagram.com/apriaminandar1604/"
  },
  {
    id: "468",
    name: "468",
    desc: "Kopiah Wadimor",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kopiah Wadimor.jpg",
    link: "https://api.whatsapp.com/send?phone=6289517860414&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Kopiah Wadimor%20"
  },
  {
    id: "467",
    name: "467",
    desc: "Roti Bangdo",
    subDesc: "Indonesia",
    image: "/img/Partner2/Berbagi Roti Bareng BangDoIndonesia.jpg",
    link: "https://www.instagram.com/p/DGUyG7SyRnF/"
  },
  {
    id: "466",
    name: "466",
    desc: "Nanaaa Story",
    subDesc: "Indonesia",
    image: "/img/Partner2/Nanaaa Story.jpg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Nanaaa Story%20"
  },
  {
    id: "465",
    name: "465",
    desc: "Kinrose Craft Ecoprint",
    subDesc: "Jakarta",
    image: "/img/Partner2/kinrose.jpg",
    link: "https://www.instagram.com/kinrosecraft/"
  },
  {
    id: "464",
    name: "464",
    desc: "Buah Srikaya",
    subDesc: "Indonesia",
    image: "/img/Partner2/Buah Srikaya.jpg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Buah Srikaya%20"
  },
  {
    id: "463",
    name: "463",
    desc: "Buah Srikaya Merah",
    subDesc: "Indonesia",
    image: "/img/Partner2/Buah Srikaya Merah.jpg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Buah Srikaya Merah%20"
  },
  {
    id: "462",
    name: "462",
    desc: "Cocopeat Block",
    subDesc: "Indonesia",
    image: "/img/Partner2/COCOPEAT BLOCK.jpg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20COCOPEAT BLOCK%20"
  },
  {
    id: "461",
    name: "461",
    desc: "Drone Sprayer",
    subDesc: "Indonesia",
    image: "/img/Partner2/DRONE SPRAYER.jpg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Drone Sprayer%20"
  },
  {
    id: "460",
    name: "460",
    desc: "White Long Sleeve",
    subDesc: "Jakarta",
    image: "/img/Partner2/White Long Sleeve T-Shirt.jpg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20White Long Sleeve%20"
  },
  {
    id: "459",
    name: "459",
    desc: "Long Sleeve T-Shirt",
    subDesc: "Jakarta",
    image: "/img/Partner2/Long Sleeve T-Shirt.jpg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Long Sleeve T-Shirt%20"
  },
  {
    id: "458",
    name: "458",
    desc: "Black Hooded Long Sleeve",
    subDesc: "Jakarta",
    image: "/img/Partner2/Black Hooded Long Sleeve.jpg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Black Hooded Long Sleeve%20"
  },
  {
    id: "457",
    name: "457",
    desc: "Bedcover",
    subDesc: "Jabodetabek",
    image: "/img/Partner2/Bedcover.jpg",
    link: "https://s.shopee.co.id/1LRAitcNWj"
  },
  {
    id: "456",
    name: "456",
    desc: "Polymailer",
    subDesc: "Jabodetabek",
    image: "/img/Partner2/Polymailer.jpg",
    link: "https://s.shopee.co.id/3q8VhVNiJa"
  },
  {
    id: "455",
    name: "455",
    desc: "Kotak Parcel Seserahan",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kotak Parcel Seserahan.jpg",
    link: "https://s.shopee.co.id/9f6IeFMpIP"
  },
  {
    id: "454",
    name: "454",
    desc: "Selotip Bening",
    subDesc: "Jabodetabek",
    image: "/img/Partner2/Selotip Bening.jpg",
    link: "https://s.shopee.co.id/7peeSvkbaQ"
  },
  {
    id: "453",
    name: "453",
    desc: "Hampers Natal",
    subDesc: "Jabodetabek",
    image: "/img/Partner2/Hampers Natal.jpg",
    link: "https://s.shopee.co.id/9pPiqaM0ER"
  },
  {
    id: "452",
    name: "452",
    desc: "Amplop Lebaran",
    subDesc: "Jabodetabek",
    image: "/img/Partner2/Amplop Lebaran.jpg",
    link: "https://s.shopee.co.id/60D0HWniZ6"
  },
  {
    id: "451",
    name: "451",
    desc: "Benih Cabai Cabe Keriting Merah Hibrida TM 999 Tani Murni Indonesia",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Benih Cabai Cabe Keriting Merah Hibrida TM 999 Tani Murni Indonesia.jpg",
    link: "https://s.shopee.co.id/6AWQ92PEny"
  },
  {
    id: "450",
    name: "450",
    desc: "PROBIOTIK ORGANIK KARET",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/PROBIOTIK ORGANIK KARET.jpg",
    link: "https://s.shopee.co.id/3AsoZZ8ZE7"
  },
  {
    id: "449",
    name: "449",
    desc: "AGRI SAWIT - PUPUK ORGANIK UNTUK TANAMAN SAWIT",
    subDesc: "Indonesia",
    image: "/img/Partner2/AGRI SAWIT - PUPUK ORGANIK UNTUK TANAMAN SAWIT.jpg",
    link: "https://s.shopee.co.id/8UuKvOzy2T"
  },
  {
    id: "448",
    name: "448",
    desc: "Rhode Skin",
    subDesc: "Jabodetabek",
    image: "/img/Partner2/Rhode Skin.png",
    link: "https://s.shopee.co.id/2fwXykYikr"
  },
  {
    id: "447",
    name: "447",
    desc: "Cromboloni Viral",
    subDesc: "Jabodetabek",
    image: "/img/Partner2/Cromboloni.png",
    link: "https://s.shopee.co.id/4fhcMhjshy"
  },
  {
    id: "446",
    name: "446",
    desc: "Cold Milk Bun Thailand",
    subDesc: "Jabodetabek",
    image: "/img/Partner2/Cold Milk Bun Thailand.jpg",
    link: "https://s.shopee.co.id/9KTRvIfSdh"
  },
  {
    id: "445",
    name: "445",
    desc: "Cokelat Dubai",
    subDesc: "Jabodetabek",
    image: "/img/Partner2/Cokelat Dubai.jpg",
    link: "https://s.shopee.co.id/8UuKx56YmR"
  },
  {
    id: "444",
    name: "444",
    desc: "Ampiang Empiang Bangka",
    subDesc: "Pangkalpinang",
    image: "/img/Partner2/Ampiang Empiang Bangka.jpg",
    link: "https://s.shopee.co.id/3fp5CESgo0"
  },
  {
    id: "443",
    name: "443",
    desc: "Dodol Durian Bangka Cap Alip",
    subDesc: "Pangkalpinang",
    image: "/img/Partner2/Dodol Durian Bangka-Cap Alip.jpeg",
    link: "https://s.shopee.co.id/8UuKx8DwQS"
  },
  {
    id: "442",
    name: "442",
    desc: "KEMPLANG PANGGANG BANGKA CAP MM",
    subDesc: "Pangkalpinang",
    image: "/img/Partner2/KEMPLANG PANGGANG BANGKA CAP MM.jpeg",
    link: "https://s.shopee.co.id/9pPiXbHXIB"
  },
  {
    id: "441",
    name: "441",
    desc: "Kue Pia Nanas Bangka",
    subDesc: "Pangkalpinang",
    image: "/img/Partner2/Kue Pia Nanas Bangka.jpeg",
    link: "https://s.shopee.co.id/LYdE9wB8d"
  },
  {
    id: "440",
    name: "440",
    desc: "Bumbu Lempah Darat",
    subDesc: "Pangkalpinang",
    image: "/img/Partner2/Bumbu Lempah Darat.jpg",
    link: "https://s.shopee.co.id/10oK1PWHga"
  },
  {
    id: "439",
    name: "439",
    desc: "Bumbu Lempah Kuning",
    subDesc: "Pangkalpinang",
    image: "/img/Partner2/Bumbu Lempah Kuning.jpeg",
    link: "https://s.shopee.co.id/6pm6yElfCL"
  },
  {
    id: "438",
    name: "438",
    desc: "Kopi Kingkong Bangka",
    subDesc: "Pangkalpinang",
    image: "/img/Partner2/Kopi Kingkong Bangka.jpg",
    link: "https://s.shopee.co.id/8Kaul1RKM7"
  },
  {
    id: "437",
    name: "437",
    desc: "Sambel Pecel",
    subDesc: "Blitar-Jatim",
    image: "/img/Partner2/Sambel Pecel-Balqis.jpg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Sambel Pecel%20"
  },
  {
    id: "436",
    name: "436",
    desc: "Superior Supply",
    subDesc: "Bandung",
    image: "/img/Partner2/Superior Supply.jpeg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Superior Supply%20"
  },
  {
    id: "435",
    name: "435",
    desc: "Lu Li Hortifulli Hampers by ESC",
    subDesc: "Jabodetabek",
    image: "/img/Partner2/Lu Li Hortifulli Hampers by ESC.png",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Hampers%20"
  },
  {
    id: "434",
    name: "434",
    desc: "Miniatur Gerobak dan Jok",
    subDesc: "Bandung",
    image: "/img/Partner2/jokracing.jpg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Jok Racing%20"
  },
  {
    id: "433",
    name: "433",
    desc: "Magot",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/magot.png",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Magot%20"
  },
  {
    id: "432",
    name: "432",
    desc: "Kitaolah-Biji Plastik Bekas",
    subDesc: "Bekasi",
    image: "/img/Partner2/biji plastik bekas.jpg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Biji Plastik Bekas%20"
  },
  {
    id: "431",
    name: "431",
    desc: "Kitaolah-Flakes Plastik Bekas",
    subDesc: "Bekasi",
    image: "/img/Partner2/flakes plastik bekas.png",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Flakes Plastik Bekas%20"
  },
  {
    id: "430",
    name: "430",
    desc: "Freenbecky Accessories",
    subDesc: "Jakarta",
    image: "/img/Partner2/Freenbecky.png",
    link: "https://s.shopee.co.id/gBrW2moK2"
  },
  {
    id: "429",
    name: "429",
    desc: "Handmade Rajutan",
    subDesc: "Jakarta",
    image: "/img/Partner2/Handmade Rajutan.jpg",
    link: "https://www.instagram.com/orionrigel_handmade"
  },
  {
    id: "428",
    name: "428",
    desc: "Bunga Mawar PLastik 1 Batang",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/Bunga Mawar Plastik.jpeg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Bunga Mawar Plastik%20"
  },
  {
    id: "427",
    name: "427",
    desc: "Madu Manis Asli Bangka",
    subDesc: "Bangka Belitung 10 Terjual",
    image: "/img/Partner2/Madu Asli Bangka.png.jpg",
    link: "https://api.whatsapp.com/send/?phone=6282181998055&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Madu Asli Bangka%20"
  },
  {
    id: "426",
    name: "426",
    desc: "Home Made Polimeritas",
    subDesc: "Bangka Belitung 5 Terjual",
    image: "/img/Partner2/Home Made Polimeritas.png",
    link: "https://s.shopee.co.id/5fasIykwpt"
  },
  {
    id: "425",
    name: "425",
    desc: "Pakan Bebek/Unggas",
    subDesc: "Jakarta Pusat",
    image: "/img/Partner2/Ampas Kelapa.jpg",
    link: "https://s.shopee.co.id/Vsm9X7Sei"
  },
  {
    id: "424",
    name: "424",
    desc: "Kelapa Muda Bangka",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/Kelapa Muda Bangka.png",
    link: "https://s.shopee.co.id/6VA0drWZEC"
  },
  {
    id: "423",
    name: "423",
    desc: "Ayu Catering BangkaBangka Belitung",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/Ayu Catering.png",
    link: "https://api.whatsapp.com/send/?phone=6281373774588&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20Catering%20"
  },
  {
    id: "422",
    name: "422",
    desc: "Tas Selempang",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/Tas Selempang.png.jpg",
    link: "https://api.whatsapp.com/send/?phone=6281373774588&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20Tas Selempang%20"
  },
  {
    id: "421",
    name: "421",
    desc: "Jasa Joki Mobile Legend",
    subDesc: "Indonesia  3 Terjual",
    image: "/img/Partner2/Jasa Joki Mobile Legend.png",
    link: "https://api.whatsapp.com/send/?phone=6281274465152&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20Jasa Joki Mobile Legend%20"
  },
  {
    id: "420",
    name: "420",
    desc: "Motor Second",
    subDesc: "Bangka Belitung 1 Terjual",
    image: "/img/Partner2/Motor Second Polimeritas.png",
    link: "https://api.whatsapp.com/send/?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20Motor Second Polimeritas%20"
  },
  {
    id: "419",
    name: "419",
    desc: "Komik SecondJakarta Timur",
    subDesc: "Jakarta Timur",
    image: "/img/Partner2/Komik Second Jakarta.jpg",
    link: "https://api.whatsapp.com/send/?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20Komik Second Jakarta%20"
  },
  {
    id: "418",
    name: "418",
    desc: "Wardah Aluminium",
    subDesc: "Gunungsitoli, Nias,Sumut",
    image: "/img/Partner2/Wardah Aluminium.png",
    link: "https://api.whatsapp.com/send/?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20Wardah Aluminium%20"
  },
  {
    id: "417",
    name: "417",
    desc: "Buah Segar",
    subDesc: "Bangka Belitung 50 Terjual",
    image: "/img/Partner2/Buah Segar.png",
    link: "https://api.whatsapp.com/send/?phone=6282181998055&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20Buah Segar%20"
  },
  {
    id: "416",
    name: "416",
    desc: "Akar Sekentut",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/Akar Sekentut.png",
    link: "https://api.whatsapp.com/send/?phone=6282181998055&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20Akar Sekentut%20"
  },
  {
    id: "415",
    name: "415",
    desc: "Jual dan Sewa Tanaman HiasBangka Belitung",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/Jual dan Sewa Tanaman Hias.png",
    link: "https://api.whatsapp.com/send/?phone=6282181998055&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20Jual dan Sewa Tanaman Hias%20"
  },
  {
    id: "414",
    name: "414",
    desc: "Jual Pulsa, Token, TOP UP",
    subDesc: "Bangka Belitung 100 Terjual",
    image: "/img/Partner2/Jual Pulsa dan Token.png",
    link: "https://api.whatsapp.com/send/?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20Jual Pulsa dan Token%20"
  },
  {
    id: "413",
    name: "413",
    desc: "Afro Farm",
    subDesc: "NTT",
    image: "/img/Partner2/Afro Farm NTT 03.jpeg",
    link: "https://api.whatsapp.com/send/?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20ayam%20"
  },
  {
    id: "412",
    name: "412",
    desc: "Kiseki Official Store",
    subDesc: "Jakarta",
    image: "/img/Partner2/Kiseki PSC Foto Produk 01.jpg",
    link: "https://api.whatsapp.com/send/?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20Frozen Food%20"
  },
  {
    id: "411",
    name: "411",
    desc: "Keripik EbiBangka Belitung",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/kribiQu.png",
    link: "https://api.whatsapp.com/send/?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20Keripik Ebi%20"
  },
  {
    id: "410",
    name: "410",
    desc: "Jasa UI UX Designer",
    subDesc: "Remote",
    image: "/img/Partner2/Jasa UI_UX Designer.png",
    link: "https://api.whatsapp.com/send/?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20Jasa UI/UX Design%20"
  },
  {
    id: "409",
    name: "409",
    desc: "Stok Minuman (Soft Drink)",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/Stok Minuman.jpg",
    link: "https://api.whatsapp.com/send/?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20Minuman Dus%20"
  },
  {
    id: "408",
    name: "408",
    desc: "TERASI/BELACAN BANGKA ASLI (225GRAM)",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/TERASI BELACAN BANGKA ASLI.png",
    link: "https://api.whatsapp.com/send/?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20TERASI/BELACAN BANGKA ASLI (225GRAM)%20"
  },
  {
    id: "407",
    name: "407",
    desc: "Bio Straw - Sedotan Ramah Lingkungan Bahan Rumput PurunBangka Belitung",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/Bio Straw - Sedotan Ramah Lingkungan Bahan Rumput Purun.jpg",
    link: "https://api.whatsapp.com/send/?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20pesan%20Bio Straw - Sedotan Ramah Lingkungan Bahan Rumput Purun%20"
  },
  {
    id: "406",
    name: "406",
    desc: "100 gr MUNTOK WHITE PEPPER / LADA PUTIH BANGKABangka Belitung",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/100 gr MUNTOK WHITE PEPPER - LADA PUTIH BANGKA.png",
    link: "https://s.shopee.co.id/9AAloqpfsh"
  },
  {
    id: "405",
    name: "405",
    desc: "Asam jawa bangka 500 gr",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/asam jawa bangka 500 gr.jpg",
    link: "https://s.shopee.co.id/3LCysAF3pr"
  },
  {
    id: "404",
    name: "404",
    desc: "Gula Kabung Kabung Asli Bangka 500 Gram",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/Gula Kabung Kabung Asli Bangka 500 Gram.jpeg",
    link: "https://s.shopee.co.id/1qOB5Rt5ms"
  },
  {
    id: "403",
    name: "403",
    desc: "Manggo Seeds - African",
    subDesc: "Bangka Belitung 1 Terjual",
    image: "/img/Partner2/Manggo Seeds- African.png",
    link: "https://s.shopee.co.id/wAiQKYIW"
  },
  {
    id: "402",
    name: "402",
    desc: "Sorgum KD4",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/Sorgum KD4.png",
    link: "https://s.shopee.co.id/4Am5roDSc8"
  },
  {
    id: "401",
    name: "401",
    desc: "Kerupuk Bangka",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/Kerupuk Bangka DN.png",
    link: "https://s.shopee.co.id/2B11UAXOfW"
  },
  {
    id: "400",
    name: "400",
    desc: "Holder\n                                                                                    Spatula\n                                                                                    Rak",
    subDesc: "Waiting",
    image: "/img/Partner2/400.png",
    link: "https://s.shopee.co.id/8fEVEFrkSu"
  },
  {
    id: "399",
    name: "399",
    desc: "Manggo Seeds - African",
    subDesc: "Bangka Belitung 1 Terjual",
    image: "/img/Partner2/Manggo Seeds- African.png",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Manggo Seeds- African%20"
  },
  {
    id: "399",
    name: "399",
    desc: "Wallpaper dinding VINYL Marble 30 x 60 cm",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/399.png",
    link: "https://vt.tiktok.com/ZSYkqgGVL/?page=Mall"
  },
  {
    id: "398",
    name: "398",
    desc: "Happy Hop 9021 Jumping Castle 13 in 1",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/399-380/Happy Hop 9021 Jumping Castle 13 in 1.png",
    link: "https://vt.tiktok.com/ZSYkqgGVL/?page=Mall"
  },
  {
    id: "397",
    name: "397",
    desc: "Panci Listrik Panci Elektrik",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/399-380/PANCI LISTRIK PANCI ELEKTRIK_.png",
    link: "https://s.shopee.co.id/5Ae39lP8Cp"
  },
  {
    id: "396",
    name: "396",
    desc: "Han River Uv Vacuum Cleaner Cordless",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/399-380/HAN RIVER UV Vacuum Cleaner Cordless_.png",
    link: "https://s.shopee.co.id/vx0FnXFr"
  },
  {
    id: "395",
    name: "395",
    desc: "Shoes Roller Slide Led- Sepatu Premium",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/399-380/Shoes Roller Slide LED- Sepatu Premium.png",
    link: "https://vt.tiktok.com/ZSYkqgGVL/?page=Mall"
  },
  {
    id: "394",
    name: "394",
    desc: "Jepit Rambut Korea Jedai Kupu Love",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/399-380/Jepit rambut korea jedai kupu love_.png",
    link: "https://s.shopee.co.id/40S5la8S0o"
  },
  {
    id: "393",
    name: "393",
    desc: "Kasur Busa Latex, Matras Busa Latex",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/393.jpg",
    link: "https://s.shopee.co.id/7zyEWv724m"
  },
  {
    id: "392",
    name: "392",
    desc: "Tumitku Mengatasi Kaki Pecah",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/392.jpg",
    link: "https://s.shopee.co.id/LYnOosQat"
  },
  {
    id: "391",
    name: "391",
    desc: "Sepatu Wanita Converse Heel De Luxe",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/391.jpg",
    link: "https://s.shopee.co.id/1g4AzG4bB4"
  },
  {
    id: "390",
    name: "390",
    desc: "Hc Bola Pembersih Pakaian Alat Pembersih",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/390.jpg",
    link: "https://s.shopee.co.id/AKM9JAYHgX"
  },
  {
    id: "389",
    name: "389",
    desc: "Rak Sudut Kamar Mandi Tempel Dinding",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/389.jpg",
    link: "https://s.shopee.co.id/4fhmYjPX0r"
  },
  {
    id: "388",
    name: "388",
    desc: "Onemed Alk 902 Kursi Roda Transfer One",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/388.jpg",
    link: "https://s.shopee.co.id/8fDvK4Nq1p"
  },
  {
    id: "387",
    name: "387",
    desc: "Semprotan Air Lurus Kuningan Hose",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/387.jpg",
    link: "https://s.shopee.co.id/4q1CkzQWNr"
  },
  {
    id: "386",
    name: "386",
    desc: "Sticker Dinding Kamar Mandi Wallpaper",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/386.jpg",
    link: "https://s.shopee.co.id/AKM9J5QxFM"
  },
  {
    id: "385",
    name: "385",
    desc: "Teko Pitcher Teh Chinese Teapot Glass",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/385.jpg",
    link: "https://s.shopee.co.id/7zyEWmwRj0"
  },
  {
    id: "384",
    name: "384",
    desc: "Tg-Dg218 Taffled Lampu Tidur 3D Printed",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/384.jpg",
    link: "https://s.shopee.co.id/1B7uODj8b4"
  },
  {
    id: "383",
    name: "383",
    desc: "Divipard Keyboard Plus Mouse Wireless_",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/383.jpg",
    link: "https://s.shopee.co.id/20h1Njc6i5"
  },
  {
    id: "382",
    name: "382",
    desc: "Alat Pembuat Mie Sehat Otomatis",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/382.jpg",
    link: "https://s.shopee.co.id/50KcxDrH25"
  },
  {
    id: "381",
    name: "381",
    desc: "Alat Peras Buah V-Z1 / Manual Juice Pres",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/381.jpg",
    link: "https://s.shopee.co.id/6Kq0Xes25N"
  },
  {
    id: "380",
    name: "380",
    desc: "Okiterus21 Squishy Dino Soft Slow",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/380.jpg",
    link: "https://s.shopee.co.id/60DA91xYW8"
  },
  {
    id: "379",
    name: "379",
    desc: "Gel Pembersih Celah Interior Mobil",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/379.png",
    link: "https://s.shopee.co.id/8fDvJurray"
  },
  {
    id: "378",
    name: "378",
    desc: "Selimut Bedong Bayi Bulu Tebal Karakter",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/378.png",
    link: "https://s.shopee.co.id/5ptjwhCCGh"
  },
  {
    id: "377",
    name: "377",
    desc: "Mainan Anak Bebek Pingguin",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/377.png",
    link: "https://s.shopee.co.id/1B7uO6huRN"
  },
  {
    id: "377",
    name: "377",
    desc: "Mainan Anak Bebek Pingguin",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/377.png",
    link: "https://s.shopee.co.id/1B7uO6huRN"
  },
  {
    id: "376",
    name: "376",
    desc: "Han River Rice Cooker Mini 0.8L",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/376.jpg",
    link: "https://s.shopee.co.id/8zqliUMKTw"
  },
  {
    id: "376",
    name: "376",
    desc: "Han River Rice Cooker Mini 0.8L",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/376.jpg",
    link: "https://s.shopee.co.id/8zqliUMKTw"
  },
  {
    id: "375",
    name: "375",
    desc: "Kotak Penyimpanan Lipat Storage Box",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/375.png",
    link: "https://s.shopee.co.id/3LCOy40rpL"
  },
  {
    id: "374",
    name: "374",
    desc: "Loztoys Nano Block Karakter Kartun",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/374.png",
    link: "https://s.shopee.co.id/4AlVxaEsAG"
  },
  {
    id: "313",
    name: "313",
    desc: "Disney Cinderella Lucifer Cat Plush",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/313.jpg",
    link: "https://vt.tiktok.com/ZSYkqgGVL/?page=Mall"
  },
  {
    id: "312",
    name: "312",
    desc: "Coming Soon",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/312.jpg",
    link: "https://vt.tiktok.com/ZSYkqgGVL/?page=Mall"
  },
  {
    id: "311",
    name: "311",
    desc: "Magic Hanger / Gantungan Baju Lipat",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/311.jpg",
    link: "https://s.shopee.co.id/3q8fXVIWna"
  },
  {
    id: "310",
    name: "310",
    desc: "Rox Lampu Kipas Angin Plafon Oskilasi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/310.jpg",
    link: "https://vt.tiktok.com/ZSYkqgGVL/?page=Mall"
  },
  {
    id: "309",
    name: "309",
    desc: "Oppo ( Ceramic Spy ) Matte Full Cover",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/309.jpg",
    link: "https://s.shopee.co.id/705hJI2XMx"
  },
  {
    id: "308",
    name: "308",
    desc: "Wrap Plastik Pelindung Makanan Warpr",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/308.jpg",
    link: "https://s.shopee.co.id/LYnN1etve"
  },
  {
    id: "307",
    name: "307",
    desc: "Alat Pengasah Pisau Dapur",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/307.jpg",
    link: "https://s.shopee.co.id/2LJrkgle9G"
  },
  {
    id: "306",
    name: "306",
    desc: "Pembuat Roti Bread Maker Ard-Bm55X",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/306.jpg",
    link: "https://s.shopee.co.id/50KcvYghbk"
  },
  {
    id: "305",
    name: "305",
    desc: "Alat Takar Sendok Takar Digital Spoon",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/305.jpg",
    link: "https://s.shopee.co.id/10oUAAEjzS"
  },
  {
    id: "304",
    name: "304",
    desc: "Strawberry Huller / Alat Pemotong",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/304.jpg",
    link: "https://s.shopee.co.id/8zqlgl8d9E"
  },
  {
    id: "303",
    name: "303",
    desc: "Golden Rose In Boxbunga Mawar",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/303.jpg",
    link: "https://s.shopee.co.id/3LCOwKlvlt"
  },
  {
    id: "302",
    name: "302",
    desc: "Chookey Kalung Rantai Dengan Liontin",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/302.jpg",
    link: "https://s.shopee.co.id/2VdHwmgqT1"
  },
  {
    id: "301",
    name: "301",
    desc: "Selimut Bulu Abstrak Ukuran 140X200 Cm",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/301.jpg",
    link: "https://s.shopee.co.id/5Ae37fbZ92"
  },
  {
    id: "300",
    name: "300",
    desc: "Saringan Penggorengan Unik Multifungsi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/300.jpg",
    link: "https://s.shopee.co.id/8zqlghjNKD"
  },
  {
    id: "299",
    name: "299",
    desc: "Mizu 3Byo-Ringo Alat Pengupas Apel",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/299.jpg",
    link: "https://s.shopee.co.id/20h1Ll8bdj"
  },
  {
    id: "298",
    name: "298",
    desc: "Kalung Mutiara Untuk Hadiah Pacar",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/298.jpg",
    link: "https://s.shopee.co.id/9KTc5Dxf0E"
  },
  {
    id: "297",
    name: "297",
    desc: "Coming Soon",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/297.png",
    link: "https://vt.tiktok.com/ZSYkqgGVL/?page=Mall"
  },
  {
    id: "296",
    name: "296",
    desc: "Hokiterus21 Squishy Dino Soft Slow",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/296.jpg",
    link: "https://s.shopee.co.id/2fwi8xWRvN"
  },
  {
    id: "295",
    name: "295",
    desc: "Pilok 150Cc Zuper Spray Semua Warna Cat",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/295.jpg",
    link: "https://s.shopee.co.id/6AWaJMBGsA"
  },
  {
    id: "293",
    name: "293",
    desc: "Fresh Fruit Juice Pengekstrak Buah",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/293.jpg",
    link: "https://s.shopee.co.id/5Ae37VOlLU"
  },
  {
    id: "292",
    name: "292",
    desc: "Sepatu Gaya Warna Kuning",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/292.jpg",
    link: "https://s.shopee.co.id/8UuV5cTO8b"
  },
  {
    id: "291",
    name: "291",
    desc: "Jskin Official - Touch Up Pen Makeup 4-In-1",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/291.jpg",
    link: "https://s.shopee.co.id/9zjIsMGAym"
  },
  {
    id: "290",
    name: "290",
    desc: "Sendal Jepit Anak",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/290.jpg",
    link: "https://s.shopee.co.id/AUfZTG0aFv"
  },
  {
    id: "289",
    name: "289",
    desc: "M5I Sparing Smooth Penghemat Bbm",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/289.jpg",
    link: "https://s.shopee.co.id/2LJrkE5gAy"
  },
  {
    id: "288",
    name: "288",
    desc: "Korea Mutiara Berlian Imitasi Jumbai",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/288.jpg",
    link: "https://s.shopee.co.id/3VVp8MNi1j"
  },
  {
    id: "287",
    name: "287",
    desc: "Penggiling Dan Pengiris Parutan Putar",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/287.jpg",
    link: "https://s.shopee.co.id/2B0RXtg2oe"
  },
  {
    id: "286",
    name: "286",
    desc: "Ecoco Pants Hanger / Rak Celana",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/286.jpg",
    link: "https://s.shopee.co.id/60DA6vfoJQ"
  },
  {
    id: "285",
    name: "285",
    desc: "T9 Alat Cukur Rambut Elektrik Usb",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/285.jpg",
    link: "https://s.shopee.co.id/6fSqu8uWFo"
  },
  {
    id: "284",
    name: "284",
    desc: "Butler Colorful Mini Paint Cat Dinding",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/284.jpg",
    link: ""
  },
  {
    id: "283",
    name: "283",
    desc: "Aphome Rak Susun Troli Besi Serbaguna",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/283.jpg",
    link: "https://s.shopee.co.id/7peoIFV5qT"
  },
  {
    id: "282",
    name: "282",
    desc: "Angola Sikat Pembersih Botol Wortel D96",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/282.jpg",
    link: "https://s.shopee.co.id/vwxphien"
  },
  {
    id: "281",
    name: "281",
    desc: "Flortte First Kiss Love Lipstick",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/281.jpg",
    link: "https://s.shopee.co.id/6fSqu4esce"
  },
  {
    id: "280",
    name: "280",
    desc: "Acefast Gan Charger 100W Usb Type C",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/280.jpg",
    link: "https://s.shopee.co.id/7zyEUVoERW"
  },
  {
    id: "279",
    name: "279",
    desc: "Hayylife Rak Susun Penyimpanan Bertingkat",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/279.jpg",
    link: "https://s.shopee.co.id/gBdl1BKRG"
  },
  {
    id: "278",
    name: "278",
    desc: "Ccg Alat Pengupas Sisik Ikan Stainless Steel",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/282.jpg",
    link: "https://s.shopee.co.id/vwxphien"
  },
  {
    id: "277",
    name: "277",
    desc: "Apple Ipad Pro (Gen 5) 12,9 Inci, Wi‑Fi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/277.jpg",
    link: "https://s.shopee.co.id/3AsyjYPllo"
  },
  {
    id: "276",
    name: "276",
    desc: "Gelang Serut Xuping Jewelry Permata Zicron",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/276.jpg",
    link: "https://s.shopee.co.id/2VdHwJO2Kn"
  },
  {
    id: "275",
    name: "275",
    desc: "Yhome Alat Penjepit Mangkok Piring Panci",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/275.jpg",
    link: "https://s.shopee.co.id/AA2j4NmJjY"
  },
  {
    id: "274",
    name: "274",
    desc: "Kipas Angin Portable Mini Lazy",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/274.jpg",
    link: "https://s.shopee.co.id/20h1LMHwsG"
  },
  {
    id: "273",
    name: "273",
    desc: "Mukena Dewasa Maxmara Printing",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/273.jpg",
    link: "https://s.shopee.co.id/5Ae378l2wH"
  },
  {
    id: "272",
    name: "272",
    desc: "Ready Robot Transformer Airbus",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/272.jpg",
    link: "https://s.shopee.co.id/5faJi30jWS"
  },
  {
    id: "271",
    name: "271",
    desc: "[Hh] Karpet Puzzle Bulu Alas Lantai",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/271.jpg",
    link: "https://s.shopee.co.id/30ZYX8GVuU"
  },
  {
    id: "270",
    name: "270",
    desc: "Goto Uv-Comb Vacuum Comb Sisir Kutu",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/270.jpg",
    link: "https://s.shopee.co.id/40S5ixPpRA"
  },
  {
    id: "269",
    name: "269",
    desc: "Bear 0.6L Electric Folding Kettle For Travel",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/269.jpg",
    link: "https://s.shopee.co.id/7zyEUHFbPH"
  },
  {
    id: "268",
    name: "268",
    desc: "Turun Harga Rantang Stainless 3 Dan 4 Susun",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/268.jpg",
    link: "https://s.shopee.co.id/2qG8Klrxgg"
  },
  {
    id: "267",
    name: "267",
    desc: "Rechargeable Wireless Keyboard And Mouse",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/267.jpg",
    link: "https://s.shopee.co.id/7peoHwcpxi"
  },
  {
    id: "265",
    name: "265",
    desc: "Ortopedi Alat Terapi Sakit Pinggang",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/265.jpg",
    link: "https://s.shopee.co.id/VsDYSEN1T"
  },
  {
    id: "264",
    name: "264",
    desc: "Lakban Silver Perekat Serbaguna",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/264.jpg",
    link: "https://s.shopee.co.id/6pmH63YzIJ"
  },
  {
    id: "263",
    name: "263",
    desc: "Sikat Badan Brush Silicone Dispenser",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/263.jpg",
    link: "https://s.shopee.co.id/5faJhtn76y"
  },
  {
    id: "262",
    name: "262",
    desc: "La Vienne - Gelang Rantai Titanium",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/262.jpg",
    link: "https://s.shopee.co.id/7zyEUAn9vt"
  },
  {
    id: "261",
    name: "261",
    desc: "Acefast T6 True Wireless Stereo Headset",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/261.jpg",
    link: "https://s.shopee.co.id/9f6STDlTrC"
  },
  {
    id: "260",
    name: "260",
    desc: "Back Flow Valve Rucika 3' Dan 4' ,Fiting Katup",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/260.jpg",
    link: "https://s.shopee.co.id/6Kq0V5GrQ0"
  },
  {
    id: "259",
    name: "259",
    desc: "Laptop Asus Vivobook E410Ma&L510Ma",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/259.jpg",
    link: "https://s.shopee.co.id/LYnM2Uxl2"
  },
  {
    id: "258",
    name: "258",
    desc: "Alat Perangkap Nyamuk Elektrik Led",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/258.jpg",
    link: "https://s.shopee.co.id/1g4AwTlwhM"
  },
  {
    id: "257",
    name: "257",
    desc: "Sunxin - Rak Kosmetik Gantung-9122",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/257.jpg",
    link: "https://s.shopee.co.id/9f6STAHpFT"
  },
  {
    id: "256",
    name: "256",
    desc: "Back Flow Valve Rucika 3' Dan 4' ,Fiting Katup",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/256.jpg",
    link: "https://s.shopee.co.id/10oU9E2yKI"
  },
  {
    id: "255",
    name: "255",
    desc: "Kartun Anjing Shiba Inu Cosplay Dress Up",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/255.jpg",
    link: "https://s.shopee.co.id/2VdHvxAmsi"
  },
  {
    id: "254",
    name: "254",
    desc: "Tempat Penyimpanan Dispenser Beras",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/254.jpg",
    link: "https://s.shopee.co.id/8zqlfsVKRY"
  },
  {
    id: "253",
    name: "253",
    desc: "18/25Cm Mainan Mewah Kelinci Flip Lucu",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/253.jpg",
    link: "https://s.shopee.co.id/6AWaIf2iw5"
  },
  {
    id: "252",
    name: "252",
    desc: "Powerbank Mini Fast Charging Kabel C",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/252.jpg",
    link: "https://s.shopee.co.id/705hIB8xdz"
  },
  {
    id: "251",
    name: "251",
    desc: "Dekorasi Kamar Tidur Aksesoris",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/251.jpg",
    link: "https://s.shopee.co.id/30ZYWoWuYh"
  },
  {
    id: "250",
    name: "250",
    desc: "Newstyle Raket Nyamuk Listrik B22",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/250.jpg",
    link: "https://s.shopee.co.id/AKM9GH57eT"
  },
  {
    id: "249",
    name: "249",
    desc: "Alat Semprotan Cat Spray Gun Air Dust",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/249.png",
    link: "https://s.shopee.co.id/9zjIreJrC2"
  },
  {
    id: "248",
    name: "248",
    desc: "Rak Penyimpanan Sudut Model Putar",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/248.png",
    link: "https://s.shopee.co.id/8UuV4sUVaV"
  },
  {
    id: "247",
    name: "247",
    desc: "(Promo Produk Baru) Gelang Couple",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/247.png",
    link: "https://s.shopee.co.id/40S5ia8eVV"
  },
  {
    id: "246",
    name: "246",
    desc: "Wallpaper Linen Roll | Wallpaper Dinding",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/246.png",
    link: "https://s.shopee.co.id/9zjIrarAGB"
  },
  {
    id: "245",
    name: "245",
    desc: "Rak Pengering Sabun Model Gantung",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/245.png",
    link: "https://s.shopee.co.id/8AHegDOSsk"
  },
  {
    id: "244",
    name: "244",
    desc: "Sovella Alexa Sepatu Sneakers Olahraga",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/244.png",
    link: "https://s.shopee.co.id/7fLO5HLxaT"
  },
  {
    id: "243",
    name: "243",
    desc: "Rak Tempat Pisau Dapur Kayu Plastik",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/243.png",
    link: "https://s.shopee.co.id/7V1xsxZvGj"
  },
  {
    id: "242",
    name: "242",
    desc: "Meja Rias Putih/Meja Rias Minimalis",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/242.png",
    link: "https://s.shopee.co.id/4fhmVjYfbF"
  },
  {
    id: "241",
    name: "241",
    desc: "Y073 Gelang Tangan Wanita Lapis Emas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/241.png",
    link: "https://s.shopee.co.id/2LJrjQlwaa"
  },
  {
    id: "240",
    name: "240",
    desc: "Cucina Hotplate Multicooker Cc0243",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/240.png",
    link: "https://s.shopee.co.id/8fDvH3biB9"
  },
  {
    id: "239",
    name: "239",
    desc: "Food Processor Pro Signora",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/239.png",
    link: "https://s.shopee.co.id/5ptjto1Fid"
  },
  {
    id: "238",
    name: "238",
    desc: "Hafez - Restorer - Pengkilap Dan Penghitam",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/238.png",
    link: "https://s.shopee.co.id/6pmH5dFAod"
  },
  {
    id: "237",
    name: "237",
    desc: "Gantungan Sapu Alat Pel Dengan Hook",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/237.png",
    link: "https://s.shopee.co.id/9AABruFYx6"
  },
  {
    id: "236",
    name: "236",
    desc: "Dempul Penambal Tambal Dinding Bocor",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/236.png",
    link: "https://s.shopee.co.id/VsDXxvgt6"
  },
  {
    id: "235",
    name: "235",
    desc: "Stiker Sampul Buku Isi 10 Lembar",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/235.png",
    link: "https://s.shopee.co.id/1g4Aw64Ioc"
  },
  {
    id: "234",
    name: "234",
    desc: "Mesin Press Cetakan Pastel/Pangsit",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/234.png",
    link: "https://s.shopee.co.id/5ptjtilKVF"
  },
  {
    id: "233",
    name: "233",
    desc: "Samsung Galaxy A12 A13 A23 A73 A72 A53",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/233.png",
    link: "https://s.shopee.co.id/8zqlfWrcYr"
  },
  {
    id: "232",
    name: "232",
    desc: "Ac Bestlife Portable 1.5 Pk",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/232.png",
    link: "https://s.shopee.co.id/5Ae36T64Ho"
  },
  {
    id: "231",
    name: "231",
    desc: "Satu Keluarga Stiker Cermin Rias Dinding",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/231.png",
    link: "https://s.shopee.co.id/6V9QaodhC5"
  },
  {
    id: "230",
    name: "230",
    desc: "Stainless 304 Pemotong Pengiris Bawang",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/230.png",
    link: "https://s.shopee.co.id/4VOMD7uRbN"
  },
  {
    id: "225",
    name: "225",
    desc: "Mainan Motor Hamster Elektrik Mini",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/225.png",
    link: "https://s.shopee.co.id/1VkkdPl8g3"
  },
  {
    id: "223",
    name: "223",
    desc: "Dejavu Toples Penyimpanan Cereal",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/223.png",
    link: "https://s.shopee.co.id/9pPsYgCE7W"
  },
  {
    id: "222",
    name: "222",
    desc: "Mizu Penna Vetro Xii Glass Dip Pen Kaca",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/222.png",
    link: "https://s.shopee.co.id/8Kb4luZWlO"
  },
  {
    id: "221",
    name: "221",
    desc: "New !! Ultrafit Temperedglass Iphonei",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/221.png",
    link: "https://s.shopee.co.id/8fDvAVlaQp"
  },
  {
    id: "220",
    name: "220",
    desc: "V-Babycare Kursi Makan Untuk Baby",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/220.png",
    link: "https://s.shopee.co.id/30ZYQ5GV44"
  },
  {
    id: "219",
    name: "219",
    desc: "Tokyo1 Alat Pemotong Telur 2 Way Egg Cutter",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/219.png",
    link: "https://s.shopee.co.id/40S5bfIshY"
  },
  {
    id: "218",
    name: "218",
    desc: "Celana Beggy Highwaist American Drill",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/218.png",
    link: "https://s.shopee.co.id/4q1CbAhX9n"
  },
  {
    id: "217",
    name: "217",
    desc: "Asus Zenbook 14X Oled Space Ux5401Zas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/217.png",
    link: "https://s.shopee.co.id/4VOMCXdywj"
  },
  {
    id: "216",
    name: "216",
    desc: "Samsung Galaxy S23 Ultra 5G 12Gb/512Gbr",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/216.png",
    link: "https://s.shopee.co.id/9Un29i461k"
  },
  {
    id: "215",
    name: "215",
    desc: "Kotak Penyimpanan Telur 16 Sekat",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/215.png",
    link: "https://s.shopee.co.id/1g4ApHYvnY"
  },
  {
    id: "214",
    name: "214",
    desc: "Iphone [Cincin Magnet] Casing Ponsel",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/214.png",
    link: "https://s.shopee.co.id/2fwi15MeSW"
  },
  {
    id: "213",
    name: "213",
    desc: "Timehee Spons Scrub Eksfoliasi Lembut",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/213.png",
    link: "https://s.shopee.co.id/50KcnMIVHz"
  },
  {
    id: "212",
    name: "212",
    desc: "Quantum Kasur Tatami Rebounded 100X200",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/212.png",
    link: "https://s.shopee.co.id/3VVp0aFt4h"
  },
  {
    id: "211",
    name: "211",
    desc: "Scooter Balance Car Elektrik Anak",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/211.png",
    link: "https://s.shopee.co.id/2VdHojgN6v"
  },
  {
    id: "210",
    name: "210",
    desc: "Motor Aki Motoran Aki Anak Vespa",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/210.png",
    link: "https://s.shopee.co.id/3LCOoG0Hzy"
  },
  {
    id: "209",
    name: "209",
    desc: "Rak Gantung Wastafel Serba Guna",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/209.png",
    link: "https://s.shopee.co.id/7KiXZatquy"
  },
  {
    id: "207",
    name: "207",
    desc: "Morphy Richards Mr9802 Juicer",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/206.jpg",
    link: "https://s.shopee.co.id/6V9Qa0BQZ2"
  },
  {
    id: "206",
    name: "206",
    desc: "Morphy Richards Mr9802 Juicer",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/206.jpg",
    link: "https://s.shopee.co.id/6V9Qa0BQZ2"
  },
  {
    id: "205",
    name: "205",
    desc: "Sari Lemon 500ML",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/sari lemon 500ml.jpg",
    link: "https://s.shopee.co.id/AA3uEXbyh5"
  },
  {
    id: "204",
    name: "204",
    desc: "Susu Kuda Lombok",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/susu kuda lombok.jpg",
    link: "https://s.shopee.co.id/1qOmJ6oSjw"
  },
  {
    id: "203",
    name: "203",
    desc: "Sabuk Terapi Pinggang Medis",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/sabuk terapi pinggang medis.jpg",
    link: "https://s.shopee.co.id/6AXlSxWOTo"
  },
  {
    id: "202",
    name: "202",
    desc: "Cuka Apel Premium",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/cuka apel premium.jpg",
    link: "https://s.shopee.co.id/8pYWdkcGkd"
  },
  {
    id: "199",
    name: "199",
    desc: "Huawei Matepad 10.4 2022 New Edition",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/199.jpg",
    link: "https://s.shopee.co.id/2VdHnCk1wJ"
  },
  {
    id: "198",
    name: "198",
    desc: "Cetakan Es Batu Kotak Silikon Dengan Wadah",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/198.jpg",
    link: "https://s.shopee.co.id/2fwhzV0Zcq"
  },
  {
    id: "197",
    name: "197",
    desc: "Satoo G3 Juicer Portable 320Ml",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/197.jpg",
    link: "https://s.shopee.co.id/BFN0tSZjM"
  },
  {
    id: "196",
    name: "196",
    desc: "Mainan Anak Dancing Robot 6678-5 Light",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/196.jpg",
    link: "https://s.shopee.co.id/3AsyaNa6wK"
  },
  {
    id: "195",
    name: "195",
    desc: "Mainan Anak Tank Fight Gesture Tangan",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/195.jpg",
    link: "https://s.shopee.co.id/60D9xZc2Ao"
  },
  {
    id: "194",
    name: "194",
    desc: "Jam Tangan Bts Bt21 Permission To Dance",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/194.jpg",
    link: "https://s.shopee.co.id/gBdbl5kOL"
  },
  {
    id: "193",
    name: "193",
    desc: "Cover Beanbag Big Pumpkin - Beanbag",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/193.jpg",
    link: "https://s.shopee.co.id/20h1CBfDLM"
  },
  {
    id: "192",
    name: "192",
    desc: "Kado Unik Snack Jumbo Cocok Kado",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/192.jpg",
    link: "https://s.shopee.co.id/6AWa9pCDH0"
  },
  {
    id: "191",
    name: "191",
    desc: "Mobil, Kursi Belakang Anak, Tempat Tidur",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/191.jpg",
    link: "https://s.shopee.co.id/AKM97TAqcb"
  },
  {
    id: "190",
    name: "190",
    desc: "Coming Soon",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/190.jpg",
    link: "https://s.shopee.co.id/4q1CZLiq4e"
  },
  {
    id: "189",
    name: "189",
    desc: "Oil Pot Filter 1300Ml Saringan Stainless",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/189.jpg",
    link: "https://s.shopee.co.id/1qNazoq7u7"
  },
  {
    id: "188",
    name: "188",
    desc: "Spacebaby Sb 801 3 In 1 Pushwalker",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/188.jpg",
    link: "https://s.shopee.co.id/2B0ROPbvOc"
  },
  {
    id: "187",
    name: "187",
    desc: "Lampu Tidur Led Rgb Light Little Cat",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/187.jpg",
    link: "https://s.shopee.co.id/5VGtMEfdoJ"
  },
  {
    id: "186",
    name: "186",
    desc: "Yeezii Gelang Rantai Manik-Manik",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/186.jpg",
    link: "https://s.shopee.co.id/3VVoyXEsCW"
  },
  {
    id: "185",
    name: "185",
    desc: "Taffware Mini Wifi Ip Camera Cctv Wide",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/185.jpg",
    link: "https://s.shopee.co.id/7peo8ShrQ1"
  },
  {
    id: "184",
    name: "184",
    desc: "Microsoft Surface Pro 4 Touch Tablet Core I5",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/184.jpg",
    link: "https://s.shopee.co.id/AA2iujYYa3"
  },
  {
    id: "183",
    name: "183",
    desc: "Lys#2Buah Keranjang Buah 2 Tingkat",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/183.jpg",
    link: "https://s.shopee.co.id/9f6SJnoc5Q"
  },
  {
    id: "182",
    name: "182",
    desc: "160 Lembar Stiker Label Index Fluorescent",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/182.jpg",
    link: "https://s.shopee.co.id/8pXLKEAs6s"
  },
  {
    id: "180",
    name: "180",
    desc: "Stiker Dinding Dapur / Stiker Dinding",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/180.jpg",
    link: "https://s.shopee.co.id/5VGtM4jol1"
  },
  {
    id: "179",
    name: "179",
    desc: "Lakoe Mainan Telpon Bunyi Mainan Hp",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/179.jpg",
    link: "https://s.shopee.co.id/AA2iudaqK8"
  },
  {
    id: "177",
    name: "177",
    desc: "Alat Kepang Rambut Elektrik Otomatis",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/177.jpg",
    link: "https://s.shopee.co.id/3q8fMydq8x"
  },
  {
    id: "176",
    name: "176",
    desc: "Amazefan Korek Kuping Led Smart",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/176.jpg",
    link: "https://s.shopee.co.id/8Kb4jEb01o"
  },
  {
    id: "175",
    name: "175",
    desc: "Baskom Parut Stainless Serbaguna",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/175.jpg",
    link: "https://s.shopee.co.id/50Kcl5wgc4"
  },
  {
    id: "174",
    name: "174",
    desc: "Penahan Pintu Spring Door Stopper",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/174.jpg",
    link: "https://s.shopee.co.id/AUfZJBgCy9"
  },
  {
    id: "173",
    name: "173",
    desc: "Akeyo T-Shirt S-4Xl 30+ Warna Kaos",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/173.png",
    link: "https://s.shopee.co.id/3q8fMvEJGt"
  },
  {
    id: "171",
    name: "171",
    desc: "Rak Bumbu Dapur Serbaguna",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/171.png",
    link: "https://s.shopee.co.id/9KTbv0pzjZ"
  },
  {
    id: "170",
    name: "170",
    desc: "Training Potty Toilet Boys Urinal Frog",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/170.png",
    link: "https://s.shopee.co.id/3fpEmzhuJE"
  },
  {
    id: "169",
    name: "169",
    desc: "Sepatu Roda Heelys Led Dual",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/169.png",
    link: "https://s.shopee.co.id/gBdDStfBH"
  },
  {
    id: "168",
    name: "168",
    desc: "Ecentio Juice Blender 8 Pisau 330Ml",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/168.png",
    link: "https://s.shopee.co.id/7V1xM0hb1C"
  },
  {
    id: "167",
    name: "167",
    desc: "Paus Biru - Wallpaper 3D Foam Motif",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/167.png",
    link: "https://s.shopee.co.id/AKM8jCbXpq"
  },
  {
    id: "166",
    name: "166",
    desc: "Antbox Rak Lemari Sepatu Shoes",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/166.png",
    link: "https://s.shopee.co.id/4fhlylXOjQ"
  },
  {
    id: "165",
    name: "165",
    desc: "Spon Mandi Ajaib Sponge Badan Spons",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/165.png",
    link: "https://s.shopee.co.id/20h0nqpn50"
  },
  {
    id: "164",
    name: "164",
    desc: "Bulin Outdoor Kitchen C550C - Picnic",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/164.png",
    link: "https://s.shopee.co.id/3fpEmu6KUT"
  },
  {
    id: "163",
    name: "163",
    desc: "Mi Mijia Electric Precision Screwdriver",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/163.png",
    link: "https://s.shopee.co.id/1B7toH888c"
  },
  {
    id: "162",
    name: "162",
    desc: "Helm Motor Ls2 Ff900 Valiant Jeans",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/162.png",
    link: "https://s.shopee.co.id/8Kb4L6beLp"
  },
  {
    id: "161",
    name: "161",
    desc: "Handuk Travelling Besar",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/161.png",
    link: "https://s.shopee.co.id/1LRK0DtyIS"
  },
  {
    id: "159",
    name: "159",
    desc: "Hicon Portable Ice Maker Dengan Handle",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/159.png",
    link: "https://s.shopee.co.id/gBdCyjzOb"
  },
  {
    id: "158",
    name: "158",
    desc: "Asbak Pembersih Udara Humidifier",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/158.png",
    link: "https://s.shopee.co.id/9Un1j9ztQH"
  },
  {
    id: "157",
    name: "157",
    desc: "Anti Slip Mat Anti Slip Karpet Lantai",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/157.png",
    link: "https://s.shopee.co.id/2qG7mtYL2G"
  },
  {
    id: "156",
    name: "156",
    desc: "New Complete Sc Johnson Cairan",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/156.png",
    link: "https://s.shopee.co.id/10oTbVy0YR"
  },
  {
    id: "155",
    name: "155",
    desc: "Lazy Lips Velvet Matte Lipstick",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/155.png",
    link: "https://s.shopee.co.id/9f6RvQHvpA"
  },
  {
    id: "153",
    name: "153",
    desc: "Lantai Kayu Jati Decking Tile",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/153.png",
    link: "https://s.shopee.co.id/6V9Q9ZMGp9"
  },
  {
    id: "152",
    name: "152",
    desc: "Avaro Smart Door Lock Sl02 Digital",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/152.png",
    link: "https://s.shopee.co.id/6pmGYAYKUa"
  },
  {
    id: "151",
    name: "151",
    desc: "Danapaint Upox Epoxy Cat Keramik",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/151.png",
    link: "https://s.shopee.co.id/20h0nHD8G2"
  },
  {
    id: "149",
    name: "149",
    desc: "Gm Bear Alat Pel Lantai Spons 1165",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/149.png",
    link: "https://s.shopee.co.id/7penjyVwuW"
  },
  {
    id: "148",
    name: "148",
    desc: "Wallpaper Dapur Aluminium Foil",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/148.jpg",
    link: "https://s.shopee.co.id/5ptjMHdy15"
  },
  {
    id: "147",
    name: "147",
    desc: "Vacuum Baby Clipper Alat Cukur",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/147.jpg",
    link: "https://s.shopee.co.id/2fwhaS3h5s"
  },
  {
    id: "146",
    name: "146",
    desc: "Salat Mat Smart Sajadah Edukasir",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/146.jpg",
    link: "https://s.shopee.co.id/BFMbqI5Fw"
  },
  {
    id: "145",
    name: "145",
    desc: "Wallpaper Dinding Foam Timbuli",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/145.jpg",
    link: "https://s.shopee.co.id/20h0nCWt8Q"
  },
  {
    id: "144",
    name: "144",
    desc: "Stock Baby Nest Ruffle Polos Premium",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/144.png",
    link: "https://s.shopee.co.id/2B0QzUb7t0"
  },
  {
    id: "143",
    name: "143",
    desc: "Hijab Keiko Original By Quail Hijab",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/143.jpg",
    link: "https://s.shopee.co.id/5faJ9uk8Th"
  },
  {
    id: "142",
    name: "142",
    desc: "Storage Box Lipat / Folding Container Box",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/142.jpg",
    link: "https://s.shopee.co.id/BFMbmx9xB"
  },
  {
    id: "141",
    name: "141",
    desc: "Shoes Kabinet Multifungsi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/141.jpg",
    link: "https://s.shopee.co.id/AKM8iSTnSZ"
  },
  {
    id: "140",
    name: "140",
    desc: "Claire Dress - Gamis Plisket Haraskirt",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/140.jpg",
    link: "https://s.shopee.co.id/4q1CAL6fWy"
  },
  {
    id: "139",
    name: "139",
    desc: "Mukena Dewasa Polos Crinkle Airflow 3In1",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/139.jpg",
    link: "https://s.shopee.co.id/1VkkCCbQjT"
  },
  {
    id: "138",
    name: "138",
    desc: "Helm Ink-Kyt-Mds Pro Rider Modularr",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/138.jpg",
    link: "https://s.shopee.co.id/VsCzPGbX0"
  },
  {
    id: "137",
    name: "137",
    desc: "Careindo Kursi Roda Elektrik Traveling",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/137.jpg",
    link: "https://s.shopee.co.id/8Kb4Jmr2Mo"
  },
  {
    id: "136",
    name: "136",
    desc: "Amazefan 8000Mah Pompa Angin Mobil",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/136.jpg",
    link: "https://s.shopee.co.id/3VVoYtJSvn"
  },
  {
    id: "135",
    name: "135",
    desc: "Zahra Dress | Dress Wanita | Dress Rayon",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/135.jpg",
    link: "https://s.shopee.co.id/20h0m2jCN9"
  },
  {
    id: "134",
    name: "134",
    desc: "Single Wheel One Wheel With Bluetooth",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/134.jpg",
    link: "https://s.shopee.co.id/10oTZoZsPq"
  },
  {
    id: "132",
    name: "132",
    desc: "Kasur Angin Naturehike Nh22Fcd04",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/132.jpg",
    link: "https://s.shopee.co.id/gBdB9Pz1m"
  },
  {
    id: "131",
    name: "131",
    desc: "Ecovacs Deebot U2 Pro Robot Vacuum",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/131.jpg",
    link: "https://s.shopee.co.id/1qNaYQGCUi"
  },
  {
    id: "130",
    name: "130",
    desc: "Seyven Smart Curtain Pembuka Dan Penutur",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/130.jpg",
    link: "https://s.shopee.co.id/6fSqJIGYkQ"
  },
  {
    id: "129",
    name: "129",
    desc: "Kaos Polo Shirt Pria Kaos Kerah Polos",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/129.jpg",
    link: "https://s.shopee.co.id/5Ae2WWHvk3"
  },
  {
    id: "128",
    name: "128",
    desc: "Goojodoq 2Nd Gen Pro 10 Inch 3 In 1",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/128.jpg",
    link: "https://s.shopee.co.id/40S58MQy9N"
  },
  {
    id: "127",
    name: "127",
    desc: "Helm Bogo Injak 06 Cream Glossy",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/127.jpg",
    link: "https://s.shopee.co.id/7AP6u8ysZJ"
  },
  {
    id: "125",
    name: "125",
    desc: "New Lampu Sorot Solar Cell Led",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/125.jpg",
    link: "https://s.shopee.co.id/gBdAAWCTl"
  },
  {
    id: "124",
    name: "124",
    desc: "Asus Rog Strix Scar",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/124.jpg",
    link: "https://s.shopee.co.id/gBdA9fg8b"
  },
  {
    id: "123",
    name: "123",
    desc: "Canon Eos M10 Kit 15-45Mm",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/123.jpg",
    link: "https://s.shopee.co.id/AUfYsCvqfC"
  },
  {
    id: "122",
    name: "122",
    desc: "Gamis Brukat Hanna Dress By Sharleen Official",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/122.jpg",
    link: "https://s.shopee.co.id/3LCOL1aWoK"
  },
  {
    id: "121",
    name: "121",
    desc: "Mesin Penghasil Minyak Biji-Bijian",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/121.jpg",
    link: "https://s.shopee.co.id/2B0Qwqkj9L"
  },
  {
    id: "120",
    name: "120",
    desc: "Jam Tangan Pria Smart Watch Huawei",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/120.jpg",
    link: "https://s.shopee.co.id/4L4vWmvhah"
  },
  {
    id: "119",
    name: "119",
    desc: "Gergaji Listrik Bosch Cut 1108 Cordless",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/119.jpg",
    link: "https://s.shopee.co.id/4AlVKSwjyZ"
  },
  {
    id: "118",
    name: "118",
    desc: "Mitsui Mosquito Insect Killer 4 W Lampu",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/118.jpg",
    link: "https://s.shopee.co.id/5KxSianXz4"
  },
  {
    id: "117",
    name: "117",
    desc: "Aqua Botol Mini 220Ml",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/117.jpg",
    link: "https://s.shopee.co.id/gBd9zf70z"
  },
  {
    id: "116",
    name: "116",
    desc: "Nakas Dengan Laci Tersembunyi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/116.jpg",
    link: "https://s.shopee.co.id/5Ae2WFY9AI"
  },
  {
    id: "115",
    name: "115",
    desc: "Tas Ransel Led Men Knight Backpack",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/115.jpg",
    link: "https://s.shopee.co.id/7V1xIWKNHe"
  },
  {
    id: "114",
    name: "114",
    desc: "Gaun Wanita Dewasa",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/114.jpg",
    link: "https://s.shopee.co.id/7penh6tJkD"
  },
  {
    id: "113",
    name: "113",
    desc: "10Pcs / Set Kotak Penyimpanan Anting",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/113.jpg",
    link: "https://s.shopee.co.id/2B0Qwekh4D"
  },
  {
    id: "112",
    name: "112",
    desc: "Casha Marshmallow Bag",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/112.jpg",
    link: "https://s.shopee.co.id/LYmlGoZSe"
  },
  {
    id: "111",
    name: "111",
    desc: "Transformers Dengan Remote Control",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/111.jpg",
    link: "https://s.shopee.co.id/2VdHLCKMpL"
  },
  {
    id: "109",
    name: "109",
    desc: "Zinus Kasur Spring Bed Deluxe",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/109.jpg",
    link: "https://s.shopee.co.id/8Kb4HrvB83"
  },
  {
    id: "108",
    name: "108",
    desc: "Pembersih Lumut Glowing Cairan Pembersih",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/108.jpg",
    link: "https://s.shopee.co.id/6AWZhsMOMy"
  },
  {
    id: "107",
    name: "107",
    desc: "Sepeda Listrik Roda Tiga/E-Bike Siera",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/107.jpg",
    link: "https://s.shopee.co.id/20h0kAlIqw"
  },
  {
    id: "106",
    name: "106",
    desc: "Oxone Automatic Noodle Maker Ox-356",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/106.jpg",
    link: "https://s.shopee.co.id/9KTbTcFnHQ"
  },
  {
    id: "105",
    name: "105",
    desc: "Pandaoma Mesin Cuci Asper Mesin Cuci",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/105.jpg",
    link: "https://s.shopee.co.id/BFMYkyJ42"
  },
  {
    id: "104",
    name: "104",
    desc: "Fila Sepatu Jalan Pria V1 (Boa)",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/104.jpg",
    link: "https://s.shopee.co.id/4fhlv0uIVO"
  },
  {
    id: "103",
    name: "103",
    desc: "Brs-99 Kompor Camping Stove Outdoor",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/103.jpg",
    link: "https://s.shopee.co.id/4AlVK4S9Ng"
  },
  {
    id: "102",
    name: "102",
    desc: "Kaikki Peralatan Makan Bayi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/102.jpg",
    link: "https://s.shopee.co.id/BFMYgdIyH"
  },
  {
    id: "101",
    name: "101",
    desc: "Insta360 One X3 360 Action Camera",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/101.jpg",
    link: "https://s.shopee.co.id/5Ae2VpHlna"
  },
  {
    id: "100",
    name: "100",
    desc: "Samsung Galaxy S23 Ultra 5G",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/100.jpg",
    link: "https://s.shopee.co.id/3q8evPduan"
  },
  {
    id: "99",
    name: "99",
    desc: "Lampu Led Strip Selang Smd 5050 90M",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/99.jpg",
    link: "https://s.shopee.co.id/705ghDRzAC"
  },
  {
    id: "98",
    name: "98",
    desc: "Sepeda Anak 4 Roda Balance Bike",
    subDesc: "Shopee - Polimeritas.",
    image: "/img/Partner/98.jpg",
    link: "https://s.shopee.co.id/9zj91sOKxk"
  },
  {
    id: "96",
    name: "96",
    desc: "(100 Lembaran) Amplop Lebaran ViralShopee - Polimeritas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/96.jpg",
    link: "https://s.shopee.co.id/1g416XUCkp"
  },
  {
    id: "95",
    name: "95",
    desc: "Lemari Plastik Rak Serbaguna",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/95.jpg",
    link: "https://s.shopee.co.id/1qNRIpUBEv"
  },
  {
    id: "94",
    name: "94",
    desc: "Sprei Waterproof",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/94.jpg",
    link: "https://s.shopee.co.id/1B7kVabS9k"
  },
  {
    id: "93",
    name: "93",
    desc: "Mini Projector Led Yg300 Proyektor MiniShopee - Polimeritas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/93.jpg",
    link: "https://s.shopee.co.id/30ZOgwhwIs"
  },
  {
    id: "90",
    name: "90",
    desc: "Samsung 75Q60B Qa75Q60B Qled Tv",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/90.jpg",
    link: "https://s.shopee.co.id/gBTucwVkL"
  },
  {
    id: "89",
    name: "89",
    desc: "Mainan Edukasi Montesori CaturShopee - Polimeritas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/89.jpg",
    link: "https://s.shopee.co.id/3VVfHp3aeF"
  },
  {
    id: "88",
    name: "88",
    desc: "Printer Barcode Thermal Pengiriman LabelShopee - Polimeritas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/88.jpg",
    link: "https://s.shopee.co.id/1qNRIkInKO"
  },
  {
    id: "87",
    name: "87",
    desc: "Printer A4 203 Dpi Mini Printer Resi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/87.jpg",
    link: "https://s.shopee.co.id/7AOxeX3yyt"
  },
  {
    id: "86",
    name: "86",
    desc: "Sendal Kamar Mandi Anti Slip",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/86.jpg",
    link: "https://s.shopee.co.id/vn7LVOUe"
  },
  {
    id: "85",
    name: "85",
    desc: "Gopro Hero 11 Bundle Black CreatorShopee - Polimeritas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/85.jpg",
    link: "https://s.shopee.co.id/9UmsQn3wzQ"
  },
  {
    id: "84",
    name: "84",
    desc: "Lg Wing | 256Gb | Ram 8Gb | Fungsi NormalShopee - Polimeritas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/84.jpg",
    link: "https://s.shopee.co.id/7V1o367MWd"
  },
  {
    id: "83",
    name: "83",
    desc: "Premium Taplak Meja Makan Waterproof",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/83.jpg",
    link: "https://s.shopee.co.id/5pta416H3Z"
  },
  {
    id: "82",
    name: "82",
    desc: "Original Miui Slow Juicer Cold Press",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/82.jpg",
    link: "https://s.shopee.co.id/20grUxTJYq"
  },
  {
    id: "81",
    name: "81",
    desc: "Coming SoonShopee - Polimeritas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/81.webp",
    link: "https://s.shopee.co.id/3fp5U0adpn"
  },
  {
    id: "80",
    name: "80",
    desc: "Kabinet Laci Aesthetic PenyimpananShopee - Polimeritas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/80.jpg",
    link: "https://s.shopee.co.id/1qNRIba6uj"
  },
  {
    id: "79",
    name: "79",
    desc: "Reaim Spray Gun Polishing Alat Menyemprot",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/79.jpg",
    link: "https://s.shopee.co.id/AKLzQDCPB3"
  },
  {
    id: "77",
    name: "77",
    desc: "Niko Kompor Gas Tanam/Biasa 2TShopee - Polimeritas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/77.jpg",
    link: "https://s.shopee.co.id/8Kav2VcDfb"
  },
  {
    id: "76",
    name: "76",
    desc: "Coming SoonShopee - Polimeritas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/76.webp",
    link: "https://s.shopee.co.id/9UmsQdYBLb"
  },
  {
    id: "75",
    name: "75",
    desc: "Westech Professional Slow Juicer",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/75.jpg",
    link: "https://s.shopee.co.id/3fp5Ttv4HA"
  },
  {
    id: "74",
    name: "74",
    desc: "Mainan Anak Racing Speed Car Adventure",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/74.jpg",
    link: "https://s.shopee.co.id/8pXBdNtXUY"
  },
  {
    id: "73",
    name: "73",
    desc: "Kipas Angin Maspion 360 DerajatShopee - Polimeritas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/73.jpg",
    link: "https://s.shopee.co.id/9f6IctqUnS"
  },
  {
    id: "72",
    name: "72",
    desc: "Motor Aki Vespa Mainan Anak Kids Electric",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/72.jpg",
    link: "https://s.shopee.co.id/2fwYI1IAPN"
  },
  {
    id: "71",
    name: "71",
    desc: "Dennos E58 Drone Camera Drone Quadcopte",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/71.jpg",
    link: "https://s.shopee.co.id/5KxJSuPk7Z"
  },
  {
    id: "70",
    name: "70",
    desc: "Airwheel Koper Se3Mini",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/70.jpg",
    link: "https://s.shopee.co.id/3q8Vg8RFdh"
  },
  {
    id: "69",
    name: "69",
    desc: "Video Booth Spinner 372 Photo Booth",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/69.jpg",
    link: "https://s.shopee.co.id/8AHUq4lRom"
  },
  {
    id: "68",
    name: "68",
    desc: "Mesin Susu Formula Otomatis",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/68.jpg",
    link: "https://s.shopee.co.id/6AWQSIrI9Z"
  },
  {
    id: "67",
    name: "67",
    desc: "Sofabed Minimalis Bergaransi Kualitas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/67.jpg",
    link: "https://s.shopee.co.id/qUu6ToyAd"
  },
  {
    id: "66",
    name: "66",
    desc: "Lemari Plastik Susun Lemari Pakaian Laci",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/66.png",
    link: "https://s.shopee.co.id/60D0FxERuh"
  },
  {
    id: "65",
    name: "65",
    desc: "Video Booth Spinner 368 Photo Booth",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/65.jpg",
    link: "https://s.shopee.co.id/3AsosV0Ur8"
  },
  {
    id: "64",
    name: "64",
    desc: "Vespa Sprint S 150 I-Get Abs",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/64.jpg",
    link: "https://s.shopee.co.id/8KauoxctWd"
  },
  {
    id: "59",
    name: "59",
    desc: "Sofa Bed Sofa Bed Minimalis Sofa Lipat Tronxi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/59.jpg",
    link: "https://s.shopee.co.id/1VkagLQrnJ"
  },
  {
    id: "58",
    name: "58",
    desc: "Ashley Ludden Sofa Recliner + Rocking",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/58.jpg",
    link: "https://s.shopee.co.id/1B7kHiWs2M"
  },
  {
    id: "57",
    name: "57",
    desc: "Video Booth Spinner 360 Photo Booth",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/57.jpg",
    link: "https://s.shopee.co.id/10oK5OgVCJ"
  },
  {
    id: "56",
    name: "56",
    desc: "Anti Gores Ceramic Matte Privacy Xiaomi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/56.jpg",
    link: "https://s.shopee.co.id/30ZOT3md3U"
  },
  {
    id: "55",
    name: "55",
    desc: "Selimut Dewasa Bulu Halus 150X200 Motif Tronxi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/55.jpg",
    link: "https://s.shopee.co.id/7AOxQhShbI"
  },
  {
    id: "54",
    name: "54",
    desc: "Pintu Kawat Kasa Nyamuk Sliding",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/54.jpg",
    link: "https://s.shopee.co.id/3fp5GFlF6Q"
  },
  {
    id: "53",
    name: "53",
    desc: "Botol Susu Anak Bayi Fleksibel",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/53.jpg",
    link: "https://s.shopee.co.id/2qFyGgyIW4"
  },
  {
    id: "51",
    name: "51",
    desc: "Meja Pintar Multi Teknologi Meja Viral Tronxi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/51.jpg",
    link: "https://s.shopee.co.id/705XEJn1YT"
  },
  {
    id: "50",
    name: "50",
    desc: "Sandwich Maker X11 Breakfast Machine",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/50.jpg",
    link: "https://s.shopee.co.id/60D01yd5nj"
  },
  {
    id: "49",
    name: "49",
    desc: "Oppo Find N2 Flip 5G 8/256Gb Dimensity",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/49.png",
    link: "https://s.shopee.co.id/4AlLqaFCFp"
  },
  {
    id: "48",
    name: "48",
    desc: "Penghilang Bulu Baju Alat Pencukur",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/48.png",
    link: "https://s.shopee.co.id/9AA1nksVgI"
  },
  {
    id: "47",
    name: "47",
    desc: "Blender Penghalus Beras / Multifungsi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/47.png",
    link: "https://s.shopee.co.id/6KpqQWChIS"
  },
  {
    id: "46",
    name: "46",
    desc: "Nike Air Force 1 Low Uv (Berubah Warna)",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/46.png",
    link: "https://s.shopee.co.id/BFD5AjeT4"
  },
  {
    id: "45",
    name: "45",
    desc: "Cctv Lampu V380 Pro 8Mp Kamera Cctv",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/45.png",
    link: "https://s.shopee.co.id/3q8VRb0Jvt"
  },
  {
    id: "43",
    name: "43",
    desc: "Blender Mini Wireless Chopper Multifungsi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/43.png",
    link: "https://s.shopee.co.id/8Kaunpo7cp"
  },
  {
    id: "42",
    name: "42",
    desc: "Plastik Penyimpanan Rak Toilet Multi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/42.png",
    link: "https://s.shopee.co.id/8zqbayasz5"
  },
  {
    id: "41",
    name: "41",
    desc: "Wiwu Waltz Rotating Keyboard With Touchpad",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/41.png",
    link: "https://s.shopee.co.id/7fLE0VF4dF"
  },
  {
    id: "40",
    name: "40",
    desc: "Tongkat Jalan & Tempat Duduk",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/40.png",
    link: "https://s.shopee.co.id/8fDlCJTsbm"
  },
  {
    id: "39",
    name: "39",
    desc: "Tas Backpack Ori Ransel Laptop Anti Air",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/39.png",
    link: "https://s.shopee.co.id/2LJhedar6g"
  },
  {
    id: "38",
    name: "38",
    desc: "Rak Dapur Rak Oven Microwave Lemari",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/38.png",
    link: "https://s.shopee.co.id/4fhcQOKKrz"
  },
  {
    id: "37",
    name: "37",
    desc: "Rice Cooker Digital Low Carbo 3 Liter",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/37.png",
    link: "https://s.shopee.co.id/2qFyF0VIGx"
  },
  {
    id: "36",
    name: "36",
    desc: "Extender Kepala Keran Universal Model Putar",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/36.png",
    link: "https://s.shopee.co.id/9UmsBFKLHZ"
  },
  {
    id: "34",
    name: "34",
    desc: "Gpd Micro Pc 8Gb/256Gb Pocket Mini",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/34.png",
    link: "https://s.shopee.co.id/AA2YyRDO5a"
  },
  {
    id: "33",
    name: "33",
    desc: "Masak Hot Sand Solo Dapat Dilepas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/33.png",
    link: "https://s.shopee.co.id/9KTRytURDm"
  },
  {
    id: "32",
    name: "32",
    desc: "Ip Camera Spy Cam Cctv Mini Wifi Usb",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/32.png",
    link: "https://s.shopee.co.id/7V1nnVX0d9"
  },
  {
    id: "31",
    name: "31",
    desc: "Rak Piring Wastafel Dapur Stainless Steel",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/31.png",
    link: "https://s.shopee.co.id/6fSgnxjB8z"
  },
  {
    id: "29",
    name: "29",
    desc: "Tenda Cotton Series Naturehike",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/29.png",
    link: "https://s.shopee.co.id/3fp5ER05gQ"
  },
  {
    id: "28",
    name: "28",
    desc: "Kitchen Sink Modern Kitchen Sink Luxury",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/28.png",
    link: "https://s.shopee.co.id/9f6INRdaI1"
  },
  {
    id: "27",
    name: "27",
    desc: "Plastik Cling Wrap Dispenser Alumunium Foil",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/27.png",
    link: "https://s.shopee.co.id/1LRAS795so"
  },
  {
    id: "26",
    name: "26",
    desc: "Magnetic Levitation Floating 360",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/26.png",
    link: "https://s.shopee.co.id/8pXBNsll44"
  },
  {
    id: "25",
    name: "25",
    desc: "Lampu Tidur Proyektor Astronaut Langit Malam",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/25.png",
    link: "https://s.shopee.co.id/AKLzAcybII"
  },
  {
    id: "24",
    name: "24",
    desc: "Bracket Serbaguna, Soket Multifungsi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/24.png",
    link: "https://s.shopee.co.id/qUtr9LQAf"
  },
  {
    id: "23",
    name: "23",
    desc: "Beanbag Diameter 150Cm",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/23.png",
    link: "https://s.shopee.co.id/6V9GbY9oAP"
  },
  {
    id: "22",
    name: "22",
    desc: "Apexel 18X Lensa Kamera Hp Zoom Cam Lensa",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/22.png",
    link: "https://s.shopee.co.id/2fwY2UNqJm"
  },
  {
    id: "21",
    name: "21",
    desc: "Underwater Sea Scooter Whiteshark",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/21.png",
    link: "https://s.shopee.co.id/6AWQCfQkAT"
  },
  {
    id: "20",
    name: "20",
    desc: "Handheld Student'S Scientific Calculator",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/20.png",
    link: "https://s.shopee.co.id/10oK39X8Vw"
  },
  {
    id: "18",
    name: "18",
    desc: "Mini Wireless Portable Label Thermal Printer",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/18.png",
    link: "https://s.shopee.co.id/4fhcPpteCf"
  },
  {
    id: "17",
    name: "17",
    desc: "Max Smart Projector Android Tv",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/17.png",
    link: "https://s.shopee.co.id/5ptZnxupoS"
  },
  {
    id: "16",
    name: "16",
    desc: "Line Friends Refrigerator Home Bar",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/16.png",
    link: "https://s.shopee.co.id/8zqbZl0dVJ"
  },
  {
    id: "15",
    name: "15",
    desc: "Nelson Sofa Recliner",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/15.png",
    link: "https://s.shopee.co.id/3VVf1cZeMa"
  },
  {
    id: "14",
    name: "14",
    desc: "Daster Panjang Busui Semata Kaki",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/14.png",
    link: "https://s.shopee.co.id/7AOxOKzcDh"
  },
  {
    id: "13",
    name: "13",
    desc: "Ekleva Yg220 Mini Portable Projector 1080P",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/13.png",
    link: "https://s.shopee.co.id/5Adszg1YMi"
  },
  {
    id: "12",
    name: "12",
    desc: "Gamis Muslimah Terbaru Mola Dress",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/12.png",
    link: "https://s.shopee.co.id/9zj8kMRabw"
  },
  {
    id: "11",
    name: "11",
    desc: "Set Dress Lingerie Sexy Bahan Lace Baju",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/11.png",
    link: "https://s.shopee.co.id/3LCEo5Via3"
  },
  {
    id: "10",
    name: "10",
    desc: "Pagar Anak Bayi Ocean Rocket",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/10.png",
    link: "https://s.shopee.co.id/8fDl9hKO1p"
  },
  {
    id: "9",
    name: "9",
    desc: "Sabun Cokelat/ Sabun Pakaian",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/9.png",
    link: "https://s.shopee.co.id/7KiNZED50O"
  },
  {
    id: "8",
    name: "8",
    desc: "Blender Juicer Buah Usb Rechargeable",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/8.png",
    link: "https://s.shopee.co.id/AKLz6eRyr0"
  },
  {
    id: "7",
    name: "7",
    desc: "Jas Hujan, Raincoat, Tebal",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/6.png",
    link: "https://s.shopee.co.id/40RvYxULE9"
  },
  {
    id: "6",
    name: "6",
    desc: "Kemeja Wanita / Basic Longsleeve",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/5.png",
    link: "https://s.shopee.co.id/5fa9Y0BxQg"
  },
  {
    id: "5",
    name: "5",
    desc: "Sprei Waterproof Import",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/4.png",
    link: "https://s.shopee.co.id/BFCzrxxqh"
  },
  {
    id: "4",
    name: "4",
    desc: "Gamis Dress Wanita Kekinian / Dress Murah",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/3.png",
    link: "https://s.shopee.co.id/2B0HNUZxnK"
  },
  {
    id: "3",
    name: "3",
    desc: "Es Krim Aice 8 Liter Ice Cream",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/2.png",
    link: "https://s.shopee.co.id/6fSgjn0Uhl"
  },
  {
    id: "2",
    name: "2",
    desc: "Tboss [80X150Cm] Handuk Mandi Extra Besar",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/7.png",
    link: "https://vt.tiktok.com/ZSYkqgGVL/?page=Mall"
  },
  {
    id: "1",
    name: "1",
    desc: "Gorden Blackout Gordeng Polos Gordyn Jendela",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Gorden Blackout Gordeng Polos Gordyn Jendela .png",
    link: "https://s.shopee.co.id/30ZOMA5s87"
  },
  {
    id: "Hubungi Kami",
    name: "Hubungi Kami",
    desc: "Pasang Iklan di Polimeritas",
    subDesc: "polimeritas group",
    image: "/img/Partner2/Product-Polimeritas.png",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20ingin%20pasang%20iklan%20"
  },
  {
    id: "Toko Polimeritas",
    name: "Toko Polimeritas",
    desc: "Pesan Disini",
    subDesc: "polimeritas group",
    image: "/img/Partner2/Toko Polimeritas.jpg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20ingin%20beli%20bahan sembako%20"
  },
  {
    id: "Layanan Konsultasi CV",
    name: "Layanan Konsultasi CV",
    desc: "Pesan Disini",
    subDesc: "polimeritas group",
    image: "/img/Partner2/Konsultasi CV Polimeritas.jpg",
    link: "https://www.instagram.com/infokanorangdalam"
  },
  {
    id: "Layanan Konsultasi Usaha",
    name: "Layanan Konsultasi Usaha",
    desc: "Pesan Disini",
    subDesc: "polimeritas group",
    image: "/img/Partner2/ukm dan umkm.jpg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20ingin%20konsultasi Usaha%20"
  }
];