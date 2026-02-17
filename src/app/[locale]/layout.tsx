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
  title: {
    default: "Gartenservice Wien | Bewässerung, Zaunbau & Geländer", // Frissítve
    template: "%s | Gartendienst Wien",
  },
  description:
    "Ihr Profi für Gartenpflege, automatische Bewässerung, Erdarbeiten & Zaunbau in Wien und Umgebung. Jetzt GRATIS Besichtigung vereinbaren!", // Bővítve
  keywords: [
    "Gartendienst Wien",
    "Bewässerungssysteme Wien",
    "Zaunbau Wien", // Új
    "Geländer Montage", // Új
    "Erdarbeiten Garten", // Új (tereprendezés)
    "Gartenpflege Hietzing",
    "Gärtnerei",
    "Zaun Reparatur", // Új
    "Terassenbau",
  ],
  authors: [{ name: "Gartendienst Wien", url: "https://gartendienst-wien.at" }],

  // OpenGraph a közösségi médiához
  openGraph: {
    title: "Gartendienst Wien – Ihr Spezialist für Gartenpflege & Bewässerung",
    description:
      "Vom Rasenmähen bis zur automatischen Bewässerung. Wir machen Ihren Garten fit für den Frühling! Jetzt Termin sichern.",
    url: "https://gartendienst-wien.at",
    siteName: "Gartendienst Wien",
    images: [
      {
        url: "/og-image.jpg", // Tegyél egy jó minőségű kerti képet a public mappába ezen a néven!
        width: 1200,
        height: 630,
        alt: "Gartendienst Wien Service",
      },
    ],
    locale: "de_AT",
    type: "website",
  },

  alternates: {
    canonical: "https://gartendienst-wien.at",
  },

  metadataBase: new URL("https://gartendienst-wien.at"),
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Gartendienst Wien",
    image: "https://gartendienst-wien.at/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wien",
      addressRegion: "AT",
      postalCode: "1130",
    },
    description:
      "Spezialist für Gartenrettung, Bewässerungsanlagen, Zaunbau és Geländermontage.", // Frissítve
    url: "https://gartendienst-wien.at",
    telephone: "+436608956377",
    knowsAbout: [
      "Gartenpflege",
      "Bewässerungssysteme",
      "Zaunbau",
      "Geländermontage",
      "Erdarbeiten",
    ], // Ez segít a Google-nek kategorizálni az új profilokat
  };

  return (
    <html lang={locale}>
      <body className={urbanist.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <I18nProvider locale={locale}>{children}</I18nProvider>
      </body>
    </html>
  );
}
