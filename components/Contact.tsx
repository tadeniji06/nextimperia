"use client";

import { socials, WALink } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: true,
		margin: "-50px 0px",
	});

	const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
			setFormData({ name: "", email: "", message: "" });
		}, 2000);
	};

	// Animation Variants
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2, delayChildren: 0.1 },
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	return (
		<div className="bg-gray-50 min-h-screen pt-24 pb-20">
			<motion.div
				ref={ref}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				variants={containerVariants}
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16"
			>
				{/* Hero Header */}
				<motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
					<div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
						<Icon icon="mdi:email-fast-outline" className="text-primary text-3xl" />
					</div>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
						Let's <span className="text-primary">Connect</span>
					</h1>
					<p className="text-lg md:text-xl text-gray-600 leading-relaxed">
						Whether you're looking for prime real estate, sustainable development advisory, or strategic investments in Kenya, our experts are ready to assist you.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
					{/* Contact Details & Socials (Col Span 2) */}
					<motion.div variants={itemVariants} className="lg:col-span-2 space-y-10">
						<div className="bg-white rounded-3xl p-8 shadow-xl shadow-primary/5 border border-gray-100">
							<h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
							
							<div className="space-y-8">
								<div className="flex items-start gap-5">
									<div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center shrink-0">
										<Icon icon="ic:baseline-whatsapp" className="text-2xl text-green-600" />
									</div>
									<div>
										<p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">WhatsApp</p>
										<a 
											href={WALink.link}
											target="_blank"
											rel="noopener noreferrer" 
											className="inline-flex items-center gap-2 text-xl font-bold text-gray-800 hover:text-green-600 transition-colors"
										>
											Chat on WhatsApp
											<Icon icon="mdi:open-in-new" className="text-sm" />
										</a>
									</div>
								</div>

								<div className="flex items-start gap-5">
									<div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
										<Icon icon="mdi:email-outline" className="text-2xl text-primary" />
									</div>
									<div>
										<p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</p>
										<a href="mailto:info@imperiaconsulting.com" className="text-xl font-bold text-gray-800 hover:text-primary transition-colors">
											info@imperiaconsulting.com
										</a>
									</div>
								</div>

								<div className="flex items-start gap-5">
									<div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
										<Icon icon="mdi:map-marker-radius" className="text-2xl text-primary" />
									</div>
									<div>
										<p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Location</p>
										<p className="text-xl font-bold text-gray-800">
											Nairobi, Kenya
										</p>
									</div>
								</div>
							</div>

							<div className="mt-12 pt-8 border-t border-gray-100">
								<p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5">Follow Our Socials</p>
								<div className="flex gap-4">
									{socials.map((item, idx) => (
										<a
											key={idx}
											href={item.link}
											target="_blank"
											rel="noopener noreferrer"
											className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-lg"
											aria-label={item.name}
										>
											<Icon icon={item.icon} className="text-2xl" />
										</a>
									))}
								</div>
							</div>
						</div>
					</motion.div>

					{/* Contact Form (Col Span 3) */}
					<motion.div variants={itemVariants} className="lg:col-span-3">
						<div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-primary/5 border border-gray-100">
							<h3 className="text-3xl font-bold text-gray-900 mb-2">Send a Message</h3>
							<p className="text-gray-500 mb-10">We typically reply within a few hours.</p>

							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-2">
										<label className="text-sm font-semibold text-gray-700">Full Name</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											required
											className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
											placeholder="John Doe"
										/>
									</div>
									<div className="space-y-2">
										<label className="text-sm font-semibold text-gray-700">Email Address</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
											placeholder="john@example.com"
										/>
									</div>
								</div>
								
								<div className="space-y-2">
									<label className="text-sm font-semibold text-gray-700">Your Message</label>
									<textarea
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										required
										rows={6}
										className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
										placeholder="How can we assist you today?"
									/>
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									className={`w-full py-5 rounded-xl font-bold text-white text-lg transition-all ${
										isSubmitting
											? "bg-gray-400 cursor-not-allowed"
											: "bg-primary hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1"
									}`}
								>
									{isSubmitting ? (
										<span className="flex items-center justify-center gap-3">
											<Icon icon="mdi:loading" className="text-2xl animate-spin" />
											Sending...
										</span>
									) : (
										<span className="flex items-center justify-center gap-2">
											Submit Message
											<Icon icon="mdi:send-outline" className="text-xl" />
										</span>
									)}
								</button>
							</form>
						</div>
					</motion.div>
				</div>

				{/* Interactive Google Map */}
				<motion.div variants={itemVariants} className="w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[400px] lg:h-[500px] relative z-10">
					<iframe 
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.51704257134!2d36.73970228026131!3d-1.283307616239103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1714578912345!5m2!1sen!2sus" 
						width="100%" 
						height="100%" 
						style={{ border: 0 }} 
						allowFullScreen={true} 
						loading="lazy" 
						referrerPolicy="no-referrer-when-downgrade"
						title="Imperia Consulting Location"
						className="grayscale hover:grayscale-0 transition-all duration-700"
					></iframe>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Contact;
