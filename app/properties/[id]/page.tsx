import { Metadata } from "next";
import { notFound } from "next/navigation";
import { StaticImageData } from "next/image";
import PropertyClient from "./PropertyClient";
import {
	emeraldOneBed,
	emeraldTwoBed,
	oakOneBed,
	oakTwoBed,
	oakThreeBed,
	oakOneBedPlusStudy,
} from "@/utils/listings";

// Type-safe helper function
function getImageUrl(image: string | StaticImageData): string {
	if (typeof image === "string") {
		return image.startsWith("http")
			? image
			: `https://imperiagrouponline.com${image}`;
	}
	// Handle StaticImageData
	if (image && typeof image === "object" && "src" in image) {
		const src = image.src;
		return src.startsWith("http")
			? src
			: `https://imperiagrouponline.com${src}`;
	}
	// Fallback
	return "https://imperiagrouponline.com/ilogo.svg";
}

// Generate metadata dynamically based on property
export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}): Promise<Metadata> {
	const { id } = await params;

	const allProperties = [
		...emeraldOneBed,
		...emeraldTwoBed,
		...oakOneBed,
		...oakTwoBed,
		...oakThreeBed,
		...oakOneBedPlusStudy,
	];

	const property = allProperties.find((item) => item.id === id);

	if (!property) {
		return {
			title: "Property Not Found | Imperia Consulting",
			description: "The requested property could not be found.",
		};
	}

	const pageUrl = `https://imperiagrouponline.com/property/${id}`;
	const imageUrl = getImageUrl(property.mainImg);

	return {
		title: `${property.title} in ${property.location} | Imperia Consulting`,
		description:
			property.desc?.slice(0, 160) ||
			`Luxury ${property.title} available in ${property.location}. Contact Imperia Consulting for viewing and payment plans.`,
		keywords: [
			property.title,
			property.location,
			"Nairobi real estate",
			"Kenya apartments",
			property.avgPrice,
			"Imperia Consulting",
			"luxury apartments",
			"property for sale",
			"real estate Kenya",
			"Westlands property",
		],
		openGraph: {
			title: `${property.title} in ${property.location} | Imperia Consulting`,
			description:
				property.desc?.slice(0, 160) ||
				`Luxury ${property.title} available in ${property.location}`,
			url: pageUrl,
			siteName: "Imperia Consulting",
			images: [
				{
					url: imageUrl,
					width: 1200,
					height: 630,
					alt: `${property.title} - ${property.location}`,
				},
			],
			locale: "en_US",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: `${property.title} in ${property.location} | Imperia Consulting`,
			description:
				property.desc?.slice(0, 160) ||
				`Luxury ${property.title} available in ${property.location}`,
			images: [imageUrl],
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
		alternates: {
			canonical: pageUrl,
		},
		authors: [{ name: "Imperia Consulting" }],
		category: "Real Estate",
	};
}

export async function generateStaticParams() {
	const allProperties = [
		...emeraldOneBed,
		...emeraldTwoBed,
		...oakOneBed,
		...oakTwoBed,
		...oakThreeBed,
		...oakOneBedPlusStudy,
	];

	return allProperties.map((property) => ({
		id: property.id,
	}));
}

export default async function PropertyPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const allProperties = [
		...emeraldOneBed,
		...emeraldTwoBed,
		...oakOneBed,
		...oakTwoBed,
		...oakThreeBed,
		...oakOneBedPlusStudy,
	];

	const property = allProperties.find((item) => item.id === id);

	if (!property) {
		notFound();
	}

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "RealEstateListing",
		name: property.title,
		description: property.desc,
		url: `https://imperiagrouponline.com/property/${id}`,
		image: getImageUrl(property.mainImg),
		offers: {
			"@type": "Offer",
			price: property.avgPrice,
			priceCurrency: "KES",
			availability: "https://schema.org/InStock",
		},
		address: {
			"@type": "PostalAddress",
			addressLocality: property.location,
			addressCountry: "Kenya",
		},
		provider: {
			"@type": "RealEstateAgent",
			name: "Imperia Consulting",
			url: "https://imperiagrouponline.com",
		},
	};

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<PropertyClient id={id} />
		</>
	);
}
