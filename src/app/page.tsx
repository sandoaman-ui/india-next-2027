import { StructuredData } from "@/components/StructuredData";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Nav } from "@/components/layout/Nav";
import { About } from "@/components/sections/About";
import { Conclave } from "@/components/sections/Conclave";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { WhyParticipate } from "@/components/sections/WhyParticipate";

export default function Page() {
  return (
    <>
      <StructuredData />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Journey />
        <Conclave />
        <WhyParticipate />
        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
