import type { Metadata } from "next";
import CorporateHero from "@/components/CorporateHero";
import Principles from "@/components/Principles";
import ExternalSites from "@/components/ExternalSites";
import CorporateContact from "@/components/CorporateContact";

export const metadata: Metadata = {
  title: "Harmonic Insight | 業務を、誰でも回る形に",
  description: "業務を部品として定義し、組み立てて、誰でも回る形にする。属人性を仕組みで解消し、現場に負担をかけない設計を支援します。",
};

export default function Home() {
  return (
    <main>
      <CorporateHero />
      <Principles />
      <ExternalSites />
      <CorporateContact />
    </main>
  );
}
