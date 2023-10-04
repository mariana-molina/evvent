import Image from 'next/image';
import React, { useState } from 'react';
import cakeIcon from '../public/three-quarters.png';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

function SelectBar() {
	const [dropdown, setDropdown] = useState(false);
	return (
		<div className="flex flex-col">
			<button onClick={() => setDropdown(!dropdown)} className="mb-2">
				<div className="flex flex-row justify-between text-xl font-bold items-center bg-black text-white rounded-md p-2 w-full">
					<div className="flex flex-row items-center space-x-1">
						<Image src={cakeIcon} alt="Icon" sizes="10" />
						<p>Dashboard</p>
					</div>
					<MdOutlineKeyboardArrowDown />
				</div>
			</button>
			{dropdown && (
				<div className="flex flex-col space-y-2 px-2">
					<p className="hover:bg-slate-200 rounded-md">Overview</p>
					<p className="hover:bg-slate-200 rounded-md">Transition List</p>
				</div>
			)}
		</div>
	);
}

export default SelectBar;
