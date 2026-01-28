import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import InfoCards from "@/components/home/InfoCards";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <InfoCards />
      
      <div className="h-[2000px] bg-gray-50 flex items-start justify-center pt-20">
        <h1 className="text-4xl font-bold text-dark">Polimeritas</h1>
      </div>
    </main>
  );
}