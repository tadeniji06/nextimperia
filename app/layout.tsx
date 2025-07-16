import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/layouts/Nav";
import Footer from "@/layouts/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
	title: "Imperia Consulting | Premier Real Estate in Kenya",
	description:
		"Discover premium real estate opportunities in Kenya with Imperia Consulting. We specialize in residential, commercial, and investment properties",
	icons: {
		icon: "/ilogo.svg",
	},
	keywords: [
		"Imperia Consulting",
		"Real Estate Kenya",
		"Residential Properties",
		"Commercial Properties",
		"Investment Properties",
		"Luxury Homes",
		"Property Management",
		"Real Estate Investment",
		"Kenya Real Estate Market",
		"Real Estate Agency Kenya",
	],

	// Open Graph metadata
	openGraph: {
		title: "Imperia Consulting | Premier Real Estate in Kenya",
		description:
			"Discover premium real estate opportunities in Kenya with Imperia Consulting. We specialize in residential, commercial, and investment properties",
		url: "https://imperiagrouponline.com",
		siteName: "Imperia Consulting",
		images: [
			{
				url: "https://imperiasseo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.e65f9546.png&w=256&q=75",
				width: 1200,
				height: 630,
				alt: "Imperia Consulting - Premier Real Estate in Kenya",
			},
		],
		locale: "en_US",
		type: "website",
	},

	// Twitter Card metadata
	twitter: {
		card: "summary_large_image",
		title: "Imperia Consulting | Premier Real Estate in Kenya",
		description:
			"Discover premium real estate opportunities in Kenya with Imperia Consulting. We specialize in residential, commercial, and investment properties",
		images: ["/ilogo.svg"],
		creator: "@ImperiaC_", 
		site: "@ImperiaC_", 
	},

	// Additional metadata
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

	// Additional meta tags
	other: {
		"theme-color": "#f62427", //primary color
		"apple-mobile-web-app-capable": "yes",
		"apple-mobile-web-app-status-bar-style": "default",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='antialiased' cz-shortcut-listen='true'>
				<Nav />
				{children}
				<Footer />
				<SpeedInsights />
			</body>
		</html>
	);
}
