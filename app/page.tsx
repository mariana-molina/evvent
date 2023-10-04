import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Dashboard from '@/components/Dashboard';
import Sidebar from '@/components/Sidebar';

export default function Home() {
	return (
		<>
			<Header />

			<main className="">
				<Sidebar />

				<Dashboard />
			</main>
			<Footer />
		</>
	);
}
