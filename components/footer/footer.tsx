import { NavFooter, SocialLinks } from "@/config/site";
import { SiteLogoFooter } from "../site-logo";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-sm">
      {/* MainFooter */}
      <div className="px-4 py-24">
        <div className="container grid w-full gap-12 sm:grid-cols-2 md:grid-cols-5">
          {/* Col */}
          <div>
            <SiteLogoFooter />
            <p className="mt-4">
              SmartSeller adalah aplikasi pengelola orderan toko online dengan
              berbagai kemudahan
            </p>
          </div>

          {NavFooter?.map((item) => (
            // Col
            <div key={item.id}>
              <h4 className="font-display font-bold text-foreground">
                {item.title}
              </h4>

              <ul className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-1">
                {item.links?.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.url}
                      aria-label={item.url}
                      className="text-sm underline-offset-4 hover:text-foreground hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col */}
          <div>
            {/* # */}
            <h4 className="font-display font-bold text-foreground">
              Soaial Media
            </h4>

            <ul className="mt-4 flex gap-2">
              {SocialLinks?.map((item) => (
                <li key={item.id}>
                  <SocialLink
                    label={item.label}
                    url={item.url}
                    icon={item.icon}
                  />
                </li>
              ))}
            </ul>

            {/* # */}
            <h4 className="mt-12 font-display font-bold text-foreground">
              Layanan Pengaduan Konsumen
            </h4>

            <ul className="mt-4 grid gap-4">
              <li className="grid text-sm">
                <span className="font-semibold">PT Ayo Techno Idea</span>
                <Link
                  href="mailto:cs@smartseller.co.id"
                  aria-label="Link"
                  className="text-sm underline-offset-4 hover:text-foreground hover:underline"
                >
                  cs@smartseller.co.id
                </Link>
              </li>
              <li className="grid text-sm">
                <span className="font-semibold">
                  Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
                  Kementerian Perdagangan RI
                </span>
                <Link
                  href="tel:085311111010"
                  aria-label="Link"
                  className="text-sm underline-offset-4 hover:text-foreground hover:underline"
                >
                  0853-1111-1010
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FooterFooter */}
      <div className="border-t px-4 py-6">
        <div className="container text-center">
          <span>© 2016 - 2023, PT Ayo Techno Idea</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Component
type SocialLinkProps = {
  label: string;
  url: string;
  icon: LucideIcon;
};
export const SocialLink = ({ label, url, icon: Icon }: SocialLinkProps) => {
  return (
    <Link
      href={url}
      aria-label={label}
      rel="noopener noreferrer"
      target="_blank"
      className={cn(
        buttonVariants({
          variant: "secondary",
          size: "icon",
          className:
            "aspect-1 h-max bg-slate-200 hover:bg-foreground hover:text-background",
        }),
      )}
    >
      <Icon className="h-4 w-4" />
    </Link>
  );
};
