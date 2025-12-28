import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CorporateHero from "@/components/CorporateHero";
import Principles from "@/components/Principles";
import ExternalSites from "@/components/ExternalSites";
import ServiceHighlights from "@/components/ServiceHighlights";
import CorporateContact from "@/components/CorporateContact";

export const metadata: Metadata = {
  title: "Harmonic Insight | 思考と創造を、形にする",
  description: "Harmonic Insight は、業務・技術・人の関係を「構造」で捉え、再現可能な形に設計することを大切にしています。",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CorporateHero />
        <Principles />
        <ServiceHighlights />
        <ExternalSites />
        <CorporateContact />
      </main>
      <Footer />
    </>
  );
}
