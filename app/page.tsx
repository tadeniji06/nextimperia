import Apartments from "@/components/home/Apartments";
// import Featured from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Reviews from "@/components/home/Reviews";
import RelocationBanner from "@/components/relocation/RelocationBanner";
import RelocationPopup from "@/components/relocation/RelocationPopup";
// import Announcement from "@/components/ui/Announcement";

export default function Home() {
	return (
		<div className='min-h-screen'>
			{/* <Announcement /> */}
			<Hero />
			{/* <Featured /> */}
			<Apartments />
			<WhyChooseUs />
			<Stats />
			<Reviews />
			<RelocationBanner />
			<RelocationPopup />
		</div>
	);
}
