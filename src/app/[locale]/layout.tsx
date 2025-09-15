import { type ReactNode } from "react";
import I18nProvider from "@/components/I18nProvider";
import "@/styles/globals.css";
import { Urbanist } from "next/font/google";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // csak ha külön súlyokat akarsz
  display: "swap",
});

export const metadata = {
  title: "Gartendienst Wien – Rasenmähen, Bewässerung & Gartenpflege",
  description:
    "Professionelle Gartenpflege und Bewässerungssysteme in Wien und umgebung – jetzt kostenlose Vor-Ort-Beratung anfordern!",
  keywords: [
    "Gartendienst",
    "Bewässerung Hietzing",
    "Rasenmähen",
    "Garten",
    "Gartenpflege Wien",
    "Gartenpflege Burgenland",
    "Gartnerei",
    "Garten bewässerung",
  ],
  authors: [{ name: "Gartendienst Wien", url: "https://gartendienst-wien.at" }],
  creator: "Gartendienst Wien",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title:
      "Gartendienst Wien und Burgenland – Ihr Spezialist für Gartenpflege & Bewässerung",
    description:
      "Bewässerungssysteme und Rasenpflege in Wien und Burgenland. Jetzt kostenlose Vor-Ort-Beratung sichern!",
    url: "https://gartendienst-wien.at",
    siteName: "Gartendienst Wien",
    images: [],
    locale: "de_AT",
    type: "website",
  },

  metadataBase: new URL("https://gartendienst-wien.at"),
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={urbanist.className}>
        <I18nProvider locale={locale}>{children}</I18nProvider>
      </body>
    </html>
  );
}
