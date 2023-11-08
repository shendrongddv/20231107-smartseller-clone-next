"use client";

import { dataSEO } from "../data";

import { ChevronDown, ChevronUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const SeoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-slate-50 px-4">
      <div className="container">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-full space-y-8"
        >
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-foreground md:text-base">
              {dataSEO[0]?.title}
            </h3>
            {dataSEO[0]?.body?.map((paragraph) => (
              <p key={paragraph.id} className="text-xs md:text-sm">
                {paragraph.paragraph}
              </p>
            ))}
          </div>

          <CollapsibleContent className="space-y-8">
            {dataSEO?.map((item) => (
              <div key={item.id} className="flex flex-col gap-3">
                <h3 className="text-sm font-bold text-foreground md:text-base">
                  {item.title}
                </h3>
                {item.body?.map((paragraph) => (
                  <p key={paragraph.id} className="text-xs md:text-sm">
                    {paragraph.paragraph}
                  </p>
                ))}
              </div>
            ))}
          </CollapsibleContent>

          <CollapsibleTrigger asChild>
            <Button
              variant="link"
              size="sm"
              className="flex w-max items-center justify-between space-x-2 px-0"
            >
              <span className="text-sm font-semibold">
                {isOpen ? "Sembunyikan" : "Selengkapnya"}
              </span>
              {isOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </div>
    </section>
  );
};

export default SeoSection;
