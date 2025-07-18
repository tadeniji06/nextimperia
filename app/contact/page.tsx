import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us | Imperia Consulting",
	description:
		"Ready to purchase your piece of luxury? Contact us today!",
	keywords: [
		"Imperia Consulting",
		"About Imperia",
		"Real Estate Kenya",
		"Get started",
		"Mission",
		"Properties in Nairobi",
		"Luxury Kenya",
		"Real Estate Services",
	],
};

const page = () => {
	return (
		<div className='min-h-screen'>
			<Contact />
		</div>
	);
};
export default page;
