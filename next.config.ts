import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	typescript: {
		// Warning: This allows production builds to successfully complete even if
		// your project has TypeScript errors.
		ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [
			{ hostname: "cdn.sanity.io" },
			{ hostname: "imperiasseo.vercel.app" },
		],
	},
};

export default nextConfig;
