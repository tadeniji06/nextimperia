import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/layouts/Nav";
import Footer from "@/layouts/Footer";

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
			</body>
		</html>
	);
}
