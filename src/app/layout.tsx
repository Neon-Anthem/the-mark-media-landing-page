import ContactFormDialog from "@/components/dialog/contact-form";
import LenisProvider from "@/components/provider/lenis-provider";
import DefaultNav from "@/components/ui/default.nav";
import Footer from "@/components/ui/footer";
import { fontSpaceGrotesk, geistMono, openSauceTwoFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "The Mark Media - Elevate Your Brand with Strategic Digital Marketing",
  description:
    "The Mark Media is your strategic growth partner, specializing in digital marketing solutions that drive results. We help businesses of all sizes elevate their brand, engage their audience, and achieve their marketing goals through innovative strategies and data-driven insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={cn(
          "font-sans",
          `antialiased`,
          fontSpaceGrotesk.variable,
          openSauceTwoFont.variable,
          geistMono.variable,
        )}
      >
        <LenisProvider>
          <DefaultNav />
          <main className="**:data-[block=contain]:px-4 sm:**:data-[block=contain]:px-0 sm:**:data-[block=contain]:container sm:**:[data-block=contain]:mx-auto">
            {children}
          </main>
          <Footer />
          <ContactFormDialog />
        </LenisProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
