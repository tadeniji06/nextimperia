"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { logo, amety } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Announcement = () => {
	const [isVisible, setIsVisible] = useState(false);
	const router = useRouter();

	const handleViewProperty = () => {
		setIsVisible(false);
		router.push("/properties");
	};

	useEffect(() => {
		const checkAndShowAnnouncement = () => {
			const lastShown = localStorage.getItem("announcementLastShown");
			const isFirstTime = localStorage.getItem("hasVisited") === null;
			const now = Date.now();

			// Show immediately for first-time users
			if (isFirstTime) {
				setIsVisible(true);
				localStorage.setItem("hasVisited", "true");
				localStorage.setItem("announcementLastShown", now.toString());
				return;
			}

			// For returning users, check if 5 minutes have passed
			if (lastShown) {
				const timeDiff = now - parseInt(lastShown);
				const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds
				if (timeDiff >= fiveMinutes) {
					setIsVisible(true);
					localStorage.setItem(
						"announcementLastShown",
						now.toString()
					);
				}
			} else {
				// If no record exists, show the announcement
				setIsVisible(true);
				localStorage.setItem("announcementLastShown", now.toString());
			}
		};

		// Check immediately on mount
		checkAndShowAnnouncement();

		// Set up interval to check every minute
		const interval = setInterval(checkAndShowAnnouncement, 60000);

		return () => clearInterval(interval);
	}, []);

	const handleClose = () => {
		setIsVisible(false);
	};

	// Properly typed variants
	const overlayVariants: Variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.2,
				ease: "easeIn",
			},
		},
	};

	const modalVariants: Variants = {
		hidden: {
			opacity: 0,
			scale: 0.8,
			y: 50,
		},
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 300,
				delay: 0.1,
			},
		},
		exit: {
			opacity: 0,
			scale: 0.8,
			y: 50,
			transition: {
				duration: 0.2,
			},
		},
	};

	const buttonVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
		hover: {
			scale: 1.02,
		},
		tap: {
			scale: 0.98,
		},
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					variants={overlayVariants}
					initial='hidden'
					animate='visible'
					exit='exit'
					className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4'
					onClick={handleClose}
				>
					<motion.div
						variants={modalVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
						className='bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden relative'
						onClick={(e) => e.stopPropagation()}
					>
						{/* Header */}
						<div className='bg-gradient-to-r from-purple-600 to-indigo-700 p-6 text-white relative'>
							<button
								onClick={handleClose}
								className='absolute top-4 right-4 text-white/80 hover:text-white transition-colors duration-200 p-1 rounded-full hover:bg-white/10'
								aria-label='Close announcement'
							>
								<Icon icon='mdi:close' className='text-xl' />
							</button>

							<div className='flex items-center space-x-3 mb-2'>
								<div className='w-10 h-10 relative bg-white/10 rounded-lg p-1'>
									<Image
										src={logo}
										alt='Imperia Consulting'
										fill
										className='object-contain'
									/>
								</div>
								<h2 className='text-xl font-bold'>
									Exclusive Launch!
								</h2>
							</div>

							<div className='flex items-center space-x-2'>
								<Icon
									icon='mdi:diamond-stone'
									className='text-yellow-300'
								/>
								<span className='text-sm font-medium'>
									Premium Property Available
								</span>
							</div>
						</div>

						{/* Amethyst Flyer Image */}
						<div className='relative h-80 bg-gradient-to-br from-purple-50 to-indigo-50'>
							<Image
								src={amety}
								alt='Amethyst Property'
								fill
								className='object-contain p-2'
							/>
							<div className='absolute top-4 left-4'>
								<span className='bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
									New Launch
								</span>
							</div>
						</div>

						{/* Content */}
						<div className='p-4'>
							<h3 className='text-lg font-bold text-gray-800 mb-2 flex items-center space-x-2'>
								<Icon
									icon='mdi:diamond-stone'
									className='text-purple-600'
								/>
								<span>The Amethyst</span>
							</h3>

							<div className='space-y-3 text-gray-600'>
								<p className='text-sm leading-relaxed'>
									Discover luxury living at The Amethyst - where
									elegance meets modern sophistication.
								</p>

								{/* Key Features */}
								<div className='bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-3 border-l-4 border-purple-600'>
									<div className='flex items-center space-x-2 mb-2'>
										<Icon
											icon='mdi:star'
											className='text-purple-600'
										/>
										<span className='font-semibold text-gray-800 text-sm'>
											Premium Features:
										</span>
									</div>
									<div className='grid grid-cols-2 gap-1 text-xs'>
										<div className='flex items-center space-x-1'>
											<Icon
												icon='mdi:check-circle'
												className='text-green-500 text-xs'
											/>
											<span>Luxury Finishes</span>
										</div>
										<div className='flex items-center space-x-1'>
											<Icon
												icon='mdi:check-circle'
												className='text-green-500 text-xs'
											/>
											<span>Prime Location</span>
										</div>
										<div className='flex items-center space-x-1'>
											<Icon
												icon='mdi:check-circle'
												className='text-green-500 text-xs'
											/>
											<span>Modern Amenities</span>
										</div>
										<div className='flex items-center space-x-1'>
											<Icon
												icon='mdi:check-circle'
												className='text-green-500 text-xs'
											/>
											<span>Secure Environment</span>
										</div>
									</div>
								</div>

								<div className='flex items-center space-x-2 text-sm text-purple-700 bg-purple-50 p-2 rounded-lg'>
									<Icon
										icon='mdi:clock-alert'
										className='text-purple-600'
									/>
									<span className='font-medium text-xs'>
										Limited units available - Reserve yours today!
									</span>
								</div>
							</div>

							{/* Action Buttons */}
							<div className='flex space-x-3 mt-4'>
								<motion.button
									variants={buttonVariants}
									whileHover='hover'
									whileTap='tap'
									onClick={handleViewProperty}
									className='flex-1 bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl'
								>
									<Icon icon='mdi:diamond-stone' />
									<span>View Details</span>
								</motion.button>

								<motion.button
									variants={buttonVariants}
									whileHover='hover'
									whileTap='tap'
									onClick={handleClose}
									className='px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium'
								>
									Later
								</motion.button>
							</div>
						</div>

						{/* Footer */}
						<div className='bg-gray-50 px-4 py-2 text-center border-t'>
							<p className='text-xs text-gray-500'>
								<strong className='text-purple-600'>
									Imperia Consulting
								</strong>{" "}
								- Luxury Living Redefined
							</p>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Announcement;
