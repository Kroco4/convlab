import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import JsonLd from "@/components/JsonLd";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Process from "@/components/sections/Process";
import Results from "@/components/sections/Results";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Process />
        <Results />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
