import Apartments from "@/components/home/Apartments";
import Featured from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Announcement from "@/components/ui/Announcement";

export default function Home() {
	return (
		<div className='min-h-screen'>
			<Announcement />
			<Hero />
			<Featured />
			<Apartments />
			<WhyChooseUs />
			<Stats />
		</div>
	);
}
