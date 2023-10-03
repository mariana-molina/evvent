import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { HiTrendingUp } from 'react-icons/hi';
import { HiTrendingDown } from 'react-icons/hi';

const peopleData = [
	{
		id: 1,
		name: 'Sophia Lee',
		phone: 234567890,
		amount: '1.250 NOK',
		date: '30 Sep 2023',
		status: 'pending',
	},
	{
		id: 2,
		name: 'William adams',
		phone: 890123456,
		amount: '2.180 NOK',
		date: '29 Sep 2023',
		status: 'pending',
	},
	{
		id: 3,
		name: 'Olivia brown',
		phone: 111563890,
		amount: '2.790 NOK',
		date: '28 Sep 2023',
		status: 'pending',
	},
	{
		id: 4,
		name: 'Sarah anderson',
		phone: 233213830,
		amount: '1.500 NOK',
		date: '27 Sep 2023',
		status: 'pending',
	},
	{
		id: 5,
		name: 'Natalie Marie evans',
		phone: 883563222,
		amount: '1.120 NOK',
		date: '27 Sep 2023',
		status: 'ongoing',
	},
	{
		id: 6,
		name: 'benjamin davis',
		phone: 233563880,
		amount: '1250 NOK',
		date: '23 Sep 2023',
		status: 'ongoing',
	},
	{
		id: 7,
		name: 'mariana molina',
		phone: 233599890,
		amount: '5000 NOK',
		date: '22 Sep 2023',
		status: 'ongoing',
	},
];

function Dashboard() {
	return (
		<div className="flex flex-col">
			<h1 className="font-bold text-3xl md:text-6xl  m-2">Dashboard</h1>
			<div className="flex flex-row text-sm border border-gray-300 w-fit h-fit py-0.5 px-0.5 justify-between rounded-md shadow-sm mx-2 mb-2">
				<p className="bg-[#f1b3d0] text-[#e9006d] text-xs font-semibold p-1.5 rounded-md mr-6">
					Overview
				</p>
				<p className="text-xs font-semibold p-1.5 ">Transation List</p>
			</div>
			<section id="overview">
				<div className="flex flex-row flex-wrap m-2 text-sm gap-2 md:space-x-4">
					<div className="dashboardBox">
						<div className="flex flex-row items-center justify-between  pb-4">
							<h3 className="font-bold">Active Services</h3>
							<MdKeyboardArrowRight />
						</div>
						<div className="flex flex-col space-y-2">
							<div className="flex flex-row justify-between items-center">
								<p className="flex flex-row font-bold items-center">
									<p className="font-extrabold text-lg mr-2 ">24</p> services
								</p>
								<div className="flex flex-row items-center bg-[#b3f1c6] text-[#066c4a] text-xs font-semibold px-1.5 py-0.5 rounded-md">
									<HiTrendingUp />
									<p className="pl-1">+60%</p>
								</div>
							</div>
							<div>
								<p className="flex flex-row text-xs items-center">
									Last Month <p className="font-extrabold pl-2">15</p>
								</p>
							</div>
						</div>
					</div>
					<div className="dashboardBox">
						<div className="flex flex-row items-center justify-between  pb-4">
							<h3 className="font-bold">Total Active Booking</h3>
							<MdKeyboardArrowRight />
						</div>
						<div className="flex flex-col space-y-2">
							<div className="flex flex-row justify-between items-center">
								<p className="flex flex-row font-bold items-center">
									<p className="font-extrabold text-lg mr-2 ">10</p> services
								</p>
								<div className="flex flex-row items-center bg-[#f1b3b3] text-[#e82525] text-xs font-semibold px-1.5 py-0.5 rounded-md">
									<HiTrendingDown />
									<p className="pl-1">-33%</p>
								</div>
							</div>
							<div>
								<p className="flex flex-row text-xs items-center">
									Last Month <p className="font-extrabold pl-2">15</p>
								</p>
							</div>
						</div>
					</div>
					<div className="dashboardBox">
						<div className="flex flex-row items-center justify-between  pb-4">
							<h3 className="font-bold">Total Income</h3>
							<MdKeyboardArrowRight />
						</div>
						<div className="flex flex-col space-y-2">
							<div className="flex flex-row justify-between items-center">
								<p className="uppercase font-bold text-lg items-center text-[#066c4a]">
									50 K NOK
								</p>
								<div className="flex flex-row items-center bg-[#b3f1c6] text-[#066c4a] text-xs font-semibold px-1.5 py-0.5 rounded-md">
									<HiTrendingUp />
									<p className="pl-1">+50%</p>
								</div>
							</div>
							<div>
								<p className="flex flex-row text-xs items-center">
									Last Month{' '}
									<p className="font-extrabold pl-2 text-[#066c4a]">
										25.000 NOK
									</p>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="#transation-list">
				<div className="flex flex-col md:flex-row m-2">
					<div className="border border-gray-300 shadow-sm">
						<div className="flex flex-row justify-between font-bold items-center m-4">
							<h3>Transation List</h3>
							<MdKeyboardArrowRight />
						</div>
						<div className="flex flex-col items-center">
							<div className="flex flex-row bg-gray-200 justify-between w-[340px] rounded-md mx-4 my-2 p-2">
								<p>Transation</p>
								<p>Amount</p>
								<p>Date</p>
								<p>Status</p>
							</div>
							<table className="w-full border-separate border-spacing-2 max-w-[350px] flex flex-col h-[400px] overflow-y-scroll">
								{peopleData.map(person => {
									return (
										<tr key={person.id} className="dataRow">
											<td className="px-2 capitalize w-[90px]">
												{person.name} <br />
												<p className="text-gray-500"> {person.phone}</p>
											</td>
											<td className="px-2 text-green-800  w-[130px]">
												{person.amount}
											</td>
											<td className="px-2 text-gray-500  w-[90px]">
												{person.date}
											</td>
											<td className="px-2 w-[70px] ">
												<p
													className={`capitalize w-fit font-bold rounded-md py-0.5 px-2 text-center ${
														person.status === 'pending'
															? 'bg-[#f1b3b3] text-[#e82525]'
															: 'bg-[#f1e3b3] text-[#e8bb25]'
													}`}
												>
													{person.status}
												</p>
											</td>
										</tr>
									);
								})}
							</table>
						</div>
					</div>
					<div className="border border-gray-300 shadow-sm">
						<div className="flex flex-row justify-between font-bold items-center">
							<h3>Top Performance (Monthly)</h3>
							<MdKeyboardArrowRight />
						</div>
					</div>
				</div>
			</section>

			{/*
			<section id="#sellwithus">
				<div>Sale Statistic</div>
			</section> */}
		</div>
	);
}

export default Dashboard;
