import { Nunito, Bricolage_Grotesque } from "next/font/google";

// https://nextjs.org/docs/app/building-your-application/optimizing/fonts

export const nunito = Nunito({
  weight: ["400", "700"],
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const bricolageGrotesque = Bricolage_Grotesque({
  weight: "700",
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});
