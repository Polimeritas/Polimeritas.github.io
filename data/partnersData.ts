export interface Partner {
  id: number | string;
  name: string;
  desc: string;
  subDesc?: string;
  image: string;
  link: string;
  category?: 'product' | 'partner' | 'coming-soon' | 'industri' | 'umum';
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
    desc: "Bantu Kamu Lebih Dekat",
    subDesc: "polimeritas group",
    image: "/img/Partner2/gabung di polimeritas.png",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20polimeritas.com!%20Bantuin%20Saya%20Dong!%20"
  },
  {
    id: "konsultasi-cv",
    name: "Layanan Pengembangan Diri",
    desc: "Pesan Disini",
    subDesc: "polimeritas group",
    image: "/img/Partner2/Konsultasi CV Polimeritas.jpg",
    link: "https://www.instagram.com/infokanorangdalam"
  },
  {
    id: "toko-polimeritas",
    name: "Layanan Produk",
    desc: "Pesan Disini",
    subDesc: "polimeritas group",
    image: "/img/Partner2/Toko Polimeritas.jpg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20ingin%20konsultasi produk%20"
  },
  {
    id: "konsultasi-usaha",
    name: "Layanan Pengembangan Usaha",
    desc: "Pesan Disini",
    subDesc: "polimeritas group",
    image: "/img/Partner2/ukm dan umkm.jpg",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20ingin%20konsultasi usaha%20"
  },
  {
    id: "Partner Polimeritas",
    name: "BEST SELLER",
    desc: "Kurban",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kurban.jpg",
    link: "https://qurban.amalsholeh.com/?ref=bJmk9"
  },
  {
    id: "Partner Polimeritas",
    name: "BEST SELLER",
    desc: "Sendal Jepit Terapi",
    subDesc: "Indonesia",
    image: "/img/Partner2/Sendal Jepit Terapi.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7623602472594001172"
  },
  {
    id: "Partner Polimeritas",
    name: "BEST SELLER",
    desc: "MITOCHIBA Chopper TWINCHOP CH60 500ml",
    subDesc: "Indonesia",
    image: "/img/Partner2/MITOCHIBA Chopper TWINCHOP CH60 500ml.jpg",
    link: "https://shopee.co.id/product/24544583/29579289396?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElAAAAAwvZZaJN-01M1gdBG5Q_naJXhDWXxMkvhx0TCxlj4rNxqfdKFZu7N8OiJHZXHhMXfxf9bJcaZZN4e_gQBbUCDQ8rqxc4K-fxQ2ygYBhvCAOPzbTLIVbwF7pHK16OGHV1AMoEI1s-G4LGkNr2Fj1Mmasj3yWDgd5h5y3HlcupIrwwA3tIedvZfhUjBuW9-VMql4&mmp_pid=an_11393951005&uls_trackid=55pv8ejo00vc&utm_campaign=id_DW4TQ395SP&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezmtnzbmzq7d"
  },
  {
    id: "Partner Polimeritas",
    name: "BEST SELLER",
    desc: "Dahlia - Automatic Refill",
    subDesc: "Indonesia",
    image: "/img/Partner2/Dahlia - Automatic Refill.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7635977337875696916"
  },
  {
    id: "Partner Polimeritas",
    name: "BEST SELLER",
    desc: "Lem Penambal Gigi Bolong Dengan Etching Biru",
    subDesc: "Indonesia",
    image: "/img/Partner2/Lem Penambal Gigi Bolong Dengan Etching Biru.jpg",
    link: "https://shopee.co.id/product/17902952/3979182381?credential_token=2oGr6iJvC1uMF3S9nXAC3WHQNJ2gNMzn9oJPvQwqN&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEkgAAAAyZ31oxlq6MbsId1h3HgCyarscmue1S3UJ-ugMV3Hmn3CiF2ZRtUVSJDGkBhvhfzVubrja2mw5nxBYGMQwNONQMgamAlFst7jQ39OGnyPebs_3n66PyPWYo9Kq4W5ZsodumCnI6eIi-dMd78LDM_0dj8xtYXggCTFEBBZsqC743B3tvCclOe-1_HRp2Hdh0&mmp_pid=an_11393951005&uls_trackid=55k1bca601ci&utm_campaign=id_zG5eylnHzv&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evk9kysj6auu"
  },
  {
    id: "Partner Polimeritas",
    name: "Partner Polimeritas-Umum",
    desc: "Lele Universe - Rambak Kulit Lele",
    subDesc: "Indonesia",
    image: "/img/Partner2/Lele Universe - Rambak Kulit Lele.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7645197943057796372"
  },
  {
    id: "Partner Polimeritas",
    name: "Partner Polimeritas-Umum",
    desc: "Roti Bangdo",
    subDesc: "Indonesia",
    image: "/img/Partner2/Berbagi Roti Bareng BangDoIndonesia.jpg",
    link: "https://www.instagram.com/reel/DGUyG7SyRnF/"
  },
  {
    id: "Partner Polimeritas",
    name: "Partner Polimeritas-Umum",
    desc: "Custom Cosplay Eko",
    subDesc: "Tulungagung",
    image: "/img/Partner2/Custom Cosplay Eko.jpg",
    link: "https://www.instagram.com/reel/DOYh1LikgEp/"
  },
  {
    id: "Partner Polimeritas",
    name: "Partner Polimeritas-Umum",
    desc: "Kinrose Craft Ecoprint",
    subDesc: "Jakarta",
    image: "/img/Partner2/kinrose.jpg",
    link: "https://www.instagram.com/reel/DHVkFrayDdO/"
  },
  {
    id: "Partner Polimeritas",
    name: "Partner Polimeritas-Umum",
    desc: "Ketapang Manis - Ecoprint",
    subDesc: "Bangka Belitung",
    image: "/img/Partner2/ketapang manis ecoprint.jpg",
    link: "https://www.instagram.com/reel/DHb9znaTQoq/"
  },
  {
    id: "Partner Polimeritas",
    name: "BEST SELLER",
    desc: "Telur ayam negeri 1 kg",
    subDesc: "Indonesia",
    image: "/img/Partner2/Telur ayam negeri 1 kg.jpg",
    link: "https://s.shopee.co.id/1Ld6fehp1Q"
  },
  {
    id: "Partner Polimeritas",
    name: "BEST SELLER",
    desc: "Bawang Merah Jatim Berkualitas Ukuran Campur",
    subDesc: "Indonesia",
    image: "/img/Partner2/Bawang Merah Jatim Berkualitas Ukuran Campur.jpg",
    link: "https://shopee.co.id/opaanlp/1462373945/28324853887?__mobile__=1&credential_token=8wEwiDL7YE5VveyQV9K2Q7Su2jaXymUe72ofudmFme&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAzay3Kj5wggC9XJwGny_Y1Ri5Uf_xxc4c7lqkEMHHQi7SCJcUB8aasPcrkhT256h0y95OvjF67y9p-LDwFTICZd0BJNCagknokIx7PlfvHoWuo3L7BEpejZJt1kGkEvHXgAodk2CypzzESrQzid-2fPjA8JMpv3cYER-6AmhsTmKyAD66xQQ5nYMTz3z54iFq0TlqOR&mmp_pid=an_11393951005&uls_trackid=55k2mkdk037h&utm_campaign=id_kvvTzv3Zxb&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evm8vsm2n4u5"
  },
  {
    id: "Partner Polimeritas",
    name: "BEST SELLER",
    desc: "BAWANG GORENG ASLI SUMENEP",
    subDesc: "Indonesia",
    image: "/img/Partner2/BAWANG GORENG ASLI SUMENEP.jpg",
    link: "https://shopee.co.id/opaanlp/1031236160/24172114053?__mobile__=1&affiliate_seller_voucher_token=8bCnE5QAmVbR3Xx4Puszr1vQBVhyXtvranTtZLrTzA&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAzIaINKdq8aylR0OjHhbMBM2FHi-CnuhMA8UXFsyh_tV3sakOF2GxvWniiuMhE3GF4qkL88QhxkwOi47vvWbUXZe-rpqciRyhRPZQMws3QZYg9Dc2DvFfAVWyiort0qqKg-IXBpGC6OQjPiKS4_u8CZk2o2UP5fDSFk9dmymUhTOFDrcq3M5MOeIsOPakZu8WnbZ2Sh&mmp_pid=an_11393951005&uls_trackid=55k2mp9500ci&utm_campaign=id_IhhimTjTc3&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evm8zrryxdc3"
  },
  {
    id: "Partner Polimeritas",
    name: "BEST SELLER",
    desc: "KUNYIT Fresh Bersih Murah Kaya Manfaat 1 Kg",
    subDesc: "Indonesia",
    image: "/img/Partner2/KUNYIT Fresh Bersih Murah Kaya Manfaat 1 Kg.jpg",
    link: "https://shopee.co.id/opaanlp/1444174639/25341347335?__mobile__=1&affiliate_seller_voucher_token=8bCnE5QAmVgk6scPnzcTmykocczUbBbuoFMTobrjoL&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAxNmWYMcnQZSdJ_LnutJa2OJp6DHsmLV3C4TiQAkDbD5ZZ0nl6j7tF_1GB6z3PKBceok9Ktef-YL9lNk5O66LGQZXlQ4hYjuzhRujj4iVjKA1WZfRzyXAihMPkZRihdBCOtnMlAjGLGhFHyfTEBsN_SFix4oCMRFe2tWEXIfUCukNKwdg3m-mo-9kPakg3-c98dAqIQ&mmp_pid=an_11393951005&uls_trackid=55k2mtat00td&utm_campaign=id_o1XwF9RsZf&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evm943ih25ao"
  },
  {
    id: "Partner Polimeritas",
    name: "BEST SELLER",
    desc: "Montana pensil 2b",
    subDesc: "Jabodetabek",
    image: "/img/Partner2/Montana pensil 2b.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7647082321111223572"
  },
  {
    id: "Partner Polimeritas",
    name: "Partner Polimeritas-Umum",
    desc: "Lu Li Hortifulli Hampers by ESC",
    subDesc: "Jabodetabek",
    image: "/img/Partner2/Lu Li Hortifulli Hampers by ESC.png",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20mau%20beli%20Hampers%20"
  },
  {
    id: "Partner Polimeritas",
    name: "Partner Polimeritas-Umum",
    desc: "Miniatur Gerobak dan Jok",
    subDesc: "Bandung",
    image: "/img/Partner2/jokracing.jpg",
    link: "https://www.instagram.com/reel/DP6fo6-EtIS/"
  },
  {
    id: "Partner Polimeritas",
    name: "Partner Polimeritas-Umum",
    desc: "Nasi Kuning Mba Selvi",
    subDesc: "Indonesia",
    image: "/img/Partner2/Nasi Kuning Mba Silvi.jpg",
    link: "https://www.instagram.com/reel/DKyUFdWTW1h/"
  },
  {
    id: "Partner Polimeritas",
    name: "Partner Polimeritas-Umum",
    desc: "Handmade Rajutan",
    subDesc: "Jakarta",
    image: "/img/Partner2/Handmade Rajutan.jpg",
    link: "https://www.instagram.com/reel/DHlZ0bHzvkg/"
  },
  {
    id: "Partner Polimeritas",
    name: "BEST SELLER",
    desc: "Bunga Mawar Plastik 1 Tangkai",
    subDesc: "Jabodetabek",
    image: "/img/Partner2/Bunga Mawar Plastik.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7647054813905030420"
  },
{
    id: "736",
    name: "736",
    desc: "5KG Bungkil Kopra Asli 100%",
    subDesc: "Indonesia",
    image: "/img/Partner2/5KG Bungkil Kopra Asli 100%.jpg",
    link: "https://s.shopee.co.id/50YiLplbp0"
},
{
    id: "735",
    name: "735",
    desc: "Cocopeat Kemasan Karung 50 Kg",
    subDesc: "Indonesia",
    image: "/img/Partner2/Cocopeat Kemasan Karung 50 Kg.jpg",
    link: "https://s.shopee.co.id/1gIGNj64kD"
},
{
    id: "734",
    name: "734",
    desc: "Soil Block Coco Peat Pellet",
    subDesc: "Indonesia",
    image: "/img/Partner2/Soil Block Coco Peat Pellet.jpg",
    link: "https://s.shopee.co.id/112ZaVzY16"
},
{
    id: "733",
    name: "733",
    desc: "Bungkil Kopra Protein 21% 5kg",
    subDesc: "Indonesia",
    image: "/img/Partner2/Bungkil Kopra Protein 21% 5kg.jpg",
    link: "https://s.shopee.co.id/4LJ1YeVPAe"
},
{
    id: "732",
    name: "732",
    desc: "Cocopeat Media Tanam Hidroponik500 Gram",
    subDesc: "Indonesia",
    image: "/img/Partner2/Cocopeat Media Tanam Hidroponik500 Gram.jpg",
    link: "https://s.shopee.co.id/1VyqBSNhum"
},
{
    id: "731",
    name: "731",
    desc: "HolyCat Labs Royale Care Fish Oil Minyak Ikan Premium Vitamin Kucing Dan Anjing 100 Capsul",
    subDesc: "Indonesia",
    image: "/img/Partner2/HolyCat Labs Royale Care Fish Oil Minyak Ikan Premium Vitamin Kucing Dan Anjing 100 Capsul.jpg",
    link: "https://s.shopee.co.id/2gAjJkkDlT"
},
{
    id: "730",
    name: "730",
    desc: "Mie Sedaap Soto 75gr isi 5 x 8 pack",
    subDesc: "Indonesia",
    image: "/img/Partner2/Mie Sedaap Soto 75gr isi 5 x 8 pack.jpg",
    link: "https://s.shopee.co.id/6AkWZp0uMB"
},
{
    id: "729",
    name: "729",
    desc: "Mama Lemon Sabun Cuci Piring Jeruk Nipis Pouch 650 gr",
    subDesc: "Indonesia",
    image: "/img/Partner2/Mama Lemon Sabun Cuci Piring Jeruk Nipis Pouch 650 gr.jpg",
    link: "https://s.shopee.co.id/8plHkOFBie"
},
{
    id: "728",
    name: "728",
    desc: "Tisu Basah Bayi Bebas alkohol Pure Water",
    subDesc: "Indonesia",
    image: "/img/Partner2/Tisu Basah Bayi Bebas alkohol Pure Water.jpg",
    link: "https://s.shopee.co.id/70JdZ2LyCl"
},    
{
    id: "727",
    name: "727",
    desc: "TISU KING 360 HELAI TIDAK EMBOS, ISI 10 PACK",
    subDesc: "Indonesia",
    image: "/img/Partner2/TISU KING 360 HELAI TIDAK EMBOS, ISI 10 PACK.jpg",
    link: "https://s.shopee.co.id/3LQLCJfMuW"
},    
{
    id: "726",
    name: "726",
    desc: "ANTI CAKAR KUCING !! COVER JOK MOTOR",
    subDesc: "Indonesia",
    image: "/img/Partner2/ANTI CAKAR KUCING !! COVER JOK MOTOR.jpg",
    link: "https://s.shopee.co.id/3qMa3BOUPS"
},  
{
    id: "725",
    name: "725",
    desc: "HC Tempat Penyimpanan Bed Cover Bamboo",
    subDesc: "Indonesia",
    image: "/img/Partner2/HC Tempat Penyimpanan Bed Cover Bamboo.jpg",
    link: "https://s.shopee.co.id/30nT3jGuZb"
},  
{
    id: "724",
    name: "724",
    desc: "Lap Cempal Tebal Anti Panas Kain Cempal Anyam",
    subDesc: "Indonesia",
    image: "/img/Partner2/Lap Cempal Tebal Anti Panas Kain Cempal Anyam.jpg",
    link: "https://s.shopee.co.id/7VFsQ1QKB7"
},  
{
    id: "723",
    name: "723",
    desc: "Parutan Stainless Potong Iris Sayur Buah Serbaguna",
    subDesc: "Indonesia",
    image: "/img/Partner2/Parutan Stainless Potong Iris Sayur Buah Serbaguna.jpg",
    link: "https://s.shopee.co.id/W685BC9gC"
},  
{
    id: "722",
    name: "722",
    desc: "ASTAXANTHIN GEL Haematococcus Pluvialis Astaxanthin",
    subDesc: "Indonesia",
    image: "/img/Partner2/ASTAXANTHIN GEL Haematococcus Pluvialis Astaxanthin.jpg",
    link: "https://s.shopee.co.id/4VcGqYS4sg"
},  
{
    id: "721",
    name: "721",
    desc: "Myiwe Hair Coloring Shampoo Sisir Penghilang Uban",
    subDesc: "Indonesia",
    image: "/img/Partner2/Myiwe Hair Coloring Shampoo Sisir Penghilang Uban.jpg",
    link: "https://s.shopee.co.id/9fKN04T6r8"
},  
{
    id: "720",
    name: "720",
    desc: "THAY Sandal Baim Wanita Kasual Sendal",
    subDesc: "Indonesia",
    image: "/img/Partner2/THAY Sandal Baim Wanita Kasual Sendal.jpg",
    link: "https://s.shopee.co.id/AKa3nJdVKb"
},  
{
    id: "719",
    name: "719",
    desc: "POOCHA Kaleng Makanan Basah Ekonomis Makanan Kaleng Kucing 400 Gram Cat Food Wet Food",
    subDesc: "Indonesia",
    image: "/img/Partner2/POOCHA Kaleng Makanan Basah Ekonomis Makanan Kaleng Kucing 400 Gram Cat Food Wet Food.jpg",
    link: "https://s.shopee.co.id/1LfAQutejV"
},  
{
    id: "718",
    name: "718",
    desc: "BUBUK CATNIP KUCING - CATNIP CATMINT KUCING",
    subDesc: "Indonesia",
    image: "/img/Partner2/BUBUK CATNIP KUCING - CATNIP CATMINT KUCING.jpg",
    link: "https://s.shopee.co.id/9zx8kvBqLd"
},  
{
    id: "717",
    name: "717",
    desc: "Kotak penyimpanan bulu kucing",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kotak penyimpanan bulu kucing.jpg",
    link: "https://s.shopee.co.id/6VNGaW9mll"
},  
{
    id: "716",
    name: "716",
    desc: "Tas Ransel Ragdoll Kucing Lucu",
    subDesc: "Indonesia",
    image: "/img/Partner2/Tas Ransel Ragdoll Kucing Lucu.jpg",
    link: "https://s.shopee.co.id/112K2RYjCE"
},  
{
    id: "715",
    name: "715",
    desc: "kuping harimau stiker motor lucu",
    subDesc: "Indonesia",
    image: "/img/Partner2/kuping harimau stiker motor lucu.jpg",
    link: "https://s.shopee.co.id/4LIm0bBoPp"
},   
{
    id: "714",
    name: "714",
    desc: "WANJIALE Alas Kandang JARING Anabul",
    subDesc: "Indonesia",
    image: "/img/Partner2/WANJIALE Alas Kandang JARING Anabul.jpg",
    link: "https://s.shopee.co.id/112K2YOTaP"
}, 
{
    id: "713",
    name: "713",
    desc: "Paket Mandi Grooming Kucing 6in1",
    subDesc: "Indonesia",
    image: "/img/Partner2/Paket Mandi Grooming Kucing 6in1.jpg",
    link: "https://s.shopee.co.id/8plBMzKFGz"
}, 
{
    id: "712",
    name: "712",
    desc: "APEN Penjepit Silikon Anti Panas Sarung Tangan Pegangan Panci Karet Perlengkapan Dapur Barang Unik",
    subDesc: "Indonesia",
    image: "/img/Partner2/APEN Penjepit Silikon Anti Panas Sarung Tangan Pegangan Panci Karet Perlengkapan Dapur Barang Unik.jpg",
    link: "https://s.shopee.co.id/111y3lCEPJ"
}, 
{
    id: "711",
    name: "711",
    desc: "Bendera Plastik isi 100pics 1pack",
    subDesc: "Indonesia",
    image: "/img/Partner2/Bendera Plastik isi 100pics 1pack.jpg",
    link: "https://s.shopee.co.id/1LeoSLy1tw"
}, 
{
    id: "710",
    name: "710",
    desc: "Sikat Lantai dengan Pegangan Panjang dan rotasi 180 derajat",
    subDesc: "Indonesia",
    image: "/img/Partner2/Sikat Lantai dengan Pegangan Panjang dan rotasi 180 derajat.jpg",
    link: "https://s.shopee.co.id/7AcbP5JxPk"
}, 
{
    id: "709",
    name: "709",
    desc: "Air Milk Tea Bucket 6 8 10 12 Liter Tahan Panas Dingin",
    subDesc: "Indonesia",
    image: "/img/Partner2/Air Milk Tea Bucket 6 8 10 12 Liter Tahan Panas Dingin.jpg",
    link: "https://s.shopee.co.id/2qTcF5s2I4"
}, 
{
    id: "708",
    name: "708",
    desc: "REFILL TERASI BANGKA SANGRAI KUALITAS SUPER ASLI BANGKA",
    subDesc: "Indonesia",
    image: "/img/Partner2/REFILL TERASI BANGKA SANGRAI KUALITAS SUPER ASLI BANGKA.jpg",
    link: "https://s.shopee.co.id/1VyEe6fiFY"
}, 
{
    id: "707",
    name: "707",
    desc: "Rusip Sungai Pedade Toboali Bangka 300 ml",
    subDesc: "Indonesia",
    image: "/img/Partner2/Rusip Sungai Pedade Toboali Bangka 300 ml.jpg",
    link: "https://s.shopee.co.id/6Ak4ChsGxr"
}, 
{
    id: "706",
    name: "706",
    desc: "KOPI BANGKA SUNGAILIAT - 100% PURE ROBUSTA COFFEE",
    subDesc: "Indonesia",
    image: "/img/Partner2/KOPI BANGKA SUNGAILIAT - 100% PURE ROBUSTA COFFEE.jpg",
    link: "https://s.shopee.co.id/3qM9QR1RHA"
}, 
{
    id: "705",
    name: "705",
    desc: "Terasi Belacan Sangrai Asli dari Toboali",
    subDesc: "Indonesia",
    image: "/img/Partner2/Terasi Belacan Sangrai Asli dari Toboali.jpg",
    link: "https://s.shopee.co.id/1BLOFYkJco"
}, 
{
    id: "704",
    name: "704",
    desc: "Botol Tumbler 900ml Stainless Steel Tahan Panas Dingin",
    subDesc: "Indonesia",
    image: "/img/Partner2/Botol Tumbler 900ml Stainless Steel Tahan Panas Dingin.jpg",
    link: "https://s.shopee.co.id/9pdLOcieCS"
},
{
    id: "703",
    name: "703",
    desc: "[CID] Kipas Angin Mini Portable USB Genggam",
    subDesc: "Indonesia",
    image: "/img/Partner2/[CID] Kipas Angin Mini Portable USB Genggam.jpg",
    link: "https://s.shopee.co.id/LmG5BgoV6"
},
{
    id: "702",
    name: "702",
    desc: "Tumbler Jepang Botol Minum Macaroon Kaca 500mL",
    subDesc: "Indonesia",
    image: "/img/Partner2/Tumbler Jepang Botol Minum Macaroon Kaca 500mL.jpg",
    link: "https://s.shopee.co.id/gP6TpKJs4"
},
{
    id: "701",
    name: "701",
    desc: "Rak Dapur 4 Susun Rak Troli Serbaguna",
    subDesc: "Indonesia",
    image: "/img/Partner2/Rak Dapur 4 Susun Rak Troli Serbaguna.jpg",
    link: "https://s.shopee.co.id/4fvFFCczXb"
},
{
    id: "700",
    name: "700",
    desc: "(CSL)Rak Susun Serbaguna 4 Tingkat Dengan Rak Kamar Mandi Bahan Plastik Portable Rak Dapur",
    subDesc: "Indonesia",
    image: "/img/Partner2/(CSL)Rak Susun Serbaguna 4 Tingkat Dengan Rak Kamar Mandi Bahan Plastik Portable Rak Dapur.jpg",
    link: "https://s.shopee.co.id/3qM7jxqpbG"
},
{
    id: "699",
    name: "699",
    desc: "Benih Krokot Moserose 100 Butir",
    subDesc: "Indonesia",
    image: "/img/Partner2/Benih Krokot Moserose 100 Butir.jpg",
    link: "https://s.shopee.co.id/5fnlvMFtbd"
},
{
    id: "698",
    name: "698",
    desc: "MASKER DUCKBILL FACEMASK isi 50",
    subDesc: "Indonesia",
    image: "/img/Partner2/MASKER DUCKBILL FACEMASK isi 50.jpg",
    link: "https://s.shopee.co.id/2Vqk9aCVda"
},
{
    id: "697",
    name: "697",
    desc: "Midea Air Purifier Portable KJ300G-A1S",
    subDesc: "Indonesia",
    image: "/img/Partner2/Midea Air Purifier Portable KJ300G-A1S.jpg",
    link: "https://s.shopee.co.id/7VFQ5sbGk9"
},
{
    id: "696",
    name: "696",
    desc: "[BANTAL CONTOUR] TUSEN SmartSleep Moduflex",
    subDesc: "Indonesia",
    image: "/img/Partner2/[BANTAL CONTOUR] TUSEN SmartSleep Moduflex.jpg",
    link: "https://s.shopee.co.id/6fgJ6JxfoL"
},
{
    id: "695",
    name: "695",
    desc: "1 Pack 50 pcs Protection Sleeve Besar",
    subDesc: "Indonesia",
    image: "/img/Partner2/1 Pack 50 pcs Protection Sleeve Besar.jpg",
    link: "https://s.shopee.co.id/4Ayy7hkye7"
},
{
    id: "694",
    name: "694",
    desc: "Tricycle Sepeda Anak Roda Tiga RY-3082",
    subDesc: "Indonesia",
    image: "/img/Partner2/Tricycle Sepeda Anak Roda Tiga RY-3082.jpg",
    link: "https://s.shopee.co.id/5VULi7XuSn"
},
{
    id: "693",
    name: "693",
    desc: "Keripik Kimpul Talas Belitung rasa Pedas Premium",
    subDesc: "Indonesia",
    image: "/img/Partner2/Keripik Kimpul Talas Belitung rasa Pedas Premium.jpg",
    link: "https://s.shopee.co.id/50Y4e82v3q"
},
{
    id: "692",
    name: "692",
    desc: "ketam isi belitung 10 pcs",
    subDesc: "Indonesia",
    image: "/img/Partner2/ketam isi belitung 10 pcs.jpg",
    link: "https://s.shopee.co.id/40fXSK63Vb"
},
{
    id: "691",
    name: "691",
    desc: "Keripik sukun stik Dua mutiara asli bangka belitung",
    subDesc: "Indonesia",
    image: "/img/Partner2/Keripik sukun stik Dua mutiara asli bangka belitung.jpg",
    link: "https://s.shopee.co.id/2VqjfbNx1i"
},
{
    id: "690",
    name: "690",
    desc: "Krispi Kulit Ikan 55gr",
    subDesc: "Indonesia",
    image: "/img/Partner2/Krispi Kulit Ikan 55gr.jpg",
    link: "https://s.shopee.co.id/1BLM5B5fdE"
},
{
    id: "689",
    name: "689",
    desc: "Paket isi 5 Kemplang Bangka mini - Kerupuk Kemplang",
    subDesc: "Indonesia",
    image: "/img/Partner2/Paket isi 5 Kemplang Bangka mini - Kerupuk Kemplang.jpg",
    link: "https://s.shopee.co.id/3B6QSKPTo4"
},
{
    id: "688",
    name: "688",
    desc: "Kemplang Bangka Keriting 125g Kerupuk Ikan Gurih",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kemplang Bangka Keriting 125g Kerupuk Ikan Gurih.jpg",
    link: "https://s.shopee.co.id/6Ak21ragXD"
},
{
    id: "687",
    name: "687",
    desc: "Kecap Asin Bangka Cap Siong Gajah Kecil 300ml",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kecap Asin Bangka Cap Siong Gajah Kecil 300ml.jpg",
    link: "https://s.shopee.co.id/BSosrH7xU"
},
{
    id: "686",
    name: "686",
    desc: "TNW Lampu Foto Lampu LED Video Light",
    subDesc: "Indonesia",
    image: "/img/Partner2/TNW Lampu Foto Lampu LED Video Light.jpg",
    link: "https://s.shopee.co.id/BSor8u9kS"
},
{
    id: "685",
    name: "685",
    desc: "Kain Batik Katun 40's Premium",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kain Batik Katun 40's Premium.jpg",
    link: "https://s.shopee.co.id/20uT2NIaMy"
},
{
    id: "684",
    name: "684",
    desc: "HAFIZAH Setelan Baju Adat Anak Bangka Belitung",
    subDesc: "Indonesia",
    image: "/img/Partner2/HAFIZAH Setelan Baju Adat Anak Bangka Belitung.jpg",
    link: "https://s.shopee.co.id/W5fFe93GK"
}, 
{
    id: "683",
    name: "683",
    desc: "GENIO All Purpose Cleaner - Pembersih Sepatu",
    subDesc: "Indonesia",
    image: "/img/Partner2/GENIO All Purpose Cleaner - Pembersih Sepatu.jpg",
    link: "https://s.shopee.co.id/111vqZlz0K"
}, 
{
    id: "682",
    name: "682",
    desc: "Bulumata Tanpa Lem Korean Eyelashes",
    subDesc: "Indonesia",
    image: "/img/Partner2/Bulumata Tanpa Lem Korean Eyelashes.jpg",
    link: "https://s.shopee.co.id/50Y4byCV7I"
}, 
{
    id: "681",
    name: "681",
    desc: "Senar Pancing Nylon Polymer 500M",
    subDesc: "Indonesia",
    image: "/img/Partner2/Senar Pancing Nylon Polymer 500M.jpg",
    link: "https://s.shopee.co.id/20snfXBP8S"
}, 
{
    id: "680",
    name: "680",
    desc: "Cernit Number One Polymer Clay",
    subDesc: "Indonesia",
    image: "/img/Partner2/Cernit Number One Polymer Clay.jpg",
    link: "https://s.shopee.co.id/1qZNTEosd2"
}, 
{
    id: "679",
    name: "679",
    desc: "Wati Lakban Anti Bocor",
    subDesc: "Indonesia",
    image: "/img/Partner2/Wati Lakban Anti Bocor.jpg",
    link: "https://s.shopee.co.id/70HTclpv7L"
},  
{
    id: "678",
    name: "678",
    desc: "Mote Manik Polymer Donut 6mm Untuk Aksesoris",
    subDesc: "Indonesia",
    image: "/img/Partner2/Mote Manik Polymer Donut 6mm Untuk Aksesoris.jpg",
    link: "https://s.shopee.co.id/3VhbSMZDgS"
},  
{
    id: "677",
    name: "677",
    desc: "setrika uap portable sederhana 3in1",
    subDesc: "Indonesia",
    image: "/img/Partner2/setrika uap portable sederhana 3in1.jpg",
    link: "https://s.shopee.co.id/2LVe3R8jFV"
},
{
    id: "676",
    name: "676",
    desc: "Goto Shane Milk Frother Hand Mixer",
    subDesc: "Indonesia",
    image: "/img/Partner2/Goto Shane Milk Frother Hand Mixer.jpg",
    link: "https://s.shopee.co.id/5L9FczMy1p"
},
{
    id: "675",
    name: "675",
    desc: "Mesin Cuci Mini Portable",
    subDesc: "Indonesia",
    image: "/img/Partner2/Mesin Cuci Mini Portable.jpg",
    link: "https://s.shopee.co.id/30lKqiajuq"
},
{
    id: "674",
    name: "674",
    desc: "Alat Pengusir Pembasmi Nyamuk",
    subDesc: "Indonesia",
    image: "/img/Partner2/Alat Pengusir Pembasmi Nyamuk.jpg",
    link: "https://s.shopee.co.id/4qCz26hWAF"
},
{
    id: "673",
    name: "673",
    desc: "Wimpy NARA Polymer Clay Fresh",
    subDesc: "Indonesia",
    image: "/img/Partner2/Wimpy NARA Polymer Clay Fresh.jpg",
    link: "https://s.shopee.co.id/40ds1vUGLk"
},
{
    id: "672",
    name: "672",
    desc: "PLASTIK POLYMAILER HITAM PACKING",
    subDesc: "Indonesia",
    image: "/img/Partner2/PLASTIK POLYMAILER HITAM PACKING.jpg",
    link: "https://s.shopee.co.id/8KmrBt2QI3"
},
{
    id: "671",
    name: "671",
    desc: "KokoCoat PCB Conformal Coating Anti Konslet",
    subDesc: "Indonesia",
    image: "/img/Partner2/KokoCoat PCB Conformal Coating Anti Konslet.jpg",
    link: "https://s.shopee.co.id/8fPhaUwgZF"
},
{
    id: "670",
    name: "670",
    desc: "Fumu Plastik Packing Baju 30X40CM",
    subDesc: "Indonesia",
    image: "/img/Partner2/Fumu Plastik Packing Baju 30X40CM.jpg",
    link: "https://s.shopee.co.id/6AiMbtrQGH"
},
{
    id: "669",
    name: "669",
    desc: "Pasak bumi kalimantan",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pasak bumi kalimantan.jpg",
    link: "https://s.shopee.co.id/1qZN8LcKHw"
},
{
    id: "668",
    name: "668",
    desc: "Teh Rimpang JSR Syifacare",
    subDesc: "Indonesia",
    image: "/img/Partner2/Teh Rimpang JSR Syifacare.jpg",
    link: "https://s.shopee.co.id/6fectFZKkT"
},
{
    id: "667",
    name: "667",
    desc: "TEH KUNYIT,JAHE & SERAI",
    subDesc: "Indonesia",
    image: "/img/Partner2/TEH KUNYIT,JAHE & SERAI.jpg",
    link: "https://s.shopee.co.id/902XfZzOHQ"
},
{
    id: "666",
    name: "666",
    desc: "TEH DAUN KELOR ORGANIK MURNI 100%",
    subDesc: "Indonesia",
    image: "/img/Partner2/TEH DAUN KELOR ORGANIK MURNI 100%.jpg",
    link: "https://s.shopee.co.id/70HTHubJyu"
},
{
    id: "665",
    name: "665",
    desc: "Teh Daun Kumis Kucing 100% Original",
    subDesc: "Indonesia",
    image: "/img/Partner2/Teh Daun Kumis Kucing 100% Original.jpg",
    link: "https://s.shopee.co.id/7VDjpiC354"
},
{
    id: "664",
    name: "664",
    desc: "TEH DIET AMPUH",
    subDesc: "Indonesia",
    image: "/img/Partner2/TEH DIET AMPUH.jpg",
    link: "https://s.shopee.co.id/gNPhB2C80"
},
{
    id: "663",
    name: "663",
    desc: "Teh bunga Telang premium isi 5 celup",
    subDesc: "Indonesia",
    image: "/img/Partner2/Teh bunga Telang premium isi 5 celup.jpg",
    link: "https://s.shopee.co.id/3qKRT0q9Du"
},
{
    id: "662",
    name: "662",
    desc: "Teh Diet Matchana",
    subDesc: "Indonesia",
    image: "/img/Partner2/Teh Diet Matchana.jpg",
    link: "https://s.shopee.co.id/3g11Giv7c8"
},
{
    id: "661",
    name: "661",
    desc: "HIASAN DINDING MODERN AESTHETIC BURUNG MERAK",
    subDesc: "Indonesia",
    image: "/img/Partner2/HIASAN DINDING MODERN AESTHETIC BURUNG MERAK.jpg",
    link: "https://s.shopee.co.id/7KuJdX5whK"
},
{
    id: "660",
    name: "660",
    desc: "Ready Coklat Dubai Swiss Fru Kunafa Pistachio",
    subDesc: "Indonesia",
    image: "/img/Partner2/Ready Coklat Dubai Swiss Fru Kunafa Pistachio.jpg",
    link: "https://s.shopee.co.id/6py2owJnbG"
},
{
    id: "659",
    name: "659",
    desc: "JATIM SEDAAP Mie Goreng & Kuah (1 dus)",
    subDesc: "Indonesia",
    image: "/img/Partner2/JATIM SEDAAP Mie Goreng & Kuah (1 dus).jpg",
    link: "https://s.shopee.co.id/qgpfvqH0q"
},
{
    id: "658",
    name: "658",
    desc: "(Penjualan Laris) Kacang Panggang Sehat Campuran Mix Nut",
    subDesc: "Indonesia",
    image: "/img/Partner2/(Penjualan Laris) Kacang Panggang Sehat Campuran Mix Nut.jpg",
    link: "https://s.shopee.co.id/AAEUn6NlLc"
},
{
    id: "657",
    name: "657",
    desc: "BUMBU MASAK INSTAN (BMB) LANGSUNG DARI PABRIKNYA",
    subDesc: "Indonesia",
    image: "/img/Partner2/BUMBU MASAK INSTAN (BMB) LANGSUNG DARI PABRIKNYA.jpg",
    link: "https://s.shopee.co.id/4AxHe5koqB"
},
{
    id: "656",
    name: "656",
    desc: "Collagen Foot Cream 60g Krim Kaki Pecah Dan Kering",
    subDesc: "Indonesia",
    image: "/img/Partner2/Collagen Foot Cream 60g Krim Kaki Pecah Dan Kering.jpg",
    link: "https://s.shopee.co.id/2g8Toi3N01"
},
{
    id: "655",
    name: "655",
    desc: "Cermin Bunga Makeup Rias Standing Mirror Kaca Estetik",
    subDesc: "Indonesia",
    image: "/img/Partner2/Cermin Bunga Makeup Rias Standing Mirror Kaca Estetik.jpg",
    link: "https://s.shopee.co.id/AAEUkQcVDl"
},
{
    id: "654",
    name: "654",
    desc: "Alician Sisir Pelurus Rambut Portable",
    subDesc: "Indonesia",
    image: "/img/Partner2/Alician Sisir Pelurus Rambut Portable.jpg",
    link: "https://s.shopee.co.id/4qCyObATBL"
},
{
    id: "653",
    name: "653",
    desc: "HAN RIVER HRHD01BK Hair dryer 800W",
    subDesc: "Indonesia",
    image: "/img/Partner2/HAN RIVER HRHD01BK Hair dryer 800W.jpg",
    link: "https://s.shopee.co.id/30lKDCZeK9"
},
{
    id: "652",
    name: "652",
    desc: "Prasmanan Set Stainless Tutup Kaca 28x34 Lengkap",
    subDesc: "Indonesia",
    image: "/img/Partner2/Prasmanan Set Stainless Tutup Kaca 28x34 Lengkap.jpg",
    link: "https://s.shopee.co.id/8V6Gl8SA0Q"
},
{
    id: "651",
    name: "651",
    desc: "Sinda Panci Susu Anti lengket Panci",
    subDesc: "Indonesia",
    image: "/img/Partner2/Sinda Panci Susu Anti lengket Panci.jpg",
    link: "https://s.shopee.co.id/30lKCzs6Fc"
},
{
    id: "650",
    name: "650",
    desc: "UPHOME Panci Presto Alumunium Serbaguna With Steamer",
    subDesc: "Indonesia",
    image: "/img/Partner2/UPHOME Panci Presto Alumunium Serbaguna With Steamer.jpg",
    link: "https://s.shopee.co.id/AUrL8iobdD"
},
{
    id: "649",
    name: "649",
    desc: "HOMINDO Panci MPASI 4 Pcs",
    subDesc: "Indonesia",
    image: "/img/Partner2/HOMINDO Panci MPASI 4 Pcs.jpg",
    link:"https://s.shopee.co.id/60OvmSzLuD"
},
{
    id: "648",
    name: "648",
    desc: "Bantal Tidur Busa Memori Bantal Tidur Multifungsi",
    subDesc: "Indonesia",
    image: "/img/Partner2/Bantal Tidur Busa Memori Bantal Tidur Multifungsi.jpg",
    link: "https://shopee.co.id/product/530290336/57253578882?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAzRYFsWshtaZrkSpXrT-EoRd6q5E17BoNedMtttYQU9RYpbh-51_cw2g4QdDpRQAgChodEW-agRO-iaQecWGOKdZaUqmU9cT7WmFwZUHC5LFOCjAQE8LlSwIZWJKBU_f2SRbcWhs82Mce3WsMeQtfFNBE-07miwPHkqWv10TiaOgFqLaz9FIlHk82ivn4g1tAtlyw&mmp_pid=an_11393951005&uls_trackid=55q0lqch025c&utm_campaign=id_Y8qV0yuUNx&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eznuk5hhanvb"
},
{
    id: "647",
    name: "647",
    desc: "COOGER Sikat Kamar Mandi Elektrik 8IN1",
    subDesc: "Indonesia",
    image: "/img/Partner2/COOGER Sikat Kamar Mandi Elektrik 8IN1.jpg",
    link: "https://shopee.co.id/product/190374351/24739001062?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAy3cTTta_-tBgmo1cqDSteN1ddxx06_4ESU7HEiYmSWbi9JFJT_8dUded6PSsehJIYNsfWaDasqqCa2UVn7uWOC6uSJO7JsBPprV6Gr1BwZ5us2lGVIz720UyoLAhXnFo1r2WsM2UvhehU07k0t7pmmxxmyJxe1Xwxz0nYvWLF46pirVEvmbT4jBCU968MjhiNXdg&mmp_pid=an_11393951005&uls_trackid=55q0liud01vc&utm_campaign=id_Fspt1QWdzZ&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eznue2mguga3"
},
{
    id: "646",
    name: "646",
    desc: "Alat Pembersih Kipas Kemoceng Pembersih Kipas Angin",
    subDesc: "Indonesia",
    image: "/img/Partner2/Alat Pembersih Kipas Kemoceng Pembersih Kipas Angin.jpg",
    link: "https://shopee.co.id/product/1249445311/25932840316?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmAAAAAyyLcoWU64QojVcNWU81H2HJNw-hXID3kBwp8FQU0_ql5EcppgS94Q1EkUHlNDWWwMZ9vZYZ6XN9vgAn18A_FnEkt0oGFe70VoHjQkdiXIrUHfD300bcoD68PPkIWhaT6v-9UtJR0lIeb5tKDvF9BdoOjIic1ullKkUd7Vg3N5MU6Sy3Hx4cX8YRnhpwaacYqX1soBA&mmp_pid=an_11393951005&uls_trackid=55q0l9m9021s&utm_campaign=id_VTQ7dHdoNJ&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eznu6hcy3wt4"
},
{
    id: "645",
    name: "645",
    desc: "Sandaran Pinggang Sofa Boneka Husky",
    subDesc: "Indonesia",
    image: "/img/Partner2/Sandaran Pinggang Sofa Boneka Husky Edition.jpg",
    link: "https://shopee.co.id/product/1585148524/40908265398?affiliate_seller_voucher_token=8bCnE5QAnHudrwW8hBVPJccBj1Y7wucwoCH6ZUp67J&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmAAAAAxLDkC9GfOHHbkQ9RvVF9Toge0q7l6qSqsb3Ifd-qDgX-IdK8ehiFzKqyEJkG2W2hzupueCBaBC12HALAxkI3E_EI-uObNyZ8h95cLzC6BCz69t8QwYSbrvw0pDgf_yEIPNEbUCmuskke4LBizlgysT-WkbW3ihVCS39msdCYVDuAXj3m251kP4rx6YTtJNyDcOr6hW&mmp_pid=an_11393951005&uls_trackid=55q0l6l1025c&utm_campaign=id_X3uWByEOCj&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eznu3zt84nsi"
},
{
    id: "644",
    name: "644",
    desc: "Lantai Decking Outdoor Ukuran 30cmx30cmx2cm",
    subDesc: "Indonesia",
    image: "/img/Partner2/Lantai Decking Outdoor Ukuran 30cmx30cmx2cm.jpg",
    link: "https://shopee.co.id/product/1251852150/27019869235?affiliate_seller_voucher_token=8bCnE5QAmVsFr1Q6dWtg6CyZSsFAnVvrXfyLcSbbz2&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmAAAAAw-cX-Q18hL1MPfrdVoEw4rSQdefPvBPOacTYqU7QdSUyCLCug9DsQRtcvNNBW7DgZ-12lQXaZaDk8yMQJeBAbr6UVlSLxWboHtIf9M1xcXW68WfYYHlRy92WbFtjDywK6_L8loY3kY8-1_BZH4tfYyWVIS7NCd5AN1T2rLZig2f4kkGvmzVdt4_tKkeAD6FgjvjL2W&mmp_pid=an_11393951005&uls_trackid=55q0k3k904vc&utm_campaign=id_ZgLhJfUePN&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eznt9d36m8a3"
},
{
    id: "643",
    name: "643",
    desc: "Dispenser Beras Otomatis",
    subDesc: "Indonesia",
    image: "/img/Partner2/Dispenser Beras Otomatis.jpg",
    link: "https://shopee.co.id/product/1316286670/25488265326?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmAAAAAzf9xCKUpjal-uIdhuCb7x2KwaVzrY4UywA1s9xJ0KIvDczTf-MTa6OPcMlX0OMhGQZE905YmQ4wh0ROcVljDdT2kxQ04wYWGUsHRbEd3uzi76dzyV7U5KuZYH-hdHPokPp49wXp5CSUZeO_ZgyUvtaJpvOkPIFhLeNjqE28VOjtQKK4dho0Jk3KeWUUGGUd4_Zb99b&mmp_pid=an_11393951005&uls_trackid=55q0jtr1021s&utm_campaign=id_pGtBjeR2t3&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eznt4n6b2o22"
},
{
    id: "642",
    name: "642",
    desc: "JOODUTP Piring Makan Stainless",
    subDesc: "Indonesia",
    image: "/img/Partner2/JOODUTP Piring Makan Stainless.jpg",
    link: "https://shopee.co.id/product/1414571451/50150980600?affiliate_seller_voucher_token=8bCnE5QAnhF5HYjaYJG6bQrevhgKtGHb22CY6v1TvN&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmAAAAAxbvXhe9tfXrR-CEWmMY2lP_XCUsWOL3gUgU1YqDUrWE6yWZ2B3bWApp_4UZlms9f0kHSCHh0RE0PXx7Xk00h5dy5DX_0wYURh8JnFYSueK0mOyYESipVSL2fqOwnyvwScpiEYc4y2kqQ6PgpVvdopgnmoGtLQsvOFCJ9aba3VHGbF-ejV0gomP2B5iZP01-OPHGMvv&mmp_pid=an_11393951005&uls_trackid=55q0k89d0001&utm_campaign=id_pBqac8DJBt&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezntd6nu4mjo"
},
{
    id: "641",
    name: "641",
    desc: "Jemuran Baju Dinding Stainless Steel Jemuran Dinding Lipat",
    subDesc: "Indonesia",
    image: "/img/Partner2/Jemuran Baju Dinding Stainless Steel Jemuran Dinding Lipat.jpg",
    link: "https://shopee.co.id/product/917905569/20275085902?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAyA5KHeHLHLnJ0VlpjT1P_bwkW-TdZUe52xE5xCgHoGagSIHW86NQ7zj4kv6NULejB7q_ArC0Fcd-jbQ2WyTa0wrftDdVblzZvyNREpt9tP03A1zOETjniKGlwq_DYKY29hTYr93GxqvEYm-vZwyX8tER_g6p4jdebDYhLb6VuNgqm9XGjIS6ROlntzoYNZz1vNLQ&mmp_pid=an_11393951005&uls_trackid=55q0kbit0004&utm_campaign=id_Yd7Jy0b7ll&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezntfvbptobd"
},
{
    id: "640",
    name: "640",
    desc: "Meja bahan plywood multiplek",
    subDesc: "Indonesia",
    image: "/img/Partner2/Meja bahan plywood multiplek.jpg",
    link: "https://shopee.co.id/product/171430659/28607638568?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAz_aUwPaoNCW6LpnY2vjp1S8NQERNgUX-m6uV80jSA-TWBagObwFFzV3nBGI395UO5A6m5_Dj-dHmSNMu0K6Z99sbMxQOiE5-R8Z9vOA32Rg453Ngg-MavYcaf8IdmtSBf9SiykKm8L3vItjMYjbuSsl5VJ8PG09J4JKD8LtCDRjZHIXH-CLMM7K4QwhoU3uNb1cA&mmp_pid=an_11393951005&uls_trackid=55q0j521026l&utm_campaign=id_xZK0OYlkdp&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eznsid5wdzmm"
},
{
    id: "639",
    name: "639",
    desc: "Meja Kopi Seluler Aesthetic Meja Tamu",
    subDesc: "Indonesia",
    image: "/img/Partner2/Meja Kopi Seluler Aesthetic Meja Tamu.jpg",
    link: "https://shopee.co.id/product/1175050093/27636997036?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmAAAAAw2UMM85-Qr3O37NPm1UIudvENQ-9IhLDPNSwC-_9Ry1D_XGt-7Apz3knElFcdAmVE6XTIkrW8G5neUhdGMSDZVfsBdCfDZZr0Eeq_ah3e7PjY6CZQ1HGudvQHvMfiVBmqcFS47X-8bXT1BsVFpgltwwisfUps33L8JgSGf-0_yuoFHzI2EznDnWMJqT5kXOytQNSZR&mmp_pid=an_11393951005&uls_trackid=55q0j1n5006l&utm_campaign=id_YBC4dh3vC1&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eznsfnbc1hcs"
},
{
    id: "638",
    name: "638",
    desc: "Homedoki Tangga Rumah Lipat Tangga Besi Lipat",
    subDesc: "Indonesia",
    image: "/img/Partner2/Homedoki Tangga Rumah Lipat Tangga Besi Lipat.jpg",
    link: "https://shopee.co.id/product/277711630/18826455055?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAymUix1n0VQ10LapaKJjEfxoVZCEgdzY_dQwxNCbLHdNCLywzPowZpZBzm77oMFXpZ9RJb6w7G9L_uoqrxElgHqziqUiQj7brovGiqoh8LdksDmWHB8sftq__X5Ir0roZ-RYHB13rCIZbR4wLXuppeFKfWJVZeS1vZJw48nWU3s9T9ognbT01rkz226Gp9TXWchHg&mmp_pid=an_11393951005&uls_trackid=55q0hp4f041s&utm_campaign=id_VW38jNNOIP&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eznrgfyy93mh"
},
{
    id: "637",
    name: "637",
    desc: "Karpet bulu ukuran besar 200x160x5cm",
    subDesc: "Indonesia",
    image: "/img/Partner2/Karpet bulu ukuran besar 200x160x5cm.jpg",
    link: "https://shopee.co.id/product/229323084/7718804495?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElAAAAAz7aIZ3QY_rxzE8go0ipOwG2gm8hA4g1QOZ0T8liDrlzYtupabXfZf0rLSAlijgHtdtAuhX2db-YSTfliCfBrhdL5hZZinaQ3sHRcxEofNnwK1MzdEIr-0OgUEEAziFkzBh0MKu8peqT9cIY1DGsYUmINLULxJD4K4T_6uudE0XQA9FjU3J45VzWOPXHqZnKTw&mmp_pid=an_11393951005&uls_trackid=55q0hncr03vc&utm_campaign=id_11dj9j9YUEn&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eznrf1o2i25v"
},
{
    id: "636",
    name: "636",
    desc: "Special freemir 3in1 Wajan Panci Frypan Granite",
    subDesc: "Indonesia",
    image: "/img/Partner2/Special freemir 3in1 Wajan Panci Frypan Granite.jpg",
    link: "https://shopee.co.id/product/161233109/24832616754?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAwZt2Xu66A01bfwaTye3kW9gANEHoeArBSxebTxTmq24PZU0x3XY9LalGs-LuA11lj5ebqdygvjVkim6dNxJC-AYpWCUqQ_u0HuRN4cfe9dK2OCU-jOmdLdsNEu_hhK8VU9U3QsQQThXhPp-AjuZWdDwaDDgW_tcyilC_dy9cQEYWrEgkrESoB6D5ESEHZ95eYc_A&mmp_pid=an_11393951005&uls_trackid=55q0hvfc02vc&utm_campaign=id_mf59GDPDD3&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eznrmn9yjm7m"
},
{
    id: "635",
    name: "635",
    desc: "freemir Panci Susu Gemoy Bulat",
    subDesc: "Indonesia",
    image: "/img/Partner2/freemir Panci Susu Gemoy Bulat.jpg",
    link: "https://shopee.co.id/product/134305400/13373997338?affiliate_seller_voucher_token=8bCnE5QAm6AZnCQmTpSQ3bateTVc9YYA4VbjyoZ1g3&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAzOnzzBOK7Vv94P_baK4OuVsHUnHSjSUYFD0_Md6c2D3lUN83w7YpUbh7bU4xjtKowQLPpDt_2lEy2bNXIY2lSgSBKz0S4tnsb9YhkyzQKJC0OrfTYEg2hwbsY8Mw3swAWM9__CNsp_wZZkhVL6qCQG-l8mQ98aberzLKT0XHZh7SbvPVb4jAWug6BcHwROzX-CCA&mmp_pid=an_11393951005&uls_trackid=55q0hddd0004&utm_campaign=id_YbgEedTZEr&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eznr6v3gsic8"
},
{
    id: "634",
    name: "634",
    desc: "STANDING POT LINGKARAN 4 in 1",
    subDesc: "Indonesia",
    image: "/img/Partner2/STANDING POT LINGKARAN 4 in 1.jpg",
    link: "https://shopee.co.id/product/679504660/14849853060?affiliate_seller_voucher_token=8bCnE5QAm6FxRzEUgtWSCK1R3mqCUiDRoDKAvi6m3Q&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAxNkia0j57M9dcQQw-JEM6MSmJc9IBiTMcK0PGQw_Rit1EvcRtHddk3rDrUJgm-9oSN_m2OjjvXzG9BEkb-QF2zdtJnYI5TlYI3cBpF-jbZI8ZaK36I4kbK7lWSR5HRVUkmQ847Gf-X-b4eklRptwhPjbZuFpoL3Rq89t2WiumzEWNpYH9Fs98uNOzozmt2H1DQkA&mmp_pid=an_11393951005&uls_trackid=55q0h73g00vo&utm_campaign=id_z6LB2p5ANh&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eznr1pnwp34s"
},
{
    id: "633",
    name: "633",
    desc: "JOODUTP Lampu Tidur Bebek Lucu Lampu",
    subDesc: "Indonesia",
    image: "/img/Partner2/JOODUTP Lampu Tidur Bebek Lucu Lampu.jpg",
    link: "https://shopee.co.id/product/1414571451/48851894559?affiliate_seller_voucher_token=8bCnE5QAnJdv6Lt7BXqkoVgsDiufEXs9A6CbzRVUPi&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmAAAAAykF9bRRjteTgzXLaW5N2EGF1L4zt9ZzIwUlTs29FlHabVGiPLhCzX3VxkE727wYQeT36V2N1Rq8bbz5mjshXUzVtpkJVJ8YM0Ci4CJPMjs4NA_ZHf6o2yprbjw2525XDma599PKz1J766Ilzu-m9cN6pdKKeIAG-XMsiOUYujuFEaY62HbtM5F0ev3fPCsTJaAf04E&mmp_pid=an_11393951005&uls_trackid=55q0h2qq00vn&utm_campaign=id_Ly4f6YP9Dh&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eznqx7vagf5q"
},
{
    id: "632",
    name: "632",
    desc: "MEJA TAMU MINIMALIS MEJA KOPI MEJA SANTAI",
    subDesc: "Indonesia",
    image: "/img/Partner2/MEJA TAMU MINIMALIS MEJA KOPI MEJA SANTAI.jpg",
    link: "https://shopee.co.id/product/226815403/27916742731?affiliate_seller_voucher_token=8bCnE5QAmVsSdLQk48FaBv3wFHDwpWT8fTSzwCVkfs&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAwQ0yV9Rdc7sIFPRgbJTNP81kymhzSfx5ossTfLXBFv2xCk2zzg9_2oL3QHkn7P8ZNKgNWXdahDqXlNLkM98OVZ2X20GP5fRNdEkPQlMDTWH5Fg8XAHEqJA7WZlbleF88cAfKLnugVui3rCZffC4vpqepc1nH_FZ2yAc4iDzBrcThoupyvqdW3FP6Y825CPzK3SGg&mmp_pid=an_11393951005&uls_trackid=55q0gkp40101&utm_campaign=id_131AVTZrg8D&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eznqkq6dc46j"
},
{
    id: "631",
    name: "631",
    desc: "Rak Sepatu Duduk Sofa",
    subDesc: "Indonesia",
    image: "/img/Partner2/Rak Sepatu Duduk Sofa.jpg",
    link: "https://shopee.co.id/product/514778925/21786530590?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAxxCgTA5C0hyvIahMBHoM11vaWWL63CUDaubBrE5Nr7-x1w6wlHuTEOL3Mw_uMZbSGZH6kpIqK18LAt0aldhE233XwYZuBGjF_VxoQQ_i5nxZaQaFfgu80oaILA6X1cWZp1rw9r1NI1ibtHtrwF7tbUVpTgPi10ADOq4Ti-sqjCYvDaLKuy8AUUvVyweBGkAcbpNg&mmp_pid=an_11393951005&uls_trackid=55q0gafo045c&utm_campaign=id_xI6QP0B44T&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eznqcb2x82md"
},
{
    id: "630",
    name: "630",
    desc: "Steker Arde Broco",
    subDesc: "Indonesia",
    image: "/img/Partner2/Steker Arde Broco.jpg",
    link: "https://shopee.co.id/product/812339520/18388914164?affiliate_seller_voucher_token=8bCnE5QAm6d1AS6DMXRspk1DPHZEHXZLBYkHi5YkKR&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAxQmQ8Ki6mFcngkLqMv77wnsG7UAOVZ3Ay-QsTA5PB_KQpeTwGJvSANQOjGTwejkut8QDTZGDHQocvVYVtPMc6OrFv1S6aACf--jX8eNjeiSg5vqTsCpT5Rc_I8oSCRTuva6ezcJwuKZXGY5VODAxIBvQmsCSFjTqQaon4fZAM-pixDFMVcOz5ot8aoxJihSUvcuw&mmp_pid=an_11393951005&uls_trackid=55pvi53b046l&utm_campaign=id_x9aTYDmabt&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn24vo7r3ep"
},
{
    id: "629",
    name: "629",
    desc: "KONEKTOR KABEL",
    subDesc: "Indonesia",
    image: "/img/Partner2/KONEKTOR KABEL.jpg",
    link: "https://shopee.co.id/product/329038744/25980704822?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAyhLnU5cP-Zw9dFWEDNaGp2MddUgfYWN4-5fHjlJKdRYNAHd49Gi3xwYAtU-NIBaw-B0fXc84w29IZWflJ56P3Ydn8iEVRFyxgQvpf9wsVxI8bcORkTc-SLeAbf4da1reVBuHf9HfT0d7tYVPg2DOhHg7D5Kn18pKYZ-QalhrXfWqx5BpcD5HaNR-XVzzslXVCcIQ&mmp_pid=an_11393951005&uls_trackid=55pvi3n9006l&utm_campaign=id_K07XIjwvJF&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn23rei2687"
},
{
    id: "628",
    name: "628",
    desc: "Konektor Kabel Listrik",
    subDesc: "Indonesia",
    image: "/img/Partner2/Konektor Kabel Listrik.jpg",
    link: "https://shopee.co.id/product/7828926/24086665974?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEkgAAAAztPwOqXrZL2aIccdpZX_FsLk0k6ZT_8AZPcK_PRkKMAc93OO_5i9Gcqx9VrbiqbsnAZKaSeDvSCoanHizZgdWJ8a4e1xmFDZFmJ8AOiAgmheSSTge2_BgJLIDAFvQIuAcz7lJelzs3eQM7Mr6T4b5I2zlaAljq6Srx2wzzc4TIvCRtsM1JB3OGayb3cHy0&mmp_pid=an_11393951005&uls_trackid=55pvi2d8015c&utm_campaign=id_7XgRZVCTrJ&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn22owcrf92"
},
{
    id: "627",
    name: "627",
    desc: "Klem Selang Stainless",
    subDesc: "Indonesia",
    image: "/img/Partner2/Klem Selang Stainless.jpg",
    link: "https://shopee.co.id/product/840043283/17084096480?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAwagk-PwvdiLXZi-VKxA-sIzOe6FneMRpIMDvn0LFU2JU00jWIi62jaVUDr6th0rt016CFGwvUn9cPPA_dAyM_iD9ErZzsuGZ3FXII6hnGLmNl2632V3ACYosq27DRZzSiKVKjUOCKwf0tSOEWAGLdx6wsms6wlLTH2a5O3QA-dRY_zkqklUMXD60xpNhHF7sXjgg&mmp_pid=an_11393951005&uls_trackid=55pvi100011s&utm_campaign=id_a1VNd9540r&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn21iku8kgw"
},
{
    id: "626",
    name: "626",
    desc: "Paket Usaha Case HP iphone oppo vivo xiaomi samsung Isi 50 Pcs",
    subDesc: "Indonesia",
    image: "/img/Partner2/Paket Usaha Case HP iphone oppo vivo xiaomi samsung Isi 50 Pcs.jpg",
    link: "https://shopee.co.id/product/1225756569/44413744859?affiliate_seller_voucher_token=8bCnE5QAnJGgaZtaXvNHT5gLVukLHvm1rS8hZwsRZP&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmAAAAAwUGVYXokzh6JB6jCsgOkIz9IuguUBe_zVgyoxunz5cBDG8Y2yCH5Lweqh-yk1n30LSwcT8ND7n6m_oMYJyP3BMBrK4kedPoO2CUBauBUb2jxjW3iwtFjALKQm8ihaHuxw0CwhmUSIFqCBeZh0_xMU9EOqbEQo6Jm8U9M4IQPdv8ZB87-WXcTUOf5bjDW-VhD5tBU3y&mmp_pid=an_11393951005&uls_trackid=55pvhvc4036l&utm_campaign=id_M7Sajzk3cD&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn1z7gv4jzf"
},
{
    id: "625",
    name: "625",
    desc: "2 in 1 Jelly Silikon Softcase Magnetic Casing Hp",
    subDesc: "Indonesia",
    image: "/img/Partner2/2 in 1 Jelly Silikon Softcase Magnetic Casing Hp.jpg",
    link: "https://shopee.co.id/product/1530788118/49053461204?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmAAAAAzyE9ngtnZ4mQ_m7xNYd2aCzKAXgDNLUh_OlYYKFqEn9cWPNljdUB-0rnDa0XkahxO8VUpH8P_3B-4OOWV0x3LqoJMd5crMhgEYafnXMN4-LALQKjOgzv9G2EmLuSezqHHIc2UUQrQ2N78EPTr9IpwJF3WUuy-0acqM668IxjEhuMRYhQ5boX9ClJ1orSVV83zzAKZB&mmp_pid=an_11393951005&uls_trackid=55pvim1v0001&utm_campaign=id_13KKZ31dNSH&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn2ir674yh9"
},
{
    id: "624",
    name: "624",
    desc: "Kompor Gas 2 Tungku RINNAI",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kompor Gas 2 Tungku RINNAI.jpg",
    link: "https://shopee.co.id/product/394519412/12716919909?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAxJ4A1sUUoUGdaHMm5usnvVPHELHhmRXWoAJqfMFcyWqqtf4wumpZMdNlPsUR6MaFjBDq7aBK4BefqFGkctXIGyixl2YsSjNkppMigT8ca28whyvL2BpSHie_Vku5GacTOo8uBAHQx3AFpT57K4DtkQJyNXigPhkUTSnKTz8EGIA4FUZUtDICPPxWpGoDL0aMQ_cQ&mmp_pid=an_11393951005&uls_trackid=55pvhscg00vc&utm_campaign=id_105SVEAIqyb&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn1wrewdx7r"
},
{
    id: "623",
    name: "623",
    desc: "Hongzhuo Teko Listrik 2 Liter Full Stainless Steel",
    subDesc: "Indonesia",
    image: "/img/Partner2/Hongzhuo Teko Listrik 2 Liter Full Stainless Steel.jpg",
    link: "https://shopee.co.id/product/263338737/16174020242?affiliate_seller_voucher_token=8bCnE5QAm6SPQp2XRt1a14dKQ7veJR6ovxcbz7Sshs&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAzoW047GOBQ4ZaYtStfjscVAZ5IkT1rJ0jxXTDuH7A3Fs2tHm_zYX9bykgzZCicn3S1duSCIWap7DB9v0aRgy2rVg-gJlqgztjgRcqTT6PdSCuKDgxLoLcXUyDh71bDPRwnj00EI-9SSQbs-aGqzUCPtCNrkWaWcqo-7HWBibOKLxosRxORQNZ032PNzRD6cZhYwA&mmp_pid=an_11393951005&uls_trackid=55pvhr5o001s&utm_campaign=id_XEXZMPkxOn&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn1vrozobd2"
},
 {
    id: "622",
    name: "622",
    desc: "KELVINS Lampu tenaga surya 10000W Lampu Jalan Tenaga Surya",
    subDesc: "Indonesia",
    image: "/img/Partner2/KELVINS Lampu tenaga surya 10000W Lampu Jalan Tenaga Surya.jpg",
    link: "https://shopee.co.id/product/1210234359/40806789657?affiliate_seller_voucher_token=8bCnE5QAnHucfTUFbqWc17maq3PLj5y6LF3NdnHmUS&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmAAAAAy8D5CuPvLDodBtIxDyYZcwYHHzyA1gi0M4qZXucec5hVLTw8Ttv-UAhTuYY4WExeK9I86fVD4WO13i4i8VIylTf_08T6OoLjm9NW2ZEQCmb2PJjfYQtfsKruED9bw32OVbdQ0ju9KHoNhne8oFljZOvNC__NX1He8yoT_H0NfJjtUJvjKuVxEJxqCPO_PJi6kah5da&mmp_pid=an_11393951005&uls_trackid=55pvf961041s&utm_campaign=id_9Ra1P1GWPF&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezmywq5er3iw"
 },
 {
    id: "621",
    name: "621",
    desc: "Lampu Darurat UFO 1800W",
    subDesc: "Indonesia",
    image: "/img/Partner2/Lampu Darurat UFO 1800W.jpg",
    link: "https://shopee.co.id/product/1440970776/45052077148?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmAAAAAx_gRGt8S0nRHyF-JgkAo4-gAuxubhd_S4DDpdcNeNPGCU3R2yXthRrsv0QppHDUH4eL2yZj-PI0bb08bRSNx2fh5Ip6rSEMoLaNdt43VCwYkeQ_Nf3wXi5lajuZvNGbop3ojUlXGbA0o4IrFTlDd8LbJSRShpCpuXLkafNaGEPEgbR1iRUyTZsC2WkqeIK1LxXF51V&mmp_pid=an_11393951005&uls_trackid=55pvfdth001s&utm_campaign=id_CV6QMi0VHp&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezmz1ktikfse"
 },
 {
    id: "620",
    name: "620",
    desc: "KELVINS Lampu tenaga surya 15000W",
    subDesc: "Indonesia",
    image: "/img/Partner2/KELVINS Lampu tenaga surya 15000W.jpg",
    link: "https://shopee.co.id/product/1210234359/28155491796?affiliate_seller_voucher_token=8bCnE5QAmVxZjmA1zizosenDND5QP4T6WPgT22aGdU&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmAAAAAzDuMLF3uL7QyVGTc9V3eepbmvjn35sKkiwLhThONG52RU4_5b-FwhXfwUMV_lD4MaqC7ZuG8amsH7qDJPEFdNRbdb1nZYSXlIpTr9F8cOJABRoZil8KbcXf8g48boCRw8fDGsleWkxWP6DOyloW1piJdo_I4NfXErJTRwTi1oTdCpg56Sb59DN52zi5nqakxjjVEBH&mmp_pid=an_11393951005&uls_trackid=55pvfkh50001&utm_campaign=id_IrVI1ynncT&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezmz6znieag7"
 },
 {
    id: "619",
    name: "619",
    desc: "Luuga Lampu tenaga surya outdoor",
    subDesc: "Indonesia",
    image: "/img/Partner2/Luuga Lampu tenaga surya outdoor.jpg",
    link: "https://shopee.co.id/product/1210227126/24582990432?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmAAAAAywUzP2Ico3EvZtuoeXSRQiIQt5dItepSDdl1d9_nfyOtMJa4lUrueRbMp7wp6FQZ9Wbj3ZdfT7edPyEY8tSdg_qGZh7dSLk4Fg3QSALaZ_Kb4lns3ALcKKEM-5xxbRngDYJPk3hAjfyax9FA8tqPEkBk5sapq5hY0zFi2tfvomLnAK24WdDjE8ATU4rHt49zaOjLG2&mmp_pid=an_11393951005&uls_trackid=55pvfqbh0001&utm_campaign=id_p7sswfjRt7&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezmzbrmdzj67"
 },
 {
    id: "618",
    name: "618",
    desc: "Deoxide Antiperspirant Deodorant Roll On POWER+ For Hyperhidrosis 60 Gr",
    subDesc: "Indonesia",
    image: "/img/Partner2/Deoxide Antiperspirant Deodorant Roll On POWER+ For Hyperhidrosis 60 Gr.jpg",
    link: "https://shopee.co.id/product/1491258740/26732649509?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmAAAAAz0B43McaSnWBycQXq5M3_lbLeeFkeXliH2GnsLWKkyaVEBCKV3zK6KIaB406xsLnSe_JhsBJ54IneiJVei0NtjOKfsrmsvuNfYGN6OQ1BDNM4WH4PLYSTeTtj21UYUcYcmY1FyGa4pZRR1PwBNVXqvlxsJSXyOngAAWFKvv3HeOZyMFeWf3YL4yZ2iVOpz4tVLQOtF&mmp_pid=an_11393951005&uls_trackid=55pva7ub026l&utm_campaign=id_K6CyQu1no5&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezmv1v9xqars" 
 },
 {
    id: "617",
    name: "617",
    desc: "HOLDER OVERHEAD STAND TRIPOD HP RINGLIGHT KAMERA LAMPU FOTOGRAFI",
    subDesc: "Indonesia",
    image: "/img/Partner2/HOLDER OVERHEAD STAND TRIPOD HP RINGLIGHT KAMERA LAMPU FOTOGRAFI.jpg",
    link: "https://shopee.co.id/product/204388579/20095663916?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAxz3GK6sTm7KaIqenmu9eUeJ6BK6asI_kQc9UA4SqEMFOBXehVk9Gy1dG4plhkQ4MZbrjRz8B8sPWatyAeONeaRe_zJQWAIfVWomxCeV9EVGmNH6QoTGaZnx9OzBzhqYMiYpvxCHRgnnZVTaB_9usgodoYjuuxU1PScHG0zHhxNK9IYl1HBp7tHWBxh74g88nm13w&mmp_pid=an_11393951005&uls_trackid=55pva9m1011s&utm_campaign=id_10Fk4IbIqMv&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezmv3aoigbuq" 
 },
 {
    id: "616",
    name: "616",
    desc: "Reseller Welcome - H6651 Ember Lipat Serbaguna",
    subDesc: "Indonesia",
    image: "/img/Partner2/Reseller Welcome - H6651 Ember Lipat Serbaguna.jpg",
    link: "https://shopee.co.id/product/265629595/43158234800?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAxRIcGl-HoL3kH7I51PJRppgM12kySCblOiJC5DU2H6i3itbaLgnKAjJnNhyz-KOgKYdVIOm3_llpIhnh3ovoDQdk20okiOqRQHF20HO4Wh94-Bm1ygP3iIilGA56TrXHlhcw1qH8tZZHnirhhDCXOdRW9dQy7IHE95iWbDu9IN8oW0BCEMwb7tgMNM4I5_hiOkug&mmp_pid=an_11393951005&uls_trackid=55pvab9q005c&utm_campaign=id_LyqhVHfkoX&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezmv4mnys1gk" 
 },
 {
    id: "615",
    name: "615",
    desc: "Ember Lipat Mancing Ikan Folding Bucket Handle",
    subDesc: "Indonesia",
    image: "/img/Partner2/Ember Lipat Mancing Ikan Folding Bucket Handle.jpg",
    link: "https://shopee.co.id/product/426763015/29773281465?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAwDk4H4Mwexcyb46ZYkwJe-k7JerTo6AgPc9kEe3ech4MqAe7jdMGYNjq5GO692L3DK1dFoK8Wf7xq3Nspn6LRKwVWndDl5M8i0PRUXzZwVTyqrpiCOl6gjanoGcb-WEoXp9_FZpEm5UaXZDGGueQd0yNybU-734jC2ceztxvCgKDsfONBPHtpf5U3fJpN1EclimQ&mmp_pid=an_11393951005&uls_trackid=55pvac4l005c&utm_campaign=id_U4CON7nra9&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezmv5azbequ1" 
 },
 {
    id: "614",
    name: "614",
    desc: "Tripod Handphone Tripod Kamera 3110",
    subDesc: "Indonesia",
    image: "/img/Partner2/Tripod Handphone Tripod Kamera 3110.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7645981242936184084" 
 },
 {
    id: "613",
    name: "613",
    desc: "Ballhead Holder Tripod HP",
    subDesc: "Indonesia",
    image: "/img/Partner2/Ballhead Holder Tripod HP.jpg",
    link: "https://shopee.co.id/product/388046878/25305429855?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAxBciYdWXqf5YI4gAAG1FNCY2z2sETBA8kBUNc_JqvVAZizeLJr-D2-B2veAT1SjlcC9SZj0TTYyiqTIxzmlzRF3DxvM6IhaWBiqRXieYyCM2gkVEwGZ1G6_nzdWlU-YlreNgQFPcabff3xkkyJ_BvQnSbNaHLzlycuJ-NTONiC_SPQtO-IkgwKcSQD3MRpIAZ9Og&mmp_pid=an_11393951005&uls_trackid=55pellvq000u&utm_campaign=id_13cT94TYRVd&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ez9t68kzg7y2"
 },
 {
    id: "612",
    name: "612",
    desc: "Clamp Holder U Tripod HP",
    subDesc: "Indonesia",
    image: "/img/Partner2/Clamp Holder U Tripod HP.jpg",
    link: "https://shopee.co.id/product/121551998/9250722120?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElAAAAAxeSDJ2RG14A2779DvsX0kveJD12642NihZFqf1rE_k4yg5NaU6k_FAVrt1sxfrQOFTLUOmM8yps2RPr8NbXwK-JtRMoM5c3h-OeMo48PiBMR-tfC64aTCRBDK6a7p6UwMRduW5bQ4WkmC8QD4HhBPoWeHCO437488gHwbJSEHgfnvCN7HmxqetmQVqnuIILnI&mmp_pid=an_11393951005&uls_trackid=55pelr03001c&utm_campaign=id_13VurhB5ihJ&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ez9tabveapfh"
 },
 {
    id: "611",
    name: "611",
    desc: "Kericu Cumi Snack Kemasan 250gram",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kericu Cumi Snack Kemasan 250gram.jpg",
    link: "https://shopee.co.id/product/230495685/5441855832?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElAAAAAyqkFO68Prs8z_9DGjb8J9HaYOWLIgo_Bax0oz2PAUOEoNyJijApLqjxeyzJNRE21iWQ7RFvlheZlCiWl80vFUEFfqjUX-DiDz4SV-WxFGIS6CsDOMvWFRLMDBvOJePS9YDIodQFCRxvHbgrnn-YvBLksGwRxBvxswE6UeMHwbo8vdftEHCUBU9EPeF7CI6Vmo&mmp_pid=an_11393951005&uls_trackid=55ofl3p000vn&utm_campaign=id_Aqe3CGT48p&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eymc9gk9t8rt"
 },
 {
    id: "610",
    name: "610",
    desc: "Kue Bangkit Sagu Bangka",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kue Bangkit Sagu Bangka.jpg",
    link: "https://shopee.co.id/product/26876886/7784537584?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEkgAAAAytYkEp0qwUfIi7cmswRhXBBzIQuXhUXkgoBmgR830_no2scAW7_aacAFgBNwzXgzZwA6gRzgjIMl6s8OpQUokPcqlHd-mgvcguUOiGBbORUBVeB8UuqECaU0UN8fEJImO6CrYTsMVOTPFPzSMGS9J412GhbnsqT3drldhLpMpuPV0Lnw7rW66g7EFR84BT&mmp_pid=an_11393951005&uls_trackid=55ofl20n0004&utm_campaign=id_HIvd1UOEJv&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eymc81nygyrp"
 },
 {
    id: "609",
    name: "609",
    desc: "Lapis legit roll nanas ori khas bangka",
    subDesc: "Indonesia",
    image: "/img/Partner2/Lapis legit roll nanas ori khas bangka.jpg",
    link: "https://shopee.co.id/product/164050343/2481735866?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElAAAAAwFM4qGb0BSi9VwNJnOUif5rzL6W3LKucfhbsMXW5uawRB5OxkNf6gj7Tivhgnj1HkU_udHlNvglPBOhWXDVb7TjU8R-Xh7XC5QTax6ynspUUIwtCpi5pzVXlOf7IjEwTes6FWoSBCru5dn2T8kIp_BtqIKf1le4jlOpUG-hVOyXwoGLseCeZwQqiV7FESDNdo&mmp_pid=an_11393951005&uls_trackid=55ofl81n00vc&utm_campaign=id_U4HdWjXf5f&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eymccyd6g1mi"
 },
 {
    id: "608",
    name: "608",
    desc: "Keripik Mafa Alip 200gr",
    subDesc: "Indonesia",
    image: "/img/Partner2/Keripik Mafa Alip 200gr.jpg",
    link: "https://shopee.co.id/product/1700714/2293977454?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEkAAAAAyDjJJm03AccxuB5-ehz6obK8zr1NYJjeckg8yzXgCntnwC7xhR94RUAlpVTx0ylbSATQwQ4nUH4_FpQdkfocKKlZnY-3iZ2YJZ2ib9XkKhfAPClRlDXyQ0MDr6kA0if5gX7_OXaf3ZHX5BiF_yiX7apZZmVcHmy9sm-W1tyLhfl8eXh8SJSNQKCMwZbA&mmp_pid=an_11393951005&uls_trackid=55ofl8hr021s&utm_campaign=id_KPPUQmkdH1&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=eymcdddeu56o"
 },
 {
    id: "607",
    name: "607",
    desc: "Gula Merah Koin–1Kg",
    subDesc: "Indonesia",
    image: "/img/Partner2/Gula Merah Koin–1Kg.jpg",
    link: "https://shopee.co.id/product/52869792/48804607537?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElAAAAAwIW1dd7hR3_1xIodjqKHXPZBUHnz6Jm3c-itMqe__VJLvwT3l3G7b8QO8RYWs2dO8Gbjcfu9fsOytB8qrlnUPqKWFeS9NfvDq-Jgh4tHb1Wo7kZRcGCBIL6AYxiGc6VwwSXtxPJEshhSP2hQEduUKK2g6GJZPNIlpPqhz3u8WmDMXS-VFs_WQX6AarHKVGqAo&mmp_pid=an_11393951005&uls_trackid=55ntserg00u2&utm_campaign=id_XAeXCMNC11&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ey8gmdpr1xsy"
 },
 {
    id: "606",
    name: "606",
    desc: "(JATIM)Kripik Usus Ayam Rempah Gurih renyah Asli UMKM LOKAL",
    subDesc: "Indonesia",
    image: "/img/Partner2/(JATIM)Kripik Usus Ayam Rempah Gurih renyah Asli UMKM LOKAL.jpg",
    link: "https://shopee.co.id/product/8363315/16250213819?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEkgAAAAzk2FWJtGWccS1pQawqIXZI2yqtDnPuzBUJxCdyVubtpeweS3jzd2DigCSExl9zwaNDgeaoGr2eaXDXDMvFeGD6t8qWhT4WDLz09a2nI5TQsmJQEQK7xbBDwRjIhA2aH5IrY05R78civqwCLvkM99p9RxZ-SbxtkGLwXm6ZMhk993aKtJBGX2WTQ2l45ir3&mmp_pid=an_11393951005&uls_trackid=55ntsjhc01u2&utm_campaign=id_10eBhMeu3SZ&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ey8gq7xgqj5y"
 },
 {
    id: "605",
    name: "605",
    desc: "Gula Semut 1kg Halus Kelapa Murni",
    subDesc: "Indonesia",
    image: "/img/Partner2/Gula Semut 1kg Halus Kelapa Murni.jpg",
    link: "https://shopee.co.id/product/500299486/56359288703?affiliate_seller_voucher_token=8bCnE5QAnhnqjfs7x6FmpybT1c376mZ4z8SY4Q6kYC&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAzudNg8IHYwFnQBHn_sTUIxqHkE8iw1oz8LQVsdP4wlTYXQi65mWUPK8e6EUYqc9bB64mRGG7PlqqwzqaNSfNgOOs9I5tcpiikS1qaL6_tiCa0uSf8iP-HaWh_We1ZuRxHFkVt12NFLNdydx4Vy8IrzX9WSpSxoAWcNfJPVuetQ2hID49Forseu9slWv662mtse2Q&mmp_pid=an_11393951005&uls_trackid=55ntspp601pe&utm_campaign=id_IYETAQIUbv&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ey8gvbin2gqu"
 },
 {
    id: "604",
    name: "604",
    desc: "STIK TONGKOL SUPER BESAR 1BALL",
    subDesc: "Indonesia",
    image: "/img/Partner2/STIK TONGKOL SUPER BESAR 1BALL.jpg",
    link: "https://shopee.co.id/product/243189833/17799066633?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAyYXTw2IRZALsk6d-W2ERLKhEy6cVvJE_39Tl_OZso8KD7vVakPhAvk-Gz0EFAvrNTil5rXBWzdxQpxL_i0SyXwbMgvdfYd4X3zTzUuzSXFnsLAmGl9k0QEKxReU8iOKdP6v0aAhpXqV1aTlLGT-CSUGO9zMjpkUs0cH3fLTdaSAbxl9aaZP5zhhs-zMf11fo6dbw&mmp_pid=an_11393951005&uls_trackid=55ntssrc01u2&utm_campaign=id_7XnXKwz5wV&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ey8gxttdnhhs"
 },
 {
    id: "603",
    name: "603",
    desc: "500 Butir Temptooth Penutup Gigi Berlubang Penambal",
    subDesc: "Indonesia",
    image: "/img/Partner2/500 Butir Temptooth Penutup Gigi Berlubang Penambal.jpg",
    link: "https://shopee.co.id/product/322414702/26969813310?affiliate_seller_voucher_token=8bCnE5QAmVn9yWBGjRrtfPk1Zjo2rHi4EHG9KuqL17&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAzypZUy8yQ_g5ZtYzOmVP4wp5veqtbVX5CygC7m9uno6In7NXCccYHphFUh_WAqPne5Dx28S5eR8EyONOjBRe76i4VegpXckUXDFTrP6lY3GfGfPJ_25AjwIz0uc7klWIFRI5RB1sfAhwO7EMO0mdVU-J0GLKKpaUNsDEHMTV2fhCizUZyTj3GlVoK0U0zgPP8cWg&mmp_pid=an_11393951005&uls_trackid=55ntr7bj03u2&utm_campaign=id_CP4i7vGQ2Z&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ey8fo3fu14s2"
 },
 {
    id: "602",
    name: "602",
    desc: "VENNER WHITE Gigi palsu instan premium sepasang atas dan bawah 100% ORIGINAL",
    subDesc: "Indonesia",
    image: "/img/Partner2/VENNER WHITE Gigi palsu instan premium sepasang atas dan bawah 100% ORIGINAL.jpg",
    link: "https://shopee.co.id/product/1129063629/24155692180?affiliate_seller_voucher_token=8bCnE5QAmVbR2zemwkZyxck88RUsTUbogXVgpLWG7R&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAwcbJdtwK1QVQmNwiiDQHbIuykqXzvriHU6CkzXjLhEfku61DaJRcPE9-FRWQaUIPFQu4jQ-zG6TzgAPSRKOUWoXFJwQdWf2WJI0AwWaQUBFJwoz8jkFMrIUdpnUeDJ1DgYnK7nWloyqCYZKhOK1JDcF1KkqYhdfGI_MHifv1hO51j90DtBTJU8qvZ4qU8qwBj72SHb&mmp_pid=an_11393951005&uls_trackid=55ntrat303u2&utm_campaign=id_WaEy8U53Xr&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ey8fqz69j4sh"
 },
 {
    id: "601",
    name: "601",
    desc: "Gigi Palsu Lepas Pasang Perfec Smile Veneer Perawatan Gigi Tiruan",
    subDesc: "Indonesia",
    image: "/img/Partner2/Gigi Palsu Lepas Pasang Perfec Smile Veneer Perawatan Gigi Tiruan.jpg",
    link: "https://shopee.co.id/product/322414702/29585163578?affiliate_seller_voucher_token=8bCnE5QAmW3wDh9eJmk5V41Sq7QHpXCWNKPCJFsy6g&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAy6UyjtcLfHaTDU2zXa55Rq253-4UylKuUqBZrSCdsUp38s2-SqINcMLpJHHIy_CxjcDO09uRxPOIYGTUV05za5Wy2EvHDsPQv41g7qKckZ30IrfzB1w9U2md8q279hsUU0YMjwhTNlPUtUgeFb-eOfRfvQ72D5px-_5iwgwzUZkHk9AbIhZVZC82uwK9GENBF9uA&mmp_pid=an_11393951005&uls_trackid=55ntrfga02mj&utm_campaign=id_Tm0rry7k8d&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ey8fur4q7go9"
 },
 {
    id: "600",
    name: "600",
    desc: "Tesco benang gigi kotak dengan pembersih perawatan polimer flosser",
    subDesc: "Indonesia",
    image: "/img/Partner2/Tesco benang gigi kotak dengan pembersih perawatan polimer flosser.jpg",
    link: "https://shopee.co.id/product/1418801906/29720389615?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAwX8qAKNyAKzS6CS9NALPTy_Dtbd204XyUytLdf2_xt9nD3rKdLOEIzvxsvs2mN-PmjU9Jh5kPmeVVK0d16q3SLWEp9WO4M8A13M7pLhGJaFCOw6rEGT99OW1l4bn7hRpQ9iaHMPClRMVNPcqetfVeNvHAwsuo43-1tqY8qxl-i7h8kFlnQIe6I5vIIASBkqDE8MHjb&mmp_pid=an_11393951005&uls_trackid=55ntrkqs02pe&utm_campaign=id_J9vwRlD26J&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ey8fz4azyh3d"
 },
 {
    id: "599",
    name: "599",
    desc: "INSTAN MOJOKERTO TELUR PUYUH 1 KG",
    subDesc: "Indonesia",
    image: "/img/Partner2/INSTAN MOJOKERTO TELUR PUYUH 1 KG.jpg",
    link: "https://shopee.co.id/product/233141538/54659328167?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAyq6J0VvKuOZKAjOY_AxRM5QWasHqEYck68EA7YILFWCnguhIyXpBmOYNOfaglDoUnVS3USGlU_PdBfV1PK5rakvVhFcFZ2vI5p9XCd-q7qBxvGOr8pEREcMbs8OlbMGUY4BurYXSANY_8aXfJTFbfQ75S_3_BNvbWSzx83X-UPmnlnKrbGWLITe9xWQA25LQj0pQ&mmp_pid=an_11393951005&uls_trackid=55nrjf1002mj&utm_campaign=id_9YFuMelCLX&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ey6tfbgytb9h"
 },
 {
    id: "598",
    name: "598",
    desc: "HarvestMoon Telur Ayam Kampung Per Tray",
    subDesc: "Indonesia",
    image: "/img/Partner2/HarvestMoon Telur Ayam Kampung Per Tray.jpg",
    link: "https://shopee.co.id/product/315394148/5055636388?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElAAAAAz_jtZs844JI0RaaW-aDZf1BB2tNiHaBrdqxuOu9MBUlhLLzpN9C71PKElGgN2C3mLQdcQRlJMZpg9-PJKF-fR5-VsbnhSpbvaosQePx3X4Xxp7AqDIAzva5ZRPtkgsIo9YZNiTOXt-ZC2ZcRSibr7MS54AW8nuOH_zIGI15Snwj2rymnq8wuz86uWlzAJE7PA&mmp_pid=an_11393951005&uls_trackid=55nrji9h01u2&utm_campaign=id_N2UH6SfAVD&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ey6thzb8jb3n"
 },
 {
    id: "597",
    name: "597",
    desc: "cabe cengek kering teja merah 250gram",
    subDesc: "Indonesia",
    image: "/img/Partner2/cabe cengek kering teja merah 250gram.jpg",
    link: "https://shopee.co.id/product/1135323627/25491027125?affiliate_seller_voucher_token=8bCnE5QAmVgmKiEJWXtMUToWAuGsu6GDiSh8nqjF92&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAxmZrv8bNORTMLmWGqyy4YO9tPIxMhc1Er-3LESKlihJ-iJ8RfKt39Exs4AyFD3NbG0KxoX2ZYN7uOt2d5QlHyPt2XeLd6qWxBb3e3OQuo_k5T6hFEvNVTUjP3lcB0_4ySM68eVPqQYoVOPJRdqjnPyZYG7bn4r3YC-OdyVHD8T4clvG8oM-pb_G9fXbMp4RmUcsolE&mmp_pid=an_11393951005&uls_trackid=55nrjm5500oa&utm_campaign=id_xXhoJUQFup&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ey6tm5pm3po9"
 },
 {
    id: "596",
    name: "596",
    desc: "Cabe Rawit Merah 1kg",
    subDesc: "Indonesia",
    image: "/img/Partner2/Cabe Rawit Merah 1kg.jpg",
    link: "https://shopee.co.id/product/121857586/27213588359?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAyONjiwgAdahKWnXJr-LcsGhHnhRSiCJDQGSxnFC3GCnkBpPTymJZ1nsaIoDY-Bk9F3M-LhfjSgFQfJRu3PUqWM2pA_TZsZh5uv-g0VZ56rmk-7dnRqo3kcRjQsCFsOfNRTj5xBtQ7utL_G2e1MyhxybpJIPINbWexWZ3Ydm4qJx_vwSd2ahXOLP_xGUkuUN6WgTA&mmp_pid=an_11393951005&uls_trackid=55nrjot600p4&utm_campaign=id_VEcKoaggRj&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ey6toe7we39y"
 },
  {
    id: "595",
    name: "595",
    desc: "Kapur Dolomit Pertanian Asli 1kg Untuk Tanah",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kapur Dolomit Pertanian Asli 1kg Untuk Tanah.jpg",
    link: "https://shopee.co.id/product/90604991/40107549890?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElAAAAAyOgV2clkpfWp_OiX403McG5soYwf68n6NQpCwobg7VTFs4gcLLpITm5Sn12FdGRT548k5WZGPytqKJ-6Goa8Cra0HiFz4bCZ7KM7iA2hU4dvRz-s-w9aFScHvkCevzPN-C81tzLRrFp3kD-_5NEmlC_j6XWjIxFbIO0KTsXQeCejwurrwlf00pe8e4V5gWSes&mmp_pid=an_11393951005&uls_trackid=55nm41s701or&utm_campaign=id_1069kiHhoUx&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ey2ufayqaq99"
  }, 
  {
    id: "594",
    name: "594",
    desc: "Sprayer Listrik Pertanian Ransel",
    subDesc: "Indonesia",
    image: "/img/Partner2/Sprayer Listrik Pertanian Ransel.jpg",
    link: "https://shopee.co.id/product/1567454045/43124292613?affiliate_seller_voucher_token=8bCnE5QAnJBLKCqLDy246XLKc9JEg1tBAmW4TVdt7C&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAx2EjcYk-8_oQUeIGj2OyrAmeMPARG5DcmCH38qVozUCpnpzRnb_feBvWighFyQ0yc6SrM0iLV5i0z22PESpMTGJhtufkyfgFLMk7GTAXnvVVK40R1cRHNYXLveMX3LX8Z3dlarrEj8ebQZGl2hn_DZUwVgE0Beu5BU5K6uVITtxTQJAf85A2PvTizlyg0xD9Oi4dP8&mmp_pid=an_11393951005&uls_trackid=55nm465p01u2&utm_campaign=id_AY6kQ1lps7&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ey2uitiah8fs"
  }, 
  {
    id: "593",
    name: "593",
    desc: "Akodan 350EC 500ml - Obat Pertanian Insektisida",
    subDesc: "Indonesia",
    image: "/img/Partner2/Akodan 350EC 500ml - Obat Pertanian Insektisida.jpg",
    link: "https://shopee.co.id/product/1435882343/24340015983?affiliate_seller_voucher_token=8bCnE5QAmVbTRgRU5vmik3PdafVFCvLe9U965URDL6&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAxo1BKKPAbYYaOFRM_EtwT8dj5zgKv-8ueEyMb1CES89As1dQ33nxeQ-Ie86ExBj5qbJwL2q5vH29yM7Q0w-guMWneKkQn7aKogwO0IbkSJO0fkR3rzIES2rYVAbq6KcQr3fEYHabsDTHWCJi4vKrvJWCW_QD94XR2mnj9oPlkUlivbksod0azXt176jEIOA1f-kV97&mmp_pid=an_11393951005&uls_trackid=55nm495701oa&utm_campaign=id_nuPparWyyt&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ey2um9fcvbg3"
  }, 
  {
    id: "592",
    name: "592",
    desc: "Paket Komplit Benih Sayuran 50 Jenis",
    subDesc: "Indonesia",
    image: "/img/Partner2/Paket Komplit Benih Sayuran 50 Jenis.jpg",
    link: "https://shopee.co.id/product/963624050/28177803075?affiliate_seller_voucher_token=8bCnE5QAmVxZkJmG1CbjmvHwU2ZVBBUD1VKu9FNCfe&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAxIKUqNw8LXJhxcTZaFvkM7EV4TUGX9oFVTSygZ4bIflFoEfO0rfSgi8FDPKrOPRrKay8d-IeDU9ghQfZGoJDXarHidSGhnyxWnadnDTGtW8gM_9v2pXbDxCBdxsjD2gtlf6a_tYo_4zcn7P2FRS08UXoyOtPiBp1W6qvUYF_zG1RXrrJ8FgEyZyCBb5TrpZq50Rw&mmp_pid=an_11393951005&uls_trackid=55nm4c2600o9&utm_campaign=id_9ayGGDnfu3&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ey2uon7kuehu"
  }, 
  {
    id: "591",
    name: "591",
    desc: "Pupuk Organik Cair Durian Cepat Berbuah Lebat Tidak Rontok Bunga Booster Durian Montong Musaking 1L",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pupuk Organik Cair Durian Cepat Berbuah Lebat Tidak Rontok Bunga Booster Durian Montong Musaking 1L.jpg",
    link: "https://shopee.co.id/product/81482458/41051854999?affiliate_seller_voucher_token=8bCnE5QAnHzjn9iLs4PwqRCArfBhzVFc5dyzTzgwH4&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElAAAAAxcFj-QZtSo8AUxRBNKWFHLo0nfOxY6UxgfKskjBEehbZv-ZYjPu0iCci7RSGfYus9JoLTJmYyfO2Sv3mxe32rV-JFOo1UOiBIUt4mArfmRTmH-bGTPdRSLv6IWjQbQeVi-vIpB3uTfsqlC8_R26_zp-7gqj2qjnAKbTj96abxvA_H2GyNMzNi4eXIMrw0nETg&mmp_pid=an_11393951005&uls_trackid=55mbrb9301j1&utm_campaign=id_G56OSonVSZ&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ex68crdq5b8c"
  }, 
  {
    id: "590",
    name: "590",
    desc: "Pupuk Booster Cabai Rawit Plus Biofungisida",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pupuk Booster Cabai Rawit Plus Biofungisida.jpg",
    link: "https://shopee.co.id/product/81482458/25543107379?affiliate_seller_voucher_token=8bCnE5QAmVgnVqZ8j8uC3eV5G8SZLi6fgtCXkbxzDK&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElAAAAAzycsrulJzt79abs3n0AMUZDxie6DxPHBeSILWZktZic_dYSfjmMAYLhpiDeIG9Zgmy3xAXpuEn9cAbZQ10RAe1FmeB2eyW03gtAT5F1sIDVcRF-tzpUwrDOrrsVCZ5YXLpmUNYCbeCiw2MVazMfO3vG6csWBvyImsB1gRGq5pFbBUuum3SEaCPzb-OwkVu5KI&mmp_pid=an_11393951005&uls_trackid=55mbr5j900bm&utm_campaign=id_98S55OM6b1&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ex6884fagz4f"
  }, 
  {
    id: "589",
    name: "589",
    desc: "Pupuk KCL Pak Tani 5 Kg Kristal Putih - Bubuk Powder Asli Kemasan Pabrik",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pupuk KCL Pak Tani 5 Kg Kristal Putih - Bubuk Powder Asli Kemasan Pabrik.jpg",
    link: "https://shopee.co.id/product/72098572/28526236829?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElAAAAAxoFjaMW_n37QQ58cb1e9pz6AqBJGJ1xAVmtlffkeGro_XWOGPVjnxvNx1fCsNuWIh2I0TRGDFIWxIEmZXjXQrlXCuU627v4KspHWvONdsk4i6gO533rsD98yQw8shoqTVo2nne-Tq8kCn7_Vwgl9gs6sqIf8torEnvMxuwqiAYN31c_2z5-DRQSlPhr_B1hps&mmp_pid=an_11393951005&uls_trackid=55mbr20u00iu&utm_campaign=id_11vX9m5IDZn&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ex68574qq575"
  }, 
  {
    id: "588",
    name: "588",
    desc: "Pupuk Buah Agar Cepat Berbuah Queen Tonic 1000ML Memicu 7X Lebih Cepat Pembuahan",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pupuk Buah Agar Cepat Berbuah Queen Tonic 1000ML Memicu 7X Lebih Cepat Pembuahan.jpg",
    link: "https://shopee.co.id/product/1583605832/42658774147?affiliate_seller_voucher_token=8bCnE5QAnJ69eEjX2JJ2GKN5i1eMoqhaC1dDAScwqQ&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAwjNp21s4X4JhjipovVEZ7lzAiZrjmpx-SGn8bQ1bwixgFIiFznEJSeKaSLrcUgojPRDBrO3QgRbY2KCIXsSe7LCMszEQJoGJ9_JPTLvsgZy5qYzlN43nE8hZXj0MV2vZbHDX8A98UWbTNmhGniHgoJCW9nU1qc7BKSmSbyiaeimuPgCJtoxDIRE0pJ99iHHrXXqOuT&mmp_pid=an_11393951005&uls_trackid=55mbqu9100ib&utm_campaign=id_KQIjJblwxr&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ex6824w3zgt7"
  }, 
  {
    id: "587",
    name: "587",
    desc: "ULTRADAP Pak Tani 1KG - Pupuk Pemicu Akar & Bunga",
    subDesc: "Indonesia",
    image: "/img/Partner2/ULTRADAP Pak Tani 1KG - Pupuk Pemicu Akar & Bunga.jpg",
    link: "https://shopee.co.id/product/1703235536/56407413214?credential_token=8wEwiDL7ZRukiYE3Sk74GBHbWv5o3vzFSpNroHErXw&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAx9lLn9s89EBmvpjI8V7TGyxODPBgOq4H5pe-6FUq0VR7zUWfNWDHowR4n1LUvNLAyUDzUO5OrCxMQCV5tIfdxMg8OLIOXbemCJyzgh5h9BNzL1SIBSqkETj6kgJPk8y0lJ0QWnGms-FNTqgT2eBQNhjA3q9EzQeiE127Rz6lLWiQ8na-HElIokkJYUPKAbvmsUuYdC&mmp_pid=an_11393951005&uls_trackid=55lskh3h01l3&utm_campaign=id_CY4Rco4zyx&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewu7p3qp17jn"
  },  
  {
    id: "586",
    name: "586",
    desc: "INFARM - Pupuk Organik Cair 500mL",
    subDesc: "Indonesia",
    image: "/img/Partner2/INFARM - Pupuk Organik Cair 500mL.jpg",
    link: "https://shopee.co.id/product/93053250/14949569200?credential_token=8wEwiDL7XpNsSDRbc7368iwFqGipfoAbP3g4KrKFA9&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElAAAAAzlP6q3HvuvUZfNQEDnb0kvyqbNFhTmCeaedOBAxPBVPIEGlDF7Cve-XxouBsWPpzYK7yua_Hy8VZ_gGKbNTnojVnF6UCg_6QRfYzyY7IcrcRbQTwFIr-6exCoRzXI1bQXOaD7bxh9Wvf_i83CzH3_NeqUhgjzloiA9FBdDEdNekuv1YK3ej-Pi5d6fIfqQxZA&mmp_pid=an_11393951005&uls_trackid=55lskjn601l3&utm_campaign=id_jZkQIAloCV&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewu7r8eqnopj"
  },  
  {
    id: "585",
    name: "585",
    desc: "pupuk meroke KARATE PLUS BORONI kemasan pabrik 1kg",
    subDesc: "Indonesia",
    image: "/img/Partner2/pupuk meroke KARATE PLUS BORONI kemasan pabrik 1kg.jpg",
    link: "https://shopee.co.id/product/29270458/23881572183?affiliate_seller_voucher_token=8bCnE5QAmVWGkysyt631jMmyaRfisEXzVBDjZgGmyA&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElAAAAAwFg56QVNtvuiQ-FzFArGHBbpzPmrRlMmRRYhPQrTZe1YAbL-odi7Jq9rGbJfixrEaSEWASNvF2MH1Fmc9YBOJOTUwXavpKBzlVvULC0P0sT656E5YacefMLvuaCwSiL_KUJwZRC-RWLTc8eIU6yObRTG3f7gqecNOp35LOCUClJunLNaAdVSL9hy2pIekiMe8&mmp_pid=an_11393951005&uls_trackid=55lsklpn02bm&utm_campaign=id_U7ucFR09Tz&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewu7sx83r2s1"
  },  
  {
    id: "584",
    name: "584",
    desc: "[ORIGINAL] Booster 76 Hormon Pembungaan dan Pembuahan",
    subDesc: "Indonesia",
    image: "/img/Partner2/[ORIGINAL] Booster 76 Hormon Pembungaan dan Pembuahan.jpg",
    link: "https://shopee.co.id/product/428608077/21878661749?affiliate_seller_voucher_token=8bCnE5QAmVKhQLKJK1hsqq43HchUi3jpD6E7hVT3V9&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAyQ8raTr5iucMsWzK-Spd71D5caeSl3otxJxhLX0xYPeAvUphb5vVSVJbYuDf_qDM4l1wjoQJHF50oEEMqrzPyF7nnxQyMs61Pthm0KzjC_Et_U2Vu3fUvhu0Pc4hZm7dzf-tZ27q_HnhjbuNEb9vty0lnbGrczA9oi6jr18Zuo1xeBpw8cmpfyWo-Ef1AlKaZHTg&mmp_pid=an_11393951005&uls_trackid=55lskoiv01l3&utm_campaign=id_96Zx4IlmKt&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewu7v7rdk9nx"
  },  
  {
    id: "583",
    name: "583",
    desc: "Pupuk NPK YaraMila UNIK 16-16-16 (Kemasan 5 KG)",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pupuk NPK YaraMila UNIK 16-16-16 (Kemasan 5 KG).jpg",
    link: "https://shopee.co.id/product/213125091/48555756463?credential_token=8wEwiDL7Z2kkJegFSGk5JLiKRKdADM5WSSjJUVzwcT&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAzSYQ53iJnHekWg-dUcrNtSuBDVU4Wtv2jO0UstzbgalPPr1rtG1ttrdJ0uIhRir2Q5g0g9w9fqJ2Y_1de1TI4R1MXkCDJS08sqghcz2UfF6_VtD6UOw21Hk8oIE4zfRFxSFciLftZ3NKot7nftOYj4qkMlVoYlEKpTNBOWA_eiqu0uDNIUqdPGzd1-fr4gVJavNA&mmp_pid=an_11393951005&uls_trackid=55lskqll02e3&utm_campaign=id_JBr7OD5ppf&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewu7wwpmzgph"
  },  
  {
    id: "582",
    name: "582",
    desc: "Pupuk Kandang Kambing 1 Karung Fermentasi Halus Siap Pakai",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pupuk Kandang Kambing 1 Karung Fermentasi Halus Siap Pakai.jpg",
    link: "https://shopee.co.id/product/1549215752/43618721838?credential_token=8wEwiDL7Z2JL76B5AGaYp5jztjYAVbvbTRksSeYxz6&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAxC7fXGfoLw2czebrgcQaecOIYcXq0JZCQ6HMajkzlC5Oy_E_wIOwmeTi01w2Ppnnqr_3a6ML-91cnFxnHSGWFqBdxCwktA0PMFasyFTLb8vBk3Gwug1FOFQiPjRO2d_-bj4iRfRNEpL5IM00MxQrRE6B84eHOjLJcOQFPMiGRNSvJ7vvxhZ6_zFvsZbHDqpON8BcaS&mmp_pid=an_11393951005&uls_trackid=55lsksff01e3&utm_campaign=id_Y9TGzoIRq3&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewu7ydxc1zrs"
  },  
  {
    id: "581",
    name: "581",
    desc: "POC BOOSTER SAWIT 1 LITER - Pupuk Organik Cair dan ZPT",
    subDesc: "Indonesia",
    image: "/img/Partner2/POC BOOSTER SAWIT 1 LITER - Pupuk Organik Cair dan ZPT.jpg",
    link: "https://shopee.co.id/product/405312156/25044014388?credential_token=8wEwiDL7YDoaKBLwaSVgp2SLYMsE4WdSuJZVr3BVKF&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAx4-_ay6cRzXEQlhea0cP-poM6RtTlbnVTfY_DtnTepRsXWGMNr_coa6PkT7NdsQZylvNP72AwmFVRir4Tl-Fn_8EdQGTmqgf2uTwowBXtCfH0v3dy5WiyNKlfJWlJngrNDKgV73U7XErD5K0XKbELSU5-hL1y27bH2sHL7mxb3e192bd_-1-Mk06XqO9m6zODJfQ&mmp_pid=an_11393951005&uls_trackid=55lskuam00bm&utm_campaign=id_x7OLin3d9r&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewu7zwcakwcb"
  },  
  {
    id: "580",
    name: "580",
    desc: "Asam Humat Cair Humic Acid 90% Pembenah Tanah Alami",
    subDesc: "Indonesia",
    image: "/img/Partner2/Asam Humat Cair Humic Acid 90% Pembenah Tanah Alami.jpg",
    link: "https://shopee.co.id/product/1090748143/18293978860?affiliate_seller_voucher_token=8bCnE5QAm6cyyDcbCwz4avMBKEok2sZ5d5yAX2BSzc&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAz_pnLNcwr_J8y6woJQhF0Ul0QCzGdfgDu_P-QpCH4e3utVzXsAk2fIZ7X3KbNjVlMRTxQF2joPgBJwaC1fTWbzZzdMUtT0l41gCS_D__4rG8Nyr4OoGAVrYEDN4p1Zr9_uvaVT6PGccMsAdoMz8EZNUQ2kvaDGD4N29mdOodpmNvrQTxUDbkItUP-5ehaypyw6_bkQ&mmp_pid=an_11393951005&uls_trackid=55lsl13a049m&utm_campaign=id_xPA8PAn2Wt&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewu836cke7q1"
  },
  {
    id: "579",
    name: "579",
    desc: "Pupuk KCL Dewa Dewi - Pembesar Umbi dan Buah",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pupuk KCL Dewa Dewi - Pembesar Umbi dan Buah.jpg",
    link: "https://shopee.co.id/opaanlp/1692871420/55703263035?__mobile__=1&credential_token=8wEwiDL7ZRpXdnatGUfTM23KqKMQdhaLq7zdPHebfA&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAx-B94OW2b4qBdn0-SF2nMXg5fGhrxyjFCS3PECMO7o0lumxwmTgu48js-V_k8r6YiweyZ_zz08Q8LHZnJlI69c_L1RxgNbkvwa_viAlkQf7qqC2nztobM9FcqDykcOmqgeCSj4DLYlWg-JPaHLvgczGhqjx7XO_6kwExUhowc-SqoPUX_nNfmPOaaZqG_gryuaxwQW&mmp_pid=an_11393951005&uls_trackid=55lsetdl01pk&utm_campaign=id_CPCY2izFJ9&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewu3d6288emu"
  },
  {
    id: "578",
    name: "578",
    desc: "Pupuk Booster Mangga Pelebat Organik Cepat Berbuah Lebat 100ml",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pupuk Booster Mangga Pelebat Organik Cepat Berbuah Lebat 100ml.jpg",
    link: "https://shopee.co.id/opaanlp/302060930/24622817757?__mobile__=1&credential_token=8wEwiDL7YDiQpL5TMv9XvmXYPnt1P6TKN1X5xpZNc8&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAwDVfm5qUWAP7rNfXaZtvofFmg7l5mPq_SzQ6VENdohJgxyHljecETeXnTbfsfPBworJAhHPN7h4hhWkJ1R4BfvuOndPqewqF1dP1jWPH-Y3soPLpIFTgaS_WX1Vv_oAzZU7yWpK1oQsbruxEEyy8eChXRsJE9OmJT5uVPEf1zq6LNkAgYvWUSJ6aFZ2NrHwmLWwA&mmp_pid=an_11393951005&uls_trackid=55lsf04v00l3&utm_campaign=id_LfdHoDtMRz&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewu3fdx7hnj9"
  },
  {
    id: "577",
    name: "577",
    desc: "pupuk pelebat BUAH BUAHAN kemasan 250 gram",
    subDesc: "Indonesia",
    image: "/img/Partner2/pupuk pelebat BUAH BUAHAN kemasan 250 gram.jpg",
    link: "https://shopee.co.id/opaanlp/164394326/21592974916?__mobile__=1&affiliate_seller_voucher_token=8bCnE5QAmVKdpRhYQqfqP8bqbhifuFToBGSfmDWnYL&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAwAKKjt4J77iMXYeKtya8KmCUVLcjN_9OU9CeidG8eNAlt6TIVb6KoqsBGdIXf7vqdl-MwjHTi-H7PlcPmTS-cbSmABzGXlQzbdk_CyMkbzPzc6DU7PmSP_HN3UVjAFICX3JlT8B602drEPyW2b6pgqUvTEL2OTr8r0VRru4_UbAPb2iaz6tZO-UGUjr_Z8afbsbA&mmp_pid=an_11393951005&uls_trackid=55lsf23a00l3&utm_campaign=id_JCRjLkVrhn&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewu3gz1wuup5"
  },
  {
    id: "576",
    name: "576",
    desc: "VITAMIN PERANGSANG GETAH KARET 1000 ML",
    subDesc: "Indonesia",
    image: "/img/Partner2/VITAMIN PERANGSANG GETAH KARET 1000 ML.jpg",
    link: "https://shopee.co.id/opaanlp/1010966667/28442471070?__mobile__=1&credential_token=8wEwiDL7YE5X8gF64JVYbZBhHeT2u4tCnGon5sbou4&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAxu7sEu5jMwq7S8Pc1kYN9P5N_0V01bbxTSBoUrcbc0XMUTw6uTDcf9XFtqYL8g1kL4uUGtuQ0gHey2SC7Aznv5BUJKoJqNL1u6GmwxPL_9ckjpTDdYE28jvY3D_C8qH33TfRQVwIVq2-CyLGnuarU7GkWPeHguI3_g7_5eVjLKzr0PcJPk5M-7PcTcvnUUMlTFcj7n&mmp_pid=an_11393951005&uls_trackid=55lsf3p200pk&utm_campaign=id_yg3OtyyDxv&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewu3icrwkevs"
  },
  {
    id: "575",
    name: "575",
    desc: "Neo Trikoderma Pupuk Cabai Organik Cair Penumbuh Buah & Obat Bunga",
    subDesc: "Indonesia",
    image: "/img/Partner2/Neo Trikoderma Pupuk Cabai Organik Cair Penumbuh Buah & Obat Bunga.jpg",
    link: "https://shopee.co.id/opaanlp/517184183/26115807457?__mobile__=1&credential_token=8wEwiDL7YDttB3Dg6uRddCgZXPwFqsWatPhN7pYHvp&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAz18YtHqYjU6VAhQtr803BfOYZohvsh0ZV9Bag9IOyLy8uvrAV6sfu1tOck1QlAM19R3KvGx5p9K3vjBR0MPCBSrrSa3JDtgn4ex9IsbOqPylUy_ERQk6W0KVs4j4gzZ4xDVk8h6VWvxyUl8XfIgkAbxgskAPHIDlDkFblheNjYq4xRzmBT_oRGF2AhaqE__Yy0gg&mmp_pid=an_11393951005&uls_trackid=55lsf6qv00bk&utm_campaign=id_13VcX7wPQcZ&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewu3kuud8qh9"
  },
  {
    id: "574",
    name: "574",
    desc: "Pupuk NPK 16 16 16 kiloan 1kg cocok untuk penyubur tanaman dan melebatkan bunga dan buah",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pupuk NPK 16 16 16 kiloan 1kg cocok untuk penyubur tanaman dan melebatkan bunga dan buah.jpg",
    link: "https://shopee.co.id/opaanlp/1557480274/40653233251?__mobile__=1&affiliate_seller_voucher_token=8bCnE5QAnHuaHrAyrBMF5eYLDSpbNXeo8qSQBNgzKy&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAxzgTgBuPsC6_J-v0wEby_xjU8t9Z3Ic4enyIT8g7yGDVZGR2RV8RzRI8mK4Z_wT2z1osH1s0t6nj5jNGO0U4WEmkee264STZB1qSpBPb5aA23QKaTsw5MKM9AfUS3JOrE81lio-EY7nLFNkir_0UttMFvhAoJxkcxAccna78pOf2YDf011SLVLOn0HHQTzUbf4FgO2&mmp_pid=an_11393951005&uls_trackid=55lsf8li00l3&utm_campaign=id_M6UcTWkMZL&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewu3ncq29z48"
  },
  {
    id: "573",
    name: "573",
    desc: "Pupuk Urea 1kg Untuk Pertumbuhan Tanaman",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pupuk Urea 1kg Untuk Pertumbuhan Tanaman.jpg",
    link: "https://shopee.co.id/product/813245174/45406038667?credential_token=8wEwiDL7Z2Us4EjpEYwhntE4PNLQKLeBmAVAHivxiL&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAyc58kwDFSUjgsok2eexbEQ4USCeIc0p3JiUW-qTaRDGPE0T7q-lobgucBn3qYytS6l8hDXvG7fEZ_nVOjkPq_hd9Zu8htSV21pvezoatwUsnQO2o96wNakng_XGT5LZbOneWdVKQ4Dz_HG-g2LWO83CciH8bGUv0Mpl8JWK8F7F7bx_lDmIp9WAhc6d8jmyIga3Q&mmp_pid=an_11393951005&uls_trackid=55lsfesc02hh&utm_campaign=id_YR1zvGyhoF&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewu3sfh2ck71"
  },
  {
    id: "572",
    name: "572",
    desc: "Asam Humat 1KG Penyubur Tanah Pembenah Tanah Mudah Larut Organik",
    subDesc: "Indonesia",
    image: "/img/Partner2/Asam Humat 1KG Penyubur Tanah Pembenah Tanah Mudah Larut Organik.jpg",
    link: "https://shopee.co.id/product/6432113/52752892337?credential_token=8wEwiDL7ZRYfdZrajtoZKP2ub7Y6ej5ycBdiGxYBJC&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEkgAAAAwyuoeqh5lNcwYlh_wYwgXcT4yxIgGqNBThqAMYKKUoatIwrcMHWRwJYaPYWCmnmRTuLXvuqfbjmDpwyfzR3cOjM0y1JFDFi5wFOLxrTwIj_JLCb3iyBhZfEzHebPV5LzG37CUewfe-AaO2p6lOOcwTLaMHR04_kPyHCwPFOI6pLxPH_yhfgGCKpOYx9pYu&mmp_pid=an_11393951005&uls_trackid=55lsfib601e5&utm_campaign=id_TvSo7k3Ppn&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewu3v9rkd175"
  },
  {
    id: "571",
    name: "571",
    desc: "Skintific Mugwort Anti Pores & Acne Clay Stick 40g",
    subDesc: "Indonesia",
    image: "/img/Partner2/Skintific Mugwort Anti Pores & Acne Clay Stick 40g.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7638589765775871252"
  },
  {
    id: "570",
    name: "570",
    desc: "Acnemed Facial Wash for Oil Skin 100gr BPOM",
    subDesc: "Indonesia",
    image: "/img/Partner2/Acnemed Facial Wash for Oil Skin 100gr BPOM.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7638587964884307220"
  },
  {
    id: "569",
    name: "569",
    desc: "[NEW LAUNCH] Eskulin Eau De Parfum 30ml",
    subDesc: "Indonesia",
    image: "/img/Partner2/[NEW LAUNCH] Eskulin Eau De Parfum 30ml.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7638944807347408148"
  },
  {
    id: "568",
    name: "568",
    desc: "Stella Fabric Spray Fresh Fabric Spray Protect",
    subDesc: "Indonesia",
    image: "/img/Partner2/Stella Fabric Spray Fresh Fabric Spray Protect.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7638943701036928277"
  },
  {
    id: "567",
    name: "567",
    desc: "Viva Anti Aging Serum with Sodium Hyaluronate (HA) & Collagen (20ml)",
    subDesc: "Indonesia",
    image: "/img/Partner2/Viva Anti Aging Serum with Sodium Hyaluronate (HA) & Collagen (20ml).jpg",
    link: "https://www.tiktok.com/@booyenku/video/7638586025471692052"
  },
  {
    id: "566",
    name: "566",
    desc: "FACETOLOGY triple care 13.5 %",
    subDesc: "Indonesia",
    image: "/img/Partner2/FACETOLOGY triple care 13.5%.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7638590789991271701"
  }, 
  {
    id: "565",
    name: "565",
    desc: "Facetology Panthenol Barrier Boost Moisturizer Series 5%",
    subDesc: "Indonesia",
    image: "/img/Partner2/Facetology Panthenol Barrier Boost Moisturizer Series 5%.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7638586900659408149"
  }, 
  {
    id: "564",
    name: "564",
    desc: "Keset PVC Mie Bihun Welcome 38x58cm Warna Pilihan",
    subDesc: "Indonesia",
    image: "/img/Partner2/Keset PVC Mie Bihun Welcome 38x58cm Warna Pilihan.jpg",
    link: "https://www.instagram.com/reel/DWvwvn-EzsD/"
  }, 
  {
    id: "563",
    name: "563",
    desc: "Pijakan Kaki Honda Beat",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pijakan Kaki Honda Beat.jpg",
    link: "https://www.instagram.com/reel/DXLmVIcE2Mz/"
  }, 
  {
    id: "562",
    name: "562",
    desc: "Carways Bensin Injektor Cleaner 60ml Cairan Pembersih Kerak,Aksesoris Perawatan Motor Mobil",
    subDesc: "Indonesia",
    image: "/img/Partner2/Carways Bensin Injektor Cleaner 60ml Cairan Pembersih Kerak,Aksesoris Perawatan Motor Mobil.jpg",
    link: "https://s.shopee.co.id/1qYnxqAuHt"
  }, 
  {
    id: "561",
    name: "561",
    desc: "Kain Mat 1Kg Waterproofing Serat Fiber Fiberglass",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kain Mat 1Kg Waterproofing Serat Fiber Fiberglass.jpg",
    link: "https://shopee.co.id/product/92698993/7956326312?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEkgAAAAyHeKdR1Q0FqsTgEkJd5CN_QdhZ35rVHGm78nEWyYRL284hfP7Y1VGpZa0iYTWhurLxBcZoUZhGLvZr844Nn1PLQh_-v5VGAsoZy__VLiWK81WfW6nAg-jiqiPoPHaWhPc3H5o6D8xOxJGl3Kt4V7LRmBz9_8XHD-c5ZUCJVb-hHBLkcJlUnjW_ZDtZffjT&mmp_pid=an_11393951005&uls_trackid=55pvk7o200vo&utm_campaign=id_IgqwbgSnix&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn3qdo94mnf"
  }, 
  {
    id: "560",
    name: "560",
    desc: "Karburator Cleaner 500 ml - Pembersih Karburator & Injeksi Karbu",
    subDesc: "Indonesia",
    image: "/img/Partner2/Karburator Cleaner 500 ml - Pembersih Karburator & Injeksi Karbu.jpg",
    link: "https://shopee.co.id/product/1647797409/44123002953?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmAAAAAwSQ_yA1o0-MFz8fY6f1fFd58D4b_pK7L8T1-m75lkuuYg2OfXL3Ctxc8e1JmL3RataB8bd9RYBbNmlaqUrWEpqnjJcmNWnvcVsDpTaFYbXUAfWjBBt_iljyx26WBxivTqglxR9OMql4MfkG6SBykPgseVSHJdTl7ogfCoL988IufxSpAh_dfOFgCBiswfruMPWeCn9&mmp_pid=an_11393951005&uls_trackid=55pvk8k401vo&utm_campaign=id_JzDNguOVst&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn3r438sfou"
  }, 
  {
    id: "559",
    name: "559",
    desc: "PETROASIA Carb Clean And Injection Cleaner Pembersih Karburator Mobil Dan Motor 300Ml 500Ml",
    subDesc: "Indonesia",
    image: "/img/Partner2/PETROASIA Carb Clean And Injection Cleaner Pembersih Karburator Mobil Dan Motor 300Ml 500Ml.jpg",
    link: "https://shopee.co.id/product/34680048/14897896963?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElAAAAAwYcvoHNnhnBKt2qnjdLvaObRjfZQkCQUTK9gC9-H1ttGAV09ZoBGTBgOqK8zhgWi2_d-V33MKykppRkmwUV3xCgeZDoOKP348JI1CoqsO88r9b_AdSi0566vPhIVxbcDVYWmvKBB07Jk416GNwHeL2yJ0tEOn4oCD-22sSlSPyABA2CO8AkorEQDDZ1DLR3JU&mmp_pid=an_11393951005&uls_trackid=55pvkauv01vq&utm_campaign=id_7tc0qpUl8R&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn3t13kuonh"
  }, 
  {
    id: "558",
    name: "558",
    desc: "Pembersih injector Lowkos Injector Cleaner Langsung Tuang Tangki 60 ML",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pembersih injector Lowkos Injector Cleaner Langsung Tuang Tangki 60 ML.jpg",
    link: "https://shopee.co.id/product/106213251/29900569612?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAwFBoTSUAn_Gc2o7nz0G6MM-c-LkslLm9jsFgfVKCpfopiOxrMou5olU1fGrrbsEioowEEIhHVOebvKS3Gjhae41iFC7DJP0xmL9XwRd3-iynbhQ73iaf1BJVtqy0posAsZViiWX1p2i2mGVnDkNtzGc9-krDJ4OwgL8ZCtJqx7o0W42qCGx8lKPtpCbVPLjYbMLQ&mmp_pid=an_11393951005&uls_trackid=55pvkbp200vt&utm_campaign=id_OQaSdnNwxT&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn3toreozyu"
  }, 
  {
    id: "557",
    name: "557",
    desc: "Stiker pillar Mobil Pilar Jendela Mobil",
    subDesc: "Indonesia",
    image: "/img/Partner2/Stiker pillar Mobil Pilar Jendela Mobil.jpg",
    link: "https://shopee.co.id/product/40213822/43055164832?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElAAAAAy-uGeIQ5SHLTyfszzVyOAboUeMswmfeHeFdEue8EQqJQX60pwCKEq5ws8Q-6UZium_ggMYDViPwU17Fnas8AjoH7fMGI4siCGFIT1rmqtoqZU7jIOw3rqNhXqFz_JaQRkgAiPG7JInMLeHuG7F4C3T77Z85ing7kqzkjHa7uIbFP5zV24UQWmQ4PMCrhebp2w&mmp_pid=an_11393951005&uls_trackid=55pvke2n00v9&utm_campaign=id_13DHD6WTxCR&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn3vjr2kgoh"
  }, 
  {
    id: "556",
    name: "556",
    desc: "Kabel Bintik 7 Warna Full Tembaga AVSs Jepang Kabel auto Otomotif Body variasi modif audio aksesoris Motor Mobil",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kabel Bintik 7 Warna Full Tembaga AVSs Jepang Kabel auto Otomotif Body variasi modif audio aksesoris Motor Mobil.jpg",
    link: "https://shopee.co.id/product/28021497/53202616698?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElAAAAAxJS8YR1M-PTrSqudXt60AiVgJPBB1cBvjmfIql7DMlJQX4RbS8MsbqgleD7RuPsD64YESTMDhruE82nsYlJ5HNCxCRIJ6jloKV5MYBqEyxqXsslfFUBGDxysgSKdgG3H9-j6itmmGy97iHLznI0g-v_sZfeAOzUa4f1n4kWxxYyi2CpQcwhHkHuNSh5aWqnsI&mmp_pid=an_11393951005&uls_trackid=55pvketa01vq&utm_campaign=id_13bora8ph71&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn3w8utupr3"
  }, 
  {
    id: "555",
    name: "555",
    desc: "Serat Carbon Forged Isi 10gr Warna Hitam",
    subDesc: "Indonesia",
    image: "/img/Partner2/Serat Carbon Forged Isi 10gr Warna Hitam.jpg",
    link: "https://shopee.co.id/product/28058659/18079531821?affiliate_seller_voucher_token=8bCnE5QAm6cwZigFAtSHwr4z7j2oxE7vToitc8D6dT&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElAAAAAzLtQvuOH-kLoE54OZARNgKobm1-3kRMDKdGzsxVikcNvut2F69wM6mmbpEUk68xuAR50dON-w5NrbD2KCnOItrWjeNBisECVDIGd5kz82kigxcjFYDxKp46sthOxtleqb48zSMh8kNrOKr-lCjx8QAc2aYMwvMxXUY9nVTvDI-Xf9dIfsC-YHbHoR7nESsy8o&mmp_pid=an_11393951005&uls_trackid=55pvkh7a00v9&utm_campaign=id_IbtsxFfkmd&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn3y548z8gf"
  },
  {
    id: "554",
    name: "554",
    desc: "WARDAH UV Shield",
    subDesc: "Indonesia",
    image: "/img/Partner2/WARDAH UV Shield.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7638584970507799829"
  },
  {
    id: "553",
    name: "553",
    desc: "Minosep MILD Obat Kumur Antiseptik",
    subDesc: "Indonesia",
    image: "/img/Partner2/Minosep MILD Obat Kumur Antiseptik.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7636699168173509909"
  },
  {
    id: "552",
    name: "552",
    desc: "Vitalis Eau De Toilette Fresh Breeze 60 ml",
    subDesc: "Indonesia",
    image: "/img/Partner2/Vitalis Eau De Toilette Fresh Breeze 60 ml.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7636611209860631829"
  },
  {
    id: "551",
    name: "551",
    desc: "Curcuma Force 1 Blister",
    subDesc: "Industri",
    image: "/img/Partner2/Curcuma Force 1 Blister.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7638581501134703892"
  },
  {
    id: "550",
    name: "550",
    desc: "HSD Black Garlic, Bawang Hitam Premium",
    subDesc: "Indonesia",
    image: "/img/Partner2/HSD Black Garlic, Bawang Hitam Premium.jpg",
    link: "https://shopee.co.id/product/738529143/16351005523?affiliate_seller_voucher_token=8bCnE5QAm6SRoEBQcFE9u1rNhLc7dHkwcBGf9mZ6v4&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAzQGzXjvzQek8fww2uRooOzc6q9LfxLqJn4Hzxmcl5ozQbYs6of97XIzGsM-cpaRxV9C5mJf8Klld2CKMrTVy31l-mbEoDTvQqH-ia8FawaUpYm1VETvhitzfHXPBk-llSVj0_Rec8KnkoCTSF6hEZIVgdI6ZRhrtW571HtcldGPKxGmOI-M19Ath5g9or6LTBrrQ&mmp_pid=an_11393951005&uls_trackid=55pvkjgr0004&utm_campaign=id_LpMMNBLGtX&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn3zzzdmuqy"
  },
  {
    id: "549",
    name: "549",
    desc: "Cemilan Cimol Mozzarella/Cimol Bojot AA Mozzarella Frozen Food",
    subDesc: "Indonesia",
    image: "/img/Partner2/Cemilan Cimol Mozzarella.jpg",
    link: "https://shopee.co.id/product/477280848/13298264145?affiliate_seller_voucher_token=8bCnE5QAm6AYbGHjkX7tpDEdcosKNY5qxhbWTJTbTk&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAz_Kj3EdF3W00cRU6MahrVsw8VXetkKzVRQg3htb7oojIDo_effF8rZv1PddpzRYgqDC_1Gu5kTWwJvt6mAEA7qFLhfucCrBD5sqKk8_YGmuJ80AFs7NkOooAtor6Mzn_RJZtQXnSvSHOvVWczUZIfVH7DcWJ3fmjf61hq9e-EuBtpZu6QqZvJcD8EK78TMAuJz-A&mmp_pid=an_11393951005&uls_trackid=55pvkkuh0201&utm_campaign=id_Kbiqwk1FFb&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn426pjpdew"
  },
  {
    id: "548",
    name: "548",
    desc: "PEMPEK EMAK INDAH - PEMPEK MPENAK PALEMBANG ASLI IKAN TENGGIRI",
    subDesc: "Indonesia",
    image: "/img/Partner2/PEMPEK EMAK INDAH - PEMPEK MPENAK PALEMBANG ASLI IKAN TENGGIRI.jpg",
    link: "https://shopee.co.id/product/46400531/4129717384?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEkgAAAAwZGits2ypRWQAik9mw3IGbnIUBnC8Hda4yTBdVIyOiGklKzxPkhHAZk3aj9sqQT-gV8ahNMjNxg_ijpH4tWKj7lkUpEb0UXOp37LUw0ghWTLzItEKhkgFr9LIVWq_Pa5ZOt8sdZxdFOBm0TGu266kF0f1UiY0YBJMAYmy7c4iMJTybPqoCBQHrgu-k5k0p&mmp_pid=an_11393951005&uls_trackid=55pvkmiq021s&utm_campaign=id_BvVAGvf3eN&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn43i6mxetw"
  },
  {
    id: "547",
    name: "547",
    desc: "Black Garlic Bawang Tunggal Premium 440gr",
    subDesc: "Indonesia",
    image: "/img/Partner2/Black Garlic Bawang Tunggal Premium 440gr.jpg",
    link: "https://shopee.co.id/product/1378625917/42673060635?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTEmAAAAAxhcPlahy2IEeCl7WKSTjKf_brJiaMvGNPBP64Y6qlE34PPhpJwLurbMGtDOwdO72sPR2erqoW_rsj6HFIOp6vjEZFN4veur5YU3RRliUj6NHwgCA5m_gqNuiwkbIxOmoOk9X6MgPAeCiYh_ATl7dHPOVyhHJA1IQbbJXmujCI_aWCnCgUUkGvspJmR99F4NqM0WKrs&mmp_pid=an_11393951005&uls_trackid=55pvknse00vc&utm_campaign=id_KRGkVirAfD&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn44kben7rw"
  },
  {
    id: "546",
    name: "546",
    desc: "mangga kionjay + bumbu gorojog sitetehtetehcianjur",
    subDesc: "Indonesia",
    image: "/img/Partner2/mangga kionjay + bumbu gorojog sitetehtetehcianjur.jpg",
    link: "https://shopee.co.id/product/69916042/24136939616?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElAAAAAyNnWVg6aiHgc9mg98NRs4f5yIlpYlrMuVOZHJG-620wApYIHVlW81gosGy2Dd-DuRDZxFMiRI5rxrFPJH8-JFsn2chrtGm9p_cmo77V5LJjNMcaLPSF8YnvaKNaZ_rPspNjFJeBoW1xOGq0XGz1lKPUu1cvLTRN15P9qq6dqDsm2mAfkfR5TlIrgtvKZRvXjo&mmp_pid=an_11393951005&uls_trackid=55pvkokt025c&utm_campaign=id_C6uLoUCnO7&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn457kemuaf"
  },
  {
    id: "545",
    name: "545",
    desc: "Rayya Black Garlic Solo Bawang Hitam Tunggal Premium 250gr Rasa Manis",
    subDesc: "Indonesia",
    image: "/img/Partner2/Rayya Black Garlic Solo Bawang Hitam Tunggal Premium 250gr Rasa Manis.jpg",
    link: "https://s.shopee.co.id/8V5gOcrwND"
  },
  {
    id: "544",
    name: "544",
    desc: "Daechang Gopchang Usus Besar Sapi Panggang ",
    subDesc: "Indonesia",
    image: "/img/Partner2/Daechang Gopchang Usus Besar Sapi Panggang .jpg",
    link: "https://s.shopee.co.id/901wzZIiDo"
  },
  {
    id: "543",
    name: "543",
    desc: "mBAKSOimah Tahu Bakso (1 pack isi 10 pcs)",
    subDesc: "Indonesia",
    image: "/img/Partner2/mBAKSOimah Tahu Bakso (1 pack isi 10 pcs).jpg",
    link: "https://s.shopee.co.id/8ASq04464K"
  },
  {
    id: "542",
    name: "542",
    desc: "Kulit dimsum 7.5 cm 100 pcs",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kulit dimsum 7.5 cm 100 pcs.jpg",
    link: "https://s.shopee.co.id/30kjqancfH"
  },
  {
    id: "541",
    name: "541",
    desc: "20 Pcs Pempek Palembang Empek Pempek ikan mix",
    subDesc: "Indonesia",
    image: "/img/Partner2/20 Pcs Pempek Palembang Empek Pempek ikan mix.jpg",
    link: "https://s.shopee.co.id/5flV1WDdi8"
  },
  {
    id: "540",
    name: "540",
    desc: "Azzura Micellar Cleansing Water",
    subDesc: "Indonesia",
    image: "/img/Partner2/Azzura Micellar Cleansing Water.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7636768485044964629"
  },
  {
    id: "539",
    name: "539",
    desc: "WPC Toilet",
    subDesc: "Indonesia",
    image: "/img/Partner2/WPC Toilet.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7636645396474907924"
  },
  {
    id: "538",
    name: "538",
    desc: "Steker 3 Kaki",
    subDesc: "Indonesia",
    image: "/img/Partner2/Steker 3 Kaki.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7637532036923854101"
  },
  {
    id: "537",
    name: "537",
    desc: "Pulpen Snowman",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pulpen Snowman.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7637533529538153748"
  },
  {
    id: "536",
    name: "536",
    desc: "Listerine Watermelon",
    subDesc: "Indonesia",
    image: "/img/Partner2/Listerine Watermelon.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7637826633465990421"
  },
  {
    id: "535",
    name: "535",
    desc: "Listerine Sakura Peach",
    subDesc: "Indonesia",
    image: "/img/Partner2/Listerine Sakura Peach.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7637829685434715413"
  },
  {
    id: "534",
    name: "534",
    desc: "Posh Parfume",
    subDesc: "Indonesia",
    image: "/img/Partner2/Posh Parfume.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7637896263085722901"
  },
  {
    id: "533",
    name: "533",
    desc: "Stella Pocket",
    subDesc: "Indonesia",
    image: "/img/Partner2/Stella Pocket.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7635288992627313941"
  },
  {
    id: "532",
    name: "532",
    desc: "Soffell Korean Summer",
    subDesc: "Indonesia",
    image: "/img/Partner2/Soffell Korean Summer.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7635508252645543189"
  },
  {
    id: "531",
    name: "531",
    desc: "Betadine",
    subDesc: "Indonesia",
    image: "/img/Partner2/Betadine.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7635506361727601941"
  },
  {
    id: "530",
    name: "530",
    desc: "Zuper Spray",
    subDesc: "Indonesia",
    image: "/img/Partner2/Zuper Spray.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7635981939098357012"
  },
  {
    id: "529",
    name: "529",
    desc: "Ovaltine Malty Bites Wafer",
    subDesc: "Indonesia",
    image: "/img/Partner2/Ovaltine Malty Bites Wafer.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7635979579110346004"
  },
  {
    id: "528",
    name: "528",
    desc: "Sendok Super Doll",
    subDesc: "Indonesia",
    image: "/img/Partner2/Sendok Super Doll.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7635880143549893909"
  },
  {
    id: "527",
    name: "527",
    desc: "DS Exclusive Parfume",
    subDesc: "Indonesia",
    image: "/img/Partner2/DS Exclusive Parfume.jpg",
    link: "https://wa.me/6285214991705"
  },
  {
    id: "526",
    name: "526",
    desc: "Cultivia Belitung Signature Oil",
    subDesc: "Indonesia",
    image: "/img/Partner2/cultivia belitung signature oil.jpg",
    link: "https://shopee.co.id/opaanlp/227338163/43868651166?__mobile__=1&affiliate_seller_voucher_token=8bCnE5QAnJBUifRV1xNdF1EbwhKieUotwq4c4U9Zbr&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAxlMmrL81g2ulNGTIw2CtvcakEzIpajj0e7jzMlwyKFSA0M9euAZCBOP6xdmjoXr75xQWwxm0zlWjlvGhJ2HTxDJ8BX6mwlTwXb1W54muYsDcDzlAqU_u-U-gMZgoPVNKOAX2A1GodLkwO2potupgyJNAwSy8fHR4QOAgY_OhARnbHjjCl0PGEV9BDuTrbjSpyACA&mmp_pid=an_11393951005&uls_trackid=55k1k4m200td&utm_campaign=id_kvrDvqyZh7&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evkgc8t71equ"
  },
  {
    id: "525",
    name: "525",
    desc: "Billiton Spice - Black Pepper",
    subDesc: "Indonesia",
    image: "/img/Partner2/Billiton Spice - Black Pepper.jpg",
    link: "https://shopee.co.id/opaanlp/257638998/7732983017?__mobile__=1&credential_token=2oGr6iJvCP1dxL7FkxYi6yZ4imRGomFDQZdQEVqmU&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElAAAAAx4Obupp5TxVoM9oVSmAyYxYAOXr7dyXr-bX5WwsT2aG56AvVlolFQmQ6rta1QONq_AYcstHUulpzMIK-icfNvPZbSXRVh9jaiKJlxj2FiBlUgOLB_1E6t-NGs5Ng_mUMJkPG7ZdHLHYk1Ku_bm5_ORv21OjSe9nYY2Coaiv1Vb_t11ccBJAXg3OXYma7DrIRs&mmp_pid=an_11393951005&uls_trackid=55k1k66i01kg&utm_campaign=id_WtFZyPzjH3&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evkgdh14dopc"
  },
  {
    id: "524",
    name: "524",
    desc: "Ferratti Ferro Espresso Machine",
    subDesc: "Indonesia",
    image: "/img/Partner2/Ferratti Ferro Espresso Machine.jpg",
    link: "https://shopee.co.id/opaanlp/48095478/2329682246?__mobile__=1&credential_token=2oGr6iJvBvVTok9WcvcWfbBWxqMmujapsfsKRn4Vi&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEkgAAAAynGOm2Ngqv46z2W-vnryYUr5Xf7JyA1v_N-BYD-KwQ-deB6gvhSFAcdC3AdGIk-7ensNpeXmvCccqyyUhoRZ5Re8to7VPzG3sBr0qS7uQLQjVs53LCAETufYTgBS-v8kixG04IIu8qJUBUhnTYRXX_jKX6DyWqm3PuZa0MHmWTB-Hhd8w3u8vU-qMzvhpT&mmp_pid=an_11393951005&uls_trackid=55k1k7ni00kg&utm_campaign=id_13Ajd1eA3zR&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evkgeqjufx95"
  },
  {
    id: "523",
    name: "523",
    desc: "Mainan Mobil Panel Surya",
    subDesc: "Indonesia",
    image: "/img/Partner2/Mainan Mobil Panel Surya.jpg",
    link: "https://shopee.co.id/opaanlp/1506717646/48952288556?__mobile__=1&credential_token=8wEwiDL7Z2kq6a8kXXHknq8HeQdTEzWnrDW5pUAjGW&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAyHy5xG2_7-AXgmUeXFV_VT1ZxSEYlzZkrIEga3eluP6e6NVsRZTCRK8BOUSItOBCawuawLQyFR-biHbdlBWLa-3Lqgmmb33E64Vqysw3yKeNqHXkW5GTMzuNokQjyB-k4MXlvIGPLc1OJQgCoeGd8NS0naZm6oeUmj-NNZy4-n-csA4gbToCKBf9v9uSGCdHynFstT&mmp_pid=an_11393951005&uls_trackid=55k1k94i0ekg&utm_campaign=id_C3S9V17Vsf&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evkgfvkk9qkc"
  },
    {
    id: "522",
    name: "522",
    desc: "Mainan Generator Tangan",
    subDesc: "Indonesia",
    image: "/img/Partner2/Mainan Generator Tangan.jpg",
    link: "https://shopee.co.id/opaanlp/1597093038/52103099981?__mobile__=1&credential_token=8wEwiDL7ZRYYRKjzsPbPuFj5kv71p4vDYzMnhM3j3y&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAzv8kMbNKt9lhUpI0RRQDR-Zr9TE9zLG2GNuWJJvRITGwFZgEsJbnQu_mxdSdkY0q2Rklf6eabrDaUEyvoTvWfC0VC-6JNpcI-g3_TwuYOWLB5C4Zlc529bhDxrmVhzwNHDb4aOuVQ1AR5TQCzA6_xvz4xilE72HcdrwzdzcL4LJvAcnxJ2Jo_0tqAkJnc06UDyh74V&mmp_pid=an_11393951005&uls_trackid=55k1kaq6067h&utm_campaign=id_JAox4nkOlF&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evkgh9aa3c5d"
  },
  {
    id: "521",
    name: "521",
    desc: "Mainan Kayu",
    subDesc: "Indonesia",
    image: "/img/Partner2/Mainan Kayu.jpg",
    link: "https://shopee.co.id/opaanlp/1231765979/27128947588?__mobile__=1&affiliate_seller_voucher_token=8bCnE5QAmVsH3kzPYRdkrTkaQ2dH5NewoPcaNmdaGq&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAxlVfeXv2nLaS_fSp4L43-3yeNxnltbTMFlxfp_uytcreKsKzs0y8IE1PIZT4vCbqnbS-wOk_M10OQ7FNZJhp2thYcbmv1qb8cC-G8D1WGo4VBMomI9odsBNYCqJoVfMrSmNekZHgCc6vetgWzFRVAw2ETapz2Be9htjqZH4oQ-SHCDr7BCv25DNHNJnJYdFKNMxVSR&mmp_pid=an_11393951005&uls_trackid=55k1kcbk027h&utm_campaign=id_jGUxCNjuiX&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evkgii7gui7z"
  },
  {
    id: "520",
    name: "520",
    desc: "Mainan Mikroskop",
    subDesc: "Indonesia",
    image: "/img/Partner2/Mainan Mikroskop.jpg",
    link: "https://shopee.co.id/opaanlp/451272134/17525958672?__mobile__=1&credential_token=8wEwiDL7XpeefKS1sXLiNrdHrHixL4AoVupkWgTDyd&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAwV2pMH6uLVW6rB-weP4O5ADIfxnUVznK1uIGWTJJ1moS7b5g3KtOgJ_25f0hOyM2TE3E4BliTL1tF-a8eCoCyOX96gO3wgz7cC3k-8r90H83pIsyrGlMg5l06_5HN20aMNAKHc8m5Aq_Cc3bkp4or02HJH4usXyEQZGGld0hGHqYCJzZhZhCzwXHu7Gv7_gNYGxA&mmp_pid=an_11393951005&uls_trackid=55k1kdfl00cb&utm_campaign=id_11oIbeO5LRx&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evkgjfhh2cyd"
  },
  {
    id: "519",
    name: "519",
    desc: "Plastik Beras 2,5kg",
    subDesc: "Indonesia",
    image: "/img/Partner2/Plastik Beras 2,5kg.jpg",
    link: "https://s.shopee.co.id/2LUBCUDrZx"
  },
    {
    id: "518",
    name: "518",
    desc: "Plastik PE untuk Minyak Santan Gula",
    subDesc: "Indonesia",
    image: "/img/Partner2/Plastik PE untuk Minyak Santan Gula.jpg",
    link: "https://s.shopee.co.id/1Lbe0cVXVI"
  },
  {
    id: "517",
    name: "517",
    desc: "Plastik Laundry",
    subDesc: "Indonesia",
    image: "/img/Partner2/Plastik Laundry.jpg",
    link: "https://s.shopee.co.id/30jrze8Kp6"
  },
  {
    id: "516",
    name: "516",
    desc: "Plastik Klip Isi 100 Lembar",
    subDesc: "Indonesia",
    image: "/img/Partner2/Plastik Klip Isi 100 Lembar.jpg",
    link: "https://s.shopee.co.id/2BAl05TIN8"
  },
  {
    id: "515",
    name: "515",
    desc: "Plastik Kresek Merk Jisi",
    subDesc: "Indonesia",
    image: "/img/Partner2/Plastik Kresek Merk Jisi.jpg",
    link: "https://s.shopee.co.id/9fGlvq6E4Z"
  },
    {
    id: "514",
    name: "514",
    desc: "Kantong Bening PE Merk Akraplas",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kantong Bening PE Merk Akraplas.jpg",
    link: "https://s.shopee.co.id/8V4oXf2bhY"
  },
{
    id: "513",
    name: "513",
    desc: "Bioplastik OPP Transparan",
    subDesc: "Indonesia",
    image: "/img/Partner2/Bioplastik OPP Transparan.jpg",
    link: "https://s.shopee.co.id/9ztcKLqC6o"
  },
  {
    id: "512",
    name: "512",
    desc: "Bioplastik Merk Epi",
    subDesc: "Indonesia",
    image: "/img/Partner2/Bioplastik Merk Epi.jpg",
    link: "https://s.shopee.co.id/6pwaYUcafN"
  },
  {
    id: "511",
    name: "511",
    desc: "Cassava Polybag Merk Avani",
    subDesc: "Indonesia",
    image: "/img/Partner2/Cassava Polybag Merk Avani.jpg",
    link: "https://s.shopee.co.id/9fGlveoObR"
  },
    {
    id: "510",
    name: "510",
    desc: "Biopac Lembaran Kemasan Ramah Lingkungan",
    subDesc: "Indonesia",
    image: "/img/Partner2/Biopac Lembaran Kemasan Ramah Lingkungan.jpg",
    link: "https://s.shopee.co.id/50UwN1hf8S"
  },
    {
    id: "509",
    name: "509",
    desc: "Plastik Merk Oscar",
    subDesc: "Indonesia",
    image: "/img/Partner2/Plastik Merk Oscar.jpg",
    link: "https://s.shopee.co.id/2VnaxYvKYW"
  },
  {
    id: "508",
    name: "508",
    desc: "Plastik Tahan Panas",
    subDesc: "Indonesia",
    image: "/img/Partner2/Plastik Tahan Panas.jpg",
    link: "https://s.shopee.co.id/9paBh4jNYp"
  },
  {
    id: "507",
    name: "507",
    desc: "Plastik OPP Lem Seal",
    subDesc: "Indonesia",
    image: "/img/Partner2/Plastik OPP Lem Seal.jpg",
    link: "https://s.shopee.co.id/9paBh69iYA"
  },
    {
    id: "506",
    name: "506",
    desc: "Plastik Merk Sussy",
    subDesc: "Indonesia",
    image: "/img/Partner2/Plastik Merk Sussy.jpg",
    link: "https://s.shopee.co.id/qfMya3VOx"
  },
  {
    id: "505",
    name: "505",
    desc: "Kantong Plastik untuk Gelas",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kantong Plastik untuk Gelas.jpg",
    link: "https://s.shopee.co.id/9014hcG98Z"
  },
  {
    id: "504",
    name: "504",
    desc: "Plastik Kresek Bening",
    subDesc: "Indonesia",
    image: "/img/Partner2/Plastik Kresek Bening.jpg",
    link: "https://s.shopee.co.id/8fOEJ1v1N2"
  },
  {
    id: "503",
    name: "503",
    desc: "Kantong Plastik Merk Padi",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kantong Plastik Merk Padi.jpg",
    link: "https://s.shopee.co.id/7fVh7LYJCn"
  },
    {
    id: "502",
    name: "502",
    desc: "Plastik HD Joyo Boyo",
    subDesc: "Indonesia",
    image: "/img/Partner2/Plastik HD Joyo Boyo.jpg",
    link: "https://s.shopee.co.id/4fs5NJReuV"
  },
  {
    id: "501",
    name: "501",
    desc: "Kresek Pundi Mas",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kresek Pundi Mas.jpg",
    link: "https://s.shopee.co.id/8ARxXi2Ue8"
  },
  {
    id: "500",
    name: "500",
    desc: "Kresek Kaktus",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kresek Kaktus.jpg",
    link: "https://s.shopee.co.id/70G09VlScX"
  },
  {
    id: "499",
    name: "499",
    desc: "JCM Plastik Makanan Microwave",
    subDesc: "Indonesia",
    image: "/img/Partner2/JCM Plastik Makanan Microwave.jpg",
    link: "https://s.shopee.co.id/2qQRBoJzo9"
  },
  {
    id: "498",
    name: "498",
    desc: "Plastik Gelas Datar",
    subDesc: "Indonesia",
    image: "/img/Partner2/Plastik Gelas Datar.jpg",
    link: "https://s.shopee.co.id/4VYfAqSHDs"
  },
  {
    id: "497",
    name: "497",
    desc: "Plastik Karung Ayam",
    subDesc: "Indonesia",
    image: "/img/Partner2/Plastik Karung Ayam.jpg",
    link: "https://s.shopee.co.id/8KlNjnotP2"
  },
  {
    id: "496",
    name: "496",
    desc: "Besek Bambu - Wadah Makanan",
    subDesc: "Indonesia",
    image: "/img/Partner2/Besek Bambu - Wadah Makanan.jpg",
    link: "https://s.shopee.co.id/1gETl5WUYE"
  },
  {
    id: "495",
    name: "495",
    desc: "Beeswax Wraps",
    subDesc: "Indonesia",
    image: "/img/Partner2/Beeswax Wraps.jpg",
    link: "https://s.shopee.co.id/6L0JJd1vEj"
  },
  {
    id: "494",
    name: "494",
    desc: "Daun Jati - Wadah Makanan",
    subDesc: "Indonesia",
    image: "/img/Partner2/Daun Jati - Wadah Makanan.jpg",
    link: "https://s.shopee.co.id/gLwZAcWYv"
  },
  {
    id: "493",
    name: "493",
    desc: "Kertas Nasi Laminasi",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kertas Nasi Laminasi.jpg",
    link: "https://s.shopee.co.id/9UxL3vbFOp"
  },
  {
    id: "492",
    name: "492",
    desc: "Daun Pisang Fresh",
    subDesc: "Indonesia",
    image: "/img/Partner2/Daun Pisang Fresh.jpg",
    link: "https://s.shopee.co.id/8fOE4KkdqB"
  },
  {
    id: "491",
    name: "491",
    desc: "Plastik Cor Plastik Atap",
    subDesc: "Indonesia",
    image: "/img/Partner2/Plastik Cor Plastik Atap.jpg",
    link: "https://s.shopee.co.id/gLpMB8gUb"
  },
      {
    id: "490",
    name: "490",
    desc: "Kantong Sampah Cakar Kucing",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kantong Sampah Cakar Kucing.jpg",
    link: "https://s.shopee.co.id/7AZJ63PLmd"
  },
  {
    id: "489",
    name: "489",
    desc: "Plastik Vacuum Makanan Frozen",
    subDesc: "Indonesia",
    image: "/img/Partner2/Plastik Vacuum Makanan Frozen.jpg",
    link: "https://s.shopee.co.id/2VnTXKl5zX"
  },
  {
    id: "488",
    name: "488",
    desc: "Toples Bening Plastik",
    subDesc: "Indonesia",
    image: "/img/Partner2/Toples Bening Plastik.jpg",
    link: "https://s.shopee.co.id/2g6tjVS6eI"
  },
  {
    id: "487",
    name: "487",
    desc: "Kantong Plastik Warna Susu",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kantong Plastik Warna Susu.jpg",
    link: "https://s.shopee.co.id/gLpLrgt2H"
  },
    {
    id: "486",
    name: "486",
    desc: "Kotak Makan Plastik",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kotak Makan Plastik.jpg",
    link: "https://s.shopee.co.id/70FstWASz4"
  },
  {
    id: "485",
    name: "485",
    desc: "Plastik PP (Bunga Sukma)",
    subDesc: "Indonesia",
    image: "/img/Partner2/Plastik PP (Bunga Sukma).jpg",
    link: "https://s.shopee.co.id/168YfRuaX"
  },
  {
    id: "484",
    name: "484",
    desc: "Gelas Platik Oval",
    subDesc: "Indonesia",
    image: "/img/Partner2/Gelas Platik Oval.jpg",
    link: "https://s.shopee.co.id/3Vg0Jy1ZwI"
  },
  {
    id: "483",
    name: "483",
    desc: "Bubble Wrap Roll",
    subDesc: "Indonesia",
    image: "/img/Partner2/Bubble Wrap Roll.jpg",
    link: "https://s.shopee.co.id/2qQJWcovu9"
  },
  {
    id: "482",
    name: "482",
    desc: "Biji Plastik Daur Ulang",
    subDesc: "Indonesia",
    image: "/img/Partner2/Biji Plastik Daur Ulang.jpg",
    link: "https://s.shopee.co.id/7AZIg1Uq1O"
  },
  {
    id: "481",
    name: "481",
    desc: "Polymorph",
    subDesc: "Indonesia",
    image: "/img/Partner2/Polymorph.jpg",
    link: "https://s.shopee.co.id/8V4gGIPWyY"
  },
  {
    id: "480",
    name: "480",
    desc: "Biji Plastik PP 25kg",
    subDesc: "Indonesia",
    image: "/img/Partner2/Biji Plastik PP 25kg.jpg",
    link: "https://s.shopee.co.id/2VnT78Yy5N"
  },
  {
    id: "479",
    name: "479",
    desc: "Casing Kulit untuk Sosis",
    subDesc: "Indonesia",
    image: "/img/Partner2/Casing Kulit untuk Sosis.jpg",
    link: "https://s.shopee.co.id/70FsT2e7WO"
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
    link: "https://www.instagram.com/reel/DOYh1LikgEp/"
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
    desc: "Alat pembersih karang gigi elektrik Ultrasonic Scaling Menghilangkan Karang Gigi Penghilang dan Plak Gigi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Alat pembersih karang gigi elektrik Ultrasonic Scaling Menghilangkan Karang Gigi Penghilang dan Plak Gigi.jpg",
    link: "https://s.shopee.co.id/5ApCrKRMtF"
  },
  {
    id: "472",
    name: "472",
    desc: "KAPAS SELECTION Facial Cotton 75gr ",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/KAPAS SELECTION Facial Cotton 75gr .jpg",
    link: "https://s.shopee.co.id/8piVE3Xt4B"
  },
  {
    id: "471",
    name: "471",
    desc: "Nasi Kuning Mba Selvi",
    subDesc: "Indonesia",
    image: "/img/Partner2/Nasi Kuning Mba Silvi.jpg",
    link: "https://www.instagram.com/reel/DKyUFdWTW1h/"
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
    link: "https://www.instagram.com/reel/DHb9znaTQoq/"
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
    link: "https://www.instagram.com/reel/DGUyG7SyRnF/"
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
    link: "https://www.instagram.com/reel/DHVkFrayDdO/"
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
    link: "https://www.instagram.com/reel/DP6fo6-EtIS/"
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
    link: "https://www.instagram.com/reel/DHlZ0bHzvkg/"
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
    id: "373",
    name: "373",
    desc: "Giv Sabun Mandi Cair Ungu",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Giv Sabun Mandi Cair Ungu.jpg",
    link: "https://s.shopee.co.id/1qYlFdwaOn"
  },
  {
    id: "372",
    name: "372",
    desc: "AMORENS Body Wash BPOM 1000ml ",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/AMORENS Body Wash BPOM 1000ml.jpg",
    link: "https://s.shopee.co.id/7AaHbmkdsl"
  },
  {
    id: "371",
    name: "371",
    desc: "Marina Hand Body Lotion UV White Marina",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Marina Hand Body Lotion UV White Marina.jpg",
    link: "https://s.shopee.co.id/2VoS2tEPC6"
  },
  {
    id: "370",
    name: "370",
    desc: "SCARLETT 10% NIACINAMIDE Fragrance Brightening Body Serum 170ml",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/SCARLETT 10% NIACINAMIDE Fragrance Brightening Body Serum 170ml.jpg",
    link: "https://s.shopee.co.id/6L1Aby7nt4"
  },
  {
    id: "369",
    name: "369",
    desc: "Sabun Arab PYARY Nalpamara Coconut Oil Soap 100% Original",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Sabun Arab PYARY Nalpamara Coconut Oil Soap 100% Original.jpg",
    link: "https://s.shopee.co.id/BQXGfCjel"
  },
  {
    id: "368",
    name: "368",
    desc: "Allefix Tool Box 85 Pcs Kunci Sok Set Pekerjaan Otomotif",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Allefix Tool Box 85 Pcs Kunci Sok Set Pekerjaan Otomotif.jpg",
    link: "https://s.shopee.co.id/BQXGfCjel"
  },
  {
    id: "367",
    name: "367",
    desc: "FEIBAO Dongkrak Botol Hidrolik",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/FEIBAO Dongkrak Botol Hidrolik.jpg",
    link: "https://s.shopee.co.id/1BJ4Ru1sN7"
  },
  {
    id: "366",
    name: "366",
    desc: "Cat Semprot Chrome 350ml",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Cat Semprot Chrome 350ml.jpg",
    link: "https://s.shopee.co.id/9pb2lqNOjJ"
  },
  {
    id: "365",
    name: "365",
    desc: "JLD Impact Baterai Brushless 2Baterai ",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/JLD Impact Baterai Brushless 2Baterai .jpg",
    link: "https://s.shopee.co.id/AUqjZ5N4IV"
  },
  {
    id: "364",
    name: "364",
    desc: "REAIM 13MM Cordless Impact Wrench",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/REAIM 13MM Cordless Impact Wrench.jpg",
    link: "https://s.shopee.co.id/5ApDDIVh4R"
  },
  {
    id: "363",
    name: "363",
    desc: "Pembersih Jok Kulit Serta Beludru Serta Plafond Mobil Stain Remover",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Pembersih Jok Kulit Serta Beludru Serta Plafond Mobil Stain Remover.jpg",
    link: "https://s.shopee.co.id/3qJpcrelVs"
  },
  {
    id: "362",
    name: "362",
    desc: "Oli Transmisi Matic CVT Honda HCF-2 (3,5L) Original",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Oli Transmisi Matic CVT Honda HCF-2 (3,5L) Original.jpg",
    link: "https://s.shopee.co.id/9zuSyD2JMg"
  },
  {
    id: "361",
    name: "361",
    desc: "Oli Gardan Ahm Gear Oil Gir Matic Honda 120ml",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Oli Gardan Ahm Gear Oil Gir Matic Honda 120ml.jpg",
    link: "https://s.shopee.co.id/7ppyOFEYUu"
  },
  {
    id: "360",
    name: "360",
    desc: "LOWKOS Cairan Infus Injeksi 1 Liter ",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/LOWKOS Cairan Infus Injeksi 1 Liter.jpg",
    link: "https://s.shopee.co.id/1773rU5OG"
  },
  {
    id: "359",
    name: "359",
    desc: "ISKU Tool Kit Kunci Sok Set 187 Pcs",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/ISKU Tool Kit Kunci Sok Set 187 Pcs.jpg",
    link: "https://s.shopee.co.id/1773sIXr6"
  },
  {
    id: "358",
    name: "358",
    desc: "Meja Makan Bar Dapur Kayu Natural Custom",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Meja Makan Bar Dapur Kayu Natural Custom.jpg",
    link: "https://s.shopee.co.id/7VD7sroSx7"
  },
  {
    id: "357",
    name: "357",
    desc: "Sofa Bed Gen Z ala Pinterest by Bangun Karya - Sofa Bed - Teddy Sofa",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Sofa Bed Gen Z ala Pinterest by Bangun Karya - Sofa Bed - Teddy Sofa.jpg",
    link: "https://s.shopee.co.id/9UyCGWgm6Y"
  },
  {
    id: "356",
    name: "356",
    desc: "Meja TV Minimalis Lengkung Oval Desain Estetik",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Meja TV Minimalis Lengkung Oval Desain Estetik.jpg",
    link: "https://s.shopee.co.id/5VS3VA85qM"
  },
  {
    id: "355",
    name: "355",
    desc: "PIRA - KATE DS50 Meja Rias",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/PIRA - KATE DS50 Meja Rias.jpg",
    link: "https://s.shopee.co.id/7AaHUDKIjY"
  },
  {
    id: "354",
    name: "354",
    desc: "CLEARANCE SALE - CLUB Plastik Furniture Large Flip Brown Cream",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/CLEARANCE SALE - CLUB Plastik Furniture Large Flip Brown Cream.jpg",
    link: "https://s.shopee.co.id/5q4ttkY1xz"
  },
  {
    id: "353",
    name: "353",
    desc: "PIRA KIDS - CHICCO DKK90 Meja Belajar Anak dengan Rak Buku",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/PIRA KIDS - CHICCO DKK90 Meja Belajar Anak dengan Rak Buku.jpg",
    link: "https://s.shopee.co.id/9ALLrrMIKc"
  },
  {
    id: "352",
    name: "352",
    desc: "IH meja kantor meja komputer meja kerja Meja Kerjadan Rak Serbaguna Multifungsi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/IH meja kantor meja komputer meja kerja Meja Kerjadan Rak Serbaguna Multifungsi.jpg",
    link: "https://s.shopee.co.id/20sBKfowaZ"
  },
  {
    id: "351",
    name: "351",
    desc: "Meja Tamu Coffee Table Ruang Utama",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Meja Tamu Coffee Table Ruang Utama.jpg",
    link: "https://s.shopee.co.id/50VmuAePNk"
  },
  {
    id: "350",
    name: "350",
    desc: "Lemari Kabinet Bangku Kayu Penyimpanan Kursi Box Multifungsi Elegan",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Lemari Kabinet Bangku Kayu Penyimpanan Kursi Box Multifungsi Elegan.jpg",
    link: "https://s.shopee.co.id/2LV1jFtMcV"
  },
  {
    id: "349",
    name: "349",
    desc: "JUSTIN Duo Double - Kabinet Plastik TV",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/JUSTIN Duo Double - Kabinet Plastik TV.jpg",
    link: "https://s.shopee.co.id/4LG66l5jJu"
  },
  {
    id: "348",
    name: "348",
    desc: "Bumbu Rempah Dapur Bubuk Dasar Halus Tabur",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Bumbu Rempah Dapur Bubuk Dasar Halus Tabur.jpg",
    link: "https://s.shopee.co.id/2BBbWJuUUM"
  },
  {
    id: "347",
    name: "347",
    desc: "Cengkeh Utuh Rempah Organik - Bumbu Dapur Berkualitas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Cengkeh Utuh Rempah Organik - Bumbu Dapur Berkualitas.jpg",
    link: "https://s.shopee.co.id/7ppyGioVzE"
  },
  {
    id: "346",
    name: "346",
    desc: "Tani Organic Bumbu Dapur Bubuk",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Tani Organic Bumbu Dapur Bubuk.jpg",
    link: "https://s.shopee.co.id/gMnjXRTag"
  },
  {
    id: "345",
    name: "345",
    desc: "GARLICKYS Dapur Bumbu Herbs",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/GARLICKYS Dapur Bumbu Herbs.jpg",
    link: "https://s.shopee.co.id/7ppyGh58OI"
  },
  {
    id: "344",
    name: "344",
    desc: "Organic Hub Garlic Powder Asli 100% Rempah Nusantara Bumbu Dapur Premium Quality 60 gr",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Organic Hub Garlic Powder Asli 100% Rempah Nusantara Bumbu Dapur Premium Quality 60 gr.jpg",
    link: "https://s.shopee.co.id/1LcUWjcwfE"
  },
  {
    id: "343",
    name: "343",
    desc: "JOODUTP Anti Panas Silikon Full Memasak Scraper Sutil Dapur Kue Cake Adukan Mix Dekorasi",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/JOODUTP Anti Panas Silikon Full Memasak Scraper Sutil Dapur Kue Cake Adukan Mix Dekorasi.jpg",
    link: "https://s.shopee.co.id/qgDvnxOwz"
  },
  {
    id: "342",
    name: "342",
    desc: "100Persen - Bumbu Giling Instan Masak Dapur Tanpa MSG",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/100Persen - Bumbu Giling Instan Masak Dapur Tanpa MSG.jpg",
    link: "https://s.shopee.co.id/70GrH7MeIi"
  },
  {
    id: "341",
    name: "341",
    desc: "PURY - Bumbu Dapur Bubuk All Varian Non Msg",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/PURY - Bumbu Dapur Bubuk All Varian Non Msg.jpg",
    link: "https://s.shopee.co.id/1qYl7btvAz"
  },
  {
    id: "340",
    name: "340",
    desc: "Kantan Ramen Bumbu Instan Ramen & Udon 215gr ",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Kantan Ramen Bumbu Instan Ramen & Udon 215gr .jpg",
    link: "https://s.shopee.co.id/4VZWIUxqze"
  },
  {
    id: "339",
    name: "339",
    desc: "ALL VARIANT - Para Rempah Bumbu Dapur Premium",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/ALL VARIANT - Para Rempah Bumbu Dapur Premium.jpg",
    link: "https://s.shopee.co.id/1BJ4KM7vGQ"
  },
  {
    id: "338",
    name: "338",
    desc: "EDT 35ML BPOM Halal",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Parfum EDT 35ML BPOM Halal.jpg",
    link: "https://s.shopee.co.id/2qRIH84prY"
  },
  {
    id: "337",
    name: "337",
    desc: "Zafa Cincin Titanium Pria Wanita Silver Gold Anti Karat - Langris",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Zafa Cincin Titanium Pria Wanita Silver Gold Anti Karat - Langris.jpg",
    link: "https://s.shopee.co.id/7ppyELyBya"
  },
  {
    id: "336",
    name: "336",
    desc: "TNW Lampu Foto Lampu LED Video Light Fill light Tripod Ring Light Lampu Fotografi Live Vlogging",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/TNW Lampu Foto Lampu LED Video Light Fill light Tripod Ring Light Lampu Fotografi Live Vlogging.jpg",
    link: "https://s.shopee.co.id/50VmrBPHvj"
  },
  {
    id: "335",
    name: "335",
    desc: "Bulumata Tanpa Lem Korean Eyelashes NO GLUE Eyelash Extention No Glue Eyelashes Bulu Mata Korea Fake Eyelashes Bulu Mata Palsu Natural",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Bulumata Tanpa Lem Korean Eyelashes NO GLUE Eyelash Extention No Glue Eyelashes Bulu Mata Korea Fake Eyelashes Bulu Mata Palsu Natural.jpg",
    link: "https://s.shopee.co.id/3g0PGlQX0e"
  },
  {
    id: "334",
    name: "334",
    desc: "Animate 5X Active Whitening Night Cream ",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Animate 5X Active Whitening Night Cream .jpg",
    link: "https://s.shopee.co.id/7KthdXyA5Q"
  },
  {
    id: "333",
    name: "333",
    desc: "Gadoeh Rasa Kremes Hati Ayam Renyah Halal",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Gadoeh Rasa Kremes Hati Ayam Renyah Halal.jpg",
    link: "https://s.shopee.co.id/1qYl5TEND7"
  },
  {
    id: "332",
    name: "332",
    desc: "Waterproof Case HP Universal Anti Air ",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Waterproof Case HP Universal Anti Air .jpg",
    link: "https://s.shopee.co.id/8piVQNdETJ"
  },
  {
    id: "331",
    name: "331",
    desc: "Cuka Apel Gemeli Premium 500ml With Mother",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Cuka Apel Gemeli Premium 500ml With Mother.jpg",
    link: "https://s.shopee.co.id/4VZWGSJnhm"
  },
  {
    id: "330",
    name: "330",
    desc: "Vitabumin Madu 130ml - 1 pcs",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Vitabumin Madu 130ml - 1 pcs.jpg",
    link: "https://s.shopee.co.id/8ASodE83iK"
  },
  {
    id: "329",
    name: "329",
    desc: "Happy Shampoo Kemiriku Shampo Penghitam Rambut",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Happy Shampoo Kemiriku Shampo Penghitam Rambut.jpg",
    link: "https://s.shopee.co.id/8KmEpZPWOe"
  },
  {
    id: "328",
    name: "328",
    desc: "ASUS VIVOBOOK 14 ",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/ASUS VIVOBOOK 14 .jpg",
    link: "https://s.shopee.co.id/40dFXt8nKK"
  },
  {
    id: "327",
    name: "327",
    desc: "Laptop Lenovo Intel ",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Laptop Lenovo Intel .jpg",
    link: "https://s.shopee.co.id/7VD7i7iidM"
  },
  {
    id: "326",
    name: "326",
    desc: "Laptop HP 14 Intel",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Laptop HP 14 Intel.jpg",
    link: "https://s.shopee.co.id/50VmjXy5Wb"
  },  
  {
    id: "325",
    name: "325",
    desc: "Lenovo IdeaPad Slim",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Lenovo IdeaPad Slim.jpg",
    link: "https://s.shopee.co.id/901vUuu4g5"
  },  
  {
    id: "324",
    name: "324",
    desc: "Laptop LENOVO LOQ ",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Laptop LENOVO LOQ.jpg",
    link: "https://s.shopee.co.id/2VoRkzvjog"
  },   
  {
    id: "323",
    name: "323",
    desc: "Laptop Macbook Pro Intel",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Laptop Macbook Pro Intel.jpg",
    link: "https://s.shopee.co.id/1gFKlU0MXi"
  }, 
  {
    id: "322",
    name: "322",
    desc: "LAPTOP AXIOO HYPE 10",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/LAPTOP AXIOO HYPE 10.jpg",
    link: "https://s.shopee.co.id/5ApCvviIse"
  }, 
  {
    id: "321",
    name: "321",
    desc: "Lenovo laptop baru 15.6''",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Lenovo laptop baru 15.6''.jpg",
    link: "https://s.shopee.co.id/8piVIgjcBC"
  }, 
  {
    id: "320",
    name: "320",
    desc: "Lenovo LOQ 15",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Lenovo LOQ 15.jpg",
    link: "https://s.shopee.co.id/30kiLynkao"
  },  
  {
    id: "319",
    name: "319",
    desc: "[BEST SELLER] ADVAN Laptop WorkMate",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/[BEST SELLER] ADVAN Laptop WorkMate.jpg",
    link: "https://s.shopee.co.id/5L8d8IRTla"
  },
  {
    id: "318",
    name: "318",
    desc: "Toples Set Dengan Nampan Guci Makanan Toples Penyimpanan Dapur Set Toples Kue",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Toples Set Dengan Nampan Guci Makanan Toples Penyimpanan Dapur Set Toples Kue.jpg",
    link: "https://shopee.co.id/product/1545406142/29238256096?credential_token=8wEwiDL7YEAmQeB7c7WA9XwPViEFZmSFiyH6yL64Gk&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAwS--tT7tw1u_m3IqMCLVck8PpTDYfpFi8ekjOFskFPzUA8WoHu4R-XfftKi_TEnLcssgmvMAAjMqpejjHJIYQJcs0tIs_LI0Nn2q82u9zs5-z5isflIl9bEqeblgQSdwAwD_hoPF21_jViz1I3qcEDTEBrf-PILDZO5bA472VLEf3hhyXnGL1ycv9k2paTK32gYjCL&mmp_pid=an_11393951005&uls_trackid=55k1hult02kg&utm_campaign=id_mSXtdOp9lz&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evkenzhi85j5"
  },
  {
    id: "317",
    name: "317",
    desc: "SET 4 Tempat Bumbu Dapur Serbaguna Termasuk Sendok",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/SET 4 Tempat Bumbu Dapur Serbaguna Termasuk Sendok.jpg",
    link: "https://shopee.co.id/product/109803736/5078018130?affiliate_seller_voucher_token=2ijYYWYXMzwKuDG7TMe4jQmfAjcL6potbPVWex72U&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElAAAAAwMx422IRR63NTJQhF6e-hzOzqxcQ__5BroO2BFKsrVcoc-X86vRU5LmNAC_NJZ_dewaJw_E5_Xp-754eyUnz6qD2v4F8JBjdmf01Aj8mgZikX5_HFHY0jyHDTM3nMOc3m_LHK5Pf7ol2OrTR4BvNBroKtOjBASrvrCJmekyHV4eN_bxvMUUWwVmUoX3mZ63Gg&mmp_pid=an_11393951005&uls_trackid=55k1i2ep02td&utm_campaign=id_LYeUccejmN&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evker3j84mj5"
  },
  {
    id: "316",
    name: "316",
    desc: "Serbet dapur 1 LUSIN jumbo 60x60cm bahan katun tebal",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Serbet dapur 1 LUSIN jumbo 60x60cm bahan katun tebal.jpg",
    link: "https://shopee.co.id/product/1709999478/50058889682?credential_token=8wEwiDL7ZRMwtpbd5s52u2Pp6rsBWy5ks8Dbx6yfvV&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAxp5lApvwiQO8U67vLyOJsiL-eQ5139hP0t518n590I0O0TzU9YnnXeYHwimO4g0W64jm1-cqWrKjAFY01AAkTo90FsF1n0FU2C_Z4ZZPXhlbD70TPgojz39jCYH_hAo6huYTlnmPP_uUXDuUHQOnUpkJjhbj-90tKbP7QKdas-BLsNYTOrzVsPo7awNQVKy5hTAlOI&mmp_pid=an_11393951005&uls_trackid=55k1i41g00pk&utm_campaign=id_VDbAW3OZGl&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evkesdnk7z8f"
  },
  {
    id: "315",
    name: "315",
    desc: "JOODUTP Spatula Set Putih 3 PC Sutil Silicone Alat Masak Tahan Panas",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/JOODUTP Spatula Set Putih 3 PC Sutil Silicone Alat Masak Tahan Panas.jpg",
    link: "https://shopee.co.id/opaanlp/1414571451/26527376711?__mobile__=1&affiliate_seller_voucher_token=8bCnE5QAmVn5AVSh87VLN594bLzCbsibX8ScNMumC4&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAyMlSpBDMkoRsqJgxBkIpdOKU0IPEIk-ObXezwBix-9tToZqQiwYesTIDmwHJtfsC0G8uycDKpwWU1gowrD5Zc3ejUE75eKceS7sKs6n3vJakqT-51e_wbFsJYNMqNnIJuV-nWmrN-5r817728gykD8Pw3a-96Z7mv1--LrxQdh9JWqP_Ck8wlp-0hwiWQuKJ5TuVEo&mmp_pid=an_11393951005&uls_trackid=55k1i5rc08cb&utm_campaign=id_CP5rUMJPxL&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evketuwatbdq"
  },
  {
    id: "314",
    name: "314",
    desc: "Delaney [Beli 5 Gratis 1] Toples Mini 320ml Mawar Ungu",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Delaney [Beli 5 Gratis 1] Toples Mini 320ml Mawar Ungu.jpg",
    link: "https://s.shopee.co.id/2g7rvOaEJv"
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
    desc: "Plastik Penutup dan Pelindung Perabot dan Elektronik Homecare 1 Roll",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Plastik Penutup dan Pelindung Perabot dan Elektronik Homecare 1 Roll.jpg",
    link: "https://s.shopee.co.id/8piVDHw1JH"
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
    desc: "Headset Wireless",
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
    id: "294",
    name: "294",
    desc: "OXYGEN CONCENTRATOR HOMECARE TAISHUAI IMPORT",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/OXYGEN CONCENTRATOR HOMECARE TAISHUAI IMPORT.jpg",
    link: "https://s.shopee.co.id/40dFSL7EjG"
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
    image: "/img/Partner/278.jpg",
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
    id: "266",
    name: "266",
    desc: "Kuas home 2,5 inch (6,25cm) Serbaguna",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Kuas home 2,5 inch (6,25cm) Serbaguna.jpg",
    link: "https://s.shopee.co.id/40dFSIUEzQ"
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
    desc: "Kipas Angin Fan Elektrik Rotation Stand Fan Premium 3 Tingkat Kecepatan",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Kipas Angin Fan Elektrik Rotation Stand Fan Premium 3 Tingkat Kecepatan.jpg",
    link: "https://s.shopee.co.id/4LG5rPLXKd"
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
    id: "229",
    name: "229",
    desc: "Set Jet Shower Toilet Homecare Putih & Chrome Homecare - Anti Karat, Tekanan Kuat, Ringan dan Nyaman",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Set Jet Shower Toilet Homecare Putih & Chrome Homecare - Anti Karat, Tekanan Kuat, Ringan dan Nyaman.jpg",
    link: "https://s.shopee.co.id/50Vme4Wvl4"
  },
  {
    id: "228",
    name: "228",
    desc: "Alat Pijat Elektrik Wanita USB Rechargeable Penghilang Nyeri Tubuh, Relaksasi instan portabel, homecare SPA",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Alat Pijat Elektrik Wanita USB Rechargeable Penghilang Nyeri Tubuh, Relaksasi instan portabel, homecare SPA.jpg",
    link: "https://s.shopee.co.id/qgDgOMnbO"
  },
  {
    id: "227",
    name: "227",
    desc: "Lampu Fisioterapi Infrared Satu Set Lengkap Remot dan pengatur suhu ",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Lampu Fisioterapi Infrared Satu Set Lengkap Remot dan pengatur suhu .jpg",
    link: "https://s.shopee.co.id/AKXIzovpMn"
  },
  {
    id: "226",
    name: "226",
    desc: "Yuwell Homecare Oxygen Concentrator Nebulizer Alat Bantu Pernapasan Oksigen Konsentrator Original",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Yuwell Homecare Oxygen Concentrator Nebulizer Alat Bantu Pernapasan Oksigen Konsentrator Original.jpg",
    link: "https://s.shopee.co.id/1VvuTTTG41"
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
    id: "224",
    name: "224",
    desc: "MEDRIS Oxygen Concentrator 1L 3L 5L 7L Heavy Duty",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/MEDRIS Oxygen Concentrator 1L 3L 5L 7L Heavy Duty.jpg",
    link: "https://s.shopee.co.id/2qRI3sK22b"
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
    id: "208",
    name: "208",
    desc: "Homecare Lemari Pakaian 52cm Plastik 5 Tingkat Laci Modern",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Homecare Lemari Pakaian 52cm Plastik 5 Tingkat Laci Modern.jpg",
    link: "https://s.shopee.co.id/70Gr1TVZ6T"
  },
  {
    id: "207",
    name: "207",
    desc: "Morphy Richards Mr9802 Juicer",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner/207.jpg",
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
    id: "201",
    name: "201",
    desc: "betulan murah Yuwell YU300 300S Oxygen Concentrator Homecare ",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/betulan murah Yuwell YU300 300S Oxygen Concentrator Homecare .jpg",
    link: "https://s.shopee.co.id/2g7rrT9GwP"
  },
  {
    id: "200",
    name: "200",
    desc: "[RA.ID] Flips Kidz - Tas SD & TK Premium Viral ",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/[RA.ID] Flips Kidz - Tas SD & TK Premium Viral .jpg",
    link: "https://s.shopee.co.id/6pxPcvS5DU"
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
    id: "181",
    name: "181",
    desc: "Tiby Kids - TS06 Tas Ransel Sekolah Anak ",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Tiby Kids - TS06 Tas Ransel Sekolah Anak .jpg",
    link: "https://s.shopee.co.id/3g0Nr4ADW1"
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
    id: "178",
    name: "178",
    desc: "KINOKIMI - 2in1 TAS SEKOLAH ANAK",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/KINOKIMI - 2in1 TAS SEKOLAH ANAK.jpg",
    link: "https://s.shopee.co.id/Ljvstr3q3"
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
    id: "172",
    name: "172",
    desc: "Tas Ransel Paud TK Custom Nama Naimax Kids",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Tas Ransel Paud TK Custom Nama Naimax Kids.jpg",
    link: "https://s.shopee.co.id/6VKZEBdSUA"
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
    id: "160",
    name: "160",
    desc: "Coming [RA.ID] SnigglePop - Tas Ransel TK Premium",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/[RA.ID] SnigglePop - Tas Ransel TK Premium.jpg",
    link: "https://s.shopee.co.id/9zuROZnPgF"
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
    id: "154",
    name: "154",
    desc: "Sepatu Lari Pria Wanita GLVIU Zeus Pro Size 38-44 Terbaru Sepatu Running Olahraga Joging Casual",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Sepatu Lari Pria Wanita GLVIU Zeus Pro Size 38-44 Terbaru Sepatu Running Olahraga Joging Casual.jpg",
    link: "https://s.shopee.co.id/6pxagqAqrh"
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
    id: "150",
    name: "150",
    desc: "Glad2Glow Peach Retinol Moisturizer 30g",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Glad2Glow Peach Retinol Moisturizer 30g.jpg",
    link: "https://s.shopee.co.id/8piTzB1uis"
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
    id: "133",
    name: "133",
    desc: "Glad2Glow Brightening Lip Serum",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Glad2Glow Brightening Lip Serum.jpg",
    link: "https://s.shopee.co.id/60OIbwmhou"
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
    id: "126",
    name: "126",
    desc: "Glad2Glow Brightening Lip Serum 7G",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Glad2Glow Brightening Lip Serum 7G.jpg",
    link: "https://s.shopee.co.id/W3M3oPZNa"
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
    id: "110",
    name: "110",
    desc: "Boneka Domba Custom Kupluk Boneka Kambing Boneka Lucu Size 28Cm",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Boneka Domba Custom Kupluk Boneka Kambing Boneka Lucu Size 28Cm.jpg",
    link: "https://s.shopee.co.id/7AaR59DPMF"
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
    desc: "Skincare Mencerahkan Wajah Reglow dr Shindy Skincare ",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Skincare Mencerahkan Wajah Reglow dr Shindy Skincare .jpg",
    link: "https://s.shopee.co.id/8piTz6Zcpn"
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
    id: "97",
    name: "97",
    desc: "SONIK SCENTS SKIN NICE BODY TONER MERAH 200 ML Glycerin, Niacinamide, Glycolic Acid, allantoin",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/SONIK SCENTS SKIN NICE BODY TONER MERAH 200 ML Glycerin, Niacinamide, Glycolic Acid, allantoin.jpg",
    link: "https://s.shopee.co.id/70Gpni6R5m"
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
    id: "92",
    name: "92",
    desc: "SCORA Tone Up Cream Series 30 Gr Tone Up Viral Mencerahkan Secara Natural",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/SCORA Tone Up Cream Series 30 Gr Tone Up Viral Mencerahkan Secara Natural.jpg",
    link: "https://s.shopee.co.id/2VoQRPouX8"
  },
  {
    id: "91",
    name: "91",
    desc: "SKIN1004 Madagascar Centella Ampoule 55ml",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/SKIN1004 Madagascar Centella Ampoule 55ml.jpg",
    link: "https://s.shopee.co.id/3VgxdD5Z3o"
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
    desc: "Monitor PC",
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
    id: "78",
    name: "78",
    desc: "[50ml] Azarine Hydrasoothe Sunscreen Gel SPF45 ",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/[50ml] Azarine Hydrasoothe Sunscreen Gel SPF45 .jpg",
    link: "https://s.shopee.co.id/9KekZuUm6T"
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
    subDesc: "Label Maker Printer",
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
    id: "63",
    name: "63",
    desc: "OLUMU Vitamin C Bright Body Cream Pelembab",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/OLUMU Vitamin C Bright Body Cream Pelembab.jpg",
    link: "https://s.shopee.co.id/7KtgCv3twg"
  },
  {
    id: "62",
    name: "62",
    desc: "[400ml] WHITE INC Alpha Glow White Body Lotion Whitening & Moisturizing",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/[400ml] WHITE INC Alpha Glow White Body Lotion Whitening & Moisturizing.jpg",
    link: "https://s.shopee.co.id/2BBa3PC0qO"
  },
  {
    id: "61",
    name: "61",
    desc: "Buy Vaseline Gluta Hya 330ml Multi Pack",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Buy Vaseline Gluta Hya 330ml Multi Pack.jpg",
    link: "https://s.shopee.co.id/40dEEkHBU6"
  },
  {
    id: "60",
    name: "60",
    desc: "Guardian Soft & Moisturizing Shower Cream",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Guardian Soft & Moisturizing Shower Cream.jpg",
    link: "https://s.shopee.co.id/gMmGaUkb2"
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
    id: "52",
    name: "52",
    desc: "Lab-Gelas Ukur Takar",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Lab-Gelas Ukur Takar.jpg",
    link: "https://s.shopee.co.id/8V4xkVAKwa"
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
    id: "35",
    name: "35",
    desc: "Lab-Kertas Lakmus",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Lab-Kertas Lakmus.jpg",
    link: "https://s.shopee.co.id/8pho94nffA"
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
    id: "30",
    name: "30",
    desc: "Lab-Kaca Arloji",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Lab-Kaca Arloji.jpg",
    link: "https://s.shopee.co.id/4AvyaTMC2x"
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
    id: "19",
    name: "19",
    desc: "Lab-Stainless Steel SUS 304",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/Lab-Stainless Steel SUS 304.jpg",
    link: "https://s.shopee.co.id/9Ke4jvPb5E"
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
    link: "https://shopee.co.id/product/521988780/25361840960?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAxs-7t_ocmGFtXtJWDrP_e3oy1c-MnvHXToXa6Wm-sEi8strK-gLieDe1tg9im1LZkUGmdWLXRTi6cSf6TVpVzmgioiH3AvwFFJyRRAhY1lSBmcDi8tlduVLWQJyGrO9h_1WRXihx0jY2inKl3utfAyx6fPPrHwBaMPAaYE-iF78F8ff30NlCnpzxn2EpcPuUnsMQ&mmp_pid=an_11393951005&uls_trackid=55pvjtdt02vo&utm_campaign=id_ZpqhWWJlJK&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn3gxtvixsr"
  },
  {
    id: "7",
    name: "7",
    desc: "Jas Hujan, Raincoat, Tebal",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/6.png",
    link: "https://shopee.co.id/product/924464575/20869392976?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAyaa9YlqqemIe2oOIxyGP3M_NVpfQPP0DX47lv8BBMv9jhV4KNqQeyJ_pTcSej2_nPax5fTPwzAoJ45ItOczDZ8NGd_12BmwSZRADIxOWgNHRbnsEIkZpe_wQHkIAlaGltUtrvSDr4VtGjpHQJ10lNRw9QRogobrX5fQYCNfrWhWlqrER3PceAFgnH22HShPm-kkg&mmp_pid=an_11393951005&uls_trackid=55pvjrms0004&utm_campaign=id_9IgllcIBHO&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn3fizv79sd"
  },
  {
    id: "6",
    name: "6",
    desc: "Kemeja Wanita / Basic Longsleeve",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/5.png",
    link: "https://shopee.co.id/product/604395356/26020348676?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAyxe7jQ49UppQe-sKqu68_UyRKKoZgfFNObI6LrWcESTbukGKwNSfe4vl-b1kw6VyS8XI_wWxYk60GRikLFQMsepJEYCrfCglKHu8KK2QhEsZ0oFrxSQBH4dWBE35J3XjJt78-sseXNojVx0TSZN9NW4mdeTfcYEJglsJ5ejzPpqMjYz0_lUn95FpgJGt3YnXcJkA&mmp_pid=an_11393951005&uls_trackid=55pvjpvr00v9&utm_campaign=id_8xo0lf28dW&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn3e57597xb"
  },
  {
    id: "5",
    name: "5",
    desc: "Sprei Waterproof Import",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/4.png",
    link: "https://shopee.co.id/product/413480984/23119239974?affiliate_seller_voucher_token=8bCnE5QAmVW8LioZXdL6y5QPDWFuePZK85DaK2rMe8&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAyzwwAUfuEFatc583yeW46djioRNfz2ly7fpKTOTfkj1EMvmJCYDISXVe-OmEN1IfYTARiYYlzo-l-JkxrEQBD2vu9B_l2nTw887QKac7GKkOjl4KxhLKf83PzRz-YWrkvJeWVlP7G_KuiqLryK9SkmtmortBsQwnl6M85R-PcAzayvdBF_t2XS-uxr-c04CbMP7g&mmp_pid=an_11393951005&uls_trackid=55pvjo600001&utm_campaign=id_V3tx3kYYEs&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn3cnvua11q"
  },
  {
    id: "4",
    name: "4",
    desc: "Gamis Dress Wanita Kekinian / Dress Murah",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/3.png",
    link: "https://shopee.co.id/product/40528295/18791147701?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElAAAAAzQixlgIA9AZX1GUMiln_2AFUO0BNm1grvuKVzbtDW8hyymJe6x94v8BEyC8UQor1ri4meyPGGjzjafw4YEjtKAzjbrRYWsbjSGE8h709si5OHGGXpIKi0t00DCCGg8Ka8zZSZO-WAeyiscWUqpnmUvqKvcovG7lxzkMZKGgCpIpPhczy9UTO4eg42g1-nH-D0&mmp_pid=an_11393951005&uls_trackid=55pvjmk900vq&utm_campaign=id_DnJHgPbOy2&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn3bdrcjhiw"
  },
  {
    id: "3",
    name: "3",
    desc: "Es Krim Aice 8 Liter Ice Cream",
    subDesc: "Shopee - Polimeritas",
    image: "/img/Partner2/2.png",
    link: "https://shopee.co.id/product/262854215/5741454263?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElAAAAAwahYMuhEE7SqvabIalbePkOaEdty0HEYj48kFUUqLzFQJA73jXrq9ZvB-tgp0GjkIOLF5LydHluatOfWZgW-_V7cJW-4AispMwwWQBsQCFm6Iwb0mT7AsE-wvFvbsCA_NIBbR3roNmp07gzUhXyOEjfS6s8_WfkoKYRWym1TUzvaT0sswZcR8Ne-Jb-5Gy1AA&mmp_pid=an_11393951005&uls_trackid=55pvjf9r000l&utm_campaign=id_7Yv9JOGZLG&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn35e2pvmzo"
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
    link: "https://shopee.co.id/shop/19442298?mmp_pid=an_11393951005&uls_trackid=55pvjhta00vo&utm_campaign=id_VDkQIjgNQA&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ezn37ikybou2"
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

// DATA PARTNER INDUSTRI
export const partnerIndustriItems: Partner[] = [
  // --- PARTNER UTAMA ---
  {
    id: "Hubungi Kami",
    name: "Hubungi Kami",
    desc: "Bantu Kamu Lebih Dekat",
    subDesc: "polimeritas group",
    image: "/img/Partner2/gabung di polimeritas.png",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20polimeritas.com!%20Bantuin%20Saya%20Dong!%20"
  },
  {
    id: "industri-factory",
    name: "Booyenku Shop",
    desc: "Factory Industry",
    subDesc: "Industri",
    image: "/img/Partner2/booyenku shop.jpg",
    link: "https://www.tiktok.com/@booyenku"
  },
  {
    id: "industri-factory",
    name: "Biomass Resin Holdings",
    desc: "Factory Industry",
    subDesc: "Industri",
    image: "/img/Partner/resin.png",
    link: "https://www.instagram.com/p/DUKF7ZUEo7N/"
  },
  {
    id: "industri-factory",
    name: "Zefa Valindo Jaya",
    desc: "Factory Industry",
    subDesc: "Industri",
    image: "/img/Partner/zefalindojaya.png",
    link: "https://www.instagram.com/p/DVSPS18km8g/"
  },
  {
    id: "industri-jasa",
    name: "Jasa",
    desc: "Bantal Anabul Custom Anabul",
    subDesc: "Industri",
    image: "/img/Partner2/Bantal Anabul Custom Anabul.jpg",
    link: "https://shopee.co.id/opaanlp/1261849672/26251496815?__mobile__=1&credential_token=8wEwiDL7YDtuPbrH53J16r7rv2AwFpwsUAyF8dV3tK&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAw7W8HBXq0kCGV6U2SCy_YKdPnYAbk-7fFMT2Rchc0o6ycuwrCX6RzQp46JuTT8A4wapGgbFmEU1qNoACGyDJx3kYidvv_wnVm_5A6qit-Z_vqnGfmNqT0L1TLz3q2i0TpPqhhbBHwGM8M_PptIOWArc92LVFV2jM6yjNiysBsHrGuE2-6Iix2Vj4SqBWqKHYsaUjG3&mmp_pid=an_11393951005&uls_trackid=55lbl6jh059m&utm_campaign=id_LoEoQb865D&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewgwiprp94bh"
  },
  {
    id: "industri-petshop",
    name: "[BEST SELLER] Olive Care",
    desc: "Cat Grass",
    subDesc: "Industri",
    image: "/img/Partner2/Olive Care Cat Grass.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7626282085728161044"
  },
  {
    id: "industri-petshop",
    name: "[BEST SELLER] Olive Care",
    desc: "Creamy Treats",
    subDesc: "Industri",
    image: "/img/Partner2/Creamy Treats - Olive Care.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7633015270570872085"
  },
  {
    id: "industri-petshop",
    name: "[BEST SELLER] Olive Care",
    desc: "Creamy Treats",
    subDesc: "Industri",
    image: "/img/Partner2/Creamy Treats - Tuna.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7633411213585616149"
  },
  {
    id: "industri-petshop",
    name: "[BEST SELLER] Olive Care",
    desc: "Creamy Treats",
    subDesc: "Industri",
    image: "/img/Partner2/Creamy Treats - Chicken.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7633015270570872085"
  },
  {
    id: "industri-petshop",
    name: "[BEST SELLER] Olive Care",
    desc: "Creamy Treats",
    subDesc: "Industri",
    image: "/img/Partner2/Creamy Treats - Salmon.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7633619902280060181"
  },
  {
    id: "industri-petshop",
    name: "[BEST SELLER] Vitakraft",
    desc: "Vitakraft-Liquid Snack Cat",
    subDesc: "Industri",
    image: "/img/Partner2/Vitakraft-Liquid Snack Cat.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7637412558751780117"
  },
  {
    id: "industri-petshop",
    name: "[BEST SELLER] Excel",
    desc: "Excel Makanan Kucing",
    subDesc: "Industri",
    image: "/img/Partner2/Excel Makanan Kucing.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7646711565441436948"
  },
  {
    id: "industri-petshop",
    name: "[BEST SELLER] Animal&Co",
    desc: "Gourmet Wet Cat Food",
    subDesc: "Industri",
    image: "/img/Partner2/Animal&Co Gourmet Wet Cat Food.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7637390352839855380"
  },
  {
    id: "industri-petshop",
    name: "Animal&Co",
    desc: "Pouch",
    subDesc: "Industri",
    image: "/img/Partner2/Animalnco Pouch.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7631824065275153685"
  },
  {
    id: "industri-jasa",
    name: "Jasa",
    desc: "Jasa Desain Rumah Profesional Arsitek Minimalis 2 Lantai",
    subDesc: "Industri",
    image: "/img/Partner2/Jasa Desain Rumah Profesional Arsitek Minimalis 2 Lantai.jpg",
    link: "https://s.shopee.co.id/8piVgZS8Cj"
  },
  {
    id: "industri-jasa",
    name: "Jasa",
    desc: "Jasa Cetak Print DTF 58 x 100 cm Sablon DTF",
    subDesc: "Industri",
    image: "/img/Partner2/Jasa Cetak Print DTF 58 x 100 cm Sablon DTF.jpg",
    link: "https://s.shopee.co.id/1Vvux1BBzz"
  },
  {
    id: "industri-jasa",
    name: "Jasa",
    desc: "Jasa Sablon Tas Spunbond Desain Bebas",
    subDesc: "Industri",
    image: "/img/Partner2/Jasa Sablon Tas Spunbond Desain Bebas.jpg",
    link: "https://s.shopee.co.id/8piVgb1TX2"
  },
   {
    id: "industri-jasa",
    name: "Jasa",
    desc: "JASA EDITING VIDEO SHORT FILM, DOKUMENTER, CONTENT YT DAN SEBAGAINYA",
    subDesc: "Industri",
    image: "/img/Partner2/JASA EDITING VIDEO SHORT FILM DLL.jpg",
    link: "https://s.shopee.co.id/2g7sLH717O"
  }, 
  {
    id: "industri-petshop",
    name: "Animal&Co",
    desc: "Cat Litter",
    subDesc: "Industri",
    image: "/img/Partner2/animalncowithboyen.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7607417575374359828"
  },
  {
    id: "industri-petshop",
    name: "Animal&Co",
    desc: "Holistic Gourment",
    subDesc: "Industri",
    image: "/img/Partner2/Animal&co - Holistic Gourment.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7637400614053465365"
  },
  {
    id: "industri-petshop",
    name: "Animal&Co",
    desc: "Animal&co Holistic Gourmet 1 Kg Scoop and Creamy Treats",
    subDesc: "Industri",
    image: "/img/Partner2/Animal&co Holistic Gourmet 1 Kg Scoop and Creamy Treats.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7637379897979489556"
  },
  {
    id: "industri-petshop",
    name: "Animal&Co",
    desc: "All Life Stages With Digestive Probiotics",
    subDesc: "Industri",
    image: "/img/Partner2/Animal&Co - All Life Stages With Digestive Probiotics.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7637384268389305620"
  },
  {
    id: "industri-petshop",
    name: "Bite of Wild Indonesia",
    desc: "Dry Food  Grain Free",
    subDesc: "Industri",
    image: "/img/Partner2/biteofwildwithboyen.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7615617317711498516"
  },
  {
    id: "industri-petshop",
    name: "Bravery",
    desc: "Wet Food",
    subDesc: "Industri",
    image: "/img/Partner2/Bravery.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7625094064530083092"
  },
  {
    id: "industri-petshop",
    name: "Bravery",
    desc: "Dry Food",
    subDesc: "Industri",
    image: "/img/Partner2/Dry Food - Bravery.jpg",
    link: "https://s.shopee.co.id/qflCnd3gx"
  },
  {
    id: "industri-petshop",
    name: "Bravery",
    desc: "Creamy Treats",
    subDesc: "Industri",
    image: "/img/Partner2/Bravery Creamy Treats.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7624744850260348181"
  },
  {
    id: "industri-petshop",
    name: "Dr Soft Indonesia",
    desc: "Cats Mellow Snack",
    subDesc: "Industri",
    image: "/img/Partner2/catsmellowwithboyen.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7612607096403528980"
  },
  {
    id: "industri-petshop",
    name: "Silly Beast",
    desc: "Chicken Cubes",
    subDesc: "Industri",
    image: "/img/Partner2/Chicken Cubes-Silly Beast Boyen.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7636705218457046293"
  },
  {
    id: "industri-petshop",
    name: "Silly Beast",
    desc: "Atlantic Salmon",
    subDesc: "Industri",
    image: "/img/Partner2/boyensalmonsillybeast.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7636260288467062036"
  },
  {
    id: "industri-petshop",
    name: "Silly Beast",
    desc: "Tuna Cubes",
    subDesc: "Industri",
    image: "/img/Partner2/boyentunasillybeast.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7636260288467062036"
  },
  {
    id: "industri-petshop",
    name: "Pororo Official",
    desc: "Snack Basah",
    subDesc: "Industri",
    image: "/img/Partner2/Pororo Creamy Treats.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7632245475634138388"
  },
  {
    id: "industri-petshop",
    name: "Holycats Lab",
    desc: "Vitameat",
    subDesc: "Industri",
    image: "/img/Partner2/vitameatwithboyen.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7631465562409012500"
  },
  {
    id: "industri-petshop",
    name: "Holycats Lab",
    desc: "Paket Bundling Royal Care Snack Creamy Stick",
    subDesc: "Industri",
    image: "/img/Partner2/Holycatlabs Paket Bundling Royal Care Snack Creamy Stick.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7643390367047355668"
  },
  {
    id: "industri-petshop",
    name: "Holycats Lab",
    desc: "Creamy Stick",
    subDesc: "Industri",
    image: "/img/Partner2/Holycats - Creamy Stick.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7643293947711851796"
  },
  {
    id: "industri-petshop",
    name: "Anima Companion",
    desc: "Felcover+",
    subDesc: "Industri",
    image: "/img/Partner2/anima companion.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7609828032559500564"
  },
  {
    id: "industri-petshop",
    name: "Anima Companion",
    desc: "Forevet",
    subDesc: "Industri",
    image: "/img/Partner2/Forevet Vitamin Stress Kucing Anjing.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7602850727035292948"
  },
  {
    id: "industri-petshop",
    name: "Kiyopaw",
    desc: "Bye Scabies",
    subDesc: "Industri",
    image: "/img/Partner2/kiyopaw.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7607786649476500756"
  },
  {
    id: "industri-jasa",
    name: "Jasa",
    desc: "Informa Jasa Pembersihan Ac Split 1 Unit Non Member Clean",
    subDesc: "Industri",
    image: "/img/Partner2/Informa Jasa Pembersihan Ac Split 1 Unit Non Member Clean.jpg",
    link: "https://s.shopee.co.id/8fP9lKyGV2"
  },
  {
    id: "industri-jasa",
    name: "Jasa",
    desc: "Jasa Servis TWS Semua Tipe Perbaikan Earbuds Mati Total Ganti Baterai",
    subDesc: "Industri",
    image: "/img/Partner2/Jasa Servis TWS Semua Tipe Perbaikan Earbuds Mati Total Ganti Baterai.jpg",
    link: "https://s.shopee.co.id/2BBg1RZ4AM"
  },
  {
    id: "industri-jasa",
    name: "Jasa",
    desc: "JASA PEMBUATAN PORTOFOLIO KERJA",
    subDesc: "Industri",
    image: "/img/Partner2/JASA PEMBUATAN PORTOFOLIO KERJA.jpg",
    link: "https://s.shopee.co.id/W3S2PVsAN"
  },
  {
    id: "industri-jasa",
    name: "Jasa",
    desc: "Jasa Laser Cutting Custom",
    subDesc: "Industri",
    image: "/img/Partner2/Jasa Laser Cutting Custom.jpg",
    link: "https://s.shopee.co.id/5L8hnKUOuc"
  },
  {
    id: "industri-petshop",
    name: "Ramical",
    desc: "Gastrointestinal Care",
    subDesc: "Industri",
    image: "/img/Partner2/ramical.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7611780663938682133"
  },
  {
    id: "industri-petshop",
    name: "Our Daily Pets",
    desc: "Bovine Colostrum Plus",
    subDesc: "Industri",
    image: "/img/Partner2/ourdailypetswithboyen.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7615819238514625813"
  },
  {
    id: "industri-petshop",
    name: "Furlife",
    desc: "Wonder Moist Balm",
    subDesc: "Industri",
    image: "/img/Partner2/Furlife.jpg",
    link: "https://www.instagram.com/furlife.id"
  },
  {
    id: "industri-petshop",
    name: "Furlife",
    desc: "Magic Fluff Shampoo",
    subDesc: "Industri",
    image: "/img/Partner2/Furlife - Magic Fluff Shampoo.jpg",
    link: "https://s.shopee.co.id/1LcFueBI7U"
  },
  {
    id: "industri-petshop",
    name: "Furlife",
    desc: "Whimsi Calm",
    subDesc: "Industri",
    image: "/img/Partner2/Furlife - Whimsi Calm.jpg",
    link: "https://s.shopee.co.id/5q4fGvrHX5"
  },
  {
    id: "industri-petshop",
    name: "PET VIGOR ID",
    desc: "Spray Pet Skin",
    subDesc: "Industri",
    image: "/img/Partner2/petvigorwithboyen.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7643296058587598100"
  },
  {
    id: "industri-petshop",
    name: "PET VIGOR ID",
    desc: "PET VIGOR Obat Kutu Kucing Anjing Fipronil",
    subDesc: "Industri",
    image: "/img/Partner2/PET VIGOR Obat Kutu Kucing Anjing Fipronil.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7645524717755010325"
  },
  {
    id: "industri-petshop",
    name: "Antiscabies Plus Nano Aerosol",
    desc: "Antiscabies Plus Nano Aerosol",
    subDesc: "Industri",
    image: "/img/Partner2/Antiscabies Plus Nano Aerosol.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7669632983363505428"
  },
  {
    id: "industri-petshop",
    name: "Clever Solutions - Anti Scabies Plus Ultimate 12in1",
    desc: "Clever Solutions - Anti Scabies Plus Ultimate 12in1",
    subDesc: "Industri",
    image: "/img/Partner2/Clever Solutions - Anti Scabies Plus Ultimate 12in1.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7669701926011030805"
  },
  {
    id: "industri-petshop",
    name: "Paket Antiscabies Anabul",
    desc: "Paket Antiscabies Anabul",
    subDesc: "Industri",
    image: "/img/Partner2/Paket Antiscabies Anabul.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7669632236223778069"
  },
  {
    id: "industri-petshop",
    name: "Clever Solutions - Anti Scabies Plus Syrup 30ML",
    desc: "Clever Solutions - Anti Scabies Plus Syrup 30ML",
    subDesc: "Industri",
    image: "/img/Partner2/Clever Solutions - Anti Scabies Plus Syrup 30ML.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7669305482942614804"
  },
    {
    id: "industri-petshop",
    name: "Golden Paw - FLUGUARD SYRUP 30 ml",
    desc: "Golden Paw - FLUGUARD SYRUP 30 ml",
    subDesc: "Industri",
    image: "/img/Partner2/Golden Paw - FLUGUARD SYRUP 30 ml.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7677503201817546005"
  },
    {
    id: "industri-petshop",
    name: "Worm Guard 5gr By Golden Paw Obat Cacing",
    desc: "Worm Guard 5gr By Golden Paw Obat Cacing",
    subDesc: "Industri",
    image: "/img/Partner2/Worm Guard 5gr By Golden Paw Obat Cacing.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7672695242675539221"
  },
    {
    id: "industri-petshop",
    name: "Golden Paw Anti Scabies 8in1",
    desc: "Golden Paw Anti Scabies 8in1",
    subDesc: "Industri",
    image: "/img/Partner2/Golden Paw Anti Scabies 8in1.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7671245860872719637"
  },
    {
    id: "industri-petshop",
    name: "Golden Paw-Anti Virus Guard Syrup",
    desc: "Golden Paw-Anti Virus Guard Syrup",
    subDesc: "Industri",
    image: "/img/Partner2/Golden Paw-Anti Virus Guard Syrup.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7677504901387210004"
  },
    {
    id: "industri-petshop",
    name: "Holycat Labs-Royal Care Booster",
    desc: "Holycat Labs-Royal Care Booster",
    subDesc: "Industri",
    image: "/img/Partner2/Holycat Labs-Royal Care Booster.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7675975240727498004"
  },
    {
    id: "industri-petshop",
    name: "Felina Freshpack 55gr Makanan Kucing",
    desc: "Felina Freshpack 55gr Makanan Kucing",
    subDesc: "Industri",
    image: "/img/Partner2/Felina Freshpack 55gr Makanan Kucing.jpg",
    link: "https://www.tiktok.com/@booyenku/video/7674469724738063636"
  },
    {
    id: "industri-petshop",
    name: "Life Cat Creamy 30gr Snack Kucing Isi 2 Varian",
    desc: "Life Cat Creamy 30gr Snack Kucing Isi 2 Varian",
    subDesc: "Industri",
    image: "/img/Partner2/Life Cat Creamy 30gr Snack Kucing Isi 2 Varian.jpg",
    link: "https://s.shopee.co.id/W5gWqtB2Z"
  },
    {
    id: "industri-petshop",
    name: "Snack creamy YUKI CAT ISI 60 PCS",
    desc: "Snack creamy YUKI CAT ISI 60 PCS",
    subDesc: "Industri",
    image: "/img/Partner2/Snack creamy YUKI CAT ISI 60 PCS.jpg",
    link: "https://s.shopee.co.id/7VFQrkMMGu"
  },
    {
    id: "industri-petshop",
    name: "Meo creamy treat 60gr isi 4 me-o snack kucing",
    desc: "Meo creamy treat 60gr isi 4 me-o snack kucing",
    subDesc: "Industri",
    image: "/img/Partner2/Meo creamy treat 60gr isi 4 me-o snack kucing.jpg",
    link: "https://s.shopee.co.id/9pdLe3rdDd"
  },
    {
    id: "industri-petshop",
    name: "Holycatlabs Royal Care Real Meat Wetfood Can Makanan Basah Kaleng Kucing 400gr",
    desc: "Holycatlabs Royal Care Real Meat Wetfood Can Makanan Basah Kaleng Kucing 400gr",
    subDesc: "Industri",
    image: "/img/Partner2/Holycatlabs Royal Care Real Meat Wetfood Can Makanan Basah Kaleng Kucing 400gr.jpg",
    link: "https://s.shopee.co.id/5fnmgSj7ga"
  },
  {
    id: "industri-petshop",
    name: "Holycat Real Meat Makanan Kering Dry Food Kucing 450gr",
    desc: "Holycat Real Meat Makanan Kering Dry Food Kucing 450gr",
    subDesc: "Industri",
    image: "/img/Partner2/Holycat Real Meat Makanan Kering Dry Food Kucing 450gr.jpg",
    link: "https://s.shopee.co.id/3LPruhiO6s"
  },
{
    id: "industri-petshop",
    name: "HolyCat Labs Royale Care Fish Oil Minyak Ikan Premium Vitamin Kucing Dan Anjing 100 Capsul",
    desc: "HolyCat Labs Royale Care Fish Oil Minyak Ikan Premium Vitamin Kucing Dan Anjing 100 Capsul",
    subDesc: "Industri",
    image: "/img/Partner2/HolyCat Labs Royale Care Fish Oil Minyak Ikan Premium Vitamin Kucing Dan Anjing 100 Capsul.jpg",
    link: "https://s.shopee.co.id/2gAjJkkDlT"
},
      {
    id: "industri-petshop",
    name: "Majes Magic Bites Hair & Skin Care Makanan Kucing Kering 1kg Rasa Salmon - Adult Dry Cat Food",
    desc: "Majes Magic Bites Hair & Skin Care Makanan Kucing Kering 1kg Rasa Salmon - Adult Dry Cat Food",
    subDesc: "Industri",
    image: "/img/Partner2/Majes Magic Bites Hair & Skin Care Makanan Kucing Kering 1kg Rasa Salmon - Adult Dry Cat Food.jpg",
    link: "https://s.shopee.co.id/3g2iJOJeOG"
  },
      {
    id: "industri-petshop",
    name: "AWINDO TOPPET 800GR - Makanan Pakan Premium Kucing Kering Toppet Tuna Salmon Dry Cat Food Adult",
    desc: "AWINDO TOPPET 800GR - Makanan Pakan Premium Kucing Kering Toppet Tuna Salmon Dry Cat Food Adult",
    subDesc: "Industri",
    image: "/img/Partner2/AWINDO TOPPET 800GR - Makanan Pakan Premium Kucing Kering Toppet Tuna Salmon Dry Cat Food Adult.jpg",
    link: "https://s.shopee.co.id/80BhTMqrBo"
  },
      {
    id: "industri-petshop",
    name: "PL Growssy Susu 1 Box isi 11 Bayi Anak Kucing 0 2 Bulan Kitten Pengganti ASI Penggemuk",
    desc: "PL Growssy Susu 1 Box isi 11 Bayi Anak Kucing 0 2 Bulan Kitten Pengganti ASI Penggemuk",
    subDesc: "Industri",
    image: "/img/Partner2/PL Growssy Susu 1 Box isi 11 Bayi Anak Kucing 0 2 Bulan Kitten Pengganti ASI Penggemuk.jpg",
    link: "https://s.shopee.co.id/60Qd5iRhFF"
  },
    {
    id: "industri-petshop",
    name: "Pussbite makanan kucing salmon dan tuna Freshpack 800gr",
    desc: "Pussbite makanan kucing salmon dan tuna Freshpack 800gr",
    subDesc: "Industri",
    image: "/img/Partner2/Pussbite makanan kucing salmon dan tuna Freshpack 800gr.jpg",
    link: "https://s.shopee.co.id/W5gXdLDpF"
  },
    {
    id: "industri-petshop",
    name: "DR PAW DRY FOOD KUCING SEGALA UMUR 1 KG MAKANAN KERING DENGAN FREEZE DRIED",
    desc: "DR PAW DRY FOOD KUCING SEGALA UMUR 1 KG MAKANAN KERING DENGAN FREEZE DRIED",
    subDesc: "Industri",
    image: "/img/Partner2/DR PAW DRY FOOD KUCING SEGALA UMUR 1 KG MAKANAN KERING DENGAN FREEZE DRIED.jpg",
    link: "https://s.shopee.co.id/9zwlr6SVG6"
  },
    {
    id: "industri-petshop",
    name: "Meo Pouch Kemasan Dus Isi 12 Makanan Basah Kucing MODO",
    desc: "Meo Pouch Kemasan Dus Isi 12 Makanan Basah Kucing MODO",
    subDesc: "Industri",
    image: "/img/Partner2/Meo Pouch Kemasan Dus Isi 12 Makanan Basah Kucing MODO.jpg",
    link: "https://s.shopee.co.id/1gHdvpBVqt"
  },
{
    id: "industri-petshop",
    name: "POOCHA Kaleng Makanan Basah Ekonomis Makanan Kaleng Kucing 400 Gram Cat Food Wet Food",
    desc: "POOCHA Kaleng Makanan Basah Ekonomis Makanan Kaleng Kucing 400 Gram Cat Food Wet Food",
    subDesc: "Industri",
    image: "/img/Partner2/POOCHA Kaleng Makanan Basah Ekonomis Makanan Kaleng Kucing 400 Gram Cat Food Wet Food.jpg",
    link: "https://s.shopee.co.id/1LfAQutejV"
},  
{
    id: "industri-petshop",
    name: "BUBUK CATNIP KUCING - CATNIP CATMINT KUCING",
    desc: "BUBUK CATNIP KUCING - CATNIP CATMINT KUCING",
    subDesc: "Industri",
    image: "/img/Partner2/BUBUK CATNIP KUCING - CATNIP CATMINT KUCING.jpg",
    link: "https://s.shopee.co.id/9zx8kvBqLd"
},  
{
    id: "industri-petshop",
    name: "Kotak penyimpanan bulu kucing",
    desc: "Kotak penyimpanan bulu kucing",
    subDesc: "Industri",
    image: "/img/Partner2/Kotak penyimpanan bulu kucing.jpg",
    link: "https://s.shopee.co.id/6VNGaW9mll"
},  
{
    id: "industri-petshop",
    name: "Tas Ransel Ragdoll Kucing Lucu",
    desc: "Tas Ransel Ragdoll Kucing Lucu",
    subDesc: "Industri",
    image: "/img/Partner2/Tas Ransel Ragdoll Kucing Lucu.jpg",
    link: "https://s.shopee.co.id/112K2RYjCE"
},  
{
    id: "industri-petshop",
    name: "kuping harimau stiker motor lucu",
    desc: "kuping harimau stiker motor lucu",
    subDesc: "Industri",
    image: "/img/Partner2/kuping harimau stiker motor lucu.jpg",
    link: "https://s.shopee.co.id/4LIm0bBoPp"
},   
{
    id: "industri-petshop",
    name: "WANJIALE Alas Kandang JARING Anabul",
    desc: "WANJIALE Alas Kandang JARING Anabul",
    subDesc: "Industri",
    image: "/img/Partner2/WANJIALE Alas Kandang JARING Anabul.jpg",
    link: "https://s.shopee.co.id/112K2YOTaP"
}, 
{
    id: "industri-petshop",
    name: "Paket Mandi Grooming Kucing 6in1",
    desc: "Paket Mandi Grooming Kucing 6in1",
    subDesc: "Industri",
    image: "/img/Partner2/Paket Mandi Grooming Kucing 6in1.jpg",
    link: "https://s.shopee.co.id/8plBMzKFGz"
}, 
  // --- COMING SOON SECTION ---
  {
    id: "industri-1",
    name: "Coming Soon",
    desc: "Partner Industri Polimeritas",
    subDesc: "Industri",
    image: "/img/Partner2/Coming Soon.jpg",
    link: "https://www.tiktok.com/@booyenku"
  },
  {
    id: "industri-1",
    name: "Coming Soon",
    desc: "Partner Industri Polimeritas",
    subDesc: "Industri",
    image: "/img/Partner2/Coming Soon.jpg",
    link: "https://www.tiktok.com/@booyenku"
  },
  {
    id: "industri-1",
    name: "Coming Soon",
    desc: "Partner Industri Polimeritas",
    subDesc: "Industri",
    image: "/img/Partner2/Coming Soon.jpg",
    link: "https://www.tiktok.com/@booyenku"
  },
  {
    id: "industri-1",
    name: "Coming Soon",
    desc: "Partner Industri Polimeritas",
    subDesc: "Industri",
    image: "/img/Partner2/Coming Soon.jpg",
    link: "https://www.tiktok.com/@booyenku"
  },
  // --- AFFILIATE SECTION ---
  {
    id: "Affiliate",
    name: "Happymunday Tutup Botol Plastik Warna Warni Satuan",
    desc: "Toy Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Happymunday Tutup Botol Plastik Warna Warni Satuan.jpg",
    link: "https://shopee.co.id/product/39116955/20477958193?affiliate_seller_voucher_token=8bCnE5QAmVEKwDVBmGExVPCPpJn8QZSqDTy3tFAr4u&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElAAAAAxyBVhBWJoN1XW_hnoDj4A37KE4QXli2OjNGvxTzm7UcaAZelrryewUy0GxNClUS3tW1fzxON4FLYX9r8anFoqUqIgU5-fL_f9GK0Mu_485qR40za2n6h0FHFDEGP6pPSIfsrYzQ-pgGiO7vSHNgvA_nyylLJK_0yhUuz04zRd78TM1Mev8Q-1QBFdZHS0m5lQ&mmp_pid=an_11393951005&uls_trackid=55m35lnu02bk&utm_campaign=id_mew5IMeoxD&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewyxntr1e2hn"
  },
  {
    id: "Affiliate",
    name: "Tutup Botol Plastik SN Short Neck Almond Segel Isi 100 Pcs",
    desc: "Toy Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Tutup Botol Plastik SN Short Neck Almond Segel Isi 100 Pcs.jpg",
    link: "https://shopee.co.id/product/673719294/17596603072?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAySDUUUxvPGFH7fKZPve5h0Mz7N6Bwfk84P_jQNtRhmMQtyMnutfPXN2cEN0khG0jxtbMvXjqls7ENmbFhCQA8ogJPVOjuKXiuwZXQVocr319QnzG1o2nGY98_J68mX8CFua_QpYMKEb3x50mM4RJUWPV7MUkB9FjU9Ttxa_Nup6eKmNrFBMHaRXNU6MNq5PJaKbA&mmp_pid=an_11393951005&uls_trackid=55m35ja901jt&utm_campaign=id_yhANPj3hrb&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewyxkuf171cs"
  },
  {
    id: "Affiliate",
    name: "Tutup Botol Plastik Long Neck Paket isi 100 pcs Air Mineral Segel BARU",
    desc: "Toy Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Tutup Botol Plastik Long Neck Paket isi 100 pcs Air Mineral Segel BARU.jpg",
    link: "https://shopee.co.id/product/673719294/22985189984?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAw7aAvBhhhOEC3KCOrzU6-f8AwMi3IG6eeqI8Visitrc4PuaFMMwOGAVWNVn-z3u74NGmR9GJ3MgzrOKN5bsMFw0lNCpAQCha9v5x9R3RvUOZd1C46BxGH9VYQlETf1YK60S36Au7nV9WFXrmDfUCfyUugujFBfIBnGw1xK2PskE4a_K_tw5P3W0djqQMDA-3fkYw&mmp_pid=an_11393951005&uls_trackid=55m35gvq02e3&utm_campaign=id_jYWPYTuivn&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewyxixp6eshz"
  },
  {
    id: "Affiliate",
    name: "Tutup Botol Plastik Warna Warni Montessori Belajar Warna Anak",
    desc: "Toy Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Tutup Botol Plastik Warna Warni Montessori Belajar Warna Anak.jpg",
    link: "https://shopee.co.id/product/117054416/49802836257?affiliate_seller_voucher_token=8bCnE5QAnJjCkBMriQqy54zfvbTx2ykm465PVjKRwf&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAzV6uL_lQnMN5ZfAZ9_lYBdHyDgc9W237QkphgTzxFf-XQHpUE-c2Jbzf8nKK6ujEi0QEKI-1HJhMtQNrsfFZuhpNxydaTUX8n36qmhNkXxPU40MxSU61pDuJjkcQ__hUE1X6YzFCu--ePG8LbEeV6bbHg-N9CFdmDsvhk1s3doi5VZeDO37IZQ8FHmYmxsClGmcA&mmp_pid=an_11393951005&uls_trackid=55m35ekh00pk&utm_campaign=id_xbSEZmpDmZ&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewyxh1ac4co2"
  },
  {
    id: "Affiliate",
    name: "Olive Care LITTER BLOOM Penghilang Bau Pipis Pup Litter Box Kucing 160g",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Olive Care LITTER BLOOM Penghilang Bau Pipis Pup Litter Box Kucing 160g.jpg",
    link: "https://s.shopee.co.id/Lk1sjb3jU"
  },
  {
    id: "Affiliate",
    name: "FOCAT Papan Garuk Kucing Anjing Anabul Multifungsi M11 Cat Scratcher",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/FOCAT Papan Garuk Kucing Anjing Anabul Multifungsi M11 Cat Scratcher.jpg",
    link: "https://s.shopee.co.id/7KtmDZ6ooy"
  },
  {
    id: "Affiliate",
    name: "PAWHUB Tempat Makan Kucing Anti Semut Pet Feeder",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/PAWHUB Tempat Makan Kucing Anti Semut Pet Feeder.jpg",
    link: "https://s.shopee.co.id/4LGAe2emOI"
  },
  {
    id: "Affiliate",
    name: "Mangkuk Stainless Steel Anjing Kucing Anti Slip Anti Semut Selip Pet Bowl Aksesoris Hewan",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Mangkuk Stainless Steel Anjing Kucing Anti Slip Anti Semut Selip Pet Bowl Aksesoris Hewan.jpg",
    link: "https://s.shopee.co.id/3B4DFsyXht"
  },
  {
    id: "Affiliate",
    name: "BIOTA Smart Water Fountain - Tempat Minum Kucing dan Anjing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/BIOTA Smart Water Fountain - Tempat Minum Kucing dan Anjing.jpg",
    link: "https://s.shopee.co.id/5ApHdYHFZ7"
  },
  {
    id: "Affiliate",
    name: "BIOTA Smart Pet Feeder - Dispenser Makanan Otomatis Anabul",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/BIOTA Smart Pet Feeder - Dispenser Makanan Otomatis Anabul.jpg",
    link: "https://s.shopee.co.id/AKXNn2AQdD"
  },  
  {
    id: "Affiliate",
    name: "AimayaPet Mainan Kucing Mouse Tail Silicone Cat Teaser Tongkat Kucing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/AimayaPet Mainan Kucing Mouse Tail Silicone Cat Teaser Tongkat Kucing.jpg",
    link: "https://s.shopee.co.id/10zifsBzyY"
  },
  {
    id: "Affiliate",
    name: "SmartHeart Makanan Kucing Kering Dry Cat Food Adult Sterilised Cat 1.1 Kg",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/SmartHeart Makanan Kucing Kering Dry Cat Food Adult Sterilised Cat 1.1 Kg.jpg",
    link: "https://shopee.co.id/product/438420233/12680295504?credential_token=8wEwiDL7XpCEWTrUYhQjMkVoVLGTkKCe6uLnKXutZ8&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAw-lu6U7CwFHW8HxucixfaANPYNJ3tVOAEbv6GDIit6sXUE4fJjvsCZem03quCfpRzMpd1zrNOseDtTcaWqjsBTT1YE-CN1K3E8tZlU5SYwuoza1YxYjji6qmWiodJ3gxS7rn-ST0kh_6gR1HtgNKo5nKBAtWmbcfqP5SOSlw0TA-4FKGgqFvB1XPE3sUhx7hCLQw&mmp_pid=an_11393951005&uls_trackid=55kc7bor019l&utm_campaign=id_lFFl35lg6F&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evt5eq4v8ies"
  },
  {
    id: "Affiliate",
    name: "Grain free therafeed hairball control 2kg freshpack",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Grain free therafeed hairball control 2kg freshpack.jpg",
    link: "https://shopee.co.id/product/37248082/3242494589?credential_token=2oGr6iJvC1kx41hygGf1KCKK6brC5UBYQZ3kQ2N6c&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEkgAAAAykgErWE0CQwK4K4Kz2jHPenstvOSDUueL3mOOPcb-4mlrLdY4yC5kExUHsOF1BQeSp9K1IG0BVRbV539MiyAmQ1h139q8Ie_l5VySHUSbXW6yzVl6Wa0FNVcn8BswnXrlt_n5na57Kc36s_iW32CjQiN-g3keh_2s__eRc99yXsE6IzZZxUoY2cjcyZzKo&mmp_pid=an_11393951005&uls_trackid=55kc7fkn009j&utm_campaign=id_Del1QpZ8GB&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evt5hvsjs6w1"
  },
  {
    id: "Affiliate",
    name: "Catsrang All Stages 3kg FRESHPACK Dry Food Kucing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Catsrang All Stages 3kg FRESHPACK Dry Food Kucing.jpg",
    link: "https://shopee.co.id/product/13062645/9415012440?credential_token=2oGr6iJvCZXPMYp1PZZFHPwWzbUbe1y6UqqN1n7VB&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEkgAAAAxtEZzOXiRgmYVXCz6RSAR4gVV-q9cGMis2obSpR0jQ_y_exEuwui9BU7GIacrjguy5PaD5KIQlj-hXHcxYWg-iN4Tnx7RD7aHf1SC3aoFQO36fjxgA486HQ0LzwOMna-c3xUZ-ap7JaXclaiGp1YUnk-uY1-fpN0gUUISGoy-NGii7g0EOfGovxg8ZZSyW&mmp_pid=an_11393951005&uls_trackid=55kc7kj7039m&utm_campaign=id_jHDIBBLAEl&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evt5mxhmfkeb"
  },
  {
    id: "Affiliate",
    name: "SAVIONYX Meal Topper Savory Sprinkle for Cats",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/SAVIONYX Meal Topper Savory Sprinkle for Cats.jpg",
    link: "8/49106982075?credential_token=8wEwiDL7Z2qxAZWkvGsqsqbt1QQCTjKF5Z67QmAex6&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAz0F5bTjgTGemc_gcPuG_ZQuehg6gyfiGvJcv0-ueEvz_yrrKaPsY_4Qf69Wa8BSjpwzUZRSsfiJrdFS24PdOrRZj4XgwgayTxL3735jdFSWNjS4roQBj2zH0RssFaVRgGvkR_nSJ6xA5wTcXmfY9ZHEPKID1MDfB-BXNzd8jTxLW3ibT_wEoBlViDNTOa2A21vf4qW&mmp_pid=an_11393951005&uls_trackid=55kc7mju058q&utm_campaign=id_H9AV2k3llz&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evt5okq2izx7"
  },
  {
    id: "Affiliate",
    name: "Makanan Kucing Enak & Bergizi – Cocok untuk Kitten & Kucing Dewasa",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Makanan Kucing Enak & Bergizi – Cocok untuk Kitten & Kucing Dewasa.jpg",
    link: "https://shopee.co.id/opaanlp/1585380574/50457943336?__mobile__=1&credential_token=8wEwiDL7ZRN2gkBLiWHwuvNAYuv5MMvVsq2yc9oQPe&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAzY0jVa6luTVzVqLNSnvEyCu2Yk6ZOLqKpg8njzBGAgIT9hzVr7SZeqtTf7HEmL-CcDUpuDQgXTaToFiwkdaMv1NXWF9N9qTTXo8SfwXT7APMUZVeLWjIN36h5OgAMA6a-MSySDBXm6BM1oZVVPCJogsCb3Xa4LV7GaKTgjsitbgdvhwxlyXMe8i0Gfew5EuSYFsCGR&mmp_pid=an_11393951005&uls_trackid=55kc7oj7018q&utm_campaign=id_Y8r22ywJsJ&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=evt5q7p4zehm"
  },
  {
    id: "Affiliate",
    name: "Majes Immunity Meat Pack Makanan Kucing Basah (100 gr)",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Majes Immunity Meat Pack Makanan Kucing Basah (100 gr).jpg",
    link: "https://s.shopee.co.id/LjxXlxjL0"
  },
  {
    id: "Affiliate",
    name: "Majes Freeze-Dried Digestive Health",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Majes Freeze-Dried Digestive Health.jpg",
    link: "https://s.shopee.co.id/6AhkUXoxDl"
  },
  {
    id: "Affiliate",
    name: "ANIMAL STAR 1,5kg premium cat food makanan kucing kering dry food kucing ukuran 1,5kg",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/ANIMAL STAR 1,5kg premium cat food makanan kucing kering dry food kucing ukuran 1,5kg.jpg",
    link: "https://s.shopee.co.id/20sBWvz4Ed"
  },
  {
    id: "Affiliate",
    name: "Catto Premium Dry Food - Bundle Complete 50gr x 6pcs",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Catto Premium Dry Food - Bundle Complete 50gr x 6pcs.jpg",
    link: "https://s.shopee.co.id/1qYlKg5Mf9"
  },
  {
    id: "Affiliate",
    name: "CATAPAW Susu Bayi Kucing Cat Milk for Kitten",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/CATAPAW Susu Bayi Kucing Cat Milk for Kitten.jpg",
    link: "https://s.shopee.co.id/1qYlKjs8Ac"
  },
  {
    id: "Affiliate",
    name: "Makanan Basah Kucing MR.VET",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Makanan Basah Kucing MR.VET.jpg",
    link: "https://s.shopee.co.id/AAD5Hre7A4"
  },
  {
    id: "Affiliate",
    name: "Toppet",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Toppet.jpg",
    link: "https://s.shopee.co.id/8AS0uTvEO1"
  },
  {
    id: "Affiliate",
    name: "AMI GO",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-AMI GO.jpg",
    link: "https://s.shopee.co.id/60NWKTdceY"
  },
  {
    id: "Affiliate",
    name: "Cemilan Creamy Kucing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Cemilan Creamy Kucing.jpg",
    link: "https://s.shopee.co.id/30jukwL898"
  },
  {
    id: "Affiliate",
    name: "Mainan Kucing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Mainan Kucing.jpg",
    link: "https://s.shopee.co.id/808aiep2ZP"
  },
  {
    id: "Affiliate",
    name: "Baju Kucing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Baju Kucing.jpg",
    link: "https://s.shopee.co.id/70G3Wr5NNj"
  },
  {
    id: "Affiliate",
    name: "Tas Kucing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Tas Kucing.jpg",
    link: "https://s.shopee.co.id/10yqNsUiaG"
  },
  {
    id: "Affiliate",
    name: "Tas Astronot Premium",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Tas Astronot Premium.jpg",
    link: "https://s.shopee.co.id/gLzzIVFQm"
  },
  {
    id: "Affiliate",
    name: "VEV Pounch",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-VEV Pounch.jpg",
    link: "https://s.shopee.co.id/9019Vc6ccf"
  },
  {
    id: "Affiliate",
    name: "Snack Kucing OYISI",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Snack Kucing OYISI.jpg",
    link: "https://s.shopee.co.id/40cTYUMFm2"
  },
  {
    id: "Affiliate",
    name: "Cat Choize Kitten",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Cat Choize Kitten.jpg",
    link: "https://s.shopee.co.id/AKWX6AL7Z5"
  },
  {
    id: "Affiliate",
    name: "Felibite",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Felibite.jpg",
    link: "https://s.shopee.co.id/2LUFZWV3VN"
  },
  {
    id: "Affiliate",
    name: "Excel",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Excel.jpg",
    link: "https://s.shopee.co.id/7ppC7f6HiR"
  },
  {
    id: "Affiliate",
    name: "Liebao Snack",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Liebao Snack.jpg",
    link: "https://s.shopee.co.id/3fzdA2Kiie"
  },
  {
    id: "Affiliate",
    name: "Snack Kucing Creamy (Susu Kambing)",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Snack Kucing Creamy (Susu Kambing).jpg",
    link: "https://s.shopee.co.id/2VnflujaUx"
  },
  {
    id: "Affiliate",
    name: "Stick Bulu untuk Kucing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Stick Bulu untuk Kucing.jpg",
    link: "https://s.shopee.co.id/70G5C27BpF"
  },
  {
    id: "Affiliate",
    name: "Tas Kucing Selempang",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Tas Kucing Selempang.jpg",
    link: "https://s.shopee.co.id/4fsAPvleSb"
  },
  {
    id: "Affiliate",
    name: "Gantungan Kunci Kucing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Gantungan Kunci Kucing.jpg",
    link: "https://s.shopee.co.id/2LUFdfWu2y"
  },
  {
    id: "Affiliate",
    name: "Mister Puss Dry Food",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Mister Puss Dry Food.jpg",
    link: "https://s.shopee.co.id/6pwezxbEHr"
  },
  {
    id: "Affiliate",
    name: "Poocha Wet Food",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Poocha Wet Food.jpg",
    link: "https://s.shopee.co.id/16KrQrI9o"
  },
  {
    id: "Affiliate",
    name: "Tempat Minum Kucing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Tempat Minum Kucing.jpg",
    link: "https://s.shopee.co.id/16MSKSIt8"
  },
  {
    id: "Affiliate",
    name: "Paket Grooming Kucing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Paket Grooming Kucing.jpg",
    link: "https://s.shopee.co.id/8fOKmCww0f"
  },
  {
    id: "Affiliate",
    name: "Box BAB Kucing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Box BAB Kucing.jpg",
    link: "https://s.shopee.co.id/3fzeoyyhHR"
  },
  {
    id: "Affiliate",
    name: "Starter Kucing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Starter Kucing.jpg",
    link: "https://s.shopee.co.id/AUpyxUwNIQ"
  },
  {
    id: "Affiliate",
    name: "Hairball Gel Kucing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Hairball Gel Kucing.jpg",
    link: "https://s.shopee.co.id/5VRaipdGO5"
  },
  {
    id: "Affiliate",
    name: "Topi Kucing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Topi Kucing.jpg",
    link: "https://s.shopee.co.id/5L8AWVbtaf"
  },
  {
    id: "Affiliate",
    name: "Kandang Kucing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Kandang Kucing.jpg",
    link: "https://s.shopee.co.id/8pi2gvEniq"
  },
  {
    id: "Affiliate",
    name: "Chiro",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Chiro.jpg",
    link: "https://s.shopee.co.id/W2ula2raq"
  },
  {
    id: "Affiliate",
    name: "Happy Cat Minkas",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Happy Cat Minkas.jpg",
    link: "https://s.shopee.co.id/9paZsi971u"
  },
  {
    id: "Affiliate",
    name: "Catlife",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Affiliate-Catlife.jpg",
    link: "https://s.shopee.co.id/8fOcUXrXxA"
  },
  {
    id: "Affiliate",
    name: "Cats Grass Dadu - Catnip Kucing - Cat Grass Cube",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Cats Grass Dadu - Catnip Kucing - Cat Grass Cube.jpg",
    link: "https://shopee.co.id/product/1562573470/53550368590?credential_token=8wEwiDL7ZRduuo34Yb1MedpmL9qCJDEGSCnuNVN1Gc&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAwCkqGMfofUHC49S6jSSvWei2IS-KF9O_HExMmF7jnuU8o7Dx-YTpXqiZotjMxtf5Q72Y-2EYeOWnS6OSX8_b8VEIrkTXV_FDxHG3v8tqC-zE3YsFSht9P3uUWkIpiJ3nMlIte4D5s7t-wAAbz_0j3f4HHTC66yWRy371bY81BfnPKokxhYvZAB8U2XSC8LZfwNQ7RQ&mmp_pid=an_11393951005&uls_trackid=55lbmbqg01bm&utm_campaign=id_XAeYZXxv91&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewgxf5hxaz31"
  },
  {
    id: "Affiliate",
    name: "BITYAS Snack kucing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/BITYAS Snack kucing.jpg",
    link: "https://shopee.co.id/opaanlp/1427655475/29274422489?__mobile__=1&affiliate_seller_voucher_token=8bCnE5QAmW3scyce3ctBSJpDooCXeXfzvnKifYzA5o&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAzHdw2cjnPy7ZFL9nMkba8tYJq2pvCTGgCtVrQQDPe6A3JnU62Muy_AtHqQhjwFxMrBh0U5Px2pBVWBBtAvs56nQoXP4iTT-VkNuiZRT1l0e__NhOSONITIpPDMcSx06E_Y5zO2DKCibVfBcngoGI6L7HbglEnsH89aTb_YTg-BxBx9wPwsObqMjSpdN9JLGewXajwt&mmp_pid=an_11393951005&uls_trackid=55lbnnfm019l&utm_campaign=id_AXD7qF1p0N&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewgyguc6cu52"
  },
  {
    id: "Affiliate",
    name: "Pet Fur Cleaner Roller Karakter",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Pet Fur Cleaner Roller Karakter.jpg",
    link: "https://shopee.co.id/opaanlp/1136754853/53750898878?__mobile__=1&affiliate_seller_voucher_token=8bCnE5QAnhX4W1aRXXfuwuenN9MdDN7GZGa9onPYxP&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAzJ9CjEEFw_lcNzToSGuFflEQss-IHiNuQJB8eZo0PKR-NLVkRj5yczlybbnq4IXUzqD__yRPuH1PVVbhw0_fnC3BjrI7jfGnKePnOs151Xnm45D1-_LEVF_TuBTJqagQZiVwsE3GJsWVy8w_wtuDzCr4etbDvc9YjD0JBsPyHNZWyGXkEx_Brvomj26fEIw3qefDbz&mmp_pid=an_11393951005&uls_trackid=55lbnl9p03e5&utm_campaign=id_IkmJKfO6G3&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewgyf2o8qyih"
  },
  {
    id: "Affiliate",
    name: "SEMPATI Kasur Bantal Tempat Tidur Kucing Model Tenda",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/SEMPATI Kasur Bantal Tempat Tidur Kucing Model Tenda.jpg",
    link: "https://shopee.co.id/opaanlp/20532310/21291093557?__mobile__=1&credential_token=8wEwiDL7YDSU2jBjw3V162RdqBWG57bNcjk3wNMAmA&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElAAAAAxmcYJdb-vw3UwvVL6C1LgssEzaaXMdOtNGF3dZsxXEwYDwCGhk18oUOhroVYeWFizUOrBlXFYPFzC8qgbbWOpmuu5HOlTVf6YOW2_IragXzGUG5fIEfu5YNK_KKVLSdnT8DhUUMucWjlUsHzKOgOMdLhWb_PKWZwezvuA14rwWY-mh13cXEdSNvfOelNEZmDg&mmp_pid=an_11393951005&uls_trackid=55lbnjhr019l&utm_campaign=id_13TnBAytCdX&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewgydn4urxyu"
  },
  {
    id: "Affiliate",
    name: "YOMURA Pet Colling Mat Mat",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/YOMURA Pet Colling Mat Mat.jpg",
    link: "https://shopee.co.id/opaanlp/1129623249/26908544929?__mobile__=1&credential_token=8wEwiDL7YDu3kcwr7B8QztWfj1CHNd5TbAa5UYGCw5&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAyTnAkTBx4V2E22bwDV4atiukyugGhsgIyqACU2noDcjF6hCNs1kHqhP3ACzuSksQli1iOD8b5GbEybNaWDt3T5kIMdG6_Qk_IE7E3OlnY6IUssELxPdOwt40BLUtf77ZfYhkuOS5x6pZGuuGtQb5yLx-0hdErfyQPfyQxxxIVFEedOARaocO3ncdY46Xyr3gq6cOkF&mmp_pid=an_11393951005&uls_trackid=55lbnht600e3&utm_campaign=id_8yn0Gs260Z&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewgycaccunzt"
  },
  {
    id: "Affiliate",
    name: "Alas Tempat Tidur Kucing Anjing Adem",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Alas Tempat Tidur Kucing Anjing Adem.jpg",
    link: "https://shopee.co.id/opaanlp/226275576/51909094593?__mobile__=1&credential_token=8wEwiDL7ZRTRKzGczAC2LSGTQZdKHhcBX8KfeVipP2&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAxs_q4bQ1xRx9AGJ-E-fPDy8J95YqObazn5ZhxKuoJZlpYJwp71LP3-XM4ktRnH0JeE7bHf3dKgxKXS3XspKOrCMl087-nj_Fq8jAZ4junKLzhOeJqW-AMi5nuLAPP7-8_Gu1Dh4mDNPtxugZ4o1ulygPj_i2PA8DVUz02dNpMNenXSsQrSssDzZBagUSm4K2xJSQ&mmp_pid=an_11393951005&uls_trackid=55lbnftu00bm&utm_campaign=id_klCL43SM3f&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewgyaoeurtja"
  },
  {
    id: "Affiliate",
    name: "MAMS Freeze Dried Snack Kucing Anjing Premium",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/MAMS Freeze Dried Snack Kucing Anjing Premium.jpg",
    link: "https://shopee.co.id/opaanlp/110782560/45204487480?__mobile__=1&credential_token=8wEwiDL7Z2UpfGo6vKi2CW1YVy3C3TozabuYyZYMqn&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAxFROqQvIwSBxhUf9RFz5vklDCIlCGGb9m6LygVq18uiHPKJco_k08vi6tcEMx67E5o8myHUg09ieKqpraZTL90NIBPlssp47xcjEa7ZHJ7C9YEogOvx8_spNwrBptUXN--x_PZzT_i8oPFr9IzZywUE4wxUsamT8dtIXnunqR39R22bI8tidhvDxL-2HwIuopT6g&mmp_pid=an_11393951005&uls_trackid=55lbndab07bk&utm_campaign=id_13TCd1LMv3j&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewgy8isu6nmu"
  },
  {
    id: "Affiliate",
    name: "ALICIAN Pembersih Bulu Anabul Kucing dan Anjing",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/ALICIAN Pembersih Bulu Anabul Kucing dan Anjing.jpg",
    link: "https://shopee.co.id/opaanlp/101044379/40258007295?__mobile__=1&affiliate_seller_voucher_token=8bCnE5QAnHuVVvqWpMHx76NmqW6as9MVKNvp16n9Ve&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAxHTNIz4n9pRcp1iAG7yU7zldNTn3dGSrdzwm7mj_hBgYP8kwn4pHDRJeTRRJ3XwFJB3QYP5PKq5taUMAhup2xkX3QGbN4F94_K61VfvU0SgY-1vzUsjiInXVIlUhpTCuM2QeWFlQhH-4zl9rM05SAMOCV9WXa5TcR1Yg01BtOzg1xPK45wqCJOOYl0J0hwyS-6wA&mmp_pid=an_11393951005&uls_trackid=55lbnal6018q&utm_campaign=id_XCay8sFv47&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewgy6csa64u5"
  },
  {
    id: "Affiliate",
    name: "Purrito Snack Kucing Freeze Dried Chicken Meat",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Purrito Snack Kucing Freeze Dried Chicken Meat.jpg",
    link: "https://shopee.co.id/opaanlp/1388552367/42466060776?__mobile__=1&affiliate_seller_voucher_token=8bCnE5QAnJ67FYXgM2igPhHcc5NzGrqfiSHKGmPoXS&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEmAAAAAwP9JNavQuyluLtY38rIRb3D9E1kJY_jnH-p-V31X0TyfW_nrGYFhstokHb2CR-3DbUz4KBawK8Pzi5__16d1EnIUfSliN9XhzLaudeMysc-FuOcnqc6pWB5oOaDbe6YD_7BwW8hWPo4z_l33dOJmuB1T-jGBhzmkBnE1uSTPops-hzhN9L7V4_P_s3mddo6pgqH64p&mmp_pid=an_11393951005&uls_trackid=55lbn93n019l&utm_campaign=id_o1SXAzQG2F&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewgy53ruhkim"
  },
  {
    id: "Affiliate",
    name: "Termurah Cat Condo Kandang Kucing Set Lengkap",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Termurah Cat Condo Kandang Kucing Set Lengkap.jpg",
    link: "https://shopee.co.id/opaanlp/83257395/23974299240?__mobile__=1&credential_token=8wEwiDL7YDdBkwWmq7yLgRevrAEwLTjjzbDeNwHDUk&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElAAAAAxc134Cv_yTD8V3tWnMlcQ1rsRVPCuRqH1iRuiPhKOv38fVgBDkgVmwODIX2qNh8mfLxzr-4OovzsZ8sEaGRBT6Jtg2i87t-K7dPnM9n2wEbayR0Y_ipPR38lHVPiuU1ZPWkwGbXaMCbSkK9IZV8vB31y7kD_7zk8MeyzA_1Nwow-M4GR0K3Sty__PCOzb9nYk&mmp_pid=an_11393951005&uls_trackid=55lbn729009m&utm_campaign=id_1230KznsRp5&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewgy3exfxe79"
  },
  {
    id: "Affiliate",
    name: "Kasur Anabul desain Bundar (50x50)",
    desc: "Pet Shop",
    subDesc: "Industri",
    image: "/img/Partner2/Kasur Anabul desain Bundar (50x50).jpg",
    link: "https://shopee.co.id/opaanlp/242485506/23885552238?__mobile__=1&credential_token=8wEwiDL7YDdAZjQbDkKkwXrH4vdMxevojcYdVQkBDp&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElgAAAAxvrQMBi3Tr221ebjs4pAlqZleDWKtUMkD8Ew-RkI0_BZ_JfuELVumlRlrXJkyQ6WMzbJkNQPiZ17E54gF8r_3mMcJok0NynfMLWcxR_2tkjgVddUPGa7EY-Hed2wtSSqJr_0V5X7PtmK9JOX2QxvcJQyXjLhqWvKJOtPOvKK5rwEklestg0O3gSqklGCwKhZhorA&mmp_pid=an_11393951005&uls_trackid=55lbn59504e5&utm_campaign=id_jPv1RTx5I3&utm_content=----&utm_medium=affiliates&utm_source=an_11393951005&utm_term=ewgy1ybvnorw"
  },
  // --- LAST ITEMS & DYNAMIC DUMMY ---
  { id: "industri-1", name: "Coming Soon", desc: "Partner Industri Polimeritas", subDesc: "Industri", image: "/img/Partner2/Coming Soon.jpg", link: "https://docs.google.com/forms/d/e/1FAIpQLSdh2xrushDA4S9wnhQjHJxWYNqOVtpqFBYAGauejHlCkROB3A/viewform?pli=1&pli=1" },
  ...Array.from({ length: 20 }).map((_, i) => ({
    id: `industri-dummy-${i + 100}`, 
    name: `Coming Soon ${i + 1}`,
    desc: "Segera Hadir - Partner Industri Polimeritas",
    subDesc: "Industri",
    image: "/img/Partner2/Coming Soon.jpg",
    link: "#"
  }))
];

// Data Book Store
export const partnerBookItems: Partner[] = [
    {
    id: "Hubungi Kami",
    name: "Hubungi Kami",
    desc: "Bantu Kamu Lebih Dekat",
    subDesc: "polimeritas group",
    image: "/img/Partner2/gabung di polimeritas.png",
    link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20polimeritas.com!%20Bantuin%20Saya%20Dong!%20"
    },
    {
    id: "KAJZ Entertainment",
    name: "KAJZ Entertainment",
    desc: "Pasang Iklan",
    subDesc: "Indonesia",
    image: "/img/Partner2/kajzentertainment.jpg",
    link: "https://www.instagram.com/kajz.entertainment"
  },
  {
    id: "Buku Novel",
    name: "MEOW",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/MEOW - SAM AUSTEN.jpg",
    link: "https://www.instagram.com/p/DXBGo0hEU7D/"
  },
  {
    id: "Buku Puisi Antologi",
    name: "Menulis Tanpa Topeng",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Menulis Tanpa Topeng.jpg",
    link: "https://www.instagram.com/p/DWoMhNeEw6zX0nl4b0shUhFUM7Nubb6Zc2Y8Gk0/?img_index=1"
  },
  {
    id: "Buku Novel",
    name: "Tentangmu",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Tentangmu.jpg",
    link: "https://www.instagram.com/p/DXR195DGaVJ/"
  },
  {
    id: "Buku Novel",
    name: "Merah Sejuta Harapan",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Merah Sejuta Harapan.jpg",
    link: "https://www.instagram.com/p/DWxlDMuD8Ar/"
  },
  {
    id: "Buku Novel",
    name: "Karam",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Karam.jpg",
    link: "https://www.instagram.com/p/DWvTxxKlOdQ/"
  },
  {
    id: "Buku Novel",
    name: "Ethereal",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Ethereal.jpg",
    link: "https://www.instagram.com/p/DXPgXlFGe-X/"
  },
  {
    id: "Buku Novel",
    name: "Cedrica",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Cedrica.jpeg",
    link: "https://www.instagram.com/p/DWvMlo7gb3y/?img_index=1"
  },
  {
    id: "Buku Novel",
    name: "Segelas Empon-Empon",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Segelas Empon-Empon.jpeg",
    link: "https://www.instagram.com/p/DWvMlo7gb3y/?img_index=1"
  },
  {
    id: "Buku Novel",
    name: "Kata Hati",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kata Hati.jpeg",
    link: "https://www.instagram.com/p/DWvMlo7gb3y/?img_index=1"
  },
  {
    id: "Buku",
    name: "Jerat di Balik Bulan Puasa",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Jerat di Balik Bulan Puasa.jpg",
    link: "https://www.instagram.com/p/DXWCn2XgcpA/?img_index=1"
  },
  {
    id: "Buku",
    name: "Tuhan Selalu Mengabulkan Doa Hambanya",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Tuhan Selalu Mengabulkan Doa Hambanya.jpg",
    link: "https://www.instagram.com/p/DXWCn2XgcpA/?img_index=1"
  },
  {
    id: "Buku Sekolah",
    name: "Buku Tulis Campus 50 Lembar 1 Pack isi 10 Pcs",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Buku Tulis Campus 50 Lembar 1 Pack isi 10 Pcs.jpg",
    link: "https://s.shopee.co.id/7pq3FIKWsG"
  },
  {
    id: "Buku Sekolah",
    name: "BUKU TULIS 38 LEMBAR SIDU",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/BUKU TULIS 38 LEMBAR SIDU.jpg",
    link: "https://s.shopee.co.id/W3SVoELgv"
  },
  {
    id: "Buku Sekolah",
    name: "BUKU TULIS SIDU COVER SAMPUL NAMA ISI 40 LEMBAR",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/BUKU TULIS SIDU COVER SAMPUL NAMA ISI 40 LEMBAR.jpg",
    link: "https://s.shopee.co.id/8piaR795DA"
  },
  {
    id: "Buku Sekolah",
    name: "Buku Olimpiade OSN SMA",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Buku Olimpiade OSN SMA.jpg",
    link: "https://s.shopee.co.id/2BBgVQ1HX9"
  },
  {
    id: "Buku Sekolah",
    name: "Buku OSN SMP",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Buku OSN SMP.jpg",
    link: "https://s.shopee.co.id/30knUxUpf7"
  },
  {
    id: "Buku Puisi Antologi",
    name: "Akar Serumpun Anyaman Rasa Jilid 13",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Akar serumpun anyaman rasa 13.jpg",
    link: "https://api.whatsapp.com/send?phone=62895384652297&text=Halo+kak%2C+saya+mau+tanya+Buku+SIP+Publishing%0D%0A%0D%0A*AKAR+SERUMPUN+ANYAMAN+RASA+JILID+13*%0A*Harga:*%20Rp95.000%0A*URL:*%20https%3A%2F%2Ftokobuku.sippublishing.co.id%2Fproduct%2Fakar-serumpun-anyaman-rasa-jilid-13%2F%0D%0A%0D%0ATerima+Kasih"
  },
  {
    id: "Buku",
    name: "Bismillah Hamasah",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Bismillah Hamasah.jpg",
    link: "https://s.shopee.co.id/20reyyBqik"
  },
  {
    id: "Buku Novel",
    name: "Seporsi Mie Ayam Sebelum Mati",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/seporsi mie ayam sebelum mati.jpg",
    link: "https://s.shopee.co.id/7VCAUgjvwU"
  },
  {
    id: "Buku Novel",
    name: "Laut Bercerita",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Laut Bercerita.jpg",
    link: "https://s.shopee.co.id/qfhnZPdeo"
  },
  {
    id: "Buku Novel",
    name: "Jurnal Qolbu Muslimah",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Jurnal Qolbu Muslimah.jpg",
    link: "https://s.shopee.co.id/4LFZxaePqd"
  },
    {
    id: "Buku Polymer",
    name: "Mengenal Polimer dan Polimerisasi",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Mengenal Polimer dan Polimerisasi.jpg",
    link: "https://s.shopee.co.id/2LU4UGeqHL"
  },
  {
    id: "Buku Polymer",
    name: "Konsep Dasar Kimia Polimer",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Konsep Dasar Kimia Polimer.jpg",
    link: "https://s.shopee.co.id/1LbXIYx9bY"
  },
  {
    id: "Buku Polymer",
    name: "Material Komposit Polimer Berpenguat Serat",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Material Komposit Polimer Berpenguat Serat.jpg",
    link: "https://s.shopee.co.id/1VuxV54XLO"
  },
  {
    id: "Buku Polymer",
    name: "Manufaktur Aditif Material Polimer",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Manufaktur Aditif Material Polimer.jpg",
    link: "https://s.shopee.co.id/60NMrTfIBq"
  },
    {
    id: "Buku",
    name: "Sebuah Seni untuk Bersikap Bodo Amat",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/sebuah seni untuk bersikap bodo amat.jpg",
    link: "https://s.shopee.co.id/1VuxP2fPwQ"
  },
  {
    id: "Buku Novel",
    name: "Laskar Pelangi",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Laskar Pelangi.jpg",
    link: "https://s.shopee.co.id/9KdojvYOwC"
  },
  {
    id: "Buku Novel",
    name: "0 MDPL",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/0 MDPL.jpg",
    link: "https://s.shopee.co.id/8fO7wuaIFt"
  },
  {
    id: "Buku Novel",
    name: "Bumi Manusia",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Bumi Manusia.jpg",
    link: "https://s.shopee.co.id/40cIRsVsF1"
  },
      {
    id: "Buku Polymer",
    name: "Pengujian Dalam Pengembangan Bahan Polimer Kedokteran Gigi",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pengujian Dalam Pengembangan Bahan Polimer Kedokteran Gigi.jpg",
    link: "https://s.shopee.co.id/AUpmLtMYSJ"
  },
  {
    id: "Buku Polymer",
    name: "Kimia Polimer M.A.Cowd ITB 1991",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kimia Polimer M.A.Cowd ITB.jpg",
    link: "https://s.shopee.co.id/gLqdnd0uZ"
  },
  {
    id: "Buku Polymer",
    name: "Polimer Anorganik dan Organometalik",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Polimer Anorganik dan Organometalik.jpg",
    link: "https://s.shopee.co.id/3fzSDagWB7"
  },
  {
    id: "Buku Polymer",
    name: "Teknologi Polimer Industri Pertanian",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Teknologi Polimer Industri Pertanian.jpg",
    link: "https://s.shopee.co.id/AKWMA08uCv"
  },
  {
    id: "Buku Novel",
    name: "Broken Strings",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Broken Strings.jpg",
    link: "https://s.shopee.co.id/W2QHfczcS"
  },
  {
    id: "Buku Novel",
    name: "Cantik Itu Luka",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Cantik Itu Luka.jpg",
    link: "https://s.shopee.co.id/6L0DEZTwQ7"
  },
  {
    id: "Buku Novel",
    name: "3726 MPDL",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/3726 MPDL.jpg",
    link: "https://s.shopee.co.id/qfGgeXJXC"
  },
  {
    id: "Buku Novel",
    name: "Hujan",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Hujan.jpg",
    link: "https://s.shopee.co.id/4AvipPzeAl"
  },
  {
    id: "Buku Polymer",
    name: "Nanokomposit Polimer",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Nanokomposit Polimer.jpg",
    link: "https://s.shopee.co.id/169s6uBBG"
  },
  {
    id: "Buku Polymer",
    name: "Polymer Composite Systems in Pipeline Repair",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Polymer Composite Systems in Pipeline Repair.jpg",
    link: "https://s.shopee.co.id/Lj0GteqIm"
  },
  {
    id: "Buku Polymer",
    name: "Sustainability in Polymer Technology and Plastics Engineering",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Sustainability in Polymer Technology and Plastics Engineering.jpg",
    link: "https://s.shopee.co.id/5AoG1usoy3"
  },
  {
    id: "Buku Polymer",
    name: "The Essential Handbook of Polymer Terms and Attributes",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/The Essential Handbook of Polymer Terms and Attributes.jpg",
    link: "https://s.shopee.co.id/9AKOnTlxCl"
  },
   {
    id: "Buku Polymer",
    name: "Polimer Termoset",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Polimer Termoset.jpg",
    link: "https://s.shopee.co.id/1LbXWicnWj"
  },
   {
    id: "Buku Polymer",
    name: "Polimer Ilmu Material",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Polimer Ilmu Material.jpg",
    link: "https://s.shopee.co.id/3Vg26lfzm8"
  },
  {
    id: "Buku Polymer",
    name: "Kimia Polimer Malcolm P.Stevens",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kimia Polimer Malcolm P.Stevens.jpg",
    link: "https://s.shopee.co.id/BPa8hmX3Q"
  },
  {
    id: "Buku Polymer",
    name: "Polimer Biodegradasi",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Polimer Biodegradasi.jpg",
    link: "https://s.shopee.co.id/6fd3sh0Zoo"
  },
  {
    id: "Buku Novel",
    name: "Pulang Leila S",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pulang Leila S.jpg",
    link: "https://s.shopee.co.id/6fd3zmhA2O"
  },
  {
    id: "Buku Novel",
    name: "Dompet Ayah Sepatu Ibu",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Dompet Ayah Sepatu Ibu.jpg",
    link: "https://s.shopee.co.id/900ym2vMLw"
  },
  {
    id: "Buku Novel",
    name: "Hujan Bulan Juni",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Hujan Bulan Juni.jpg",
    link: "https://s.shopee.co.id/6pwUC209a5"
  },
  {
    id: "Buku Novel",
    name: "Kado Terbaik",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kado Terbaik.jpg",
    link: "https://s.shopee.co.id/8phYZcuHhJ"
  },
  {
    id: "Buku Polymer",
    name: "Pemodelan dan Simulasi Aliran Polimer",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pemodelan dan Simulasi Aliran Polimer.jpg",
    link: "https://s.shopee.co.id/9paQHQ9pxu"
  },
   {
    id: "Buku Polymer",
    name: "Principles of Polymer Engineering",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Principles of Polymer Engineering.jpg",
    link: "https://s.shopee.co.id/9ztqTkLvfO"
  },
  {
    id: "Buku Polymer",
    name: "Polimer Tercetak Molekul",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Polimer Tercetak Molekul.jpg",
    link: "https://s.shopee.co.id/gMBMcIdVK"
  },
  {
    id: "Buku Polymer",
    name: "Introduction to Physical Polymer Science",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Introduction to Physical Polymer Science.jpg",
    link: "https://s.shopee.co.id/5fkrJpTznb"
  },
  {
    id: "Buku Polymer",
    name: "Pengembangan Surfaktan dan Polimer",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pengembangan Surfaktan dan Polimer.jpg",
    link: "https://s.shopee.co.id/30k68wty2p"
  },
   {
    id: "Buku Polymer",
    name: "Polimer Mutakhir",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Polimer Mutakhir.jpg",
    link: "https://s.shopee.co.id/9paQHWrKrg"
  },
  {
    id: "Buku Polymer",
    name: "Kimia Material Polimer",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kimia Material Polimer.jpg",
    link: "https://s.shopee.co.id/9UxZsw3TVB"
  },
  {
    id: "Buku Polymer",
    name: "Kimia Polimer Dr Eli",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kimia Polimer Dr Eli.jpg",
    link: "https://s.shopee.co.id/50VAWhd7EH"
  },
  {
    id: "Buku Polymer",
    name: "Textbook of Polymer Science",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Textbook of Polymer Science.jpg",
    link: "https://s.shopee.co.id/7AZf6lp3K5"
  },
   {
    id: "Buku Polymer",
    name: "Polimer dalam Sistem Penghantaran Obat",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Polimer dalam Sistem Penghantaran Obat.jpg",
    link: "https://s.shopee.co.id/5q4HWL0bCi"
  },
  {
    id: "Buku Polymer",
    name: "Polymer Adhesion",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Polymer Adhesion.jpg",
    link: "https://s.shopee.co.id/9AKjUTwZzm"
  },
  {
    id: "Buku Polymer",
    name: "Bahan Polimer Konstruksi Bangunan",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Bahan Polimer Konstruksi Bangunan.jpg",
    link: "https://s.shopee.co.id/5L80vSEkwK"
  },
      {
    id: "Buku Polymer",
    name: "Strategi Skrining Polimer EOR",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Strategi Skrining Polimer EOR.jpg",
    link: "https://s.shopee.co.id/70GEuaXOrK"
  },
   {
    id: "Buku Polymer",
    name: "Polymer Processing",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Polymer Processing.jpg",
    link: "https://s.shopee.co.id/AKWgskYXrR"
  },
  {
    id: "Buku Polymer",
    name: "Molekular Imprinting Polimer",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Molekular Imprinting Polimer.jpg",
    link: "https://s.shopee.co.id/40cdL8N3w4"
  },
  {
    id: "Buku Polymer",
    name: "Design of Fibre-Polymer Composite Structures",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Design of Fibre-Polymer Composite Structures.jpg",
    link: "https://s.shopee.co.id/901JILEy0o"
  },
  {
    id: "Buku Novel",
    name: "The Overstory",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/The Overstory.jpg",
    link: "https://s.shopee.co.id/8ARsmaJn6d"
  },
  {
    id: "Buku Novel",
    name: "Jejak Balak",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Jejak Balak.jpg",
    link: "https://s.shopee.co.id/AACxAIX1Zg"
  },
  {
    id: "Buku Novel",
    name: "The Morningside",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/The Morningside.jpg",
    link: "https://s.shopee.co.id/2g6wEYyVAR"
  },
  {
    id: "Buku Novel",
    name: "Sumur Eka Kurniawan",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Sumur Eka Kurniawan.jpg",
    link: "https://s.shopee.co.id/AUpnZ07g0s"
  },
{
    id: "Buku Novel",
    name: "Dunia Sophie",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Dunia Sophie.jpg",
    link: "https://s.shopee.co.id/6AgoP5mbTw"
  },
  {
    id: "Buku Novel",
    name: "Pasien Naomi",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Pasien Naomi.jpg",
    link: "https://s.shopee.co.id/9KdqB0hTS9"
  },
  {
    id: "Buku Novel",
    name: "Rumah JS. Khairen",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Rumah JS. Khairen.jpg",
    link: "https://s.shopee.co.id/AKWNMn5PFI"
  },
  {
    id: "Buku Novel",
    name: "Tentang Kamu",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Tentang Kamu.jpg",
    link: "https://s.shopee.co.id/900zmR3NrU"
  },
  {
    id: "Buku Novel",
    name: "Jika Kucing Lenyap dari Dunia",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Jika Kucing Lenyap dari Dunia.jpg",
    link: "https://s.shopee.co.id/16CqqUzMV"
  },
  {
    id: "Buku Novel",
    name: "Cintaku Antara Jakarta dan Kuala Lumpur",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Cintaku Antara Jakarta dan Kuala Lumpur.jpg",
    link: "https://s.shopee.co.id/W2TRmk8tZ"
  },
  {
    id: "Buku Novel",
    name: "Sang Eksekutor Tere Liye",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Sang Eksekutor Tere Liye.jpg",
    link: "https://s.shopee.co.id/8KlKmDpKWw"
  },
  {
    id: "Buku Novel",
    name: "Langit Senja Nadilla TP",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Langit Senja Nadilla TP.jpg",
    link: "https://s.shopee.co.id/9ztYlJUMLy"
  },
          {
    id: "Buku Novel",
    name: "Berpayung Tuhan",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Berpayung Tuhan.jpg",
    link: "https://s.shopee.co.id/7KsnaRqplZ"
  },
  {
    id: "Buku Novel",
    name: "Aku Kalah Aku Merindukanmu",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Aku Kalah Aku Merindukanmu.jpg",
    link: "https://s.shopee.co.id/4VYcDIw5Ni"
  },
  {
    id: "Buku Novel",
    name: "Metamorfosis",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Metamorfosis.jpg",
    link: "https://s.shopee.co.id/1gEQq817B3"
  },
  {
    id: "Buku Novel",
    name: "Teka Teki Gambar Aneh",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Teka Teki Gambar Aneh.jpg",
    link: "https://s.shopee.co.id/AUppMOg9Xu"
  },
  {
    id: "Buku Novel",
    name: "Tulus untuk Orang yang Salah",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Tulus untuk Orang yang Salah.jpg",
    link: "https://s.shopee.co.id/7fVgrd1fVd"
  },
  {
    id: "Buku Novel",
    name: "7 Our Family",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/7 Our Family.jpg",
    link: "https://s.shopee.co.id/4AvohDZlKR"
  },
  {
    id: "Buku Novel",
    name: "Remember Paris",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Remember Paris.jpg",
    link: "https://s.shopee.co.id/2BAkJYyMgg"
  },
  {
    id: "Buku Novel",
    name: "Orang Miskin Dilarang Sekolah",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Orang Miskin Dilarang Sekolah.jpg",
    link: "https://s.shopee.co.id/3qIyIfvCx9"
  },
  {
    id: "Buku Novel",
    name: "Hotel Magnifique",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Hotel Magnifique.jpg",
    link: "https://s.shopee.co.id/qfMjBt2B1"
  },
  {
    id: "Buku Novel",
    name: "Sisi Tergelap Surga",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Sisi Tergelap Surga.jpg",
    link: "https://s.shopee.co.id/16FjgI0WN"
  },
  {
    id: "Buku Novel",
    name: "By Your Side",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/By Your Side.jpg",
    link: "https://s.shopee.co.id/6fd9fx9Cif"
  },
  {
    id: "Buku Novel",
    name: "Janji Tere Liye",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Janji Tere Liye.jpg",
    link: "https://s.shopee.co.id/4fs5IIYDfC"
  },
  {
    id: "Buku Novel",
    name: "Dilan 1990",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Dilan 1990.jpg",
    link: "https://s.shopee.co.id/AUpsF3GDrg"
  },
  {
    id: "Buku Novel",
    name: "Dilan 1983",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Dilan 1983.jpg",
    link: "https://s.shopee.co.id/5VRCHt36Lc"
  },
  {
    id: "Buku Novel",
    name: "Dilan ITB 1997",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Dilan ITB 1997.jpg",
    link: "https://s.shopee.co.id/7AZQGyMxOv"
  },
  {
    id: "Buku Novel",
    name: "Ancika Pidi Baiq",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Ancika Pidi Baiq.jpg",
    link: "https://s.shopee.co.id/1gETit7gQL"
  },
  {
    id: "Buku",
    name: "The Black Swan",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/The Black Swan.jpg",
    link: "https://s.shopee.co.id/1Vv3vge4pR"
  },
  {
    id: "Buku",
    name: "Bio Etika",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Bio Etika.jpg",
    link: "https://s.shopee.co.id/2Vnb7Zuv3U"
  },
  {
    id: "Buku",
    name: "Kartun Genetika",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kartun Genetika.jpg",
    link: "https://s.shopee.co.id/2BAkizUm9t"
  },
  {
    id: "Buku",
    name: "Fenomenologi",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Fenomenologi.jpg",
    link: "https://s.shopee.co.id/1qXuKPmlc5"
  },
  {
    id: "Buku",
    name: "10 Besar Tari Daerah di Indonesia",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/10 Besar Tari Daerah di Indonesia.jpg",
    link: "https://s.shopee.co.id/qfN8azAww"
  },
  {
    id: "Buku",
    name: "Ensiklopedia Sains",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Ensiklopedia Sains.jpg",
    link: "https://s.shopee.co.id/4VYfVNJC6m"
  },
  {
    id: "Buku",
    name: "Hidrologi Pengelolaan Daerah Air Sungai",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Hidrologi Pengelolaan Daerah Air Sungai.jpg",
    link: "https://s.shopee.co.id/6fdA5P5P3h"
  },
  {
    id: "Buku",
    name: "100 Lagu Daerah Terbaik Nusantara",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/100 Lagu Daerah Terbaik Nusantara.jpg",
    link: "https://s.shopee.co.id/W2Wk5p1XK"
  },
  {
    id: "Buku",
    name: "Bangunan Gedung Hijau untuk Daerah Tropis",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Bangunan Gedung Hijau untuk Daerah Tropis.jpg",
    link: "https://s.shopee.co.id/2BAkjB4Y4U"
  },
  {
    id: "Buku",
    name: "Bioplastik Berbahan Dasar Sisa Hasil Pertanian",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Bioplastik Berbahan Dasar Sisa Hasil Pertanian.jpg",
    link: "https://s.shopee.co.id/2LUAvWkHJy"
  },
  {
    id: "Buku",
    name: "Teknologi Hilir Sawit",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Teknologi Hilir Sawit.jpg",
    link: "https://s.shopee.co.id/4VYfVX6Ysj"
  },
  {
    id: "Buku",
    name: "26 Kisah Inspiratif Pemimpin Industri Properti",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/26 Kisah Inspiratif Pemimpin Industri Properti.jpg",
    link: "https://s.shopee.co.id/AUpvoysGkD"
  },
  {
    id: "Buku",
    name: "Mikroorganisme dan Aplikasinya Diberbagai Industri",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Mikroorganisme dan Aplikasinya Diberbagai Industri.jpg",
    link: "https://s.shopee.co.id/2LUE60iH5j"
  },
  {
    id: "Buku",
    name: "Psikologi Industri dan Organisasi Masyarakat",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Psikologi Industri dan Organisasi Masyarakat.jpg",
    link: "https://s.shopee.co.id/1BIGhv7ZV3"
  },
  {
    id: "Buku Novel",
    name: "Merantau Ke Deli",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Merantau Ke Deli.jpg",
    link: "https://s.shopee.co.id/5q4BMhlAFu"
  },
  {
    id: "Buku Novel",
    name: "Terusir",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Terusir.jpg",
    link: "https://s.shopee.co.id/2LUJCIuAtQ"
  },
  {
    id: "Buku Novel",
    name: "Buya Hamka",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Buya Hamka.jpg",
    link: "https://s.shopee.co.id/1Lbm0W4GML"
  },
  {
    id: "Buku Novel",
    name: "Negeri 5 Menara",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Negeri 5 Menara.jpg",
    link: "https://s.shopee.co.id/1qY2bSbdOe"
  },
  {
    id: "Buku Novel",
    name: "Guru Aini",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Guru Aini.jpg",
    link: "https://s.shopee.co.id/808fx2zn1d"
  },
  {
    id: "Buku Novel",
    name: "As Long As The Lemon Trees Grow",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/As Long As The Lemon Trees Grow.jpg",
    link: "https://s.shopee.co.id/5VRKyTYL3x"
  },
  {
    id: "Buku Novel",
    name: "Orang Orang Biasa",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Orang Orang Biasa.jpg",
    link: "https://s.shopee.co.id/9fGtw9hzQD"
  },
  {
    id: "Buku Novel",
    name: "Nasi Lemak",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Nasi Lemak.jpg",
    link: "https://s.shopee.co.id/3LMqOXY1Gd"
  },
  {
    id: "Buku Novel",
    name: "Musim yang Tak Sempat Kita Miliki",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Musim yang Tak Sempat Kita Miliki.jpg",
    link: "https://s.shopee.co.id/16OSmI3fS"
  },
  {
    id: "Buku Novel",
    name: "Bandung Menjelang Pagi",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Bandung Menjelang Pagi.jpg",
    link: "https://s.shopee.co.id/901DBIxOnc"
  },
  {
    id: "Buku Novel",
    name: "Berandal Bandung",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Berandal Bandung.jpg",
    link: "https://s.shopee.co.id/9AKdNbQ6tv"
  },
  {
    id: "Buku Novel",
    name: "Lima Tanya yang Tertinggal Saat Ibu Pergi",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Lima Tanya yang Tertinggal Saat Ibu Pergi.jpg",
    link: "https://s.shopee.co.id/901DBHrcFy"
  },
  {
    id: "Buku Novel",
    name: "untuk Satu Nama yang Sulit Kuhapus",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/untuk Satu Nama yang Sulit Kuhapus.jpg",
    link: "https://s.shopee.co.id/qfVSGMpoC"
  },










  
  {
    id: "Buku Novel",
    name: "Mari Pergi Lebih Jauh",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Mari Pergi Lebih Jauh.jpg",
    link: "https://s.shopee.co.id/6Ah1oOPFZV"
  },
  {
    id: "Buku Novel",
    name: "Namaku Alam",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Namaku Alam.jpg",
    link: "https://s.shopee.co.id/AADAZljZYG"
  },
  {
    id: "Buku Novel",
    name: "Ronggeng Dukuh Paruk",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Ronggeng Dukuh Paruk.jpg",
    link: "https://s.shopee.co.id/5VRL1D6ZTu"
  },
  {
    id: "Buku Novel",
    name: "Kudasai",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kudasai.jpg",
    link: "https://s.shopee.co.id/8fOMn5AUTg"
  },
  {
    id: "Buku Novel",
    name: "Aku Kalah Aku Merindukanmu",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Aku Kalah Aku Merindukanmu.jpg",
    link: "https://s.shopee.co.id/2qQZqOaq6V"
  },
  {
    id: "Buku Novel",
    name: "Delapan at Edinburgh",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Delapan at Edinburgh.jpg",
    link: "https://s.shopee.co.id/9AKeRe1lXm"
  },
  {
    id: "Buku Novel",
    name: "Ada Zombie di Sekolah",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Ada Zombie di Sekolah.jpg",
    link: "https://s.shopee.co.id/W2g7jfA2q"
  },
  {
    id: "Buku Novel",
    name: "Kami Bukan Sarjana Kertas",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kami Bukan Sarjana Kertas.jpg",
    link: "https://s.shopee.co.id/3B3RIeAKF6"
  },
  {
    id: "Buku Novel",
    name: "Kios Pasar Sore",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Kios Pasar Sore.jpg",
    link: "https://s.shopee.co.id/2qQatyox3A"
  },
  {
    id: "Buku Polymer",
    name: "Biokomposit Masa Depan",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Biokomposit Masa Depan.jpg",
    link: "https://s.shopee.co.id/1Lbs9jI23Z"
  },
  {
    id: "Buku Polymer",
    name: "Film Biokomposit",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Film Biokomposit.jpg",
    link: "https://s.shopee.co.id/9Ke9gPBHEY"
  },
  {
    id: "Buku Polymer",
    name: "Biokomposit Berbasis Serat Sembukan (Paederia Foetida L.) – Pati Colocasia Esculenta",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Biokomposit Berbasis Serat Sembukan (Paederia Foetida L.) – Pati Colocasia Esculenta.jpg",
    link: "https://s.shopee.co.id/9Ke9gNWQwY"
  },
  {
    id: "Buku Polymer",
    name: "Produksi Kertas & Papan Komposit Tanpa Kayu Hutan",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Produksi Kertas & Papan Komposit Tanpa Kayu Hutan.jpg",
    link: "https://s.shopee.co.id/4fsK7lkslg"
  },
  {
    id: "Buku Polymer",
    name: "Teknologi Papan Komposit Diperkuat Serat Kulit Jagung",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Teknologi Papan Komposit Diperkuat Serat Kulit Jagung.jpg",
    link: "https://s.shopee.co.id/20rYwrHR8Z"
  },
  {
    id: "Buku Novel",
    name: "Amba",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/amba-Laksmi Pamuntjak.png",
    link: "https://s.shopee.co.id/3fzrfPuVxB"
  },
  {
    id: "Buku",
    name: "Atomic Habits",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Atomic Habits karya James Clear.png",
    link: "https://s.shopee.co.id/AKWlbpbPIO"
  },
  {
    id: "Buku Novel",
    name: "Ayah Dan Sirkus Pohon",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Ayah Dan Sirkus Pohon - Andrea Hirata.png",
    link: "https://s.shopee.co.id/30kAsQnpYa"
  },
  {
    id: "Buku Novel",
    name: "Bekisar Merah",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Bekisar Merah-Ahmad Tohari.png",
    link: "https://s.shopee.co.id/3qJHs341C7"
  },
  {
    id: "Buku Polymer",
    name: "Cellulose Fibers Bio- and Nano-Polymer Composites",
    desc: "Out of Stock",
    subDesc: "Indonesia",
    image: "/img/Partner2/Cellulose Fibers Bio- and Nano-Polymer Composites.png",
    link: "www.polimeritas.com"
  },
  {
    id: "Buku Polymer",
    name: "Complete Part Design Handbook Injection Molding Of Thermoplas Softcover",
    desc: "Out of Stock",
    subDesc: "Indonesia",
    image: "/img/Partner2/Complete Part Design Handbook Injection Molding Of Thermoplas Softcover.png",
    link: "www.polimeritas.com"
  },
  {
    id: "Buku",
    name: "Teknik Tata Cara Kerja",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Teknik Tata Cara Kerja.jpg",
    link: "https://s.shopee.co.id/70GMjkzHj3"
  },
  {
    id: "Buku Polymer",
    name: "Polymer Processing Principles and Design-Wiley (2014) Donald G. Baird, Dimitris I. Collias",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Polymer Processing Principles and Design-Wiley (2014) Donald G. Baird, Dimitris I. Collias.png",
    link: "https://s.shopee.co.id/9AKrJkz5YS"
  },
  {
    id: "Buku Polymer",
    name: "Self-Reinforced Polymer Composites The Science, Engineering and Technology",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Self-Reinforced Polymer Composites The Science, Engineering and Technology.png",
    link: "https://s.shopee.co.id/6VK68s9WWg"
  },
  {
    id: "Buku Polymer",
    name: "Machining and Machinability of Fiber Reinforced Polymer Composites",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Machining and Machinability of Fiber Reinforced Polymer Composites.png",
    link: "https://s.shopee.co.id/8fOairwP2W"
  },
  {
    id: "Buku Polymer",
    name: "Polymer Materials in Additive Manufacturing Modelling and Simulation",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Polymer Materials in Additive Manufacturing Modelling and Simulation.png",
    link: "https://s.shopee.co.id/9AKrJnqes1"
  },
  {
    id: "Buku Polymer",
    name: "Reinforced Polymer Composites Processing, Characterization and Post Life Cycle Assessment",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Reinforced Polymer Composites Processing, Characterization and Post Life Cycle Assessment.png",
    link: "https://s.shopee.co.id/9paY72jWUL"
  },
  {
    id: "Buku Polymer",
    name: "Hydrothermal Behavior of Fiber- and Nanomaterial-Reinforced Polymer Composites",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Hydrothermal Behavior of Fiber- and Nanomaterial-Reinforced Polymer Composites.png",
    link: "https://s.shopee.co.id/7AZmw9nI1p"
  },
  {
    id: "Buku Polymer",
    name: "Fiber Reinforced Polymer Composites Mechanical Properties and Applications",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Fiber Reinforced Polymer Composites Mechanical Properties and Applications.png",
    link: "https://s.shopee.co.id/7KtD8Tdreb"
  },
    {
    id: "Buku Polimer",
    name: "Concrete-Filled Double Skin Steel Tubular Column with Hybrid Fibre Reinforced Polymer Post Fire Repair",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Concrete-Filled Double Skin Steel Tubular Column with Hybrid Fibre Reinforced Polymer Post Fire Repair.jpg",
    link: "https://s.shopee.co.id/"
  },
    {
    id: "Novel",
    name: "Di Bawah Lentera Merah Riwayat Sarekat Islam Semarang 1917-1920 - Soe Hok Gie",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Di Bawah Lentera Merah Riwayat Sarekat Islam Semarang 1917-1920 - Soe Hok Gie.jpg",
    link: "https://s.shopee.co.id/6fgKpbThUK"
  },
    {
    id: "Novel",
    name: "Filosofi Teras (Henry Manapiring)",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Filosofi Teras (Henry Manapiring).jpg",
    link: "https://s.shopee.co.id/904FbvFg8m"
  },
    {
    id: "Novel",
    name: "Gadis Kretek-Ratih Kumala",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Gadis Kretek-Ratih Kumala.jpg",
    link: "https://s.shopee.co.id/1BLOHXn0wy"
  },
  {
    id: "Novel",
    name: "Seperti Dendam, Rindu Harus Dibayar Tuntas (Eka Kurniawan)",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Seperti Dendam, Rindu Harus Dibayar Tuntas (Eka Kurniawan).jpg",
    link: "https://s.shopee.co.id/"
  },
  {
    id: "Novel",
    name: "Supernova 5 Gelombang - Dee Lestari",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Supernova 5 Gelombang - Dee Lestari.jpg",
    link: "https://s.shopee.co.id/"
  },
  {
    id: "Novel",
    name: "Tere Liye - Daun Yang Jatuh Tak Pernah Membenci Angin",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/Tere Liye - Daun Yang Jatuh Tak Pernah Membenci Angin.jpg",
    link: "https://s.shopee.co.id/"
  },
  {
    id: "Novel",
    name: "You Do You (Fellexandro Ruby)",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/You Do You (Fellexandro Ruby).jpg",
    link: "https://s.shopee.co.id/"
  },
  {
    id: "E-Book",
    name: "Produk Digital",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/EBOOK.jpg",
    link: "https://lynk.id/polimeritas.com/36y624z7qrl0"
  },
  {
    id: "E-Book",
    name: "Digital Product Mastery1",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/EBOOK.jpg",
    link: "https://lynk.id/polimeritas.com/qplpz2x8oep3"
  },
  {
    id: "E-Book",
    name: "Digital Product Mastery2",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/EBOOK.jpg",
    link: "http://lynk.id/polimeritas.com/y96g90V"
  },
  {
    id: "E-Book",
    name: "Digital Branding, Digital Operation dan Digital Marketing",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/EBOOK.jpg",
    link: "http://lynk.id/polimeritas.com/6j46kxzk7wln"
  },
  {
    id: "E-Book",
    name: "MEMULAI DIGITAL PRODUK - POTENSI DIGITAL PRODUK",
    desc: "Pesan Disini",
    subDesc: "Indonesia",
    image: "/img/Partner2/EBOOK.jpg",
    link: "http://lynk.id/polimeritas.com/4LAjXyo"
  },
];
