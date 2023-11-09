import Image from "next/image";
import { dataBenefits } from "../data";
import { LucideIcon } from "lucide-react";

const IntegrationsSection = () => {
  return (
    <section className="bg-slate-50 px-4 pt-24">
      <div className="container flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-bold text-foreground md:w-1/2">
          Apapun bisnis onlinemu bisa pakai SmartSeller
        </h2>

        {/* Row */}
        <div className="flex w-full flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-4/12">
            <figure className="mx-auto grid aspect-1 w-4/5 place-content-center md:w-full">
              <Image
                src="/assets-2.webp"
                alt="Image"
                width={480}
                height={480}
                className="h-auto w-full"
              />
            </figure>
          </div>

          {/* Col */}
          <div className="md:w-7/12">
            <ul className="grid gap-4 md:grid-cols-2">
              {dataBenefits?.map((item) => (
                <li key={item.id}>
                  <SingleCard
                    id={item.id}
                    title={item.title}
                    desc={item.desc}
                    mediaIcon={item.media.icon}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;

// Component
type SingleCardProps = {
  id: number;
  title: string;
  desc: string;
  mediaImage?: string;
  mediaIcon: LucideIcon;
};
const SingleCard = ({ id, title, desc, mediaIcon: Icon }: SingleCardProps) => {
  return (
    <div className="flex h-full flex-col justify-start gap-2 rounded-xl bg-slate-100 p-4 transition duration-500 hover:bg-background">
      <Icon className="h-6 w-6 text-accent-foreground" />
      <h3 className="font-bold text-foreground md:text-lg">{title}</h3>
      <p className="text-sm md:text-base">{desc}</p>
    </div>
  );
};
