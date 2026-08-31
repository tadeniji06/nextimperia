"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState, useRef } from "react";
import { reviewsData as reviews } from "@/utils/data";

export default function Reviews() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
			);
		}, 8000); // 8 seconds per slide

		return () => {
			resetTimeout();
		};
	}, [currentIndex]);

	return (
		<section className="py-20 bg-gray-50 overflow-hidden relative">
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center mb-16">
					<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-primary text-sm font-bold uppercase tracking-widest mb-4">
						<Icon icon="mdi:star-circle-outline" className="text-xl" />
						Testimonials
					</span>
					<h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
						What Our Global Investors Say
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Don't just take our word for it. Hear from diaspora investors who found their perfect Kenyan real estate opportunity with Imperia Consulting.
					</p>
				</div>

				<div className="relative max-w-4xl mx-auto">
					<div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full z-20 px-2 sm:px-0">
						<button
							onClick={() => setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))}
							className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-900 hover:text-primary hover:scale-110 transition-all -ml-6 sm:-ml-12 border border-gray-100"
						>
							<Icon icon="mdi:chevron-left" className="text-3xl" />
						</button>
						<button
							onClick={() => setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))}
							className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-900 hover:text-primary hover:scale-110 transition-all -mr-6 sm:-mr-12 border border-gray-100"
						>
							<Icon icon="mdi:chevron-right" className="text-3xl" />
						</button>
					</div>

					<div className="overflow-hidden bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
						<div className="flex items-center justify-center mb-6">
							{[...Array(5)].map((_, i) => (
								<Icon key={i} icon="mdi:star" className="text-2xl text-yellow-500" />
							))}
						</div>
						
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.5 }}
							className="text-center"
						>
							<Icon icon="mdi:format-quote-open" className="text-6xl text-primary/20 mx-auto mb-4" />
							<p className="text-xl sm:text-2xl font-medium text-gray-800 leading-relaxed mb-10 italic">
								"{reviews[currentIndex].text}"
							</p>
							
							<div>
								<h4 className="text-xl font-bold text-gray-900">{reviews[currentIndex].author}</h4>
								<p className="text-primary font-semibold mt-1">{reviews[currentIndex].role}</p>
							</div>
						</motion.div>
					</div>

					<div className="flex justify-center gap-3 mt-8">
						{reviews.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`transition-all duration-300 rounded-full ${
									currentIndex === index
										? "w-8 h-2.5 bg-primary"
										: "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
								}`}
								aria-label={`Go to review ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
