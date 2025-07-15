import { WALink } from "@/utils/data";
import Link from "next/link";

const ReadyCTA = () => {
	return (
		<div className='flex justify-center items-center flex-col gap-6 p-8 mt-10'>
			<div>
				<span className='text-xl font-semibold'>
					Ready to own a home that grows in value?
				</span>
			</div>
			<div>
				<p className='text-center text-gray-600 leading-7'>
					Experience the beauty, location, and value of our properties
					firsthand. <br /> Let’s help you take the first step toward
					owning or investing in your dream property.
				</p>
			</div>
			<div>
				<Link href={WALink.link}>
					<button className='bg-primary text-white py-3 px-6 rounded-xl cursor-pointer'>
						Secure Your Spot
					</button>
				</Link>
			</div>
		</div>
	);
};
export default ReadyCTA;
