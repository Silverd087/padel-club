export const runtime = "edge";

import { Suspense } from "react";
import Hero from "@/components/client/sections/Hero";
import CourtCarousel from "@/components/client/sections/CourtCarousel";
import Events from "@/components/client/sections/Events";
import About from "@/components/client/sections/About";
import Membership from "@/components/client/sections/Membership";
import Contact from "@/components/client/sections/Contact";
import BookingSection from "@/components/client/sections/BookingSection";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import Header from "@/components/client/layout/Header";
import Footer from "@/components/client/layout/Footer";

export default function Home() {
  return (
    <main className="flex-1 mx-auto w-full max-w-[1920px]">
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <Hero />
        <CourtCarousel />
        <Events />
        <About />
        <section id="subscription">
          <Membership />
        </section>
        <BookingSection />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}
