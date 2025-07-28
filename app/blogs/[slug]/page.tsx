import { getBlogPost, getRelatedPosts, urlFor } from "@/utils/sanity";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: "Post Not Found | Imperia Consulting",
      description: "This blog post could not be found.",
    };
  }

  // Extract description from post body or use fallback
  const description = post.body?.[0]?.children?.[0]?.text?.slice(0, 160) || 
    `Read ${post.title} on Imperia Consulting Blog - Expert insights on luxury real estate in Kenya`;

  return {
    title: `${post.title} | Imperia Consulting Blog`,
    description: description,
    keywords: [
      "Imperia Consulting",
      "Real Estate Kenya",
      "Luxury Properties Nairobi",
      "Property Investment",
      ...(post.categories?.map(cat => cat.title) || [])
    ],
    openGraph: {
      title: post.title,
      description: description,
      url: `https://imperiagrouponline.com/blogs/${slug}`,
      siteName: "Imperia Consulting",
      type: "article",
      images: post.mainImage ? [
        {
          url: urlFor(post.mainImage).url(),
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [
        {
          url: "https://imperiagrouponline.com/ilogo.svg", // Fallback image
          width: 1200,
          height: 630,
          alt: "Imperia Consulting Blog",
        }
      ],
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : ["Imperia Consulting"],
      tags: post.categories?.map(cat => cat.title) || [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: description,
      images: post.mainImage ? [urlFor(post.mainImage).url()] : ["https://imperiagrouponline.com/ilogo.svg"],
    },
    // Additional metadata for better SEO
    alternates: {
      canonical: `https://imperiagrouponline.com/blogs/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.categories || [], post._id);

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
};

export default BlogPostPage;