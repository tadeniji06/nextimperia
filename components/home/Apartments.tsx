"use client";

import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
	oakOneBed,
	emeraldOneBed,
	emeraldTwoBed,
} from "@/utils/listings";
import Image from "next/image";
import { motion } from "framer-motion";

const Apartments = () => {
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
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mt-6'>
				{/* Emerald One Bed */}
				<div className='space-y-4 sm:space-y-6'>
					{emeraldOneBed.map((apartment, index) => (
						<motion.div
							key={apartment.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
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
									<div className='absolute top-2 right-2 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium'>
										Emerald
									</div>
								</div>

								<h3 className='text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors'>
									{apartment.title}
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

								<button className='w-full mt-3 py-3 sm:py-4 text-sm sm:text-base bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300'>
									Secure Your Spot
								</button>
							</Link>
						</motion.div>
					))}
				</div>

				{/* Emerald Two Bed */}
				<div className='space-y-4 sm:space-y-6'>
					{emeraldTwoBed.map((apartment, index) => (
						<motion.div
							key={apartment.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay: (index + emeraldOneBed.length) * 0.1,
							}}
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
									<div className='absolute top-2 right-2 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium'>
										Emerald
									</div>
								</div>

								<h3 className='text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors'>
									{apartment.title}
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

								<button className='w-full mt-3 py-3 sm:py-4 text-sm sm:text-base bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300'>
									Secure Your Spot
								</button>
							</Link>
						</motion.div>
					))}
				</div>

				{/* Oak One Bed */}
				<div className='space-y-4 sm:space-y-6'>
					{oakOneBed.map((apartment, index) => (
						<motion.div
							key={apartment.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay:
									(index +
										emeraldOneBed.length +
										emeraldTwoBed.length) *
									0.1,
							}}
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
									<div className='absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium'>
										Oak West
									</div>
								</div>

								<h3 className='text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors'>
									{apartment.title}
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

								<button className='w-full mt-3 py-3 sm:py-4 text-sm sm:text-base bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300'>
									Secure Your Spot
								</button>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Apartments;
