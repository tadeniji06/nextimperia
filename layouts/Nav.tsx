"use client";

import { navLinks } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import { logo } from "@/assets";

const Nav = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isClient, setIsClient] = useState(false);
	const pathname = usePathname();

	// Ensure we're on the client side before using pathname
	useEffect(() => {
		setIsClient(true);
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const isActiveLink = (linkPath: string) => {
		if (!isClient) return false; // Prevent SSR mismatch

		if (linkPath === "/") {
			return pathname === "/";
		}
		return pathname.startsWith(linkPath);
	};

	return (
		<header className='sticky top-0 z-50 bg-white shadow-md border-b border-gray-200'>
			<div className='max-w-7xl mx-auto px-4'>
				<nav className='flex items-center justify-between py-4'>
					{/* Logo */}
					<Link
						href='/'
						className='flex items-center space-x-2 relative z-10'
					>
						<Image
							src={logo}
							alt='Imperia Consulting Logo'
							width={130}
							height={60}
							className='w-auto h-12 sm:h-15'
						/>
					</Link>

					{/* Desktop Navigation */}
					<ul className='hidden lg:flex space-x-8'>
						{navLinks.map((link) => (
							<li key={link.name}>
								<Link
									href={link.link}
									className={`text-lg font-semibold transition-colors duration-200 hover:text-red-600 ${
										isActiveLink(link.link)
											? "text-red-600 border-b-2 border-red-600 pb-1"
											: "text-gray-400"
									}`}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>

					{/* Desktop Get Started Button */}
					<div className='hidden lg:block'>
						<Link href={"/properties"}>
							<button className='font-bold text-white bg-primary hover:bg-primary/90 px-5 py-3 rounded-xl transition-colors duration-200'>
								Get Started
							</button>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMobileMenu}
						className='lg:hidden relative z-50 p-2'
						aria-label='Toggle mobile menu'
					>
						<Icon
							icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
							className='w-6 h-6 text-gray-700'
						/>
					</button>
				</nav>

				{/* Mobile Navigation Menu */}
				{isClient && (
					<div
						className={`lg:hidden fixed inset-0 z-40 bg-gray-300 bg-opacity-70 transition-opacity duration-300 ${
							isMobileMenuOpen
								? "opacity-100 visible"
								: "opacity-0 invisible"
						}`}
						onClick={closeMobileMenu}
					>
						<div
							className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 z-50 ${
								isMobileMenuOpen
									? "translate-x-0"
									: "translate-x-full"
							}`}
							onClick={(e) => e.stopPropagation()}
						>
							<div className='flex flex-col h-full'>
								{/* Mobile Menu Header */}
								<div className='flex items-center justify-between p-4 border-b border-gray-200'>
									<span className='text-lg font-semibold text-gray-800'>
										Menu
									</span>
									<button
										onClick={closeMobileMenu}
										className='p-2'
										aria-label='Close mobile menu'
									>
										<Icon
											icon='mdi:close'
											className='w-6 h-6 text-gray-700'
										/>
									</button>
								</div>

								{/* Mobile Navigation Links */}
								<nav className='flex-1 py-6'>
									<ul className='space-y-1'>
										{navLinks.map((link) => (
											<li key={link.name}>
												<Link
													href={link.link}
													onClick={closeMobileMenu}
													className={`block px-6 py-3 text-base font-medium transition-colors duration-200 ${
														isActiveLink(link.link)
															? "text-red-600 bg-red-50 border-r-4 border-red-600"
															: "text-gray-500 hover:text-red-600 hover:bg-gray-50"
													}`}
												>
													{link.name}
												</Link>
											</li>
										))}
									</ul>
								</nav>

								{/* Mobile Get Started Button */}
								<div className='p-6 border-t border-gray-200'>
									<Link
										href={"/properties"}
										onClick={closeMobileMenu}
									>
										<button className='w-full font-bold text-white bg-primary hover:bg-primary/90 px-5 py-3 rounded-xl transition-colors duration-200'>
											Get Started
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Nav;
