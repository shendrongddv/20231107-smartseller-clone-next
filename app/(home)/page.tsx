import BenefitSection from "./_components/benefit";
import { CtaAlpha } from "./_components/cta";
import FaqSection from "./_components/faq";
import IntegrationsSection from "./_components/integrations";
import LogoCloudsSection from "./_components/logo-clouds";
import ProductDetailSection from "./_components/product-detail";
import ReviewsSection from "./_components/reviews";
import SeoSection from "./_components/seo";

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="px-4 py-24">
        <div className="container">HomePage</div>
      </section>

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
      <CtaAlpha />

      {/* SEO */}
      <SeoSection />
    </>
  );
};

export default HomePage;
