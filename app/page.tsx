import Header from '@/components/Header';
import ProductSection from '@/components/ProductSection';
import Sidebar from '@/components/Sidebar';

export default function Home() {
	return (
		<>
			<Header />
			<main className="bg-gray-100 h-screen">
				<Sidebar />

				<ProductSection />
			</main>
		</>
	);
}
