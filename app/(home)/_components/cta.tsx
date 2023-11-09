import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { dataCTA } from "../data";

export const CTA_Alpha = () => {
  return (
    <section className="px-4 py-24">
      <div className="container rounded-2xl bg-[#FACF6C] md:p-12 md:pl-0">
        {/* Row */}
        <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:justify-between">
          {/* Col */}
          <div className="aspect-1 p-4 pl-0 md:w-4/12">
            <div
              aria-hidden
              className="h-full bg-[url(/macbook-pro-mockup-smartseller.webp)] bg-cover bg-right bg-no-repeat"
            ></div>
          </div>

          {/* Col */}
          <div className="p-4 md:w-7/12">
            <div className="flex flex-col items-start gap-8">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Aplikasi yang tepat untuk bisnis onlinemu, miliki sekarang!
              </h2>

              <ul className="grid gap-4 md:grid-cols-3">
                {dataCTA?.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 md:flex-col md:items-start"
                  >
                    <Image
                      src={`/icons/${item.icon}`}
                      aria-hidden
                      alt={item.text}
                      width={48}
                      height={48}
                      className="h-10 w-auto"
                    />

                    <p className="font-semibold text-foreground">{item.text}</p>
                  </li>
                ))}
              </ul>

              <Link
                href="/"
                aria-label="Daftar Gratis"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "default",
                    className:
                      "mt-4 bg-accent-foreground hover:bg-accent-foreground/80",
                  }),
                )}
              >
                Daftar Gratis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
