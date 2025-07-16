import { eme } from "@/assets";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface HeroContent {
	title: string;
	subtitle: string;
	location: string;
	paymentPlan: string;
}

const PropsHero: React.FC = () => {
	const backgroundImage = eme as StaticImageData;

	const heroContent: HeroContent = {
		title: "Our Properties",
		subtitle: "Discover Premium Living Spaces",
		location: "Nested in the heart of Westland, Nairobi, Kenya",
		paymentPlan: "Enjoy up to 30 months installment payment plan",
	};

	return (
		<div className='relative overflow-hidden'>
			{/* Background Image */}
			<div
				className='bg-cover bg-center bg-no-repeat w-full h-[650px] md:h-[800px] relative transition-opacity duration-1000 ease-in-out'
				style={{ backgroundImage: `url(${backgroundImage.src})` }}
				role='img'
				aria-label='Properties hero background'
			>
				{/* Overlay */}
				<div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70' />

				{/* Content */}
				<div className='relative z-10 flex items-center justify-center min-h-[650px] md:min-h-[800px]'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className='flex flex-col gap-6 md:gap-8 text-white items-center mt-[-100px] md:mt-0 px-4 max-w-4xl mx-auto text-center'
					>
						{/* Badge */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium'
						>
							<Icon icon='mdi:home-city' className='w-4 h-4 mr-2' />
							Premium Real Estate
						</motion.div>

						{/* Main Title */}
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className='text-3xl md:text-6xl font-bold leading-tight'
						>
							{heroContent.title}
						</motion.h1>

						{/* Subtitle */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className='text-xl md:text-2xl font-medium text-white/90'
						>
							{heroContent.subtitle}
						</motion.p>

						{/* Location & Payment Info */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className='space-y-3'
						>
							<p className='text-lg md:text-xl font-semibold flex items-center justify-center'>
								<Icon
									icon='mdi:map-marker'
									className='w-5 h-5 mr-2'
								/>
								{heroContent.location}
							</p>
							<p className='text-base md:text-lg text-white/80 flex items-center justify-center'>
								<Icon
									icon='mdi:credit-card'
									className='w-5 h-5 mr-2'
								/>
								{heroContent.paymentPlan}
							</p>
						</motion.div>
					</motion.div>
				</div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
					className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
				>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className='text-white/70 text-center'
					>
						<Icon
							icon='mdi:chevron-down'
							className='w-8 h-8 mx-auto'
						/>
						<p className='text-sm mt-2'>Scroll to explore</p>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default PropsHero;
