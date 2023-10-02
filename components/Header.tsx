'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import logo from '../public/evvent-logo-complete.jpeg';

function Header() {
	const [loging, setloging] = useState(false);

	return (
		<header className="sticky top-0 flex items-center justify-between max-w-7-xl mx-auto p-5 xl:items-center">
			<div className="">
				<Image src={logo} alt="Evvent Logo" width={110} height={60} />
			</div>
			<div className="flex flex-row items-center text-sm">
				<button className="headerButton">About us</button>
				<button className="headerButton">Products</button>
				<button className="headerButton">Sell with us</button>
			</div>

			<button
				onClick={() => {
					setloging(!loging);
				}}
				className=" flex flex-row items-center"
			>
				<HiUserCircle size={30} color={'#ea1d7b'} />
				<p className="hidden md:inline-flex md:px-0 uppercase text-xs text-gray-500 headerButton ">
					Log in
				</p>
			</button>
		</header>
	);
}

export default Header;
