import React, { useState } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import { LiaBellSolid } from 'react-icons/lia';
import { BsChat } from 'react-icons/bs';
function Header() {
	return (
		<header className="sticky top-0 bg-white shadow-sm flex items-center justify-between max-w-7-xl mx-auto p-4 xl:items-center">
			<div className="flex flex-row items-center text-sm space-x-1 md:space-x-9">
				<button className="headerButton">Home page</button>
				<button className="headerButton">Explore</button>
				<button className="headerButton">About Evvent</button>
			</div>
			<div className="flex flex-row items-center space-x-2 md:space-x-3">
				<button className="border border-gray-400 rounded-md text-xs md:text-base sm:p-1 md:px-2">
					+ Add services
				</button>
				<button>
					<BsChat size={20} color={'gray'} />
				</button>
				<button>
					<LiaBellSolid size={20} color={'gray'} />
				</button>

				<button className="flex flex-row items-center">
					<HiUserCircle size={25} color={'gray'} />
				</button>
			</div>
		</header>
	);
}

export default Header;
