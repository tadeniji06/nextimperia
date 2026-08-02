import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/layouts/Nav";
import Footer from "@/layouts/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClarityScript from "@/components/Clarity";
import AnalyticsScript from "@/components/Analytics";
import { socials } from "@/utils/data";

const organizationSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			"@id": "https://imperiagrouponline.com/#organization",
			name: "Imperia Consulting",
			url: "https://imperiagrouponline.com/",
			logo: {
				"@type": "ImageObject",
				url: "https://imperiagrouponline.com/ilogo.svg",
			},
			description:
				"Imperia Consulting is a premier real estate agency in Kenya, dedicated to helping clients invest in and own properties that combine luxury, comfort, and long-term value.",
			sameAs: socials.map((social) => social.link),
			contactPoint: [
				{
					"@type": "ContactPoint",
					contactType: "customer service",
					telephone: "+254 116 071 190",
					email: "info@imperiaconsulting.com",
					availableLanguage: ["en"],
				},
			],
		},
		{
			"@type": "WebSite",
			"@id": "https://imperiagrouponline.com/#website",
			url: "https://imperiagrouponline.com/",
			name: "Imperia Consulting",
			publisher: {
				"@id": "https://imperiagrouponline.com/#organization",
			},
			inLanguage: "en",
			potentialAction: {
				"@type": "SearchAction",
				target:
					"https://imperiagrouponline.com/?s={search_term_string}",
				"query-input": "required name=search_term_string",
			},
		},
		{
			"@type": "WebPage",
			"@id": "https://imperiagrouponline.com/#webpage",
			url: "https://imperiagrouponline.com/",
			name: "Imperia Consulting | Premier Real Estate in Kenya",
			description:
				"Discover premium real estate opportunities in Kenya with Imperia Consulting. We specialize in residential, commercial, and investment properties.",
			isPartOf: {
				"@id": "https://imperiagrouponline.com/#website",
			},
			about: {
				"@id": "https://imperiagrouponline.com/#organization",
			},
			publisher: {
				"@id": "https://imperiagrouponline.com/#organization",
			},
			inLanguage: "en",
		},
		{
			"@type": "LocalBusiness",
			"@id": "https://imperiagrouponline.com/#localbusiness",
			name: "Imperia Consulting",
			url: "https://imperiagrouponline.com/",
			image: "https://imperiagrouponline.com/ilogo.svg",
			logo: "https://imperiagrouponline.com/ilogo.svg",
			description:
				"Premier real estate agency in Kenya offering residential, commercial, and investment properties.",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Nairobi",
				addressRegion: "Westlands",
				addressCountry: "KE",
			},
			telephone: "+254 116 071 190",
			email: "info@imperiaconsulting.com",
			// url: WALink.link,
			areaServed: {
				"@type": "Country",
				name: "Kenya",
			},
			brand: {
				"@id": "https://imperiagrouponline.com/#organization",
			},
		},
	],
};

export const metadata: Metadata = {
	metadataBase: new URL("https://imperiagrouponline.com"),
	alternates: {
		canonical: "https://imperiagrouponline.com/",
	},
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
			<head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema),
					}}
				/>
			</head>
			<body className='antialiased' cz-shortcut-listen='true'>
				<Nav />
				{children}
				<Footer />
				<SpeedInsights />
				<ClarityScript />
				<AnalyticsScript />
			</body>
		</html>
	);
}
