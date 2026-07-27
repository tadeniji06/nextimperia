"use client";
import { useState } from "react";
import PropsFacilities from "@/components/properties/PropsFacilities";
import { PropertyType } from "@/utils/property";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import PropsHero from "@/components/properties/PropsHero";
import PropsNav from "@/components/properties/PropsNav";

const PropertiesPage = () => {
	const [activeFacilityProp, setActiveFacilityProp] = useState<PropertyType>("emerald");

	return (
		<div>
			<PropsHero />
			<PropsNav />
			<div className='bg-gradient-to-br from-gray-50 to-gray-100'>
				<PropsFacilities activeProperty={activeFacilityProp} />
			</div>
		</div>
	);
};

export default PropertiesPage;
