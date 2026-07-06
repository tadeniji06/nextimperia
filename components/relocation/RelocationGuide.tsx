"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { rlc } from "@/assets";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const GUIDE_FEATURES = [
	{ icon: "mdi:home-city", label: "Finding Accommodation", desc: "Best neighbourhoods & what to expect" },
	{ icon: "mdi:passport", label: "Visa & Immigration", desc: "Work permits, visas, legal requirements" },
	{ icon: "mdi:school", label: "Schools & Education", desc: "International schools & curricula" },
	{ icon: "mdi:hospital-building", label: "Healthcare", desc: "Top hospitals & insurance guidance" },
	{ icon: "mdi:car", label: "Transport & Getting Around", desc: "Driving, ride-hailing & public transit" },
	{ icon: "mdi:currency-usd", label: "Cost of Living", desc: "Budgets, banking & money transfers" },
];

const STATS = [
	{ value: "50+", label: "Pages of Expert Insight" },
	{ value: "10+", label: "Key Life Chapters Covered" },
	{ value: "Free", label: "Instant PDF Download" },
];

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
	name: string;
	email: string;
	phone: string;
	organization: string;
}

export default function RelocationGuide() {
	const [step, setStep] = useState<"teaser" | "form" | "unlock">("teaser");
	const [formState, setFormState] = useState<FormState>("idle");
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		organization: "",
	});
	const [unlockProgress, setUnlockProgress] = useState(0);
	const [currentFeature, setCurrentFeature] = useState(0);

	// Auto-cycle features in teaser
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentFeature((prev) => (prev + 1) % GUIDE_FEATURES.length);
		}, 2500);
		return () => clearInterval(interval);
	}, []);

	// Animate unlock progress bar
	useEffect(() => {
		if (step === "unlock") {
			let progress = 0;
			const timer = setInterval(() => {
				progress += 2;
				setUnlockProgress(progress);
				if (progress >= 100) {
					clearInterval(timer);
				}
			}, 30);
			return () => clearInterval(timer);
		}
	}, [step]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const isFormValid =
		formData.name.trim() &&
		formData.email.trim() &&
		formData.phone.trim() &&
		formData.organization.trim();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!isFormValid) return;
		setFormState("submitting");
		// Simulate API call / form submission
		await new Promise((res) => setTimeout(res, 1800));
		setFormState("success");
		setStep("unlock");
	};

	return (
		<div className="min-h-screen bg-white overflow-hidden relative pt-24">
			{/* Ambient Background Blobs */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-primary/5" />
				<div className="absolute top-1/2 -right-64 w-[500px] h-[500px] rounded-full bg-gray-50" />
				<div className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/5" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
				<AnimatePresence mode="wait">
					{/* ---- STEP 1: TEASER ---- */}
					{step === "teaser" && (
						<motion.div
							key="teaser"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.6 }}
							className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
						>
							{/* Left: Hero Copy */}
							<div className="space-y-8">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 }}
								>
									<span className="inline-flex items-center gap-2 bg-red-50 text-primary border border-red-100 text-sm font-semibold px-4 py-2 rounded-full mb-6">
										<Icon icon="mdi:gift-outline" className="text-base" />
										FREE DOWNLOAD — Limited Period
									</span>
									<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
										Your Complete{" "}
										<span className="text-primary">Relocation Guide</span>{" "}
										to Kenya
									</h1>
									<p className="text-lg text-gray-600 mt-6 leading-relaxed">
										A step-by-step guide curated by Imperia Consulting's experts — built exclusively for{" "}
										<strong className="text-gray-900">Diplomats, Expats, and International Professionals</strong>{" "}
										moving to Nairobi.
									</p>
								</motion.div>

								{/* Stats Row */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.25 }}
									className="flex flex-wrap gap-6"
								>
									{STATS.map((stat) => (
										<div key={stat.label} className="text-center">
											<p className="text-3xl font-black text-primary">{stat.value}</p>
											<p className="text-sm text-gray-500 mt-1">{stat.label}</p>
										</div>
									))}
								</motion.div>

								{/* Animated Feature Ticker */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.35 }}
									className="bg-white border border-gray-200 shadow-sm rounded-2xl p-5"
								>
									<p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-semibold">Inside the guide</p>
									<AnimatePresence mode="wait">
										<motion.div
											key={currentFeature}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: -20 }}
											transition={{ duration: 0.4 }}
											className="flex items-center gap-4"
										>
											<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
												<Icon icon={GUIDE_FEATURES[currentFeature].icon} className="text-2xl text-primary" />
											</div>
											<div>
												<p className="text-gray-900 font-bold">{GUIDE_FEATURES[currentFeature].label}</p>
												<p className="text-gray-600 text-sm">{GUIDE_FEATURES[currentFeature].desc}</p>
											</div>
										</motion.div>
									</AnimatePresence>
									<div className="flex gap-1.5 mt-4">
										{GUIDE_FEATURES.map((_, i) => (
											<div
												key={i}
												className={`h-1 flex-1 rounded-full transition-all duration-300 ${i === currentFeature ? "bg-primary" : "bg-gray-200"}`}
											/>
										))}
									</div>
								</motion.div>

								{/* CTA Button */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.45 }}
								>
									<button
										onClick={() => setStep("form")}
										className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary border border-red-700 hover:bg-red-700 text-white font-black text-lg px-10 py-5 rounded-2xl transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 overflow-hidden"
									>
										<span className="relative z-10 flex items-center gap-3">
											<Icon icon="mdi:download-circle" className="text-2xl" />
											Get Your Free Guide
											<Icon icon="mdi:arrow-right" className="text-xl group-hover:translate-x-1 transition-transform" />
										</span>
										<motion.div
											className="absolute inset-0 bg-white/10"
											animate={{ x: ["-100%", "200%"] }}
											transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
										/>
									</button>
									<p className="text-gray-600 text-sm mt-3 flex items-center gap-1.5">
										<Icon icon="mdi:lock-outline" className="text-gray-500" />
										No spam. Instant access after a quick registration.
									</p>
								</motion.div>
							</div>

							{/* Right: PDF Book Mockup */}
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.2, duration: 0.8 }}
								className="relative flex justify-center items-center lg:justify-end"
							>
								<div className="relative w-full max-w-lg">
									{/* Background Decor */}
									<div className="absolute inset-0 translate-x-6 translate-y-6 rounded-3xl bg-gray-100 border border-gray-200" />
									
									<div className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white aspect-[4/5] group">
										<Image
											src={rlc}
											alt="Relocation Guide to Kenya"
											fill
											className="object-cover group-hover:scale-105 transition-transform duration-700"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent flex flex-col justify-end p-8 sm:p-10">
											<p className="text-white font-black text-3xl sm:text-4xl leading-tight mb-2">RELOCATION<br/>GUIDE TO KENYA</p>
											<p className="text-gray-300 font-medium text-base">A Step-by-Step Guide for Diplomats and Expats</p>
										</div>
									</div>

									{/* Floating badges */}
									<motion.div
										animate={{ y: [0, -6, 0] }}
										transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
										className="absolute -top-6 -right-6 bg-primary text-white text-sm font-black px-4 py-3 rounded-2xl shadow-xl"
									>
										FREE
									</motion.div>
									<motion.div
										animate={{ y: [0, 5, 0] }}
										transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
										className="absolute -bottom-6 -left-6 bg-white text-gray-900 border border-gray-200 text-sm font-black px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2"
									>
										<Icon icon="mdi:star" className="text-primary" />
										For Expats & Diplomats
									</motion.div>
								</div>
							</motion.div>
						</motion.div>
					)}

					{/* ---- STEP 2: FORM ---- */}
					{step === "form" && (
						<motion.div
							key="form"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -30 }}
							transition={{ duration: 0.5 }}
							className="max-w-2xl mx-auto"
						>
							{/* Progress bar */}
							<div className="mb-10">
								<div className="flex items-center gap-3 mb-4">
									<button
										onClick={() => setStep("teaser")}
										className="text-gray-500 hover:text-gray-900 transition-colors"
									>
										<Icon icon="mdi:arrow-left" className="text-xl" />
									</button>
									<div className="flex items-center gap-2 text-sm text-gray-500">
										<span className="text-primary font-bold">Step 1 of 2</span>
										<span>— Quick Registration</span>
									</div>
								</div>
								<div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: "50%" }}
										transition={{ duration: 0.6 }}
										className="h-full bg-primary rounded-full"
									/>
								</div>
							</div>

							<div className="bg-white shadow-xl border border-gray-100 rounded-3xl p-8 sm:p-12">
								{/* Header */}
								<div className="flex items-start gap-5 mb-10">
									<div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
										<Icon icon="mdi:file-pdf-box" className="text-4xl text-primary" />
									</div>
									<div>
										<h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">
											One Step to Your Free Guide
										</h2>
										<p className="text-gray-600 text-sm">
											Tell us a bit about yourself and we'll unlock your download instantly.
										</p>
									</div>
								</div>

								<form onSubmit={handleSubmit} className="space-y-5">
									{/* Name */}
									<div className="space-y-1.5">
										<label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
											<Icon icon="mdi:account-outline" className="text-primary" />
											Full Name *
										</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											required
											placeholder="e.g. Jane Mwangi"
											className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:border-primary text-gray-900 rounded-xl outline-none transition-all placeholder-gray-400 focus:ring-2 focus:ring-primary/20"
										/>
									</div>

									{/* Email */}
									<div className="space-y-1.5">
										<label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
											<Icon icon="mdi:email-outline" className="text-primary" />
											Email Address *
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											placeholder="jane@organisation.com"
											className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:border-primary text-gray-900 rounded-xl outline-none transition-all placeholder-gray-400 focus:ring-2 focus:ring-primary/20"
										/>
									</div>

									{/* Phone + Organisation in grid */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
										<div className="space-y-1.5">
											<label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
												<Icon icon="mdi:phone-outline" className="text-primary" />
												Phone Number *
											</label>
											<input
												type="tel"
												name="phone"
												value={formData.phone}
												onChange={handleInputChange}
												required
												placeholder="+254 7XX XXX XXX"
												className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:border-primary text-gray-900 rounded-xl outline-none transition-all placeholder-gray-400 focus:ring-2 focus:ring-primary/20"
											/>
										</div>
										<div className="space-y-1.5">
											<label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
												<Icon icon="mdi:office-building-outline" className="text-primary" />
												Organisation *
											</label>
											<input
												type="text"
												name="organization"
												value={formData.organization}
												onChange={handleInputChange}
												required
												placeholder="e.g. UN, Embassy, Corp."
												className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:border-primary text-gray-900 rounded-xl outline-none transition-all placeholder-gray-400 focus:ring-2 focus:ring-primary/20"
											/>
										</div>
									</div>

									{/* Submit */}
									<motion.button
										type="submit"
										disabled={!isFormValid || formState === "submitting"}
										whileTap={{ scale: 0.97 }}
										className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 mt-2 border ${
											isFormValid && formState !== "submitting"
												? "bg-primary border-red-700 text-white hover:bg-red-700 hover:shadow-xl hover:shadow-primary/30 cursor-pointer"
												: "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
										}`}
									>
										{formState === "submitting" ? (
											<>
												<Icon icon="mdi:loading" className="text-2xl animate-spin" />
												Preparing your guide...
											</>
										) : (
											<>
												<Icon icon="mdi:lock-open-variant-outline" className="text-2xl" />
												Unlock Free Download
												<Icon icon="mdi:arrow-right" className="text-xl" />
											</>
										)}
									</motion.button>

									<p className="text-gray-500 text-xs text-center flex items-center justify-center gap-1.5 pt-1">
										<Icon icon="mdi:shield-check-outline" />
										We respect your privacy. Your data is never shared or sold.
									</p>
								</form>
							</div>
						</motion.div>
					)}

					{/* ---- STEP 3: UNLOCK ---- */}
					{step === "unlock" && (
						<motion.div
							key="unlock"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.6 }}
							className="max-w-2xl mx-auto text-center"
						>
							{/* Progress loader */}
							<div className="mb-10">
								<div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
									<motion.div
										style={{ width: `${unlockProgress}%` }}
										className="h-full bg-primary rounded-full transition-all"
									/>
								</div>
								<p className="text-gray-500 text-sm font-semibold">
									{unlockProgress < 100 ? "Preparing your guide..." : "Guide ready!"}
								</p>
							</div>

							{/* Success state */}
							{unlockProgress >= 100 && (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									className="space-y-8"
								>
									{/* Confetti-style icon */}
									<div className="relative inline-block">
										<motion.div
											animate={{ scale: [1, 1.15, 1] }}
											transition={{ duration: 1.5, repeat: Infinity }}
											className="w-28 h-28 rounded-full bg-primary/20 flex items-center justify-center mx-auto"
										>
											<Icon icon="mdi:check-circle" className="text-6xl text-primary" />
										</motion.div>
										{/* Floating sparkles */}
										{[...Array(6)].map((_, i) => (
											<motion.div
												key={i}
												animate={{
													y: [-20, -60],
													x: [0, (i % 2 === 0 ? 1 : -1) * (20 + i * 10)],
													opacity: [1, 0],
													scale: [1, 0.5],
												}}
												transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity, repeatDelay: 2 }}
												className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
												style={{
													backgroundColor: i % 3 === 0 ? "#f62427" : i % 3 === 1 ? "#f59e0b" : "#ffffff",
													marginLeft: "-6px",
												}}
											/>
										))}
									</div>

									<div>
										<h2 className="text-4xl font-black text-gray-900 mb-3">
											🎉 You're All Set, {formData.name.split(" ")[0]}!
										</h2>
										<p className="text-gray-600 text-lg">
											Your relocation guide is unlocked and ready to download.
										</p>
									</div>

									{/* What's inside mini preview */}
									<div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left">
										<p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-4">What's inside</p>
										<div className="grid grid-cols-2 gap-3">
											{GUIDE_FEATURES.map((f) => (
												<div key={f.label} className="flex items-center gap-2 text-sm text-gray-700">
													<Icon icon="mdi:check-circle" className="text-primary shrink-0" />
													{f.label}
												</div>
											))}
										</div>
									</div>

									{/* Download Button */}
									<a
										href="/relocation.pdf"
										download="Imperia-Relocation-Guide-to-Kenya.pdf"
										className="group inline-flex items-center justify-center gap-3 bg-primary border border-red-700 hover:bg-red-700 text-white font-black text-lg px-12 py-5 rounded-2xl transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 w-full sm:w-auto"
									>
										<Icon icon="mdi:download" className="text-2xl group-hover:animate-bounce" />
										Download Guide (PDF)
									</a>

									<p className="text-gray-500 text-sm">
										A copy has also been sent to <span className="text-gray-900 font-semibold">{formData.email}</span>
									</p>

									{/* Referral nudge */}
									<div className="bg-red-50 border border-red-100 rounded-2xl p-5 text-left">
										<p className="text-primary font-bold mb-1 flex items-center gap-2">
											<Icon icon="mdi:share-variant" />
											Know someone relocating to Kenya?
										</p>
										<p className="text-gray-600 text-sm">
											Share this guide with colleagues, friends, or embassy contacts — the more informed, the better.
										</p>
										<div className="flex flex-wrap gap-3 mt-4">
											<a
												href={`https://wa.me/?text=I%20just%20got%20a%20free%20Relocation%20Guide%20to%20Kenya%20from%20Imperia%20Consulting.%20Get%20yours%20here:%20https://imperiagrouponline.com/relocation-guide`}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 bg-green-600 text-white text-sm font-bold px-4 py-2 rounded-xl hover:bg-green-700 transition-colors"
											>
												<Icon icon="mdi:whatsapp" />
												Share via WhatsApp
											</a>
											<a
												href={`https://www.linkedin.com/sharing/share-offsite/?url=https://imperiagrouponline.com/relocation-guide`}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-xl hover:bg-blue-800 transition-colors"
											>
												<Icon icon="mdi:linkedin" />
												Share on LinkedIn
											</a>
										</div>
									</div>
								</motion.div>
							)}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
