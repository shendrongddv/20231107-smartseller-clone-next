import Image from "next/image";
import { dataProductDetail } from "../data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ProductDetailSection = () => {
  return (
    <section className="px-4 py-24">
      <div className="container">
        <ul
          className="mx-auto grid gap-12 md:w-4/5
        "
        >
          {dataProductDetail?.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between even:md:flex-row-reverse"
            >
              <ProductDetailCrad
                title={item.title}
                subtitle={item.subtitle}
                desc={item.desc}
                url={item.url}
                media={item.media}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductDetailSection;

// Component
type ProductDetailCradProps = {
  title: string;
  subtitle: string;
  desc: string;
  url: string;
  media: string;
};

export const ProductDetailCrad = ({
  title,
  subtitle,
  desc,
  url,
  media,
}: ProductDetailCradProps) => {
  return (
    <>
      {/* Col */}
      <div className="md:w-5/12">
        <figure>
          <Image
            src={`/${media}`}
            alt={title}
            width={480}
            height={480}
            className="mx-auto h-full w-3/5 md:w-auto"
          />
        </figure>
      </div>

      {/* Col */}
      <div className="md:w-6/12">
        <div className="flex flex-col items-start gap-4">
          <span className="text-sm uppercase">{subtitle}</span>
          <h3 className="text-2xl font-bold text-foreground md:text-4xl">
            {title}
          </h3>
          <p className="md:text-lg">{desc}</p>

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
      </div>
    </>
  );
};
