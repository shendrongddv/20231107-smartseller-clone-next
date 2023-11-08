import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { SiteLogo } from "../site-logo";
import { Button } from "../ui/button";
import { MenuToggle } from "./menu-toggle";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-slate-50 px-4">
      <div className="container">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* SiteLogo */}
          <SiteLogo />

          <div className="hidden items-center justify-center gap-4 md:flex">
            {/* Nav */}
            <div className="flex items-center justify-center gap-2">
              <Button asChild variant="link" size="sm">
                <Link href="/" aria-label="Solusi Bisnis Online">
                  Solusi Bisnis Online
                </Link>
              </Button>

              <Button asChild variant="link" size="sm">
                <Link href="/" aria-label="Seller Story">
                  Seller Story
                </Link>
              </Button>

              <Button asChild variant="link" size="sm">
                <Link href="/" aria-label="Harga">
                  Harga
                </Link>
              </Button>

              <Button asChild variant="link" size="sm">
                <Link href="/" aria-label="Inspirasi">
                  Inspirasi
                </Link>
              </Button>
            </div>

            {/* ButtonGroups */}
            <div className="flex items-center justify-center gap-2">
              <Button asChild variant="default" size="sm" className="px-4">
                <Link href="/" aria-label="Daftar Gratis">
                  Daftar Gratis
                </Link>
              </Button>

              <Button asChild variant="secondary" size="sm" className="px-4">
                <Link href="/" aria-label="Login">
                  Login
                </Link>
              </Button>
            </div>
          </div>

          {/* MenuToggle */}
          <div className="flex md:hidden">
            <MenuToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
