"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import {
	emeraldOneBed,
	emeraldTwoBed,
	oakOneBedPlusStudy,
	oakOneBed,
	oakTwoBed,
	oakThreeBed,
	amet,
} from "@/utils/listings";

const PropsNav = () => {
	const [activeProperty, setActiveProperty] = useState("emerald");

	// Combine listings by property type
	const emeraldListings = [...emeraldOneBed, ...emeraldTwoBed];
	const oakListings = [
		...oakOneBed,
		...oakOneBedPlusStudy,
		...oakTwoBed,
		...oakThreeBed,
	];

	const propertyInfo = {
		emerald: {
			title: "Emerald Apartments",
			description:
				"Emerald consists of 1 and 2 bedroom apartments, having 2 blocks of 25 floors with each floor",
			listings: emeraldListings,
			color: "emerald",
		},
		oak: {
			title: "Oak West",
			description:
				"Oak West is a short walk from JW Marriott, GTC, the Sarit Centre and Westgate Mall and MP Shah hospital. It's also 15 mins drive from the Jomo Kenyatta International Airport, Nairobi.",
			listings: oakListings,
			color: "amber",
		},
		ame: {
			title: "Amethyst",
			description: "",
			listings: amet,
			color: "amber",
		},
	};

	const currentProperty =
		propertyInfo[activeProperty as keyof typeof propertyInfo];

	return (
		<div className='z-10 relative flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 sm:px-6 md:px-12 lg:px-24 xl:px-48'>
			{/* Centralized Toggle - Above Header */}
			<div className='flex justify-center mb-6 sm:mb-8'>
				<div className='bg-gray-100 p-1 rounded-lg inline-flex w-full max-w-sm'>
					<button
						type='button'
						onClick={() => setActiveProperty("emerald")}
						className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-md text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer touch-manipulation ${
							activeProperty === "emerald"
								? "bg-gray-900 text-white shadow-md"
								: "text-gray-600 hover:text-gray-800 hover:bg-gray-50 active:bg-gray-200"
						}`}
						style={{ WebkitTapHighlightColor: "transparent" }}
					>
						Emerald Springs
					</button>
					<button
						type='button'
						onClick={() => setActiveProperty("oak")}
						className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-md text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer touch-manipulation ${
							activeProperty === "oak"
								? "bg-gray-900 text-white shadow-md"
								: "text-gray-600 hover:text-gray-800 hover:bg-gray-50 active:bg-gray-200"
						}`}
						style={{ WebkitTapHighlightColor: "transparent" }}
					>
						Oak West
					</button>
						<button
						type='button'
						onClick={() => setActiveProperty("ame")}
						className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-md text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer touch-manipulation ${
							activeProperty === "ame"
								? "bg-gray-900 text-white shadow-md"
								: "text-gray-600 hover:text-gray-800 hover:bg-gray-50 active:bg-gray-200"
						}`}
						style={{ WebkitTapHighlightColor: "transparent" }}
					>
						Amethyst
					</button>
				</div>
			</div>

			{/* Header Section */}
			<AnimatePresence mode='wait'>
				<motion.div
					key={activeProperty}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.3 }}
					className='flex flex-col items-center text-center gap-2'
				>
					<span className='text-xl sm:text-2xl font-semibold'>
						{currentProperty.title}
					</span>
					<p className='text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl'>
						{currentProperty.description}
					</p>
				</motion.div>
			</AnimatePresence>

			{/* Listings Grid */}
			<AnimatePresence mode='wait'>
				<motion.div
					key={`${activeProperty}-grid`}
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -30 }}
					transition={{ duration: 0.4, delay: 0.1 }}
					className='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mt-6'
				>
					{currentProperty.listings.map((apartment, index) => (
						<motion.div
							key={apartment.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							className='space-y-4 sm:space-y-6'
						>
							<Link
								href={`/properties/${apartment.id}`}
								className='block p-3 sm:p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-primary/20 group'
							>
								<div className='relative overflow-hidden rounded-lg mb-3 sm:mb-4'>
									<Image
										src={apartment.mainImg}
										alt={apartment.title}
										width={400}
										height={200}
										className='w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105'
									/>
									<div
										className={`absolute top-2 right-2 ${
											activeProperty === "emerald"
												? "bg-emerald-500"
												: "bg-amber-500"
										} text-white px-2 py-1 rounded-full text-xs font-medium`}
									>
										{activeProperty === "emerald"
											? "Emerald"
											: "Oak West"}
									</div>
								</div>

								<h3 className='text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors'>
									{apartment.title} (
									{activeProperty === "emerald" ? "Emerald" : "Oak"})
								</h3>

								<p className='text-gray-600 mb-2 text-sm sm:text-base font-medium'>
									{apartment.avgPrice}
								</p>

								<div className='flex items-center text-gray-500 text-sm sm:text-base mb-3'>
									<Icon
										icon='mdi:map-marker'
										className='w-4 h-4 mr-1'
									/>
									{apartment.location}
								</div>

								<button className='w-full mt-3 py-3 sm:py-4 text-sm sm:text-base bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2'>
									<Icon icon='mdi:shield-check' className='w-4 h-4' />
									Secure Your Spot
								</button>
							</Link>
						</motion.div>
					))}
				</motion.div>
			</AnimatePresence>

			{/* Stats Section */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}
				className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'
			>
				<div className='text-center p-6 bg-white rounded-lg border border-gray-200'>
					<div
						className={`text-3xl font-bold ${
							activeProperty === "emerald"
								? "text-emerald-600"
								: "text-amber-600"
						} mb-2`}
					>
						{currentProperty.listings.length}
					</div>
					<div className='text-gray-600'>Available Units</div>
				</div>

				<div className='text-center p-6 bg-white rounded-lg border border-gray-200'>
					<div
						className={`text-3xl font-bold ${
							activeProperty === "emerald"
								? "text-emerald-600"
								: "text-amber-600"
						} mb-2`}
					>
						{activeProperty === "emerald" ? "25" : "20"}
					</div>
					<div className='text-gray-600'>Floors</div>
				</div>

				<div className='text-center p-6 bg-white rounded-lg border border-gray-200'>
					<div
						className={`text-3xl font-bold ${
							activeProperty === "emerald"
								? "text-emerald-600"
								: "text-amber-600"
						} mb-2`}
					>
						30
					</div>
					<div className='text-gray-600'>Months Payment Plan</div>
				</div>
			</motion.div>

			{/* Call to Action */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				className='mt-12 text-center'
			>
				<div className='bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8'>
					<h3 className='text-2xl font-bold text-gray-900 mb-4'>
						Ready to Find Your Dream Home?
					</h3>
					<p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
						Schedule a tour today and experience the luxury and
						comfort of {currentProperty.title}. Our team is ready to
						help you find the perfect unit.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/contact'>
							<button
								className={`px-8 py-4 bg-gradient-to-r ${
									activeProperty === "emerald"
										? "from-emerald-500 to-emerald-600"
										: "from-amber-500 to-amber-600"
								} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
							>
								<Icon icon='mdi:calendar' className='w-5 h-5' />
								Schedule a Tour
							</button>
						</Link>
						<Link href='/properties'>
							<button className='px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2'>
								<Icon icon='mdi:home-search' className='w-5 h-5' />
								View All Properties
							</button>
						</Link>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default PropsNav;
