import {
	oak,
	eme,
	e1flyer,
	e11,
	e12,
	e13,
	e14,
	e1main,
	e2main,
	e2flyer,
	e21,
	e22,
	e23,
	e24,
	o1main,
	o11,
	o12,
	o13,
	o14,
	o2main,
	o21,
	o22,
	o23,
	o24,
	o3main,
	o31,
	o32,
	o33,
	o1p,
	o34,
	o3p,
	amety,
	a1,
	a2,
	a3,
	a4,
	a5,
	a6,
	nm1,
	nm2,
	nm3,
	nm4,
} from "../assets";

export const featured = [
	{
		img: eme,
		title: "EMERALD SPRINGS",
		desc: "Flexible payment plan until completion October, 2026",
		location: "Westland, Nairobi",
	},
	{
		img: oak,
		title: "OAK WEST",
		desc: "Flexible payment plan until completion November, 2027",
		location: "Westland, Nairobi",
	},
];

export const amet = [
	{
		id: "amet",
		title: "Amethyst",
		mainImg: amety,
		// flyer: e1flyer,
		// photos: [e11, e12, e13, e14],
		desc: "A thoughtfully designed space combining comfort, privacy, and style ideal for individuals or couples seeking modern living in a serene environment.",
		location: "Westland, Nairobi, kenya",
		avgPrice: "In development",
		// highlights: [
		//   "Flexible payment plans",
		//   "Prime locations",
		//   "Modern Interiors",
		//   "Secure Environment",
		//   "Family-friendly amenities",
		//   "12% annual ROI",
		//   "24/7 security",
		//   "25 floors of modern living",
		// ],
	},
];
export const aria = [
	{
		id: "aria-park",
		title: "Aria Park 5 Bedroom Villa",
		mainImg: a1,
		flyer: a2,
		photos: [a3, a4, a5, a6, nm1, nm2, nm3, nm4],
		desc: `Welcome to ARIA PARK.  A distinguished development discreetly nestled in the leafy 
surburbs of Karen, Nairobi.  The address where  sophistication effortlessly meets with the 
splendor of nature.`,
		location: "Karen, Nairobi, kenya",
		avgPrice: "In development",
		highlights: [
			"5 Ensuite  Bedrooms",
			"Triple Volume entrance foyer",
			"Gym",
			"Study",
			"Family-friendly amenities",
			"Gazebo",
			"Home Theatre",
		],
	},
];
export const emeraldOneBed = [
	{
		id: "emerald-1-bedroom",
		title: "1 BEDROOM APARTMENT",
		mainImg: e1main,
		flyer: e1flyer,
		photos: [e11, e12, e13, e14],
		desc: "A thoughtfully designed space combining comfort, privacy, and style ideal for individuals or couples seeking modern living in a serene environment.",
		location: "Westland, Nairobi, kenya",
		avgPrice: "7.8M KSH ($64,000)",
		highlights: [
			"Flexible payment plans",
			"Prime locations",
			"Modern Interiors",
			"Secure Environment",
			"Family-friendly amenities",
			"12% annual ROI",
			"24/7 security",
			"25 floors of modern living",
		],
	},
];

export const emeraldTwoBed = [
	{
		id: "emerald-2-bedroom",
		title: "2 BEDROOM APARTMENT",
		mainImg: e2main,
		flyer: e2flyer,
		photos: [e21, e22, e23, e24],
		desc: "Spacious and elegantly designed, this two-bedroom apartment offers the perfect balance of privacy and shared living, ideal for small families, young professionals, or savvy investors.",
		location: "Westland, Nairobi, kenya",
		avgPrice: "12.9M KSH ($100,000)",
		highlights: [
			"Flexible payment plans",
			"Prime locations",
			"Modern Interiors",
			"Secure Environment",
			"Family-friendly amenities",
			"12% annual ROI",
			"24/7 security",
			"25 floors of modern living",
		],
	},
];

