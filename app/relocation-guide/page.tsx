import RelocationGuide from "@/components/relocation/RelocationGuide";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Free Relocation Guide to Kenya | Imperia Consulting",
	description:
		"Download our comprehensive Step-by-Step Relocation Guide to Kenya — tailored for diplomats, expats, and international professionals moving to Nairobi.",
	keywords: [
		"Relocation Guide Kenya",
		"Moving to Nairobi",
		"Expat Kenya",
		"Diplomat Relocation",
		"Kenya Real Estate",
		"Imperia Consulting",
		"Nairobi Living",
	],
	openGraph: {
		title: "Free Relocation Guide to Kenya | Imperia Consulting",
		description:
			"Get the ultimate guide for diplomats and expats relocating to Kenya. Free download from Imperia Consulting.",
		type: "website",
	},
};

const RelocationGuidePage = () => {
	return (
		<div className='min-h-screen'>
			<RelocationGuide />
		</div>
	);
};

export default RelocationGuidePage;
