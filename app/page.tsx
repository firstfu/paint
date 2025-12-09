import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Statistics from "@/components/sections/Statistics";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import Team from "@/components/sections/Team";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import JsonLd from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Services />
      <Statistics />
      <Portfolio />
      <Testimonials />
      <BlogPreview />
      <Team />
      <CTA />
      <FAQ />
      <ContactForm />
    </>
  );
}
