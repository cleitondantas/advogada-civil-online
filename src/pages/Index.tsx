import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { faqItems } from "@/content/faq";
import { SITE_URL, siteConfig } from "@/lib/site-config";

const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));

const SectionFallback = () => (
  <div className="py-20 flex justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-navy-primary border-t-transparent" />
  </div>
);

const Index = () => {
  return (
    <>
      <SEOHead
        title={siteConfig.defaultTitle}
        description={siteConfig.defaultDescription}
        path="/"
      />
      <StructuredData
        faqItems={faqItems}
        pageUrl={SITE_URL}
        pageTitle={siteConfig.defaultTitle}
      />

      <main className="min-h-screen">
        <Header />
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Services />
          <Testimonials />
          <FAQ />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default Index;
