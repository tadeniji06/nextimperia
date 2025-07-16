"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { StaticImageData } from "next/image";
import {
	emeraldOneBed,
	emeraldTwoBed,
	oakOneBed,
	oakTwoBed,
	oakThreeBed,
	oakOneBedPlusStudy,
} from "@/utils/listings";
import { WALink } from "@/utils/data";

interface PropertyClientProps {
	id: string;
}

const PropertyClient: React.FC<PropertyClientProps> = ({ id }) => {
	const [property, setProperty] = useState<any>(null);
	const [selectedImage, setSelectedImage] =
		useState<StaticImageData | null>(null);
	const [loading, setLoading] = useState(true);
	const [galleryImages, setGalleryImages] = useState<
		StaticImageData[]
	>([]);

	useEffect(() => {
		const allProperties = [
			...emeraldOneBed,
			...emeraldTwoBed,
			...oakOneBed,
			...oakTwoBed,
			...oakThreeBed,
			...oakOneBedPlusStudy,
		];

		const found = allProperties.find((item) => item.id === id);

		if (found) {
			setProperty(found);
			console.log("Found property:", found);
			console.log("Property photos:", found.photos);

			// Process gallery images - ensure they're valid StaticImageData objects
			if (
				found.photos &&
				Array.isArray(found.photos) &&
				found.photos.length > 0
			) {
				const processedImages = found.photos.filter(
					(img: StaticImageData) =>
						img && typeof img === "object" && img.src
				);
				console.log(
					"Final processed gallery images:",
					processedImages
				);
				setGalleryImages(processedImages);
			} else {
				console.log(
					"No photos found or photos is not an array:",
					found.photos
				);
				setGalleryImages([]);
			}
		} else {
			console.log("Property not found for id:", id);
		}

		setLoading(false);
	}, [id]);

	const openImageModal = (imageSrc: StaticImageData) => {
		console.log("Opening image modal for:", imageSrc);
		setSelectedImage(imageSrc);
	};

	const closeImageModal = () => setSelectedImage(null);

	if (loading) {
		return (
			<div className='min-h-screen flex items-center justify-center'>
				<div className='animate-spin rounded-full h-32 w-32 border-b-2 border-primary'></div>
			</div>
		);
	}

	if (!property) {
		return (
			<div className='min-h-screen flex flex-col items-center justify-center p-6'>
				<div className='text-center'>
					<Icon
						icon='mdi:home-alert'
						className='w-24 h-24 text-gray-400 mx-auto mb-4'
					/>
					<h1 className='text-2xl font-bold text-gray-900 mb-2'>
						Property Not Found
					</h1>
					<p className='text-gray-600 mb-6'>
						The property you're looking for doesn't exist or has been
						removed.
					</p>
					<Link href='/properties'>
						<button className='bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors'>
							View All Properties
						</button>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className='p-4 sm:p-6 md:p-8 lg:p-12 max-w-6xl mx-auto'>
			{/* Breadcrumb */}
			<nav className='flex items-center space-x-2 text-sm text-gray-600 mb-6'>
				<Link href='/' className='hover:text-primary'>
					Home
				</Link>
				<Icon icon='mdi:chevron-right' className='w-4 h-4' />
				<Link href='/properties' className='hover:text-primary'>
					Properties
				</Link>
				<Icon icon='mdi:chevron-right' className='w-4 h-4' />
				<span className='text-gray-900'>{property.title}</span>
			</nav>

			{/* Main Image */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className='relative mb-8'
			>
				<div className='relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden bg-gray-100'>
					<Image
						src={property.mainImg}
						alt={property.title}
						fill
						className='object-cover cursor-pointer transition-transform hover:scale-[1.02]'
						onClick={() => openImageModal(property.mainImg)}
						priority
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
					/>
				</div>
				<div className='absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium'>
					{property.location}
				</div>
			</motion.div>

			{/* Content Grid */}
			<div className='flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-8'>
				{/* Main Content */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex-1'
				>
					<div className='mb-6'>
						<h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-gray-900'>
							{property.title}
						</h1>
						<div className='flex items-center text-gray-600 mb-4'>
							<Icon icon='mdi:map-marker' className='w-5 h-5 mr-2' />
							<span className='text-lg'>{property.location}</span>
						</div>
					</div>

					{/* Price Section */}
					<div className='bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl mb-6 border border-green-100'>
						<h2 className='text-xl font-semibold mb-3 text-gray-900 flex items-center'>
							<Icon
								icon='mdi:currency-usd'
								className='w-6 h-6 mr-2 text-green-600'
							/>
							Pricing
						</h2>
						<p className='text-2xl text-green-700 font-bold'>
							{property.avgPrice}
						</p>
					</div>

					{/* Description */}
					<div className='mb-6'>
						<h2 className='text-xl font-semibold mb-3 text-gray-900'>
							Description
						</h2>
						<p className='text-lg text-gray-700 leading-relaxed'>
							{property.desc}
						</p>
					</div>

					{/* Highlights */}
					{property.highlights && (
						<div className='mb-6'>
							<h2 className='text-xl font-semibold mb-3 text-gray-900 flex items-center'>
								<Icon
									icon='mdi:star'
									className='w-6 h-6 mr-2 text-yellow-500'
								/>
								Highlights
							</h2>
							<ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
								{property.highlights.map(
									(item: string, idx: number) => (
										<li key={idx} className='flex items-start'>
											<Icon
												icon='mdi:check-circle'
												className='w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0'
											/>
											<span className='text-gray-700'>{item}</span>
										</li>
									)
								)}
							</ul>
						</div>
					)}
				</motion.div>

				{/* Sidebar */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className='lg:w-80 flex-shrink-0'
				>
					<div className='bg-white border border-gray-200 p-6 rounded-xl shadow-lg sticky top-6'>
						<h3 className='text-lg font-semibold mb-4 text-center text-gray-900'>
							Interested in this property?
						</h3>
						<a
							href={WALink.link}
							target='_blank'
							rel='noopener noreferrer'
							className='block w-full'
						>
							<button className='w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-300 mb-4 flex items-center justify-center gap-2 shadow-md hover:shadow-lg'>
								<Icon icon='mdi:whatsapp' className='w-5 h-5' />
								Schedule Viewing
							</button>
						</a>
						<div className='text-center text-sm text-gray-600 mb-4'>
							<p>Get in touch to arrange a</p>
							<p>personalized property tour</p>
						</div>
						<div className='border-t pt-4'>
							<div className='flex items-center justify-between text-sm text-gray-600 mb-2'>
								<span>Property ID:</span>
								<span className='font-mono'>{property.id}</span>
							</div>
							<div className='flex items-center justify-between text-sm text-gray-600'>
								<span>Last Updated:</span>
								<span>{new Date().toLocaleDateString()}</span>
							</div>
						</div>
					</div>
				</motion.div>
			</div>

			{/* Payment Plans */}
			{property.pricingPlan && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className='mb-8'
				>
					<h2 className='text-2xl font-semibold mb-6 text-gray-900 flex items-center'>
						<Icon
							icon='mdi:credit-card-outline'
							className='w-7 h-7 mr-3 text-blue-600'
						/>
						Payment Plans
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						{property.pricingPlan.map((plan: any, idx: number) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
								className='border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all duration-300 bg-white'
							>
								<h3 className='text-lg font-semibold mb-3 text-primary flex items-center'>
									<Icon icon='mdi:tag' className='w-5 h-5 mr-2' />
									{plan.title}
								</h3>
								<p className='text-gray-900 mb-4 font-bold text-2xl'>
									{plan.price}
								</p>
								<ul className='space-y-3'>
									{plan.installmentPlan.map(
										(step: string, i: number) => (
											<li key={i} className='flex items-start'>
												<Icon
													icon='mdi:arrow-right'
													className='w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0'
												/>
												<span className='text-gray-700 font-medium'>
													{step}
												</span>
											</li>
										)
									)}
								</ul>
							</motion.div>
						))}
					</div>
				</motion.div>
			)}

			{/* Property Gallery - FIXED SECTION */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.8 }}
				className='mb-8'
			>
				<h2 className='text-2xl font-semibold mb-6 text-gray-900 flex items-center'>
					<Icon
						icon='mdi:image-multiple'
						className='w-7 h-7 mr-3 text-purple-600'
					/>
					Property Gallery
					<span className='ml-2 text-sm text-gray-500 font-normal'>
						({galleryImages.length} images)
					</span>
				</h2>

				{galleryImages && galleryImages.length > 0 ? (
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
						{galleryImages.map(
							(img: StaticImageData, idx: number) => (
								<motion.div
									key={`gallery-${idx}`}
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										duration: 0.4,
										delay: 0.9 + idx * 0.1,
									}}
									className='relative group'
								>
									<div
										className='relative w-full h-40 md:h-56 cursor-pointer rounded-lg overflow-hidden bg-gray-100 border border-gray-200'
										onClick={() => openImageModal(img)}
									>
										<Image
											src={img}
											alt={`${property.title} - Gallery Image ${
												idx + 1
											}`}
											fill
											className='object-cover rounded-lg hover:scale-105 transition-transform'
											sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
											priority={idx < 4}
										/>

										{/* Overlay */}
										<div className='absolute group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center'>
											<Icon
												icon='mdi:magnify-plus'
												className='w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'
											/>
										</div>

										{/* Image index indicator */}
										<div className='absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded'>
											{idx + 1} / {galleryImages.length}
										</div>
									</div>
								</motion.div>
							)
						)}
					</div>
				) : (
					<div className='text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300'>
						<Icon
							icon='mdi:image-off'
							className='w-16 h-16 text-gray-400 mx-auto mb-4'
						/>
						<p className='text-gray-600 font-medium'>
							No additional images available
						</p>
						<p className='text-sm text-gray-500 mt-2'>
							Check back later for more property photos
						</p>
					</div>
				)}
			</motion.div>

			{/* Contact Section */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 1.0 }}
				className='bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-2xl text-center'
			>
				<h3 className='text-2xl font-bold text-gray-900 mb-4'>
					Ready to Make This Your Home?
				</h3>
				<p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
					Don't miss out on this amazing opportunity. Contact us today
					to schedule a viewing or get more information about payment
					plans and availability.
				</p>
				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<a
						href={WALink.link}
						target='_blank'
						rel='noopener noreferrer'
					>
						<button className='bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center gap-2'>
							<Icon icon='mdi:whatsapp' className='w-5 h-5' />
							WhatsApp Us
						</button>
					</a>
					<Link href='/contact'>
						<button className='border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2'>
							<Icon icon='mdi:phone' className='w-5 h-5' />
							Call Us
						</button>
					</Link>
				</div>
			</motion.div>

			{/* Image Modal - FIXED */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4'
						onClick={closeImageModal}
					>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className='relative max-w-5xl max-h-full'
							onClick={(e) => e.stopPropagation()}
						>
							<div className='relative bg-white rounded-lg overflow-hidden shadow-2xl'>
								<div className='relative w-[90vw] max-w-4xl h-[80vh]'>
									<Image
										src={selectedImage}
										alt='Property preview'
										fill
										className='object-contain'
									/>
								</div>

								{/* Close button */}
								<button
									onClick={closeImageModal}
									className='absolute top-4 right-4 text-gray-600 hover:text-gray-900 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300 shadow-lg'
								>
									<Icon icon='mdi:close' className='w-6 h-6' />
								</button>

								{/* Navigation arrows for gallery */}
								{galleryImages && galleryImages.length > 1 && (
									<>
										<button
											onClick={(e) => {
												e.stopPropagation();
												const currentIndex = galleryImages.findIndex(
													(img) => img === selectedImage
												);
												const prevIndex =
													currentIndex > 0
														? currentIndex - 1
														: galleryImages.length - 1;
												setSelectedImage(galleryImages[prevIndex]);
											}}
											className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all duration-300 shadow-lg'
										>
											<Icon
												icon='mdi:chevron-left'
												className='w-6 h-6'
											/>
										</button>
										<button
											onClick={(e) => {
												e.stopPropagation();
												const currentIndex = galleryImages.findIndex(
													(img) => img === selectedImage
												);
												const nextIndex =
													currentIndex < galleryImages.length - 1
														? currentIndex + 1
														: 0;
												setSelectedImage(galleryImages[nextIndex]);
											}}
											className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all duration-300 shadow-lg'
										>
											<Icon
												icon='mdi:chevron-right'
												className='w-6 h-6'
											/>
										</button>

										{/* Image counter */}
										<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm'>
											{galleryImages.findIndex(
												(img) => img === selectedImage
											) + 1}{" "}
											/ {galleryImages.length}
										</div>
									</>
								)}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default PropertyClient;
