"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import {
	emeraldOneBed,
	emeraldTwoBed,
	oakOneBed,
	oakTwoBed,
	oakThreeBed,
	oakOneBedPlusStudy,
	aria,
	amet,
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
			...aria,
			...amet,
		];

		const found = allProperties.find((item) => item.id === id);
		if (found) {
			setProperty(found);
			if (found.photos && Array.isArray(found.photos)) {
				const valid = found.photos.filter(
					(img: any) => img && typeof img === "object" && img.src
				);
				setGalleryImages(valid);
			}
		}
		setLoading(false);
	}, [id]);

	const openImageModal = (imageSrc: StaticImageData) =>
		setSelectedImage(imageSrc);
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
				<Icon
					icon='mdi:home-alert'
					className='w-24 h-24 text-gray-400 mb-4'
				/>
				<h1 className='text-2xl font-bold mb-2'>
					Property Not Found
				</h1>
				<p className='text-gray-600 mb-6'>
					The property you're looking for doesn't exist or has been
					removed.
				</p>
				<Link href='/properties'>
					<button className='bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90'>
						View All Properties
					</button>
				</Link>
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
				<div className='relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden'>
					<Image
						src={property.mainImg}
						alt={property.title}
						fill
						className='object-cover cursor-pointer hover:scale-[1.02] transition-transform'
						onClick={() => openImageModal(property.mainImg)}
						priority
					/>
				</div>
				<div className='absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium'>
					{property.location}
				</div>
			</motion.div>

			{/* Content */}
			<div className='flex flex-col lg:flex-row lg:justify-between gap-8 mb-8'>
				{/* Left Section */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex-1'
				>
					<h1 className='text-3xl font-bold mb-3'>
						{property.title}
					</h1>
					<div className='flex items-center text-gray-600 mb-4'>
						<Icon icon='mdi:map-marker' className='w-5 h-5 mr-2' />
						<span className='text-lg'>{property.location}</span>
					</div>

					{/* Price */}
					<div className='bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl mb-6 border border-green-100'>
						<h2 className='text-xl font-semibold mb-3 flex items-center'>
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
						<h2 className='text-xl font-semibold mb-3'>
							Description
						</h2>
						<p className='text-lg text-gray-700 leading-relaxed'>
							{property.desc}
						</p>
					</div>

					{/* 🆕 Apartment Options */}
					{property.ApartmentOptions &&
						property.ApartmentOptions.length > 0 && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className='mb-8'
							>
								<h2 className='text-2xl font-semibold mb-6 text-gray-900 flex items-center'>
									<Icon
										icon='mdi:home-modern'
										className='w-7 h-7 mr-3 text-indigo-600'
									/>
									Apartment Options
								</h2>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									{property.ApartmentOptions.map(
										(opt: any, idx: number) => (
											<motion.div
												key={idx}
												initial={{ opacity: 0, scale: 0.95 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{
													duration: 0.4,
													delay: 0.4 + idx * 0.1,
												}}
												className='border border-gray-200 p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300'
											>
												<h3 className='text-lg font-bold mb-2 text-primary'>
													{opt.type}
												</h3>
												<p className='text-sm text-gray-600 mb-2'>
													<span className='font-semibold text-gray-800'>
														Size:
													</span>{" "}
													{opt.size}
												</p>
												<p className='text-gray-700'>{opt.desc}</p>
											</motion.div>
										)
									)}
								</div>
							</motion.div>
						)}

					{/* Highlights */}
					{property.highlights && (
						<div className='mb-6'>
							<h2 className='text-xl font-semibold mb-3 flex items-center'>
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
												className='w-5 h-5 text-green-500 mr-3 mt-0.5'
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
						<h3 className='text-lg font-semibold mb-4 text-center'>
							Interested in this property?
						</h3>
						<a
							href={WALink.link}
							target='_blank'
							rel='noopener noreferrer'
						>
							<button className='w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-4 rounded-lg mb-4 flex items-center justify-center gap-2 shadow-md'>
								<Icon icon='mdi:whatsapp' className='w-5 h-5' />
								Schedule Viewing
							</button>
						</a>
						<p className='text-center text-sm text-gray-600 mb-4'>
							Get in touch to arrange a personalized property tour
						</p>
					</div>
				</motion.div>
			</div>

			{/* 📸 Gallery */}
			{galleryImages.length > 0 && (
				<section className='mb-12'>
					<h2 className='text-2xl font-semibold mb-6 text-gray-900 flex items-center'>
						<Icon
							icon='mdi:image-multiple'
							className='w-6 h-6 mr-3 text-indigo-600'
						/>
						Gallery
					</h2>
					<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
						{galleryImages.map((img, idx) => (
							<div
								key={idx}
								className='relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer group'
								onClick={() => openImageModal(img)}
							>
								<Image
									src={img}
									alt={`Property image ${idx + 1}`}
									fill
									className='object-cover group-hover:scale-105 transition-transform'
								/>
							</div>
						))}
					</div>
				</section>
			)}

			{/* Image Modal Preview */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={closeImageModal}
					>
						<motion.div
							className='relative w-[90vw] max-w-4xl h-[80vh]'
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.8 }}
						>
							<Image
								src={selectedImage}
								alt='Preview'
								fill
								className='object-contain rounded-lg'
							/>
							<button
								onClick={closeImageModal}
								className='absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full'
							>
								<Icon
									icon='mdi:close'
									className='w-5 h-5 text-gray-800'
								/>
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default PropertyClient;
