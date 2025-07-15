"use client";

import { map } from "@/assets";
import { socials } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const Contact = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: true,
		margin: "-50px 0px",
	});

	const [formData, setFormData] = useState({ name: "", message: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		setIsSubmitting(true);

		setTimeout(() => {
			console.log("Form submitted:", formData);
			setIsSubmitting(false);
			setFormData({ name: "", message: "" });
		}, 2000);
	};

	// Properly typed variants
	const containerVariants: Variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const mapVariants: Variants = {
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
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const contentVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 50,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const formItemVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
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

	const socialLinkVariants: Variants = {
		hidden: {
			opacity: 0,
			scale: 0.8,
		},
		visible: {
			opacity: 1,
			scale: 1,
		},
		hover: {
			scale: 1.05,
		},
		tap: {
			scale: 0.95,
		},
	};

	return (
		<section className='bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12'>
			<motion.div
				ref={ref}
				initial='hidden'
				animate={isInView ? "visible" : "hidden"}
				variants={containerVariants}
				className='flex flex-col min-h-screen px-4 sm:px-6 lg:px-8'
			>
				{/* Header */}
				<motion.div
					variants={contentVariants}
					className='text-center mb-8 sm:mb-12'
				>
					<h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
						Get in Touch
					</h1>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Ready to find your dream property? Contact us today and
						let's make it happen.
					</p>
				</motion.div>

				{/* Map */}
				<motion.div
					variants={mapVariants}
					className='flex justify-center mb-10'
				>
					<div className='w-full max-w-6xl h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg'>
						<Image
							src={map}
							alt='Our Location'
							className='w-full h-full object-cover'
							width={1200}
							height={500}
							priority
						/>
					</div>
				</motion.div>

				{/* Contact Content */}
				<motion.div
					variants={containerVariants}
					className='max-w-6xl mx-auto w-full'
				>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
						{/* Contact Info & Socials */}
						<motion.div
							variants={contentVariants}
							className='space-y-8'
						>
							<div>
								<h2 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-4'>
									Connect with Us
								</h2>
								<p className='text-gray-600 mb-8 text-lg'>
									Reach out through social media, give us a call, or
									send us a message below.
								</p>

								{/* Contact Info */}
								<div className='space-y-6 mb-8'>
									<div className='flex items-center space-x-4'>
										<div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
											<Icon
												icon='material-symbols:phone'
												className='text-xl text-white'
											/>
										</div>
										<div>
											<p className='text-sm text-gray-500 uppercase tracking-wide'>
												Phone
											</p>
											<a
												href='tel:+254116071190'
												className='text-lg font-semibold text-gray-800 hover:text-primary transition-colors duration-200'
											>
												+254 116 071 190
											</a>
										</div>
									</div>

									<div className='flex items-center space-x-4'>
										<div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
											<Icon
												icon='material-symbols:location-on'
												className='text-xl text-white'
											/>
										</div>
										<div>
											<p className='text-sm text-gray-500 uppercase tracking-wide'>
												Location
											</p>
											<p className='text-lg font-semibold text-gray-800'>
												Nairobi, Kenya
											</p>
										</div>
									</div>
								</div>

								{/* Social Media */}
								<div>
									<h3 className='text-xl font-semibold text-gray-800 mb-4'>
										Follow Us
									</h3>
									<div className='grid grid-cols-2 gap-4'>
										{socials.map((item, idx) => (
											<motion.a
												key={idx}
												href={item.link}
												target='_blank'
												rel='noopener noreferrer'
												variants={socialLinkVariants}
												whileHover='hover'
												whileTap='tap'
												className='flex items-center space-x-3 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group'
											>
												<Icon
													icon={item.icon}
													className='text-2xl text-primary group-hover:scale-110 transition-transform duration-200'
												/>
												<span className='text-gray-700 font-medium group-hover:text-primary transition-colors duration-200'>
													{item.name}
												</span>
											</motion.a>
										))}
									</div>
								</div>
							</div>
						</motion.div>

						{/* Contact Form */}
						<motion.div
							variants={contentVariants}
							className='bg-white rounded-2xl shadow-xl p-6 sm:p-8'
						>
							<h2 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-6'>
								Send us a Message
							</h2>

							<form onSubmit={handleSubmit} className='space-y-6'>
								<motion.div
									variants={formItemVariants}
									initial='hidden'
									animate='visible'
									transition={{ delay: 0.4, duration: 0.5 }}
								>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Full Name *
									</label>
									<input
										type='text'
										name='name'
										value={formData.name}
										onChange={handleInputChange}
										required
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
										placeholder='Your full name'
									/>
								</motion.div>

								<motion.div
									variants={formItemVariants}
									initial='hidden'
									animate='visible'
									transition={{ delay: 0.5, duration: 0.5 }}
								>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Message *
									</label>
									<textarea
										name='message'
										value={formData.message}
										onChange={handleInputChange}
										required
										rows={5}
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-200'
										placeholder='How can we help you?'
									/>
								</motion.div>

								<motion.button
									type='submit'
									disabled={isSubmitting}
									variants={buttonVariants}
									initial='hidden'
									animate='visible'
									whileHover={isSubmitting ? undefined : "hover"}
									whileTap={isSubmitting ? undefined : "tap"}
									transition={{ delay: 0.6, duration: 0.5 }}
									className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
										isSubmitting
											? "bg-gray-400 cursor-not-allowed"
											: "bg-primary hover:bg-primary/90 hover:shadow-lg"
									}`}
								>
									{isSubmitting ? (
										<div className='flex items-center justify-center'>
											<motion.div
												animate={{ rotate: 360 }}
												transition={{
													duration: 1,
													repeat: Infinity,
													ease: "linear",
												}}
												className='w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2'
											/>
											Sending Message...
										</div>
									) : (
										"Send Message"
									)}
								</motion.button>
							</form>
						</motion.div>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Contact;
