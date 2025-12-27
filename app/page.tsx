import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import TrackRecord from "@/components/TrackRecord";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <TrackRecord />
        <Services />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
