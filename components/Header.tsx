'use client';

import { HiUserCircle } from 'react-icons/hi';
import { LiaBellSolid } from 'react-icons/lia';
import { BsChat } from 'react-icons/bs';
import ShortLogo from './ShortLogo';
function Header() {
	return (
		<header className="bg-white flex items-center justify-between m-2 w-full z-0">
			<div className="flex flex-row items-center text-sm">
				<div className="md:hidden">
					<ShortLogo />
				</div>
				<button className="headerButton">Home page</button>
				<button className="headerButton">Explore</button>
				<button className="headerButton">About Evvent</button>
			</div>
			<div className="flex flex-row items-center space-x-2 md:space-x-3">
				<button className="border border-gray-400 rounded-md text-xs md:text-base md:px-2 hover:shadow-md">
					+ Add services
				</button>
				<button>
					<BsChat
						size={20}
						color={'gray'}
						className="hover:shadow-md rounded-md"
					/>
				</button>
				<button>
					<LiaBellSolid
						size={20}
						color={'gray'}
						className="hover:shadow-md rounded-md"
					/>
				</button>

				<button className="flex flex-row items-center">
					<HiUserCircle
						size={25}
						color={'gray'}
						className="hover:shadow-md rounded-md"
					/>
				</button>
			</div>
		</header>
	);
}

export default Header;
