import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dataFAQ } from "../data";

export const FaqAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={dataFAQ[0].id}
      className="grid w-full gap-4"
    >
      {dataFAQ?.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="rounded-lg border-none bg-background px-4 [&[data-state=open]]:shadow-lg"
        >
          <AccordionTrigger className="peer flex items-start gap-2 text-start text-base font-semibold text-foreground hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-start">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
