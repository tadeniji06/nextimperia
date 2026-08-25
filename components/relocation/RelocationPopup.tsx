"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { rlc } from "@/assets";
import RelocationFormModal from "./RelocationFormModal";

export default function RelocationPopup() {
	const [isOpen, setIsOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		const hasSeen = sessionStorage.getItem("hasSeenRelocationPopup");
		if (!hasSeen) {
			const timer = setTimeout(() => setIsOpen(true), 3500);
			return () => clearTimeout(timer);
		}
	}, []);

	const handleClose = () => {
		setIsOpen(false);
		sessionStorage.setItem("hasSeenRelocationPopup", "true");
	};

	return (
		<>
			<AnimatePresence>
				{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleClose}
						className="absolute inset-0 bg-black/60 backdrop-blur-sm"
					/>
					
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 20 }}
						className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row z-10"
					>
						<button
							onClick={handleClose}
							className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors shadow-sm"
						>
							<Icon icon="mdi:close" className="text-xl" />
						</button>

						{/* Left: Image */}
						<div className="w-full md:w-5/12 h-64 md:h-auto relative bg-gray-100">
							<Image
								src={rlc}
								alt="Relocation Guide to Kenya"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
								<div className="text-white">
									<p className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Exclusive</p>
									<p className="text-xl font-black">Latest Edition</p>
								</div>
							</div>
						</div>

						{/* Right: Content */}
						<div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
							<span className="inline-flex items-center gap-2 bg-red-50 text-primary border border-red-100 text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest w-fit mb-6">
								<Icon icon="mdi:gift-outline" />
								Free Resource
							</span>

							<h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
								Moving to Kenya?
							</h2>
							<p className="text-gray-600 mb-8 leading-relaxed">
								Get our comprehensive <strong>Relocation Guide</strong> covering housing, visas, schooling, healthcare, and cost of living. Built specifically for diplomats and expats.
							</p>

							<button
								onClick={() => {
									handleClose();
									setIsModalOpen(true);
								}}
								className="inline-flex w-fit items-center justify-center gap-3 bg-primary hover:bg-red-700 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 group"
							>
								<Icon icon="mdi:download-circle" className="text-2xl" />
								Unlock Free Guide
								<Icon icon="mdi:arrow-right" className="text-xl group-hover:translate-x-1 transition-transform" />
							</button>
						</div>
					</motion.div>
				</div>
				)}
			</AnimatePresence>

			<RelocationFormModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</>
	);
}
