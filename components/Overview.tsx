'use client';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { HiTrendingUp } from 'react-icons/hi';
import { HiTrendingDown } from 'react-icons/hi';

const evventData = [
	{
		id: Math.random(),
		title: 'active services',
		services: 24,
		isService: true,
		trending: 60,
		time: 'last month',
		number: 15,
	},
	{
		id: Math.random(),
		title: 'Total active booking',
		services: 10,
		isService: true,

		trending: -33,
		time: 'last month',
		number: 15,
	},
	{
		id: Math.random(),
		title: 'total income',
		services: '50K NOK',
		isService: false,
		trending: 50,
		time: 'last month',
		number: '25000 NOK',
	},
];

function Overview() {
	return (
		<section id="overview">
			<div className="flex flex-row flex-wrap m-2 text-sm gap-2 md:space-x-4 ">
				{evventData.map(data => {
					const colorData =
						typeof data.services === 'string' || typeof data.number === 'string'
							? 'text-[#066c39]'
							: '';

					return (
						<div key={data.id} className="dashboardBox">
							<div className="flex flex-row items-center justify-between pb-4">
								<h3 className="font-bold capitalize">{data.title}</h3>
								<MdKeyboardArrowRight />
							</div>
							<div>
								<div className="flex flex-row items-center justify-between">
									<div className="flex flex-row space-x-1 items-center">
										<p className={`font-bold text-lg ${colorData}`}>
											{data.services}
										</p>
										<p className="capitalize">{data.isService && 'services'}</p>
									</div>
									<div>
										{data.trending > 0 ? (
											<div className="flex flex-row items-center bg-[#b3f1c6] text-[#066c39] text-xs font-semibold px-1.5 py-0.5 rounded-md">
												<HiTrendingUp />
												<p className="pl-1">+{data.trending}%</p>
											</div>
										) : (
											<div className="flex flex-row items-center bg-[#f1b3b3] text-[#e82525] text-xs font-semibold px-1.5 py-0.5 rounded-md">
												<HiTrendingDown />
												<p className="pl-1">{data.trending}%</p>
											</div>
										)}
									</div>
								</div>
								<div></div>
							</div>
							<div className="flex flex-row space-x-2 capitalize">
								<p className="text-xs">{data.time}</p>
								<p className={`font-bold font-sm ${colorData}`}>
									{data.number}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Overview;
