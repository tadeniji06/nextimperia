"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { reviewsData } from "@/utils/data";
import Link from "next/link";

export default function ReviewsPage() {
	return (
		<div className="min-h-screen bg-gray-50 pt-24 pb-20">
			{/* Page Header */}
			<div className="text-center px-4 mb-16 relative">
				<div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
				
				<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-primary text-sm font-bold uppercase tracking-widest mb-4 relative z-10">
					<Icon icon="mdi:star-circle-outline" className="text-xl" />
					Testimonials
				</span>
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 relative z-10">
					Trusted by Investors <br className="hidden sm:block" />
					<span className="text-primary">Worldwide</span>
				</h1>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
					Read genuine stories from diaspora investors who have successfully grown their wealth through premium real estate with Imperia Consulting.
				</p>
			</div>

			{/* Reviews Grid */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
					{reviewsData.map((review, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							className="break-inside-avoid bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 relative group"
						>
							<Icon 
								icon="mdi:format-quote-open" 
								className="absolute top-6 left-6 text-6xl text-primary/5 group-hover:text-primary/10 transition-colors" 
							/>
							
							<div className="relative z-10">
								<div className="flex gap-1 mb-6">
									{[...Array(5)].map((_, i) => (
										<Icon key={i} icon="mdi:star" className="text-xl text-yellow-500" />
									))}
								</div>
								
								<p className="text-gray-700 leading-relaxed mb-8 italic">
									"{review.text}"
								</p>
								
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-black text-primary text-xl">
										{review.author.charAt(0)}
									</div>
									<div>
										<h4 className="font-bold text-gray-900">{review.author}</h4>
										<p className="text-sm font-semibold text-primary mt-0.5">{review.role}</p>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* CTA Section */}
			<div className="mt-24 text-center px-4 relative z-10">
				<div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-3xl p-10 sm:p-16 shadow-xl">
					<h2 className="text-3xl font-black text-gray-900 mb-4">
						Ready to Start Your Investment Journey?
					</h2>
					<p className="text-gray-600 mb-8 max-w-xl mx-auto">
						Join our growing community of successful global investors. Browse our premium properties and take the first step towards securing your future.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link 
							href="/properties"
							className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1"
						>
							View Properties
							<Icon icon="mdi:arrow-right" className="text-xl" />
						</Link>
						<Link 
							href="/contact"
							className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all"
						>
							Speak to an Advisor
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
