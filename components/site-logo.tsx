"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

// Main
export const SiteLogo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/" aria-label="Home">
      <Image
        priority
        aria-hidden
        src={theme === "light" ? "/logo-dark.svg" : "/logo-dark.svg"}
        alt="SmartSeller"
        width={40}
        height={40}
        className="h-7 w-auto md:h-9"
      />
    </Link>
  );
};

// Footer
export const SiteLogoFooter = () => {
  return (
    <Link href="/" aria-label="Home">
      <Image
        src="/logo-dark.svg"
        aria-hidden
        alt="SmartSeller"
        width={40}
        height={40}
        className="h-7 w-auto"
      />
    </Link>
  );
};
