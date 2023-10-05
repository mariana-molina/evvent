'use client';

import React from 'react';
import SelectBar from './SelectBar';
import { Divider } from '@tremor/react';
import ButtonSideBar from './ButtonSideBar';

const sidebarInfo = [
	{
		id: '8912731AAE144',
		icon: 'HiChartPie',
		title: 'Dashboard',
		options: ['Overview', 'Transition List'],
	},
	{
		id: '8035731AAE564',
		icon: 'BiSolidBox',
		title: 'Service',
		options: ['Active Services', 'Total Active Booking', 'Total Income'],
	},
	{
		id: '1234531ABE462',
		icon: 'HiTrendingUp',
		title: 'Analytics',
		options: [],
	},
	{
		id: '0948291CAE523',
		icon: 'AiFillDollarCircle',
		title: 'Earnings',
		options: [],
	},
];
const sidebarButtons = [
	{
		id: Math.random(),
		title: 'My Profile',
		icon: 'profilePicture',
		imgUrl: 'https://picsum.photos/id/64/200',
	},
	{
		id: Math.random(),
		title: 'My Messages',
		icon: 'AiFillMessage',
	},
	{
		id: Math.random(),
		title: 'My Orders',
		icon: 'BiSolidBox',
	},
	{
		id: Math.random(),
		title: 'Log out',
		icon: 'HiLogout',
	},
];

function Sidebar() {
	return (
		<div className=" bg-gray-100 shadow-md hidden md:flex md:flex-col items-center p-3 w-1/4 max-h-[700px] z-50 mr-5">
			<div className="bg-[#ec1c7b] rounded-md text-center text-white font-bold w-[120px] p-2 text-xl my-5">
				<p>evvent.no</p>
			</div>
			<div>
				{sidebarInfo.map(select => {
					return (
						<SelectBar
							key={select.id}
							title={select.title}
							icon={select.icon}
							options={select.options}
						/>
					);
				})}
			</div>

			<Divider />

			<div>
				{sidebarButtons.map(button => {
					return (
						<ButtonSideBar
							key={button.id}
							title={button.title}
							icon={button.icon}
							imgUrl={button.imgUrl}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Sidebar;
