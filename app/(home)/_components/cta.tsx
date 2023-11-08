import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Satu dashboard dengan fitur lengkap",
    icon: "ICON",
  },
  {
    id: 2,
    title: "Cocok untuk jualan online dimanapun",
    icon: "ICON",
  },
  {
    id: 3,
    title: "Customer Support yang siap membantu",
    icon: "ICON",
  },
];

export const CtaAlpha = () => {
  return (
    <section className="bg-slate-50 px-4 pb-24">
      <div className="container flex flex-col gap-12 overflow-hidden rounded-2xl bg-[#FAD06E] pb-4 pt-8 md:flex-row md:items-stretch md:justify-between md:py-12">
        {/* Col */}
        <div className="md:w-5/12">
          <figure className="flex h-full w-full overflow-hidden">
            <Image
              src="/macbook-pro-mockup-smartseller.webp"
              alt="Image"
              width={1366}
              height={775}
              className="h-full w-auto -translate-x-12 md:-translate-x-1/4"
            />
          </figure>
        </div>

        {/* Col */}
        <div className="px-4 md:w-7/12 md:px-0">
          <div className="flex flex-col gap-4 md:w-11/12 md:items-start">
            <h2 className="text-2xl font-bold text-foreground md:items-start md:text-3xl">
              Aplikasi yang tepat untuk bisnis onlinemu, miliki sekarang!
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae molestias vitae provident, reiciendis eaque ducimus
              inventore maiores reprehenderit dolorem officia consectetur rem
              eum hic?
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
              possimus? Nemo, at?
            </p>

            <Button asChild variant="default" size="default" className="mt-4">
              <Link href="/" aria-label="Link">
                Daftar Gratis
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
