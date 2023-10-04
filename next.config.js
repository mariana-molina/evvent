/** @type {import('next').NextConfig} */
const nextConfig = {
	content: [
		'./node_modules/@tremor/**/*.{js,ts,jsx,tsx}', // Tremor module
	],
	images: {
		domains: ['picsum.photos'],
	},
};

module.exports = nextConfig;
