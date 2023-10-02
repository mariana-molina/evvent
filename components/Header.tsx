import Image from 'next/image';
import React from 'react';
import { HiUserCircle } from 'react-icons/hi';
import logo from '../public/evvent-logo-complete.jpeg';

function Header() {
	return (
		<header className="sticky top-0 flex items-center justify-between max-w-7-xl mx-auto z-20 p-5 xl:items-center">
			<div className="flex flex-row justify-between">
				<Image src={logo} alt="Evvent Logo" width={110} height={60} />
				<div className="flex flex-row items-center">
					<p>About us</p>
					<p>Products</p>
					<p>Sell with us</p>
				</div>
			</div>

			<HiUserCircle size={30} />
		</header>
	);
}

export default Header;
