import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { SheetClose } from "../ui/sheet";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const NavMain = [
  {
    url: "seller-story",
    label: "Seller Story",
    icon: null,
    desc: null,
  },
  {
    url: "harga",
    label: "Harga",
    icon: null,
    desc: null,
  },
  {
    url: "inspirasi",
    label: "Inspirasi",
    icon: null,
    desc: null,
  },
];

export const NavProduct = [
  {
    url: "order-management",
    label: "Order Management",
    icon: "order.svg",
    desc: "SmartSeller dirancang untuk kemudahan kelola seluruh aktivitas penjualan di toko onlinemu.",
  },
  {
    url: "inventory-management",
    label: "Inventory Management",
    icon: "inventory.svg",
    desc: "Kontrol penuh stok produk di berbagai channel jualan onlinemu dengan mudah.",
  },
  {
    url: "shipping-management",
    label: "Shipping Management",
    icon: "shipping.svg",
    desc: "Terhubung ke puluhan kurir, bisa COD dan jemput dari rumah.",
  },
  {
    url: "marketplace-integration",
    label: "Marketplace Integration",
    icon: "marketplace.svg",
    desc: "Jualan di Marketplace lebih mudah dengan inventori terpusat.",
  },
  {
    url: "smartseller-storefront",
    label: "SmartSeller Storefront",
    icon: "storefront.svg",
    desc: "Buat toko online dengan produkmu di SmartSeller, tanpa memikirkan hal teknis, 5 menit jadi.",
  },
  {
    url: "smartchat",
    label: "SmartChat",
    icon: "smartchat.svg",
    desc: "Respon Chat Pelanggan Lebih Mudah dengan Sistem Komunikasi Terpusat.",
  },
];

export const NavMobile = () => {
  return (
    <div className="h-full p-4">
      <div className="flex flex-col">
        <span className="text-sm">Solusi Bisnis Online</span>
        <ul className="mt-2 grid grid-cols-2 gap-2">
          {NavProduct?.map((item) => (
            <li key={item.url}>
              <SheetClose asChild>
                <Link
                  href={item.url}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "default",
                      className: "flex h-max flex-col items-center gap-2 p-2",
                    }),
                  )}
                >
                  <figure className="h-6 w-auto">
                    <Image
                      src={`/icons/${item.icon}`}
                      alt={item.label}
                      width={100}
                      height={100}
                      className="h-full w-auto"
                    />
                  </figure>
                  <p className="text-center text-xs font-normal">
                    {item.label}
                  </p>
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-4 grid">
        {NavMain?.map((item) => (
          <li key={item.url}>
            <SheetClose asChild>
              <Button
                asChild
                variant="link"
                size="default"
                className="-translate-x-4 transition duration-500 hover:translate-x-0"
              >
                <Link href={item.url} aria-label={item.label}>
                  {item.label}
                </Link>
              </Button>
            </SheetClose>
          </li>
        ))}
      </ul>
    </div>
  );
};
