import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Desserts from "@/components/Desserts";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Desserts />
      <Gallery />
      <Menu />
      <Contact />
      <Footer />
    </main>
  );
}
