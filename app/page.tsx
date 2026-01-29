import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import InfoCards from "@/components/home/InfoCards";
import History from "@/components/home/History";
import OurContent from "@/components/home/OurContent";
import JoinUs from "@/components/home/JoinUs";
import Portofolio from "@/components/home/Portofolio";
import OurProjects from "@/components/home/OurProjects";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/common/FloatingWidgets";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <InfoCards />
      <History />
      <OurContent />
      <JoinUs />
      <Portofolio />
      <OurProjects />
      <Testimonials />
      <Footer />
      <FloatingWidgets />
    </main>
  );
}