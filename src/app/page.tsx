import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PublishedSites from "@/components/PublishedSites";
import Templates from "@/components/Templates";
import Pricing from "@/components/Pricing";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <PublishedSites />
        <Templates />
        <Pricing />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
