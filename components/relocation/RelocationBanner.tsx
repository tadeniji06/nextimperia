"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { rlc } from "@/assets";

const PERKS = [
	{ icon: "mdi:passport", text: "Visa & Immigration" },
	{ icon: "mdi:home-city", text: "Finding Accommodation" },
	{ icon: "mdi:school", text: "International Schools" },
	{ icon: "mdi:currency-usd", text: "Cost of Living Insights" },
];

export default function RelocationBanner() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });
	const [hovered, setHovered] = useState(false);

	return (
		<section ref={ref} className="relative overflow-hidden bg-white py-20 px-4 sm:px-6 lg:px-8 border-y border-gray-100">
			{/* Ambient blobs */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-primary/5" />
				<div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gray-50" />
			</div>

			<div className="relative z-10 max-w-6xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left: Copy */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.7 }}
						className="space-y-6"
					>
						{/* Badge */}
						<span className="inline-flex items-center gap-2 bg-red-50 text-primary border border-red-100 text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest">
							<Icon icon="mdi:gift-outline" />
							Free Resource
						</span>

						<h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
							Planning to Move to{" "}
							<span className="text-primary">Kenya?</span>
						</h2>
						<p className="text-lg text-gray-600 leading-relaxed">
							Our comprehensive <strong className="text-gray-900">Relocation Guide</strong> covers everything you need — from housing and visas to schooling and healthcare. Built for diplomats, expats, and international professionals.
						</p>

						{/* Perks grid */}
						<div className="grid grid-cols-2 gap-3">
							{PERKS.map((perk) => (
								<div key={perk.text} className="flex items-center gap-3 bg-white border border-gray-200 shadow-sm rounded-xl p-3">
									<Icon icon={perk.icon} className="text-xl text-primary shrink-0" />
									<span className="text-sm text-gray-700 font-bold">{perk.text}</span>
								</div>
							))}
						</div>

						{/* CTA */}
						<Link
							href="/relocation-guide"
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
							className="inline-flex items-center gap-3 bg-primary border border-red-700 hover:bg-red-700 text-white font-black text-base px-8 py-4 rounded-2xl transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 group"
						>
							<Icon icon="mdi:download-circle" className="text-2xl" />
							Download Free Guide
							<motion.span animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.2 }}>
								<Icon icon="mdi:arrow-right" className="text-xl" />
							</motion.span>
						</Link>
					</motion.div>

					{/* Right: Floating Image */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.7, delay: 0.15 }}
						className="flex justify-center lg:justify-end"
					>
						<div className="relative w-full max-w-md">
							{/* Background Decoration */}
							<div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/10 to-transparent blur-xl" />
							<div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-gray-100 border border-gray-200" />
							
							{/* Main Image */}
							<div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] group">
								<Image
									src={rlc}
									alt="Relocation Guide to Kenya"
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent flex flex-col justify-end p-8">
									<p className="text-white font-black text-2xl leading-tight">RELOCATION<br />GUIDE TO KENYA</p>
									<p className="text-gray-300 font-medium text-sm mt-2">For Diplomats and Expats</p>
								</div>
								{/* Free badge */}
								<div className="absolute -top-4 -right-4 bg-primary text-white text-xs font-black px-4 py-2 rounded-xl shadow-lg">
									FREE PDF
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
