"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { slides } from "@/utils/data";
import Clarity from "@microsoft/clarity";

const Hero = () => {
	const projectId = "sc89s3h9mh";

	useEffect(() => {
		Clarity.init(projectId);
	}, []);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	useEffect(() => {
		if (!isAutoPlaying) return;
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 6000);
		return () => clearInterval(interval);
	}, [isAutoPlaying]);

	const changeSlide = (newIndex: number) => {
		setCurrentSlide(newIndex);
		setIsAutoPlaying(false);
		setTimeout(() => setIsAutoPlaying(true), 8000);
	};

	const nextSlide = () =>
		changeSlide((currentSlide + 1) % slides.length);

	const prevSlide = () =>
		changeSlide((currentSlide - 1 + slides.length) % slides.length);

	const goToSlide = (index: number) => changeSlide(index);

	const SlideImage = ({
		slide,
		index,
	}: {
		slide: any;
		index: number;
		isActive: boolean;
	}) => {
		const [imageError, setImageError] = useState(false);

		return (
			<div className='relative h-full w-full'>
				{!imageError ? (
					<Image
						src={slide.img}
						alt={slide.title}
						fill
						className='object-cover'
						onError={() => setImageError(true)}
						priority={index === 0}
						quality={90}
					/>
				) : (
					<div className='h-full w-full bg-gradient-to-br from-gray-800 to-gray-900'>
						<div className='flex items-center justify-center h-full text-white/60'>
							<Icon icon='mdi:image-broken' className='w-16 h-16' />
						</div>
					</div>
				)}
				<div className='absolute inset-0 bg-black/50' />
				<div className='absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30' />
			</div>
		);
	};

	return (
		<section className='relative h-screen overflow-hidden'>
			<AnimatePresence mode='wait'>
				<motion.div
					key={currentSlide}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.6 }}
					className='absolute inset-0 z-0'
				>
					<SlideImage
						slide={slides[currentSlide]}
						index={currentSlide}
						isActive={true}
					/>
				</motion.div>
			</AnimatePresence>

			{/* Main Content */}
			<div className='relative z-10 h-full flex items-center'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
					<div className='grid lg:grid-cols-2 gap-12 items-center h-full'>
						<motion.div
							key={`content-${currentSlide}`}
							initial={{ x: -30, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className='text-white space-y-6 md:space-y-8'
						>
							<motion.div
								initial={{ scale: 0.9, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.3, delay: 0.1 }}
								className='inline-block'
							>
								<span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary/20 border border-primary/30 text-primary-foreground backdrop-blur-sm'>
									<Icon
										icon='mdi:star'
										className='w-4 h-4 mr-2 text-yellow-400'
									/>
									{slides[currentSlide].accent}
								</span>
							</motion.div>

							<motion.h1
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight'
							>
								{slides[currentSlide].title}
							</motion.h1>

							<motion.p
								initial={{ y: 15, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className='text-lg text-gray-100 max-w-2xl leading-relaxed'
							>
								{slides[currentSlide].body}
							</motion.p>

							<motion.div
								initial={{ y: 15, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.4 }}
								className='flex flex-col sm:flex-row gap-4 pt-4'
							>
								<Link href='/properties'>
									<button className='px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 text-white rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl'>
										Explore Properties
									</button>
								</Link>
								<Link href='/contact'>
									<button className='px-8 py-4 text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-xl transition-all duration-200 transform hover:scale-105'>
										Contact Us
									</button>
								</Link>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Navigation Controls */}
			<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'>
				<div className='flex space-x-3'>
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === currentSlide
									? "bg-primary scale-110 shadow-lg"
									: "bg-white/50 hover:bg-white/75"
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>

			{/* Arrow Navigation */}
			<button
				onClick={prevSlide}
				className='absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-200 hover:scale-110'
				aria-label='Previous slide'
			>
				<Icon icon='mdi:chevron-left' className='w-6 h-6' />
			</button>

			<button
				onClick={nextSlide}
				className='absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-200 hover:scale-110'
				aria-label='Next slide'
			>
				<Icon icon='mdi:chevron-right' className='w-6 h-6' />
			</button>

			{/* Progress Bar */}
			<div className='absolute bottom-0 left-0 w-full h-1 bg-black/30 z-20'>
				<motion.div
					key={currentSlide}
					className='h-full bg-primary'
					initial={{ width: "0%" }}
					animate={{ width: "100%" }}
					transition={{ duration: 6, ease: "linear" }}
				/>
			</div>
		</section>
	);
};

export default Hero;
