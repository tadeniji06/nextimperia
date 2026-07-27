import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import mo from "@/assets/mo.jpeg";

const CEOSection = () => {
	return (
		<section className='py-16 sm:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center max-w-4xl mx-auto mb-16'>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
						Leadership
					</h2>
					<div className='h-1 w-20 bg-primary mx-auto rounded-full'></div>
				</div>

				<div className='flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 overflow-hidden relative'>
					{/* Decorative elements */}
					<div className='absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3'></div>
					<div className='absolute bottom-0 left-0 w-48 h-48 bg-gray-100 rounded-full translate-y-1/3 -translate-x-1/3'></div>

					<div className='w-full lg:w-1/3 flex flex-col items-center relative z-10'>
						<div className='relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl mb-6 ring-4 ring-white'>
							{/* Placeholder Image using UI Faces or a colored placeholder */}
							<div className='absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center'>
								<Icon
									icon='mdi:account-tie'
									className='text-8xl text-gray-400'
								/>
							</div>
							<Image
								src={mo}
								alt='Engr. Mohammed Omotola'
								fill
								className='object-cover'
							/>
						</div>
						<h3 className='text-2xl font-bold text-gray-900 text-center'>
							Engr. Mohammed Omotola
						</h3>
						<p className='text-primary font-medium mt-1 text-center text-lg'>
							Managing Director & CEO
						</p>
						<div className='flex gap-4 mt-6'>
							<a
								href='#'
								className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors'
							>
								<Icon icon='mdi:linkedin' className='text-xl' />
							</a>
							<a
								href='#'
								className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors'
							>
								<Icon icon='mdi:twitter' className='text-xl' />
							</a>
						</div>
					</div>

					<div className='w-full lg:w-2/3 space-y-6 text-gray-700 text-lg leading-relaxed relative z-10'>
						<Icon
							icon='mdi:format-quote-open'
							className='text-6xl text-primary/20 absolute -top-4 -left-4'
						/>
						<p className='relative z-10'>
							<strong className='text-gray-900 font-semibold'>
								Engr. Mohammed Omotola
							</strong>{" "}
							is the Managing Director and CEO of Imperia Consulting
							Ltd, a firm focused on real estate investment,
							sustainable development, and strategic advisory
							services.
						</p>
						<p>
							He has nearly 25 years of experience within the United
							Nations system, including extensive work with the United
							Nations Environment Programme in Geneva and Nairobi. His
							expertise spans environmental management, chemicals and
							waste, pollution, and environment and health, as well as
							programme development and international negotiations.
						</p>
						<p>
							Over his career, he has managed multi-million-dollar
							projects, coordinated global partnerships, and
							contributed to more than 50 international and regional
							meetings and environmental processes.
						</p>
						<div className='bg-gray-50 rounded-xl p-6 border border-gray-100 mt-8 shadow-inner'>
							<h4 className='font-bold text-gray-900 mb-4 flex items-center gap-2'>
								<Icon
									icon='mdi:school'
									className='text-primary text-xl'
								/>
								Educational Background
							</h4>
							<ul className='space-y-3'>
								<li className='flex items-start gap-3'>
									<Icon
										icon='mdi:check-circle'
										className='text-primary mt-1 shrink-0'
									/>
									<span>
										<strong>
											Master's degree in Environmental Engineering
										</strong>
										<br />
										<span className='text-gray-500 text-base'>
											University of Nottingham, United Kingdom
										</span>
									</span>
								</li>
								<li className='flex items-start gap-3'>
									<Icon
										icon='mdi:check-circle'
										className='text-primary mt-1 shrink-0'
									/>
									<span>
										<strong>
											Bachelor's degree in Civil Engineering
										</strong>
										<br />
										<span className='text-gray-500 text-base'>
											UNAD, Nigeria
										</span>
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CEOSection;
