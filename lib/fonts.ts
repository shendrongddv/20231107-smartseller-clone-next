import {
  Plus_Jakarta_Sans as FontDisplay,
  Roboto as FontBody,
} from "next/font/google";

export const fontDisplay = FontDisplay({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
});

export const fontBody = FontBody({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "100", "900"],
  variable: "--font-body",
});
