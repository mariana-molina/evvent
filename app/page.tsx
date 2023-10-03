import Dashboard from '@/components/Dashboard';
import Sidebar from '@/components/Sidebar';

export default function Home() {
	return (
		<main className=" h-screen">
			<Sidebar />

			<Dashboard />
		</main>
	);
}
