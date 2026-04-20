"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11 } from "@/assets";

const images = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11];
const videos = [
	{ id: 1, src: "/main1.mp4", title: "Official Launch Video" },
	// { id: 2, src: "/vid2.mp4", title: "The Experience" },
	// { id: 3, src: "/vid3.mp4", title: "Behind the Scenes" },
	// { id: 4, src: "/vid4.mp4", title: "Event Highlights" },
];

export default function LaunchPage() {
	const [activeTab, setActiveTab] = useState<"photo" | "video">("photo");
	const [selectedMedia, setSelectedMedia] = useState<{ type: "photo" | "video"; src: any } | null>(null);

	return (
		<div className='bg-white text-black min-h-screen font-sans selection:bg-primary selection:text-white'>
			{/* Clean Hero */}
			<section className='pt-32 pb-20 px-6 border-b border-gray-100'>
				<div className='max-w-7xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className='text-5xl md:text-7xl font-bold tracking-tight mb-6'>
							The Launch
						</h1>
						<p className='text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed'>
							A look back at the exclusive event celebrating the premiere of Imperia in Kenya. 
							Explore the moments and motion that defined the evening.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className='py-20 px-6'>
				<div className='max-w-7xl mx-auto'>
					{/* Simple Toggle */}
					<div className='flex justify-center mb-16'>
						<div className='inline-flex p-1 bg-gray-100 rounded-lg'>
							<button
								onClick={() => setActiveTab("photo")}
								className={`px-8 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
									activeTab === "photo" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"
								}`}
							>
								Photo
							</button>
							<button
								onClick={() => setActiveTab("video")}
								className={`px-8 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
									activeTab === "video" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"
								}`}
							>
								Video
							</button>
						</div>
					</div>

					{/* Grid */}
					<div className='min-h-[600px]'>
						<AnimatePresence mode='wait'>
							{activeTab === "photo" ? (
								<motion.div
									key='photo'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
								>
									{images.map((img, i) => (
										<motion.div
											key={i}
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: i * 0.05 }}
											className='relative aspect-square overflow-hidden rounded-xl group cursor-pointer bg-gray-50'
											onClick={() => setSelectedMedia({ type: "photo", src: img })}
										>
											<Image
												src={img}
												alt={`Launch photo ${i + 1}`}
												fill
												className='object-cover transition-transform duration-500 group-hover:scale-105'
											/>
											<div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300' />
										</motion.div>
									))}
								</motion.div>
							) : (
								<motion.div
									key='video'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className='grid grid-cols-1 md:grid-cols-2 gap-8'
								>
									{videos.map((vid, i) => (
										<motion.div
											key={vid.id}
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: i * 0.1 }}
											className='group cursor-pointer'
											onClick={() => setSelectedMedia({ type: "video", src: vid.src })}
										>
											<div className='relative aspect-video overflow-hidden rounded-xl bg-gray-100 border border-gray-100'>
												<video
													muted
													loop
													playsInline
													onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
													onMouseLeave={(e) => (e.currentTarget as HTMLVideoElement).pause()}
													className='w-full h-full object-cover'
												>
													<source src={vid.src} type='video/mp4' />
												</video>
												<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
													<div className='w-16 h-16 rounded-full bg-white/90 shadow-xl flex items-center justify-center'>
														<svg className='w-6 h-6 text-black ml-1' fill='currentColor' viewBox='0 0 24 24'>
															<path d='M8 5v14l11-7z' />
														</svg>
													</div>
												</div>
											</div>
											<div className='mt-4'>
												<h3 className='text-lg font-semibold text-gray-900'>{vid.title}</h3>
												{/* <p className='text-sm text-gray-500'>Video {vid.id}</p> */}
											</div>
										</motion.div>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</section>

			{/* Lightbox */}
			<AnimatePresence>
				{selectedMedia && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4'
						onClick={() => setSelectedMedia(null)}
					>
						<motion.div
							initial={{ scale: 0.95 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.95 }}
							className='relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center'
							onClick={(e) => e.stopPropagation()}
						>
							{selectedMedia.type === "photo" ? (
								<Image
									src={selectedMedia.src}
									alt='Lightbox'
									className='object-contain w-full h-auto max-h-[85vh] rounded-lg'
								/>
							) : (
								<video
									autoPlay
									controls
									className='w-full h-auto max-h-[85vh] rounded-lg'
								>
									<source src={selectedMedia.src} type='video/mp4' />
								</video>
							)}
							<button
								onClick={() => setSelectedMedia(null)}
								className='absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors flex items-center gap-2 font-medium'
							>
								Close
								<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
								</svg>
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Footer Info */}
			<section className='py-20 px-6 bg-gray-50'>
				<div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
					<div>
						<h2 className='text-2xl font-bold mb-2'>Imperia Consulting</h2>
						<p className='text-gray-500'>The Future of Real Estate in Kenya</p>
					</div>
					<div className='flex gap-6 mt-4 md:mt-0'>
						<button className='px-6 py-2.5 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors'>
							Contact Us
						</button>
						<button className='px-6 py-2.5 border border-black rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors'>
							Learn More
						</button>
					</div>
				</div>
			</section>

			<footer className='py-12 border-t border-gray-100 text-center text-gray-400 text-sm'>
				<p>© {new Date().getFullYear()} Imperia Consulting. All Rights Reserved.</p>
			</footer>
		</div>
	);
}


