"use client";

import { about } from "@/assets";
import Image from "next/image";

const AboutHero = () => {
	return (
		<div className='relative h-[650px] md:h-[800px] overflow-hidden'>
			{/* Background Image */}
			<Image
				src={about}
				alt='About Us Background'
				fill
				className='object-cover'
				priority
				quality={90}
			/>

			{/* Overlay */}
			<div className='absolute inset-0 bg-black/60 z-10' />

			{/* Content */}
			<div className='relative z-20 flex items-center justify-center h-full'>
				<div className='flex flex-col gap-8 text-white items-center px-4 text-center'>
					<h1 className='md:text-6xl text-4xl font-medium'>
						About Us
					</h1>
					<p className='font-semibold text-xl md:text-2xl max-w-4xl leading-relaxed'>
						We build more than properties, we create value-driven{" "}
						communities where elegance, comfort, and investment{" "}
						opportunities meet.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutHero;
