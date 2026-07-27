"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11 } from "@/assets";
import { WALink } from "@/utils/data";

interface GalleryFolder {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	coverImage: any;
	photos: any[];
	videos: { id: number; src: string; title: string }[];
}

const foldersData: GalleryFolder[] = [
	{
		id: "the-launch",
		title: "The Launch Event",
		subtitle: "Grand Premiere",
		description: "A look back at the exclusive event celebrating the premiere of Imperia Consulting in Kenya.",
		coverImage: t3,
		photos: [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11],
		videos: [
			{ id: 1, src: "/main1.mp4", title: "Official Launch Highlights" }
		],
	},
	// Add more folders below as new media becomes available
];

export default function LaunchPage() {
	const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
	const [activeTab, setActiveTab] = useState<"all" | "photo" | "video">("all");
	const [selectedMedia, setSelectedMedia] = useState<{ type: "photo" | "video"; src: any; title?: string } | null>(null);

	const activeFolder = foldersData.find((f) => f.id === selectedFolderId);

	return (
		<div className='bg-white text-gray-900 min-h-screen font-sans selection:bg-primary selection:text-white pt-24 pb-20'>
			{/* Hero Header */}
			<section className='py-12 px-6 border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white'>
				<div className='max-w-7xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
					>
						<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4'>
							<Icon icon='mdi:folder-multiple-image' className='text-lg' />
							Imperia Media Gallery
						</div>
						<h1 className='text-4xl md:text-6xl font-bold tracking-tight mb-4'>
							Events & <span className='text-primary'>Media Gallery</span>
						</h1>
						<p className='text-lg text-gray-500 max-w-2xl leading-relaxed'>
							Browse through our curated event folders and launch memories. Select a folder to view photos and videos.
						</p>
					</motion.div>
				</div>
			</section>

			<section className='py-12 px-6'>
				<div className='max-w-7xl mx-auto'>
					{/* Navigation / Breadcrumb if folder selected */}
					{selectedFolderId && (
						<div className='mb-8 flex items-center gap-4'>
							<button
								onClick={() => {
									setSelectedFolderId(null);
									setActiveTab("all");
								}}
								className='inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded-lg transition-colors'
							>
								<Icon icon='mdi:arrow-left' className='text-lg' />
								All Folders
							</button>
							<span className='text-gray-400'>/</span>
							<span className='text-gray-900 font-bold text-lg'>{activeFolder?.title}</span>
						</div>
					)}

					{/* FOLDER SELECTION GRID (Root view) */}
					{!selectedFolderId && (
						<div>
							<h2 className='text-2xl font-bold mb-6 flex items-center gap-2'>
								<Icon icon='mdi:folder-outline' className='text-primary text-2xl' />
								Categories & Event Folders
							</h2>
							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
								{foldersData.map((folder) => (
									<motion.div
										key={folder.id}
										whileHover={{ y: -6 }}
										className='group cursor-pointer bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300'
										onClick={() => setSelectedFolderId(folder.id)}
									>
										<div className='relative h-64 overflow-hidden bg-gray-100'>
											<Image
												src={folder.coverImage}
												alt={folder.title}
												fill
												className='object-cover group-hover:scale-105 transition-transform duration-500'
											/>
											<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />
											<div className='absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-900 flex items-center gap-1.5 shadow-sm'>
												<Icon icon='mdi:image-multiple' className='text-primary' />
												{folder.photos.length} Photos
												{folder.videos.length > 0 && ` • ${folder.videos.length} Video`}
											</div>
											<div className='absolute bottom-4 left-4 right-4 text-white'>
												<p className='text-xs font-bold uppercase tracking-wider text-primary mb-1'>
													{folder.subtitle}
												</p>
												<h3 className='text-2xl font-bold leading-snug'>{folder.title}</h3>
											</div>
										</div>
										<div className='p-5 flex items-center justify-between bg-gray-50/50 border-t border-gray-100'>
											<p className='text-sm text-gray-600 line-clamp-1'>{folder.description}</p>
											<span className='inline-flex items-center text-primary text-sm font-bold shrink-0 ml-2 group-hover:translate-x-1 transition-transform'>
												Open Folder
												<Icon icon='mdi:chevron-right' className='text-lg' />
											</span>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					)}

					{/* FOLDER CONTENTS VIEW */}
					{activeFolder && (
						<div>
							{/* Filter Tabs */}
							<div className='flex justify-center mb-10'>
								<div className='inline-flex p-1 bg-gray-100 rounded-xl border border-gray-200'>
									<button
										onClick={() => setActiveTab("all")}
										className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
											activeTab === "all" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
										}`}
									>
										All ({activeFolder.photos.length + activeFolder.videos.length})
									</button>
									<button
										onClick={() => setActiveTab("photo")}
										className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
											activeTab === "photo" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
										}`}
									>
										Photos ({activeFolder.photos.length})
									</button>
									{activeFolder.videos.length > 0 && (
										<button
											onClick={() => setActiveTab("video")}
											className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
												activeTab === "video" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
											}`}
										>
											Videos ({activeFolder.videos.length})
										</button>
									)}
								</div>
							</div>

							{/* Gallery Grid */}
							<AnimatePresence mode='wait'>
								<motion.div
									key={activeTab}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0 }}
									className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
								>
									{/* Render Videos */}
									{(activeTab === "all" || activeTab === "video") &&
										activeFolder.videos.map((vid) => (
											<motion.div
												key={`vid-${vid.id}`}
												className='group cursor-pointer rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white'
												onClick={() => setSelectedMedia({ type: "video", src: vid.src, title: vid.title })}
											>
												<div className='relative aspect-video overflow-hidden bg-black'>
													<video
														muted
														loop
														playsInline
														onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
														onMouseLeave={(e) => (e.currentTarget as HTMLVideoElement).pause()}
														className='w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity'
													>
														<source src={vid.src} type='video/mp4' />
													</video>
													<div className='absolute inset-0 flex items-center justify-center'>
														<div className='w-16 h-16 rounded-full bg-white/90 shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform'>
															<Icon icon='mdi:play' className='text-3xl text-primary ml-1' />
														</div>
													</div>
												</div>
												<div className='p-4 flex items-center justify-between'>
													<h4 className='font-bold text-gray-900 text-sm'>{vid.title}</h4>
													<span className='text-xs font-semibold px-2.5 py-1 bg-red-50 text-primary rounded-full'>
														Video
													</span>
												</div>
											</motion.div>
										))}

									{/* Render Photos */}
									{(activeTab === "all" || activeTab === "photo") &&
										activeFolder.photos.map((img, i) => (
											<motion.div
												key={`photo-${i}`}
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: i * 0.03 }}
												className='relative aspect-square overflow-hidden rounded-2xl group cursor-pointer bg-gray-100 border border-gray-200 shadow-sm'
												onClick={() => setSelectedMedia({ type: "photo", src: img })}
											>
												<Image
													src={img}
													alt={`Launch photo ${i + 1}`}
													fill
													className='object-cover transition-transform duration-500 group-hover:scale-105'
												/>
												<div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center'>
													<div className='w-12 h-12 rounded-full bg-white/90 text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-lg'>
														<Icon icon='mdi:magnify-plus-outline' className='text-xl' />
													</div>
												</div>
											</motion.div>
										))}
								</motion.div>
							</AnimatePresence>
						</div>
					)}
				</div>
			</section>

			{/* Lightbox Modal */}
			<AnimatePresence>
				{selectedMedia && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4'
						onClick={() => setSelectedMedia(null)}
					>
						<motion.div
							initial={{ scale: 0.95 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.95 }}
							className='relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center'
							onClick={(e) => e.stopPropagation()}
						>
							<button
								onClick={() => setSelectedMedia(null)}
								className='absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors flex items-center gap-2 font-bold text-sm bg-white/10 px-3 py-1.5 rounded-full'
							>
								Close
								<Icon icon='mdi:close' className='text-lg' />
							</button>

							{selectedMedia.type === "photo" ? (
								<div className='relative w-full h-[75vh] rounded-2xl overflow-hidden'>
									<Image
										src={selectedMedia.src}
										alt='Lightbox preview'
										fill
										className='object-contain'
									/>
								</div>
							) : (
								<video
									autoPlay
									controls
									className='w-full h-auto max-h-[75vh] rounded-2xl shadow-2xl'
								>
									<source src={selectedMedia.src} type='video/mp4' />
								</video>
							)}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Footer CTA */}
			<section className='py-16 px-6 bg-gray-50 border-t border-gray-100 mt-12'>
				<div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
					<div>
						<h2 className='text-3xl font-bold mb-2'>Imperia Consulting</h2>
						<p className='text-gray-500'>Redefining Luxury Living and Property Investments in Kenya</p>
					</div>
					<div className='flex gap-4'>
						<a
							href={WALink.link}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-md'
						>
							<Icon icon='ic:baseline-whatsapp' className='text-lg' />
							Chat on WhatsApp
						</a>
						<Link
							href='/properties'
							className='inline-flex items-center gap-2 px-6 py-3.5 border border-gray-300 rounded-xl text-sm font-bold text-gray-800 hover:bg-gray-100 transition-all'
						>
							View Properties
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}


