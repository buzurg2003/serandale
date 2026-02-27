import Features from '@/components/Features';
import Reviews from '@/components/Reviews';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section Placeholder */}
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <Footer />
    </main>
  );
}