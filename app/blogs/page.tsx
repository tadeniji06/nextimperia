import type { Metadata } from "next";
import BlogsClient from "@/app/blogs/BlogsClient";

export const metadata: Metadata = {
  title: "Latest Blog Posts | Imperia Consulting",
  description: "Stay informed with our latest articles and insights on luxury real estate, property investment, and the best properties in Nairobi, Kenya. Expert guidance from Imperia Consulting.",
  keywords: [
    "Imperia Consulting",
    "Luxury Estate Kenya",
    "Real Estate Kenya",
    "Oak West",
    "Lands for sale in Nairobi",
    "Real Estate Services in Kenya",
    "Property Investment Kenya",
    "Luxury Properties Nairobi",
    "Real Estate Blog Kenya"
  ],
  openGraph: {
    title: "Latest Blog Posts | Imperia Consulting",
    description: "Discover expert insights on luxury real estate, property investment strategies, and premium properties in Nairobi, Kenya.",
    url: "https://imperiagrouponline.com/blogs",
    siteName: "Imperia Consulting",
    type: "website",
    images: [
      {
        url: "https://imperiagrouponline.com/ilogo.svg", 
        width: 1200,
        height: 630,
        alt: "Imperia Consulting Blog - Luxury Real Estate Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest Blog Posts | Imperia Consulting",
    description: "Expert insights on luxury real estate and property investment in Nairobi, Kenya.",
    images: ["https://imperiagrouponline.com/ilogo.svg"],
  },
};

const BlogsPage = () => {
  return <BlogsClient />;
};

export default BlogsPage;