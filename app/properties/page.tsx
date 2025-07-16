"use client";
import { useState } from "react";
import PropsFacilities from "@/components/properties/PropsFacilities";
import { PropertyType } from "@/utils/property";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import PropsHero from "@/components/properties/PropsHero";
import PropsNav from "@/components/properties/PropsNav";

const PropertiesPage = () => {
	const [activeProperty, setActiveProperty] =
		useState<PropertyType>("emerald");

	const propertyInfo = {
		emerald: {
			name: "Emerald Springs",
			description:
				"Luxury living redefined with premium amenities and serene surroundings",
			color: "from-amber-500 to-orange-600",
		},
		oak: {
			name: "Oak West",
			description:
				"Modern sophistication meets comfort in this exclusive development",
			color: "from-amber-500 to-orange-600",
		},
	};

	const currentProperty = propertyInfo[activeProperty];

	return (
		<div>
			<PropsHero />
			<PropsNav />

			<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
				{/* Property Selection Tabs */}
				<div className='sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='flex justify-center space-x-1 py-4'>
							{(["emerald", "oak"] as PropertyType[]).map(
								(property) => (
									<motion.button
										key={property}
										onClick={() => setActiveProperty(property)}
										className={`relative px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-300 ${
											activeProperty === property
												? "text-white shadow-lg transform scale-105"
												: "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
										}`}
										whileHover={{
											scale:
												activeProperty === property ? 1.05 : 1.02,
										}}
										whileTap={{ scale: 0.98 }}
									>
										{activeProperty === property && (
											<motion.div
												layoutId='activeTab'
												className={`absolute inset-0 bg-gradient-to-r ${propertyInfo[property].color} rounded-xl`}
												transition={{
													type: "spring",
													bounce: 0.2,
													duration: 0.6,
												}}
											/>
										)}
										<span className='relative z-10 flex items-center space-x-2'>
											<Icon
												icon={
													property === "emerald"
														? "mdi:leaf"
														: "mdi:tree"
												}
												className='w-5 h-5'
											/>
											<span>{propertyInfo[property].name}</span>
										</span>
									</motion.button>
								)
							)}
						</div>
					</div>
				</div>

				{/* Property Info Banner */}
				<motion.div
					key={activeProperty}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='bg-white shadow-sm'
				>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
						<div className='text-center'>
							<h2 className='text-3xl font-bold text-gray-900 mb-2'>
								{currentProperty.name}
							</h2>
							<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
								{currentProperty.description}
							</p>
						</div>
					</div>
				</motion.div>
				<PropsFacilities activeProperty={activeProperty} />
			</div>
		</div>
	);
};

export default PropertiesPage;
