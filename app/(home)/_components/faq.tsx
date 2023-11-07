import { dataFAQ } from "../data";
import { FaqAccordion } from "./faq-accordion";

const FaqSection = () => {
  return (
    <section className="bg-slate-50 px-4 py-24">
      <div className="container flex flex-col items-center gap-8">
        <h2 className="text-center font-display text-3xl font-bold">FAQ</h2>

        {/* Accordion */}
        <ul className="grid gap-4 md:w-3/5">
          <FaqAccordion />
        </ul>
      </div>
    </section>
  );
};

export default FaqSection;
