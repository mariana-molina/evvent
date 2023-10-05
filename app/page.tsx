import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Dashboard from '@/components/Dashboard';
import Sidebar from '@/components/Sidebar';
import { Divider } from '@tremor/react';

export default function Home() {
	return (
		<div className="flex flex-col w-full">
			<div className="flex flex-row mb:5">
				<Sidebar />
				<div className="flex flex-col w-full md:mb-8 md:mr-5">
					<Header />
					<Dashboard />
				</div>
			</div>
			<div className="md:mx-10 mx-2 my-5">
				<Divider />
				<Footer />
			</div>
		</div>
	);
}
