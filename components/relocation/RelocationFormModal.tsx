"use client";

import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";

interface RelocationFormModalProps {
	isOpen: boolean;
	onClose: () => void;
}

type FormState = "idle" | "submitting" | "success";

export default function RelocationFormModal({ isOpen, onClose }: RelocationFormModalProps) {
	const [formState, setFormState] = useState<FormState>("idle");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const isFormValid =
		formData.name.trim() && formData.email.trim() && formData.phone.trim();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!isFormValid) return;
		
		setFormState("submitting");
		// Simulate form submission delay
		await new Promise((resolve) => setTimeout(resolve, 1500));
		setFormState("success");
	};

	// Reset state when modal is closed
	const handleClose = () => {
		onClose();
		setTimeout(() => {
			setFormState("idle");
			setFormData({ name: "", email: "", phone: "" });
		}, 300); // Wait for exit animation
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleClose}
						className="absolute inset-0 bg-black/60 backdrop-blur-sm"
					/>
					
					{/* Modal Box */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 20 }}
						className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden z-10"
					>
						<button
							onClick={handleClose}
							className="absolute top-4 right-4 z-20 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors"
						>
							<Icon icon="mdi:close" className="text-xl" />
						</button>

						<div className="p-8 sm:p-10">
							{formState !== "success" ? (
								<>
									<div className="flex items-center gap-4 mb-8">
										<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
											<Icon icon="mdi:file-pdf-box" className="text-3xl text-primary" />
										</div>
										<div>
											<h2 className="text-2xl font-black text-gray-900">
												Get Your Free Guide
											</h2>
											<p className="text-sm text-gray-600 mt-1">
												Please fill in your details to unlock the download.
											</p>
										</div>
									</div>

									<form onSubmit={handleSubmit} className="space-y-4">
										<div className="space-y-1.5">
											<label className="text-sm font-semibold text-gray-600">Full Name *</label>
											<input
												type="text"
												name="name"
												value={formData.name}
												onChange={handleInputChange}
												required
												placeholder="e.g. Jane Mwangi"
												className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary text-gray-900 rounded-xl outline-none transition-all placeholder-gray-400 focus:ring-2 focus:ring-primary/20"
											/>
										</div>

										<div className="space-y-1.5">
											<label className="text-sm font-semibold text-gray-600">Email Address *</label>
											<input
												type="email"
												name="email"
												value={formData.email}
												onChange={handleInputChange}
												required
												placeholder="jane@example.com"
												className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary text-gray-900 rounded-xl outline-none transition-all placeholder-gray-400 focus:ring-2 focus:ring-primary/20"
											/>
										</div>

										<div className="space-y-1.5">
											<label className="text-sm font-semibold text-gray-600">Phone Number *</label>
											<input
												type="tel"
												name="phone"
												value={formData.phone}
												onChange={handleInputChange}
												required
												placeholder="+254 7XX XXX XXX"
												className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary text-gray-900 rounded-xl outline-none transition-all placeholder-gray-400 focus:ring-2 focus:ring-primary/20"
											/>
										</div>

										<button
											type="submit"
											disabled={!isFormValid || formState === "submitting"}
											className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 mt-4 ${
												isFormValid && formState !== "submitting"
													? "bg-primary border border-red-700 text-white hover:bg-red-700 hover:shadow-lg"
													: "bg-gray-100 border border-gray-200 text-gray-400 cursor-not-allowed"
											}`}
										>
											{formState === "submitting" ? (
												<>
													<Icon icon="mdi:loading" className="text-xl animate-spin" />
													Preparing...
												</>
											) : (
												<>
													<Icon icon="mdi:lock-open-variant-outline" className="text-xl" />
													Unlock Download
												</>
											)}
										</button>
									</form>
								</>
							) : (
								<div className="text-center py-6">
									<div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
										<Icon icon="mdi:check-circle" className="text-5xl text-green-600" />
									</div>
									<h2 className="text-3xl font-black text-gray-900 mb-2">
										You're All Set!
									</h2>
									<p className="text-gray-600 mb-8">
										Thank you, {formData.name.split(" ")[0]}. Your relocation guide is ready.
									</p>
									<a
										href="/relocation.pdf"
										download="Imperia-Relocation-Guide-to-Kenya.pdf"
										className="inline-flex w-full items-center justify-center gap-2 bg-primary border border-red-700 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg shadow-primary/30"
										onClick={() => {
											// Close modal shortly after download begins
											setTimeout(handleClose, 2000);
										}}
									>
										<Icon icon="mdi:download" className="text-xl" />
										Download PDF
									</a>
								</div>
							)}
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
}
