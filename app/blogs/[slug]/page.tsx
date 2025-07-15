import { getBlogPost, getRelatedPosts } from "@/utils/sanity";
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
    };
  }

  return {
    title: `${post.title} | Imperia Consulting Blog`,
    description: post.body?.[0]?.children?.[0]?.text?.slice(0, 160) || "Read this article on Imperia Consulting Blog",
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
