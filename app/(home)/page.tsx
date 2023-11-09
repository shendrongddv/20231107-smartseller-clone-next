import BenefitSection from "./_components/benefit";
import { CTA_Alpha } from "./_components/cta";
import FaqSection from "./_components/faq";
import HeroSection from "./_components/hero";
import IntegrationsSection from "./_components/integrations";
import LogoCloudsSection from "./_components/logo-clouds";
import ProductDetailSection from "./_components/product-detail";
import ReviewsSection from "./_components/reviews";
import SeoSection from "./_components/seo";
import WhatsNewSection from "./_components/whats-new";

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* WhatsNew */}
      <WhatsNewSection />

      {/* ProductDetail */}
      <ProductDetailSection />

      {/* Benefits */}
      <BenefitSection />

      {/* Integrations */}
      <IntegrationsSection />

      {/* Reviews */}
      <ReviewsSection />

      {/* LogoClouds */}
      <LogoCloudsSection />

      {/* FAQs */}
      <FaqSection />

      {/* CTA */}
      <CTA_Alpha />

      {/* SEO */}
      <SeoSection />
    </>
  );
};

export default HomePage;
