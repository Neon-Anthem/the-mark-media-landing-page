import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

export const fontGeist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const openSauceTwoFont = localFont({
  variable: "--font-open-sauce-two",
  preload: true,
  src: [
    {
      path: "./open-sauce/OpenSauceTwo-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./open-sauce/OpenSauceTwo-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./open-sauce/OpenSauceTwo-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./open-sauce/OpenSauceTwo-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./open-sauce/OpenSauceTwo-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./open-sauce/OpenSauceTwo-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./open-sauce/OpenSauceTwo-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./open-sauce/OpenSauceTwo-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./open-sauce/OpenSauceTwo-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./open-sauce/OpenSauceTwo-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./open-sauce/OpenSauceTwo-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./open-sauce/OpenSauceTwo-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./open-sauce/OpenSauceTwo-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./open-sauce/OpenSauceTwo-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
});

export const fontSpaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

// export const openSauceOneFont = localFont({
//   variable: "--font-open-sauce-one",
//   preload: true,
//   src: [
//     {
//       path: "./open-sauce/OpenSauceOne-Light.otf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "./open-sauce/OpenSauceOne-LightItalic.otf",
//       weight: "300",
//       style: "italic",
//     },
//     {
//       path: "./open-sauce/OpenSauceOne-Regular.otf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./open-sauce/OpenSauceOne-Italic.otf",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "./open-sauce/OpenSauceOne-Medium.otf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./open-sauce/OpenSauceOne-MediumItalic.otf",
//       weight: "500",
//       style: "italic",
//     },
//     {
//       path: "./open-sauce/OpenSauceOne-SemiBold.otf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "./open-sauce/OpenSauceOne-SemiBoldItalic.otf",
//       weight: "600",
//       style: "italic",
//     },
//     {
//       path: "./open-sauce/OpenSauceOne-Bold.otf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./open-sauce/OpenSauceOne-BoldItalic.otf",
//       weight: "700",
//       style: "italic",
//     },
//     {
//       path: "./open-sauce/OpenSauceOne-ExtraBold.otf",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "./open-sauce/OpenSauceOne-ExtraBoldItalic.otf",
//       weight: "800",
//       style: "italic",
//     },
//     {
//       path: "./open-sauce/OpenSauceOne-Black.otf",
//       weight: "900",
//       style: "normal",
//     },
//     {
//       path: "./open-sauce/OpenSauceOne-BlackItalic.otf",
//       weight: "900",
//       style: "italic",
//     },
//   ],
// });

// export const openSauceSansFont = localFont({
//   variable: "--font-open-sauce-sans",
//   preload: true,
//   src: [
//     {
//       path: "./open-sauce/OpenSauceSans-Light.otf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "./open-sauce/OpenSauceSans-LightItalic.otf",
//       weight: "300",
//       style: "italic",
//     },
//     {
//       path: "./open-sauce/OpenSauceSans-Regular.otf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./open-sauce/OpenSauceSans-Italic.otf",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "./open-sauce/OpenSauceSans-Medium.otf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./open-sauce/OpenSauceSans-MediumItalic.otf",
//       weight: "500",
//       style: "italic",
//     },
//     {
//       path: "./open-sauce/OpenSauceSans-SemiBold.otf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "./open-sauce/OpenSauceSans-SemiBoldItalic.otf",
//       weight: "600",
//       style: "italic",
//     },
//     {
//       path: "./open-sauce/OpenSauceSans-Bold.otf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./open-sauce/OpenSauceSans-BoldItalic.otf",
//       weight: "700",
//       style: "italic",
//     },
//     {
//       path: "./open-sauce/OpenSauceSans-ExtraBold.otf",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "./open-sauce/OpenSauceSans-ExtraBoldItalic.otf",
//       weight: "800",
//       style: "italic",
//     },
//     {
//       path: "./open-sauce/OpenSauceSans-Black.otf",
//       weight: "900",
//       style: "normal",
//     },
//     {
//       path: "./open-sauce/OpenSauceSans-BlackItalic.otf",
//       weight: "900",
//       style: "italic",
//     },
//   ],
// });
