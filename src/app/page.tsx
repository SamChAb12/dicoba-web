import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BusinessSection from "@/components/BusinessSection";
import Categories from "@/components/Categories";
import Brands from "@/components/Brands";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <BusinessSection />
        <Categories />
        <Brands />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}