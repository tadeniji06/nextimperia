"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { logo } from "@/assets";
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
						className='bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden relative'
						onClick={(e) => e.stopPropagation()}
					>
						{/* Header */}
						<div className='bg-gradient-to-r from-primary to-red-600 p-6 text-white relative'>
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
								<h2 className='text-xl font-bold'>Special Offer!</h2>
							</div>

							<div className='flex items-center space-x-2'>
								<Icon icon='mdi:tag' className='text-yellow-300' />
								<span className='text-sm font-medium'>
									Limited Time Only
								</span>
							</div>
						</div>

						{/* Content */}
						<div className='p-6'>
							<h3 className='text-lg font-bold text-gray-800 mb-3'>
								3-Bedroom Units at Oak West Residency
							</h3>

							<div className='space-y-4 text-gray-600'>
								<p className='text-sm leading-relaxed'>
									We are excited to share some fantastic news with
									you! Our 3-bedroom units at Oak West Residency are
									now available with special pricing.
								</p>

								{/* Pricing Highlight */}
								<div className='bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 border-l-4 border-primary'>
									<div className='flex items-center space-x-2 mb-2'>
										<Icon icon='mdi:home' className='text-primary' />
										<span className='font-semibold text-gray-800'>
											Starting from:
										</span>
									</div>
									<div className='text-2xl font-bold text-primary'>
										16,900,000 KSH
									</div>
									<div className='text-sm text-gray-600'>
										($132,000 USD)
									</div>
									<div className='mt-2 text-sm'>
										<span className='bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium'>
											Only 30% deposit required
										</span>
									</div>
								</div>

								<p className='text-sm'>
									This is a limited-time opportunity to own a
									spacious, modern 3-bedroom residence in one of the
									most sought-after developments.
								</p>

								<div className='flex items-center space-x-2 text-sm text-amber-600 bg-amber-50 p-3 rounded-lg'>
									<Icon
										icon='mdi:clock-alert'
										className='text-amber-500'
									/>
									<span className='font-medium'>
										Don't miss out - secure your unit today!
									</span>
								</div>
							</div>

							{/* Action Buttons */}
							<div className='flex space-x-3 mt-6'>
								<motion.button
									variants={buttonVariants}
									whileHover='hover'
									whileTap='tap'
									onClick={handleViewProperty}
									className='flex-1 bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl'
								>
									<Icon icon='mdi:home' />
									<span>View Property</span>
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
						<div className='bg-gray-50 px-6 py-3 text-center border-t'>
							<p className='text-xs text-gray-500'>
								<strong className='text-primary'>
									Imperia Consulting
								</strong>{" "}
								- Your Dream Home Awaits
							</p>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Announcement;
