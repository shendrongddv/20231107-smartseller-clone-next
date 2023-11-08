import Image from "next/image";
import { dataProductBenefit } from "../data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BenefitSection = () => {
  return (
    <section className="px-4 pb-24">
      <div className="container">
        <ul className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          {dataProductBenefit?.map((item) => (
            <li key={item.id}>
              <BenefitCard
                title={item.title}
                desc={item.desc}
                url={item.url}
                icon={item.icon}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BenefitSection;

// Component
type BenefitCardProps = {
  title: string;
  desc: string;
  url: string;
  icon: string;
};
export const BenefitCard = ({ title, desc, url, icon }: BenefitCardProps) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <figure className="mb-2 h-14 w-auto">
        <Image
          src={`/icons/${icon}`}
          alt={title}
          width={56}
          height={56}
          className="h-full w-auto"
        />
      </figure>

      <h2 className="text-2xl font-bold text-foreground">{title}</h2>

      <p>{desc}</p>

      <Button
        asChild
        variant="link"
        className="group rounded-none p-0 no-underline hover:no-underline"
      >
        <Link href={url} aria-label={title}>
          Lebih lengkap
          <ArrowRight className="ml-4 h-4 w-4 -translate-x-2 transition duration-300 group-hover:translate-x-0" />
        </Link>
      </Button>
    </div>
  );
};
