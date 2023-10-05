'use client';

import Image from 'next/image';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const peopleData = [
	{
		id: Math.random(),
		name: 'Sophia Lee',
		phone: 234567890,
		amount: '1.250 NOK',
		date: '30 Sep 2023',
		status: 'pending',
	},
	{
		id: Math.random(),
		name: 'William adams',
		phone: 890123456,
		amount: '2.180 NOK',
		date: '29 Sep 2023',
		status: 'pending',
	},
	{
		id: Math.random(),
		name: 'Olivia brown',
		phone: 111563890,
		amount: '2.790 NOK',
		date: '28 Sep 2023',
		status: 'pending',
	},
	{
		id: Math.random(),
		name: 'Sarah anderson',
		phone: 233213830,
		amount: '1.500 NOK',
		date: '27 Sep 2023',
		status: 'pending',
	},
	{
		id: Math.random(),
		name: 'Natalie Marie evans',
		phone: 883563222,
		amount: '1.120 NOK',
		date: '27 Sep 2023',
		status: 'ongoing',
	},
	{
		id: Math.random(),
		name: 'benjamin davis',
		phone: 233563880,
		amount: '1250 NOK',
		date: '23 Sep 2023',
		status: 'ongoing',
	},
	{
		id: Math.random(),
		name: 'mariana molina',
		phone: 233599890,
		amount: '5000 NOK',
		date: '22 Sep 2023',
		status: 'ongoing',
	},
];

const serviceData = [
	{
		id: Math.random(),
		name: 'Elegance flower shop',
		img: 'https://picsum.photos/id/210/200',
		profit: '30.5K NOK',
		status: 'active',
	},
	{
		id: Math.random(),
		name: 'Gourmet Coffee House',
		img: 'https://picsum.photos/id/21/200',
		profit: '25.2K NOK',
		status: 'innactive',
	},
	{
		id: Math.random(),
		name: 'Artistic Creations Studio',
		img: 'https://picsum.photos/id/12/200',
		profit: '45.8K NOK',
		status: 'active',
	},
	{
		id: Math.random(),
		name: 'Tech Innovators Hub',
		img: 'https://picsum.photos/200',
		profit: '60.1K NOK',
		status: 'active',
	},
	{
		id: Math.random(),
		name: 'Healthy Living Clinic',
		img: 'https://picsum.photos/id/2/200',
		profit: '35.7K NOK',
		status: 'innactive',
	},
	{
		id: Math.random(),
		name: 'Savory Bites Catering',
		img: 'https://picsum.photos/id/20/200',
		profit: '28.9K NOK',
		status: 'active',
	},
	{
		id: Math.random(),
		name: `Nature's Harmony Spa`,
		img: 'https://picsum.photos/id/33/200',
		profit: '50.3K NOK',
		status: 'active',
	},
	{
		id: Math.random(),
		name: 'Adventure Seekers Tours',
		img: 'https://picsum.photos/id/44/200',
		profit: '40.2K NOK',
		status: 'innactive',
	},
	{
		id: Math.random(),
		name: 'Retro Vinyl Records',
		img: 'https://picsum.photos/id/45/200',
		profit: '55.6K NOK',
		status: 'active',
	},
	{
		id: Math.random(),
		name: 'Wholesome Pet Supplies',
		img: 'https://picsum.photos/id/98/200',
		profit: '37.4K NOK',
		status: 'active',
	},
	{
		id: Math.random(),
		name: 'The Green Thumb Nursery',
		img: 'https://picsum.photos/id/72/200',
		profit: '48.0K NOK',
		status: 'innactive',
	},
	{
		id: Math.random(),
		name: 'Silent Serenity Yoga Studio',
		img: 'https://picsum.photos/id/120/200',
		profit: '33.6K NOK',
		status: 'active',
	},
	{
		id: Math.random(),
		name: 'Urban Jungle Fitness Center',
		img: 'https://picsum.photos/id/85/200',
		profit: '42.7K NOK',
		status: 'active',
	},
];

function TableArea() {
	return (
		<section
			id="transation-list"
			className="flex flex-col md:flex-row m-2 space-y-5 md:space-y-0 md:space-x-5"
		>
			<div className="border border-gray-300 max-w-[400px] rounded-md p-4 shadow-sm hover:shadow-md cursor-pointer">
				<div className="flex flex-row justify-between font-bold items-center m-4">
					<h3>Transation List</h3>
					<MdKeyboardArrowRight />
				</div>
				<div>
					<div className="flex flex-row bg-gray-200 justify-around max-w-[400px] rounded-md mx-4 p-2.5 text-xs font-bold">
						<p>Transation</p>
						<p>Amount</p>
						<p>Date</p>
						<p>Status</p>
					</div>
					<table className="max-w-[400px] border-separate border-spacing-2 flex max-h-[400px] overflow-y-scroll justify-center">
						<thead></thead>
						<tbody>
							{peopleData.map(people => {
								return (
									<tr key={people.id} className="dataRow">
										<td className="capitalize px-2 w-[100px]">
											<p>{people.name}</p>
											<p className="text-gray-500">{people.phone}</p>
										</td>
										<td className="text-green-500  px-2">{people.amount}</td>
										<td className="text-gray-500  px-2">{people.date}</td>
										<td
											className={`capitalize w-fit font-bold rounded-md py-0.5 px-2 text-center ${
												people.status === 'pending'
													? 'bg-[#f1b3b3] text-[#e82525]'
													: 'bg-[#f1e3b3] text-[#e8bb25]'
											}`}
										>
											{people.status}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
			<div>
				<div className="border border-gray-300 max-w-[400px] rounded-md p-4 shadow-sm hover:shadow-md cursor-pointer">
					<div className="flex flex-row justify-between font-bold items-center m-4">
						<h3>Top Performance (Monthly)</h3>
						<MdKeyboardArrowRight />
					</div>
					<div>
						<div className="flex flex-row bg-gray-200 justify-around max-w-[400px] rounded-md mx-4 p-2.5 text-xs font-bold">
							<p>Service</p>
							<p>Profit</p>
							<p>Status</p>
						</div>
						<table className="max-w-[400px] border-separate border-spacing-2 flex flex-col max-h-[400px] overflow-y-scroll">
							<thead></thead>
							<tbody>
								{serviceData.map(service => {
									return (
										<tr key={service.id} className="dataRow">
											<td>
												<Image
													src={service.img}
													alt="service image"
													height={25}
													width={25}
													className="rounded-sm"
												/>
											</td>
											<td className=" w-[90px] capitalize font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
												{service.name}
											</td>
											<td className="px-2 text-green-500">{service.profit}</td>
											<td className="px-2">
												<p
													className={`capitalize w-fit font-bold rounded-md py-0.5 px-2 text-center ${
														service.status === 'active'
															? 'bg-[#b3f1c6] text-[#066c4a] '
															: 'bg-[#f1b3b3] text-[#e82525]'
													}`}
												>
													{service.status}
												</p>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TableArea;
