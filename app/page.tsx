import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Beliefs from "@/components/Beliefs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowWeWork />
        <Beliefs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
