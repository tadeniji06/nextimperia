import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties For Sale | Imperia Consulting",
  description: "Stay informed with our new properties and luxury in Nairobi, Kenya",
  keywords: [
    "Imperia Consulting",
    "Luxury Estate", 
    "Real Estate Kenya",
    "Oak West",
    "Emerald Springs",
    "Lands for sale in Nairobi",
    "Real Estate Services in Kenya",
    "Properties for Sale Nairobi",
    "Luxury Properties Kenya"
  ],
  openGraph: {
    title: "Properties For Sale | Imperia Consulting",
    description: "Stay informed with our new properties and luxury in Nairobi, Kenya",
    url: "https://imperiagrouponline.com/properties",
    siteName: "Imperia Consulting",
    images: [
      {
        url: "/ilogo.svg", 
        width: 1200,
        height: 630,
        alt: "Imperia Consulting Properties",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Properties For Sale | Imperia Consulting",
    description: "Stay informed with our new properties and luxury in Nairobi, Kenya",
    images: ["/ilogo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
