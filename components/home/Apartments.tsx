"use client";

import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
	brooksideForestOne,
	oakOneBed,
	emeraldOneBed,
	aria,
	oakRise,
	amet,
} from "@/utils/listings";
import Image from "next/image";
import { motion } from "framer-motion";

const Apartments = () => {
	const featuredApartments = [
		{
			data: brooksideForestOne[0],
			badge: "F.O.R",
			badgeColor: "bg-green-600",
		},
		{
			data: oakRise[0],
			badge: "Oak Rise",
			badgeColor: "bg-blue-500",
		},
		{
			data: oakOneBed[0],
			badge: "Oak West",
			badgeColor: "bg-amber-500",
		},
		{
			data: emeraldOneBed[0],
			badge: "Emerald",
			badgeColor: "bg-emerald-500",
		},
		{
			data: aria[0],
			badge: "Aria Park",
			badgeColor: "bg-purple-500",
		},
		{
			data: amet[0],
			badge: "Amethyst",
			badgeColor: "bg-indigo-500",
		},
	];

	return (
		<div className='flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 sm:px-6 md:px-12 lg:px-24 xl:px-48'>
			{/* Header Section */}
			<div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0'>
				<div>
					<span className='text-xl sm:text-2xl font-semibold'>
						Featured Apartments
					</span>
				</div>
				<div className='flex items-center'>
					<Link
						href='/properties'
						className='text-sm sm:text-base hover:underline text-primary hover:text-primary/80 transition-colors'
					>
						View All Listings
					</Link>
					<Icon
						icon='ri-arrow-right-s-line'
						className='ml-2 text-gray-500'
					/>
				</div>
			</div>

			{/* Description */}
			<div className='mt-3 sm:mt-4'>
				<p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
					Explore handpicked project developments and apartments
					designed for luxury, comfort, and long-term value.
				</p>
			</div>

			{/* Apartments Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6'>
				{featuredApartments.map((apartment, index) => (
					<motion.div
						key={apartment.data.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<Link
							href={`/properties/${apartment.data.id}`}
							className='block p-3 sm:p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-primary/20 group h-full flex flex-col'
						>
							<div className='relative overflow-hidden rounded-lg mb-3 sm:mb-4'>
								<Image
									src={apartment.data.mainImg}
									alt={apartment.data.title}
									width={400}
									height={200}
									className='w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105'
								/>
								<div className={`absolute top-2 right-2 text-white px-2 py-1 rounded-full text-xs font-medium ${apartment.badgeColor}`}>
									{apartment.badge}
								</div>
							</div>

							<h3 className='text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1'>
								{apartment.data.title}
							</h3>

							<p className='text-gray-600 mb-2 text-sm sm:text-base font-medium line-clamp-1'>
								{apartment.data.avgPrice}
							</p>

							<div className='flex items-center text-gray-500 text-sm sm:text-base mb-3 mt-auto'>
								<Icon
									icon='mdi:map-marker'
									className='w-4 h-4 mr-1 flex-shrink-0'
								/>
								<span className="line-clamp-1">{apartment.data.location}</span>
							</div>

							<button className='w-full mt-3 py-3 sm:py-4 text-sm sm:text-base bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300'>
								Secure Your Spot
							</button>
						</Link>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Apartments;
