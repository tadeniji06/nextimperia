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
	am1,
	am2,
	am3,
	am4,
	am5,
	am6,
	am7,
	am8,
	bf1,
	bf2,
	bf3,
	bf4,
	bf5,
	b1,
	b2,
	b3,
	b4,
	b5,
} from "../assets";

export const featured = [
	{
		img: am1,
		title: "Amethyst",
		desc: "A perfect blend of urban sophistication and comfort",
		location: "Denis Pritt",
	},
	{
		img: oak,
		title: "OAK WEST",
		desc: "Flexible payment plan until completion November, 2027",
		location: "Westlands, Nairobi",
	},
	{
		img: eme,
		title: "EMERALD SPRINGS",
		desc: "Flexible payment plan until completion October, 2026",
		location: "Westlands, Nairobi",
	},
];

export const amet = [
	{
		id: "amethyst-props",
		title: "Amethyst Springs  –Denis Pritt near the State House ",
		mainImg: am1,
		flyer: am2,
		photos: [am3, am4, am5, am6, am7, am8],
		desc: `A landmark luxury development featuring 2 striking architectural blocks connected at the rooftop. Rising 22 floors high, with 3 elevators per floor, Amethyst offers 380 exclusive apartments designed for modern urban living by the GY Group. 
Nairobi’s best is within reach — a short drive connects you to Yaya Centre, State House and the vibrant Kilimani lifestyle, while Westlands, Upper Hill , CBD and JKIA Airport are just minutes away,Amethyst keeps you at the center of it all.
`,

		location: "Denis Pritt",
		avgPrice: "7M KSH ($55,000)",
		ApartmentOptions: [
			{
				size: "58m²",
				type: "Standard 1 Bedroom Apartment(76 Units)",
				desc: "Affordable entry point, strong rental demand",
			},
			{
				size: "62m²",
				type: "Premium 1 Bedroom (52 units)",
				desc: "Floor-to-ceiling curved glass, Spacious interiors, premium home appliances",
			},
			{
				size: "88m²",
				type: "Standard 2 Bedroom (114 units)",
				desc: "Balanced layout, double balconies , affordable entry point",
			},
			{
				size: "90m²",
				type: " Floating 2 Bedroom (24 units)",
				desc: "Suspended block design, unique architecture, high-end appliances ",
			},
			{
				size: "95m²",
				type: "Premium 2 Bedroom (76 units)",
				desc: "Elegant curved glass, breathtaking views,high-end appliances ",
			},
			{
				size: "110m²",
				type: "2 Bedroom + Study office(38 units)",
				desc: "Spacious design ,high-end appliances Ideal for long-term living, families",
			},
		],
		highlights: [
			"310 Parking Spaces",
			"Rooftop Infinity Pool with panoramic city views",
			"Luxurious Rooftop Bar & Residents’ Lounge",
			"Rooftop Garden & Paddle Court",
			"Fully Equipped Gym, Spa & Sauna",
			"Wellness Center with Yoga Studios",
			"High-Speed Elevators (3 per floor)",
			"High-Speed Elevators (3 per floor)",
			"24/7 Security with CCTV Surveillance",
			"Two Standby Generators",
		],
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
		location: "Westlands, Nairobi, kenya",
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
		location: "Westlands, Nairobi, kenya",
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
		location: "Westlands, Nairobi, kenya",
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
		location: "Westlands, Nairobi, kenya",
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
					"30% - 2,640,000 (deposit) ",
					"12.5% - 1,100,000 ( after every 6 months) instalment",
					"12.5% - 1,100,000",
					"12.5% - 1,100,000",
					"12.5% - 1,100,000",
					"20% - 1,760,000 (upon completion November 2027)",
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
		location: "Westlands, Nairobi, kenya",
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
		location: "Westlands, Nairobi, kenya",
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

export const brooksideForestOne = [
	{
		id: "brookside-forest-1-project",
		title: "Brookside Forest One Residency",
		mainImg: bf1,
		photos: [bf1, bf2, bf3, bf4, bf5],
		desc: `Forest One Residency embodies a design philosophy centered on luxury, functionality, and distinction. Our approach merges modern aesthetics with practical elegance, ensuring our residence offers a harmonious blend of style and comfort. With its prime location, high rental demand, and contemporary amenities, this apartment is an ideal choice for savvy investors looking to expand their portfolio.`,
		location: "Westlands, Nairobi, Kenya",
		avgPrice: "From 9.1M KSH",
		highlights: [
			"Fully equipped gymnasium",
			"Heated swimming pool",
			"Children's play area",
			"Secure Environment",
			"24/7 security",
		],
		ApartmentOptions: [
			// Type A
			{
				type: "Type A - 3 Bedroom All En-suite with SQ",
				floor: "1st-7th Floor",
				size: "179m²",
				price: "20,585,000 KSH",
				desc: "Spacious 3 bed with SQ (Lower Floors)",
			},
			{
				type: "Type A - 3 Bedroom All En-suite with SQ",
				floor: "8th-20th Floor",
				size: "179m²",
				price: "21,480,000 KSH",
				desc: "Spacious 3 bed with SQ (Upper Floors)",
			},
			// Type B
			{
				type: "Type B - 1 Bedroom",
				floor: "1st-7th Floor",
				size: "79m²",
				price: "9,875,000 KSH",
				desc: "Compact 1 Bed (Lower Floors)",
			},
			{
				type: "Type B - 1 Bedroom",
				floor: "8th-20th Floor",
				size: "79m²",
				price: "9,875,000 KSH",
				desc: "Compact 1 Bed (Upper Floors)",
			},
			// Type C
			{
				type: "Type C - 1 Bedroom",
				floor: "1st-7th Floor",
				size: "81m²",
				price: "9,720,000 KSH",
				desc: "Standard 1 Bed (Lower Floors)",
			},
			{
				type: "Type C - 1 Bedroom",
				floor: "8th-20th Floor",
				size: "81m²",
				price: "10,125,000 KSH",
				desc: "Standard 1 Bed (Upper Floors)",
			},
			// Type D
			{
				type: "Type D - 1 Bedroom",
				floor: "1st-7th Floor",
				size: "76m²",
				price: "9,120,000 KSH",
				desc: "Value 1 Bed (Lower Floors)",
			},
			{
				type: "Type D - 1 Bedroom",
				floor: "8th-20th Floor",
				size: "76m²",
				price: "9,500,000 KSH",
				desc: "Value 1 Bed (Upper Floors)",
			},
			// Type E
			{
				type: "Type E - 2 Bedroom All En-suite",
				floor: "1st-7th Floor",
				size: "120m²",
				price: "14,400,000 KSH",
				desc: "Luxury 2 Bed (Lower Floors)",
			},
			{
				type: "Type E - 2 Bedroom All En-suite",
				floor: "8th-20th Floor",
				size: "120m²",
				price: "15,000,000 KSH",
				desc: "Luxury 2 Bed (Upper Floors)",
			},
		],
	},
];

export const brooksideOne = [
	{
		id: "brookside-one-project",
		title: "Brookside One Residency",
		mainImg: b1,
		photos: [b1, b2, b3, b4, b5],
		desc: `Brookside One, one more upcoming masterpiece project in Nairobi real estate development industry after Riverside One and Rhapta One. Offering premium living spaces with top-tier amenities.`,
		location: "Westlands, Nairobi, Kenya",
		avgPrice: "From 14.5M KSH",
		highlights: [
			"Entrance hall with reception",
			"Club House",
			"Automatic generator",
			"Fully equipped gym",
			"24/7 security",
			"Borehole and underground water storage",
		],
		ApartmentOptions: [
			// Block A
			{
				type: "Block A - A-101 (4 BED+DSQ)",
				size: "299m²",
				price: "34.5 Million KSH",
				desc: "Premium 4 Bedroom with DSQ",
			},
			{
				type: "Block A - A-102 (3 BED+DSQ)",
				size: "222m²",
				price: "25.5 Million KSH",
				desc: "Spacious 3 Bedroom with DSQ",
			},
			{
				type: "Block A - A-103 (3 BED+DSQ)",
				size: "172m²",
				price: "19.8 Million KSH",
				desc: "Modern 3 Bedroom with DSQ",
			},
			{
				type: "Block A - A-104 (2 BED)",
				size: "126m²",
				price: "14.5 Million KSH",
				desc: "Cosy 2 Bedroom",
			},
			// Block B
			{
				type: "Block B - B-101 (4 BED+DSQ)",
				size: "279m²",
				price: "32 Million KSH",
				desc: "Premium 4 Bedroom with DSQ",
			},
			{
				type: "Block B - B-102 (3 BED+DSQ)",
				size: "222m²",
				price: "25.5 Million KSH",
				desc: "Spacious 3 Bedroom with DSQ",
			},
			{
				type: "Block B - B-103 (3 BED+DSQ)",
				size: "172m²",
				price: "19.8 Million KSH",
				desc: "Modern 3 Bedroom with DSQ",
			},
			{
				type: "Block B - B-104 (2 BED)",
				size: "129m²",
				price: "14.8 Million KSH",
				desc: "Cosy 2 Bedroom",
			},
		],
	},
];
