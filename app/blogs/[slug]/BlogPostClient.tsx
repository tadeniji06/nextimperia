"use client";

import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost, urlFor } from "@/utils/sanity";

interface BlogPostClientProps {
	post: BlogPost;
	relatedPosts: BlogPost[];
}

const BlogPostClient = ({
	post,
	relatedPosts,
}: BlogPostClientProps) => {
	const portableTextComponents = {
		block: {
			normal: ({ children }: any) => (
				<p className='mb-4 leading-relaxed'>{children}</p>
			),
			h1: ({ children }: any) => (
				<h1 className='text-3xl font-bold mb-6 mt-8'>{children}</h1>
			),
			h2: ({ children }: any) => (
				<h2 className='text-2xl font-bold mb-4 mt-6'>{children}</h2>
			),
			h3: ({ children }: any) => (
				<h3 className='text-xl font-bold mb-3 mt-5'>{children}</h3>
			),
			blockquote: ({ children }: any) => (
				<blockquote className='border-l-4 border-primary pl-4 italic my-6 text-gray-700'>
					{children}
				</blockquote>
			),
		},
		list: {
			bullet: ({ children }: any) => (
				<ul className='list-disc list-inside mb-4 space-y-2'>
					{children}
				</ul>
			),
			number: ({ children }: any) => (
				<ol className='list-decimal list-inside mb-4 space-y-2'>
					{children}
				</ol>
			),
		},
		listItem: {
			bullet: ({ children }: any) => (
				<li className='ml-4'>{children}</li>
			),
			number: ({ children }: any) => (
				<li className='ml-4'>{children}</li>
			),
		},
		marks: {
			strong: ({ children }: any) => (
				<strong className='font-bold'>{children}</strong>
			),
			em: ({ children }: any) => (
				<em className='italic'>{children}</em>
			),
			link: ({ children, value }: any) => (
				<a
					href={value.href}
					target='_blank'
					rel='noopener noreferrer'
					className='text-primary hover:underline'
				>
					{children}
				</a>
			),
		},
	};

	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Hero Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className='bg-white'
			>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
					{/* Breadcrumb */}
					<nav className='mb-8'>
						<Link
							href='/blogs'
							className='text-primary hover:text-primary/80 transition-colors duration-200 flex items-center'
						>
							<Icon
								icon='heroicons:arrow-left'
								className='w-4 h-4 mr-2'
							/>
							Back to Blog
						</Link>
					</nav>

					{/* Categories */}
					{post.categories && post.categories.length > 0 && (
						<div className='flex flex-wrap gap-2 mb-6'>
							{post.categories.map((category, idx) => (
								<span
									key={idx}
									className='px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full'
								>
									{category.title}
								</span>
							))}
						</div>
					)}

					{/* Title */}
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'
					>
						{post.title}
					</motion.h1>

					{/* Meta Info */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className='flex items-center space-x-6 text-gray-600 mb-8'
					>
						{post.author && (
							<div className='flex items-center space-x-3'>
								{post.author.image && (
									<div className='relative w-10 h-10'>
										<Image
											src={urlFor(post.author.image)
												.width(40)
												.height(40)
												.url()}
											alt={post.author.name}
											fill
											className='rounded-full object-cover'
										/>
									</div>
								)}
								<span className='font-medium'>
									{post.author.name}
								</span>
							</div>
						)}
						<time dateTime={post.publishedAt}>
							{new Date(post.publishedAt).toLocaleDateString(
								"en-US",
								{
									year: "numeric",
									month: "long",
									day: "numeric",
								}
							)}
						</time>
						<div className='flex items-center space-x-1'>
							<Icon icon='heroicons:clock' className='w-4 h-4' />
							<span>{post.estimatedReadingTime} min read</span>
						</div>
					</motion.div>

					{/* Featured Image */}
					{post.mainImage && (
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className='relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12'
						>
							<Image
								src={urlFor(post.mainImage)
									.width(800)
									.height(400)
									.url()}
								alt={post.title}
								fill
								className='object-cover'
								priority
							/>
						</motion.div>
					)}
				</div>
			</motion.section>

			{/* Article Content */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.8 }}
				className='bg-white'
			>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16'>
					<div className='prose prose-lg max-w-none text-gray-700'>
						<PortableText
							value={post.body}
							components={portableTextComponents}
						/>
					</div>
				</div>
			</motion.section>

			{/* Related Posts */}
			{relatedPosts.length > 0 && (
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1 }}
					className='bg-gray-50 py-16'
				>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<h2 className='text-3xl font-bold text-gray-900 mb-8'>
							Related Articles
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							{relatedPosts.map((relatedPost) => (
								<Link
									key={relatedPost._id}
									href={`/blogs/${relatedPost.slug.current}`}
									className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group'
								>
									{relatedPost.mainImage && (
										<div className='relative w-full h-48'>
											<Image
												src={urlFor(relatedPost.mainImage)
													.width(300)
													.height(200)
													.url()}
												alt={relatedPost.title}
												fill
												className='object-cover group-hover:scale-105 transition-transform duration-300'
											/>
										</div>
									)}
									<div className='p-6'>
										<h3 className='text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300'>
											{relatedPost.title}
										</h3>
										<div className='flex items-center justify-between text-sm text-gray-500'>
											<span>{relatedPost.author?.name}</span>
											<div className='flex items-center space-x-1'>
												<Icon
													icon='heroicons:clock'
													className='w-4 h-4'
												/>
												<span>
													{relatedPost.estimatedReadingTime} min
												</span>
											</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</motion.section>
			)}
		</div>
	);
};

export default BlogPostClient;
