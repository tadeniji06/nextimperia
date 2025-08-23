"use client";
import { motion, Variants } from "framer-motion";
import { EmeraldFeat, OakFeat } from "@/utils/facility";
import {
	PropsFacilitiesProps,
	PropertyFeature,
} from "@/utils/property";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
	}),
};

const PropsFacilities = ({
	activeProperty,
}: PropsFacilitiesProps) => {
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);
	const features: PropertyFeature[] =
		activeProperty === "emerald" ? EmeraldFeat : OakFeat;

	const propertyColors = {
		emerald: "from-amber-500 to-orange-600",
		oak: "from-amber-500 to-orange-600",
	};

	return (
		<div className='px-4 sm:px-8 lg:px-24 xl:px-48 py-16'>
			{/* Section Header */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className='text-center mb-16'
			>
				<div className='inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4'>
					<Icon
						icon='mdi:star-four-points'
						className='w-4 h-4 mr-2'
					/>
					Premium Amenities
				</div>
				<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
					{activeProperty === "emerald"
						? "Amenities at Emerald Springs"
						: "Amenities at Oak West"}
				</h2>
				<div
					className={`w-24 h-1 bg-gradient-to-r ${propertyColors[activeProperty]} mx-auto rounded-full`}
				></div>
			</motion.div>

			{/* Features Grid */}
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
				{features.map((feature: PropertyFeature, i: number) => (
					<motion.div
						key={`${activeProperty}-${feature.title}-${i}`}
						custom={i}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={fadeUp}
						onHoverStart={() => setHoveredCard(i)}
						onHoverEnd={() => setHoveredCard(null)}
						className='group relative'
					>
						<div className='bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
							{/* Image Container */}
							<div className='relative overflow-hidden'>
								<Image
									src={feature.img}
									alt={feature.title}
									className='w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110'
									placeholder='blur'
								/>
								{/* Overlay */}
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

								{/* Floating Icon */}
								<motion.div
									initial={{ scale: 0, rotate: -180 }}
									animate={{
										scale: hoveredCard === i ? 1 : 0,
										rotate: hoveredCard === i ? 0 : -180,
									}}
									transition={{ duration: 0.3 }}
									className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${propertyColors[activeProperty]} rounded-full flex items-center justify-center shadow-lg`}
								>
									<Icon
										icon='mdi:check'
										className='w-6 h-6 text-white'
									/>
								</motion.div>
							</div>

							{/* Content */}
							<div className='p-6 sm:p-8'>
								<div className='flex items-start justify-between mb-4'>
									<h3 className='text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300'>
										{feature.title}
									</h3>
									<div
										className={`w-8 h-1 bg-gradient-to-r ${propertyColors[activeProperty]} rounded-full mt-2 transform origin-left transition-transform duration-500 group-hover:scale-x-150`}
									></div>
								</div>

								<p className='text-base sm:text-lg text-gray-600 leading-relaxed mb-6'>
									{feature.body}
								</p>

								{/* Learn More Button */}
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className='inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors duration-300'
								>
									<span>Learn More</span>
									<Icon
										icon='mdi:arrow-right'
										className='w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300'
									/>
								</motion.button>
							</div>
						</div>

						{/* Decorative Elements */}
						<div className='absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
						<div className='absolute -bottom-2 -left-2 w-6 h-6 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
					</motion.div>
				))}
			</div>

			{/* Call to Action */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.3 }}
				className='text-center mt-16'
			>
				<div className='bg-white rounded-2xl border border-gray-200 p-8 shadow-lg'>
					<h3 className='text-2xl font-bold text-gray-900 mb-4'>
						Ready to Experience Luxury Living?
					</h3>
					<p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
						Schedule a tour today and discover why{" "}
						{activeProperty === "emerald"
							? "Emerald Springs"
							: "Oak West"}{" "}
						is the perfect place to call home.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={`px-8 py-4 bg-gradient-to-r ${propertyColors[activeProperty]} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
						>
							<Icon
								icon='mdi:calendar'
								className='w-5 h-5 mr-2 inline'
							/>
							Schedule a Tour
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-all duration-300'
						>
							<Icon
								icon='mdi:phone'
								className='w-5 h-5 mr-2 inline'
							/>
							Contact Us
						</motion.button>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default PropsFacilities;
