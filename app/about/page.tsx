import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import Offer from "@/components/about/Offer";
import ReadyCTA from "@/components/about/ReadyCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us | Imperia Consulting",
	description:
		"Learn more about Imperia Consulting, our mission, and our team dedicated to providing exceptional real estate services in Kenya.",

	keywords: [
		"Imperia Consulting",
		"About Imperia",
		"Real Estate Kenya",
		"Our Team",
		"Mission",
		"Vision",
		"Real Estate Services",
	],
};

const AboutPage = () => {
	return (
		<div className='min-h-screen'>
			<AboutHero />
			<Mission />
			<Offer />
			<ReadyCTA />
		</div>
	);
};

export default AboutPage;
