import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import History from "@/components/home/History";
import OurProjects from "@/components/home/OurProjects";
import Achievments from "@/components/home/Achievments";
import HomeEdu from "@/components/home/HomeEdu";
import HomePart from "@/components/home/HomePart";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/common/FloatingWidgets";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Polimeritas",
    "url": "https://www.polimeritas.com/",
    "logo": "https://polimeritas.github.io/img/logo.png",
    "description": "Komunitas yang bergerak di bidang polymer sains dan teknologi dari hulu hingga produk jadi.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+6285214991705",
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": "Indonesian"
    },
    "sameAs": [
      "https://www.facebook.com/polimeritas.official/",
      "https://www.instagram.com/polimeritas.official/",
      "https://www.linkedin.com/in/polimeritas2018/",
      "https://www.youtube.com/channel/UCHKnYU2ZlhezXRPI7enPRCw"
    ]
  };

  return (
    <main className="min-h-screen relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <Hero />
      <History />
      <Achievments />
      <HomeEdu />
      <HomePart />
      <OurProjects />
      <Testimonials />
      <Footer />
      <FloatingWidgets />
    </main>
  );
}