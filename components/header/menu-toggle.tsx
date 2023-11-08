import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SiteLogo } from "../site-logo";
import Link from "next/link";
import { NavMobile } from "./nav-mobile";

export const MenuToggle = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-transparent text-foreground"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-full w-full flex-col gap-0 p-0"
      >
        <SheetHeader className="border-b p-4">
          {/* SiteLogo */}
          <SiteLogo />
        </SheetHeader>

        {/* Nav */}
        <NavMobile />

        <SheetFooter className="mt-auto grid grid-cols-2 gap-2 border-t p-4">
          <SheetClose asChild>
            <Button asChild variant="default" size="default" className="px-4">
              <Link href="/" aria-label="Daftar Gratis">
                Daftar Gratis
              </Link>
            </Button>
          </SheetClose>

          <SheetClose asChild>
            <Button asChild variant="outline" size="default" className="px-4">
              <Link href="/" aria-label="Login">
                Login
              </Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
