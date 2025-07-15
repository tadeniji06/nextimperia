import type { Metadata } from "next";
import BlogsClient from "@/app/blogs/BlogsClient";

export const metadata: Metadata = {
  title: "Blogs | Imperia Consulting",
  description: "Stay informed with our latest articles and insights on the best properties and luxury in Nairobi, Kenya",
  keywords: [
    "Imperia Consulting",
    "Luxury Estate",
    "Real Estate Kenya",
    "Oak West",
    "Lands for sale in Nairobi",
    "Real Estate Services in Kenya",
  ],
};

const BlogsPage = () => {
  return <BlogsClient />;
};

export default BlogsPage;
