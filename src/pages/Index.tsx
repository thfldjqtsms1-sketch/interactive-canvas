import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MarqueeText from "@/components/MarqueeText";
import ProductsGallery from "@/components/ProductsGallery";
import BusinessAreas from "@/components/BusinessAreas";
import HistoryTimeline from "@/components/HistoryTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  useEffect(() => {
    // Set document title for SEO
    document.title = "한성정밀기계 | 정밀 가공 전문 기업";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Custom Cursor - Desktop only */}
      <CustomCursor />
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section with Parallax */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Marquee Text */}
        <MarqueeText />

        {/* Products Gallery with Pin Scroll */}
        <ProductsGallery />

        {/* Business Areas */}
        <BusinessAreas />

        {/* History Timeline */}
        <HistoryTimeline />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
