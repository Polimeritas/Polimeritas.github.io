"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const EducationArticles = () => {
    const articles = [
        {
            id: 1,
            title: "Microfibrillated cellulose from sweet sorghum (Shorghum Bicolor (L.) Moench) fiber by twin screw extruder and its charateristics on polylactic acid biocomposites",
            desc: "Penelitian ini kayak nemuin resep rahasia buat bikin PLA jadi superhero-nya dunia biokomposit! Jadi gini, ambil serat sorgum manis, terus olah pakai mesin twin-screw (bayangin aja kayak robot dapur futuristik), dan boom! Muncul MFC alias microfibrillated cellulose. Nah, MFC ini kayak bubuk ajaib yang bikin PLA dari biasa jadi luar biasa: lebih kuat, kaku, dan tahan panas kayak armor Iron Man, tapi tetap ramah lingkungan. Hasil akhirnya? Kompositnya nyatu sempurna, kayak smoothie serat sorgum yang nyelinap mulus ke PLA. Siapa sangka, serat sorgum bisa jadi game-changer buat bikin material yang nggak cuma tangguh, tapi juga eco-friendly!",
            image: "/img/Partner2/sorgum education.jpg",
            link: "https://iopscience.iop.org/article/10.1088/1757-899X/935/1/012059",
        },
        {
            id: 2,
            title: "Kinrose Craft dengan produk ecoprintnya",
            desc: "Kinrose Craft adalah sebuah usaha mikro, kecil, dan menengah (UMKM) yang didirikan oleh Kinanti Roospitasari pada tahun 2019. Usaha ini berfokus pada produksi berbagai produk ecoprint, termasuk kain sutra, sepatu kanvas kombinasi kulit, syal dari tenun ATBM, topi, tas ransel kulit domba, dan tas untuk telepon genggam. Ecoprint adalah teknik mencetak motif daun pada kain secara manual dengan cara ditempel dan diolah sedemikian rupa. Kinrose Craft memanfaatkan kekayaan flora Indonesia untuk menciptakan motif-motif unik pada produk-produk mereka, yang meliputi kain, kulit, kertas, dan keramik",
            image: "/img/Partner2/kinrose.jpg",
            link: "https://www.instagram.com/kinrosecraft/",
        },
        {
            id: 3,
            title: "Ulat Pemakan Plastik: Solusi Alami untuk Sampah",
            desc: "Enzim dari ulat lilin (Galleria mellonella) dan superworm (Zophobas morio) terbukti mampu mengurai plastik polietilena lebih cepat. Inovasi ini membuka peluang baru untuk mengatasi krisis sampah plastik secara alami dan berkelanjutan. Penelitian bioteknologi terus dikembangkan agar enzim ini dapat digunakan dalam biodegradasi plastik skala luas. Dari alam, kembali ke alam. Mari dukung solusi hijau untuk masa depan yang lebih bersih.",
            image: "/img/Partner2/Coming Soon.jpg",
            link: "https://www.instagram.com/polimeritas.official/",
        },
        {
            id: 4,
            title: "Bioteknologi: Ilmu Masa Depan",
            desc: "Bioteknologi adalah bidang ilmu yang menggabungkan biologi, kimia, dan teknologi untuk memanfaatkan makhluk hidup, enzim, atau proses biologis dalam menciptakan solusi inovatif di berbagai sektor, seperti kesehatan dengan pengembangan vaksin dan terapi gen, pertanian dengan tanaman rekayasa genetika, industri dengan produksi biofuel, enzim, dan polimer biodegradable, serta lingkungan dengan teknologi biodegradasi dan pengolahan limbah, sehingga berkontribusi pada keberlanjutan dan kemajuan teknologi.",
            image: "/img/Partner2/Coming Soon.jpg",
            link: "https://www.instagram.com/polimeritas.official/",
        },
        {
            id: 5,
            title: "Swedia: Negara kekurangan sampah",
            desc: "Swedia dikenal sebagai salah satu negara dengan sistem pengelolaan limbah terbaik di dunia. Lebih dari 99% sampah domestik mereka didaur ulang atau digunakan kembali, sehingga negara ini justru mengalami kekurangan sampah. Salah satu faktor utama adalah program Waste-to-Energy (WTE), di mana sampah yang tidak dapat didaur ulang dibakar untuk menghasilkan listrik dan pemanas bagi ribuan rumah. Karena sistem ini sangat efisien, Swedia mengimpor sekitar 1,3 juta ton sampah setiap tahun dari negara lain seperti Norwegia, Inggris, dan Jerman untuk menjaga operasional pembangkit listriknya. Selain itu, Swedia menerapkan kebijakan ketat dalam pemilahan sampah, inovasi dalam teknologi daur ulang, serta meningkatkan kesadaran masyarakat terhadap lingkungan. Model ini menciptakan ekonomi sirkular, mengurangi ketergantungan pada bahan bakar fosil, dan menjadikan Swedia contoh bagi negara lain dalam mengelola limbah secara berkelanjutan.",
            image: "/img/Partner2/Coming Soon.jpg",
            link: "https://www.instagram.com/polimeritas.official/",
        },
        {
            id: 6,
            title: "Sedotan Purun Bangka Belitung Mendunia",
            desc: "Menteri Pariwisata dan Ekonomi Kreatif, Sandiaga Salahudin Uno pada sidang PBB membawa satu kotak berisi sedotan ramah lingkungan dan dengan bangga menyampaikan bahwa Indonesia bisa menjadi pionir. Mengganti sedotan plastik dengan sedotan yang ramah lingkungan. Yuk simak ceritanya disini!",
            image: "/img/education-photo/Sedotan Purun Bangka Belitung Mendunia.png",
            link: "https://www.instagram.com/p/CeRAgJZNt31/",
        },
        {
            id: 7,
            title: "PENGARUH PEMBERIAN DAUN KETAPANG (Terminalia catappa) TERHADAP PERTUMBUHAN DAN TINGKAT KELANGSUNGAN HIDUP BENIH IKAN NILA (Oreochromis niloticus)",
            desc: "Bangka belitung merupakan daerah pesisir, Habitat tumbuh paling optimal pohon ketapang adalah lingkungan pesisir pantai. Oleh sebab itu tanaman ini juga biasa disebut sebagai tumbuhan pinggir pantai atau ketapang laut. Adapun manfaat Ketapang dapat kita simak info berikut ini!",
            image: "/img/education-photo/daun ketapang bangka belitung.png",
            link: "https://www.instagram.com/p/C7k1H6Dhbc6/?igsh=MTAyaXRhOXF5ZW44dw==",
        },
        {
            id: 8,
            title: "Nanokristal selulosa dari Tandan Kosong Sawit (TKS)",
            desc: "Indonesia merupakan penghasil utama minyak sawit. Dibalik keuntungannya kelapa sawit ternyata dapat menghasilkan limbah. Seperti limbah padat industri kelapa sawit yaitu tandan kosong sawit (TKS). Komponen terbesar dalam limbah padat TKS adalah selulosa. Adapaun aplikasi nanokristalin selulosa antara lain: Antimikroba, Alat Medis, Green Catalysts dan Digunakan dalam industri biokomposit sebagai penguat",
            image: "/img/education-photo/TKS limbah.png",
            link: "https://www.instagram.com/p/B-WG2rjFfeE/?igsh=MXAxbm95djZkNm13Ng==",
        },
        {
            id: 9,
            title: "Sejarah Plastik",
            desc: "Kalian yang setiap hari memakai plastik, kira kira sudah tahu belum ya siapa penemu plastik? Penasaran kan siapa penemu benda tersebut?",
            image: "/img/education-photo/Sejarah Plastik.png",
            link: "https://www.instagram.com/p/CaLukcCL7TH/",
        },
        {
            id: 10,
            title: "Sutra Laba Laba sebagai Alternatif Produk sekali pakai",
            desc: "Jaring laba-laba memiliki sifat bioaktif, yang ramah terhadap lingkungan sehingga sangat baik untuk alternatif bahan baku dalam pembuatan plastik. Untuk lebih lengkapnya, yuk simak postingan berikut ini!",
            image: "/img/education-photo/sutra laba-laba.png",
            link: "https://www.instagram.com/p/CatM-jcNUYi/",
        },
        {
            id: 11,
            title: "Bioplastic dari Biji Durian dan Pati Sagu",
            desc: "Suka makan durian? tapi masih buang biji nya sembarangan? Wah kamu harus tau nih, ternyata biji durian bisa dibuat bioplastik yang ramah lingkungan lho. Yuk, Ubah Limbah sekitar Jadi sesuatu yang bermanfaat.",
            image: "/img/education-photo/Bioplastik.png",
            link: "https://www.instagram.com/p/CZlNh98NOEe/",
        },
        {
            id: 12,
            title: "Potensi Biopolimer Buah Lontar",
            desc: "Biopolimer merupakan salah satu material terbaru yang bersifat terbarukan dan ramah lingkungan. Berbagai aplikasi biopolimer seperti bioplastik, adsorben, biomedis, kosmetik, perangkat elektronik dan lain-lain. Bahan baku yang dapat digunakan sebagai biopolimer adalah selulosa dan karbon.",
            image: "/img/education-photo/Buah Lontar.png",
            link: "https://www.instagram.com/p/CZDanQRN-fw/",
        },
        {
            id: 13,
            title: "Polimer Fotokatalis",
            desc: "Tahukah kamu bahwa limbah cair hasil kegiatan industri apabila larut dalam air akan menjadi polutan berbahaya bagi kesehatan makhluk hidup. Lalu bagaimana solusinya? Nah kita dapat menggunakan proses Polimer Fotokatalis nih guys. Yuk disimak dulu konten yang satu ini!",
            image: "/img/education-photo/Fotokatalis.png",
            link: "https://www.instagram.com/p/CZnrfApNYLf/",
        },
        {
            id: 14,
            title: "Polycarbonate",
            desc: "Yuk simak postingan berikut ini, ada pembahasan tentang polycarbonate nih! Polimer yang bisa menggantikan kaca dan ternyata banyak ditemukan dalam kehidupan sehari-hari kita!",
            image: "/img/education-photo/Polycarbonate.png",
            link: "https://www.instagram.com/p/CZA1wcQNOxm/",
        },
        {
            id: 15,
            title: "6 Tahapan Proses Recycle",
            desc: "1. Koleksi 2. Sortir 3. Pencucian 4. Resizing 5. Pemilihan plastik 6. Penggabungan",
            image: "/img/education-photo/cont-mutiara.png",
            link: "https://www.instagram.com/p/CoRIy1drD5Q/?hl=id",
        },
        {
            id: 16,
            title: "Fakta Sampah Plastik Dunia",
            desc: "Kalian tahu gaksih kalau setiap tahunnya, lebih dari 380 juta ton plastik di produksi di seluruh dunia. Itu hampir sama dengan 2.700.000 paus biru. Lebih dari 100 kali berat seluruh populasi paus biru. Dan faktanya hanya 16% sampah plastik yang di daur ulang menjadi plastik baru, sisanya sebanyak 40% dikirim ke TPA, 25% dibakar, dan 19% dibuang.",
            image: "/img/education-photo/cont-kania.png",
            link: "https://www.instagram.com/p/CoRIy1drD5Q/?hl=id",
        },
        {
            id: 17,
            title: "Lato-lato: produk mainan berbasis polimer",
            desc: "Kepopuleran permainan ini juga sampai di Indonesia pada tahun 90-an. Permainan ini tidak lagi menggunakan bahan akrilik yang berisiko pecah dan berbahaya, sebagaimana disebutkan dalam Quartz. Meskipun bentuknya masih sama, permainan ini dibuat lebih aman karena menggunakan bahan plastik polimer.",
            image: "/img/education-photo/cont-jevi.png",
            link: "https://www.instagram.com/p/CnYTSNXrHfD/?hl=id",
        },
        {
            id: 18,
            title: "Polimer pembawa nanopartikel",
            desc: "Kenalin nihh polimer nanopartikel yang punya manfaat, yuk disimak. Polimer secara kimia terdiri dari unit struktural monomer, misalnya polimer nanopartikel, dendrimers liposom, solid lipid nanoparticle, dan contoh logam, misalnya emas, silika.",
            image: "/img/education-photo/cont-aflah.png",
            link: "https://www.instagram.com/p/CeXhTBfrBuP/?hl=id",
        },
        {
            id: 19,
            title: "Plastik ramah lingkungan dari rumput laut",
            desc: "Salah satu perusahaan rintisan (start-up) London, 'Notpla' di Inggris, memiliki inovasi pengemasan berbahan dasar rumput laut yang dibentuk menyerupai plastik bening. Kira-kira di Indonesia ada gak ya? Yuk simak informasi berikut ini!",
            image: "/img/education-photo/cont-azura.png",
            link: "https://www.instagram.com/p/Chd5XKitDZe/?hl=id",
        },
        {
            id: 20,
            title: "7 Jenis sampah plastik yang dapat di daur ulang",
            desc: "PVC, HDPE, PS, PP, LDPE, PET (Polyethylene Terephthalate), dan lain-lain. Masing-masing sampah plastik tersebut juga biasanya dialokasikan di berbagai tempat sampah khusus plastik dengan warna tong yang berbeda (seperti yang sudah di-highlight).",
            image: "/img/education-photo/cont-laura.png",
            link: "https://www.instagram.com/p/Ci4BNJ2NSRU/?hl=id",
        },
        {
            id: 21,
            title: "Apa Itu Eucheuma Cottoni? Mari Mengenal Rumput Laut sebagai Karaginan",
            desc: "Eucheuma cottonii merupakan salah satu jenis rumput laut penghasil karaginan. Karaginan sangat penting peranannya sebagai stabilisator (pengatur keseimbangan), thickener (bahan pengental), pembentuk gel, pengemulsi, koloid pelindung, penggumpal, dan pencegah kristalisasi. Yuk simak informasinya disini ya!",
            image: "/img/education-photo/cont-tahta&eka.png",
            link: "https://www.instagram.com/p/Chv68eyqeFU/?hl=id",
        },
        {
            id: 22,
            title: "Karagenan",
            desc: "Polimer gak ditemuin di plastik aja, tapi ada dalam bentuk produk-produk yang kita pakai sehari-hari. Salah satunya adalah karagenan yang merupakan polimer alam. Katanya terdapat di sehari-hari kok sebutan karagenan terdengar asing ya? Mari kita tambah wawasan kita dengan meluangkan waktu untuk baca konten ini ya!",
            image: "/img/education-photo/cont-velalilulelo.png",
            link: "https://www.instagram.com/p/CdNmSxAr4Yw/?hl=id",
        },
        {
            id: 23,
            title: "Yuk kenalan sama Nzambi Matee",
            desc: "Inovasi dari Nzambi ini mendapat banyak apresiasi serta diakui karena kualitas dan harganya yang sangat terjangkau. Selain itu, bata buatan Nzambi ini juga jauh lebih kuat apabila dibandingkan dengan beton.",
            image: "/img/education-photo/cont-medi.png",
            link: "https://www.instagram.com/p/Cnqpc-ar_Ge/?hl=id",
        },
        {
            id: 24,
            title: "Di balik tantangan ada berlian",
            desc: "Tantangan daur ulang plastik dibagi menjadi 4 bentuk: closed loop, downgrading, chemical or feedstock recycling, dan energy recovery. Ingin tau lebih jauh? Yuk simak konten yang satu ini!",
            image: "/img/education-photo/cont-alif.png",
            link: "https://www.instagram.com/p/CntAgvBrvKQ/?hl=id",
        }
    ];

    return (
        <section className="w-full">
            {articles.map((item) => (
                <div key={item.id} className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-12 border-b border-gray-100 last:border-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                        <div className="lg:col-span-7 flex flex-col h-full justify-between">
                            <div>
                                <h5 className="font-bold text-dark text-xl lg:text-2xl leading-snug mb-4">
                                    {item.title}
                                </h5>
                                <p className="text-gray-600 text-justify leading-relaxed mb-8">
                                    {item.desc}
                                </p>
                            </div>

                            <div>
                                <Link
                                    href={item.link}
                                    target="_blank"
                                    className="block w-full text-center bg-primary text-dark font-bold py-3 px-6 rounded-[25px] hover:bg-secondary hover:text-white transition-colors uppercase tracking-wider"
                                >
                                    Baca Selengkapnya
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-5 h-[300px] lg:h-[400px] rounded overflow-hidden">
                            <div className="relative w-full h-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </section>
    );
};

export default EducationArticles;