export const oakOneBed = [
	{
		id: "oak-1-bedroom",
		title: "1 BEDROOM APARTMENT",
		mainImg: o1main,
		photos: [o11, o12, o13, o14],
		desc: "A thoughtfully designed space combining comfort, privacy, and style ideal for individuals or couples seeking modern living in a serene environment.",
		location: "Westland, Nairobi, kenya",
		avgPrice: "1 bedroom (58 SQM) - 8.1M KSH($61,000)",
		highlights: [
			"Flexible payment plans",
			"Prime locations",
			"Modern Interiors",
			"Secure Environment",
			"Family-friendly amenities",
			"12% annual ROI",
			"24/7 security",
			"25 floors of modern living",
		],
		pricingPlan: [
			{
				title: "1 BEDROOM APARTMENT",
				price: "8.1M KSH",
				installmentPlan: [
					"30% - 2,640,000 (deposit)",
					"12.5% - 1,100,000 (6 months)",
					"12.5% - 1,100,000 (12 months)",
					"20% - 1,760,000 (upon completion November 2027)",
				],
			},
		],
	},
];
export const oakOneBedPlusStudy = [
	{
		id: "oak-1-study",
		title: "1 BEDROOM APARTMENT PLUS STUDY",
		mainImg: o1main,
		photos: [o1p, o12, o13, o14],
		desc: "A thoughtfully designed space combining comfort, privacy, and style ideal for individuals or couples seeking modern living in a serene environment.",
		location: "Westland, Nairobi, kenya",
		avgPrice: "1 bedroom (58 SQM) - 8.8M KSH($68,000)",
		highlights: [
			"Flexible payment plans",
			"Prime locations",
			"Modern Interiors",
			"Secure Environment",
			"Family-friendly amenities",
			"12% annual ROI",
			"24/7 security",
			"25 floors of modern living",
		],
		pricingPlan: [
			{
				title: "1 BEDROOM APARTMENT PLUS STUDY",
				price: "8.8M KSH",
				installmentPlan: [
					"30℅- 2,640,000 (deposit) ",
					"12.5℅- 1,100,000 ( after every 6 months) instalment",
					"12.5℅ -1,100,000",
					"12.5℅ -1,100,000",
					"12.5℅- 1,100,000",
					"20℅- 1,760,00 (upon completion November 2027)",
				],
			},
		],
	},
];

export const oakTwoBed = [
	{
		id: "oak-2-bedroom",
		title: "2 BEDROOM APARTMENT",
		mainImg: o2main,
		photos: [o21, o22, o23, o24],
		desc: "A thoughtfully designed space combining comfort, privacy, and style ideal for individuals or couples seeking modern living in a serene environment.",
		location: "Westland, Nairobi, kenya",
		avgPrice: "2 bedroom (105 SQM) - KSH 14.1M ($110,000)",
		highlights: [
			"Flexible payment plans",
			"Prime locations",
			"Modern Interiors",
			"Secure Environment",
			"Family-friendly amenities",
			"12% annual ROI",
			"24/7 security",
			"25 floors of modern living",
		],
		pricingPlan: [
			{
				price: "14.1M KSH",
				installmentPlan: [
					"20% - 2,940,000 (deposit)",
					"15% - 2,205,000 (6 months)",
					"15% - 2,205,000 (12 months)",
					"20% - 2,940,000 (upon completion November 2027)",
				],
			},
		],
	},
];

export const oakThreeBed = [
	{
		id: "oak-3-bedroom",
		title: "3 BEDROOM APARTMENT",
		mainImg: o3main,
		photos: [o31, o3p, o32, o34, o33],
		desc: "A thoughtfully designed space combining comfort, privacy, and style ideal for individuals or couples seeking modern living in a serene environment.",
		location: "Westland, Nairobi, kenya",
		avgPrice: "3 bedroom(150 SQM) 16.9M KSH ($132,000)",
		highlights: [
			"Flexible payment plans",
			"Prime locations",
			"Modern Interiors",
			"Secure Environment",
			"Family-friendly amenities",
			"12% annual ROI",
			"24/7 security",
			"25 floors of modern living",
		],
		pricingPlan: [
			{
				price: "16.9M KSH",
				installmentPlan: [
					"30% - 5,070,000 KSH  (deposit)",
					"50℅ - spread equally at 2,112,500 KH every 6 months (4 installments)",
					"20% - 3,380,000 KSH (upon completion in November 2027)",
				],
			},
		],
	},
];
