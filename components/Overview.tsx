import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { HiTrendingUp } from 'react-icons/hi';
import { HiTrendingDown } from 'react-icons/hi';

const evventData = [
	{
		id: 1,
		title: 'active services',
		services: 24,
		isService: true,
		trending: 60,
		time: 'last month',
		number: 15,
	},
	{
		id: 2,
		title: 'Total active booking',
		services: 10,
		isService: true,

		trending: -33,
		time: 'last month',
		number: 15,
	},
	{
		id: 3,
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
			<div className="flex flex-row flex-wrap m-2 text-sm gap-2 md:space-x-4">
				{evventData.map(data => {
					return (
						<div key={data.id} className="dashboardBox">
							<div className="flex flex-row items-center justify-between pb-4">
								<h3 className="font-bold capitalize">{data.title}</h3>
								<MdKeyboardArrowRight />
							</div>
							<div className="flex flex-col space-y-2">
								<div className="flex flex-row justify-between items-center">
									<div className="flex flex-row font-bold items-center">
										<p className="font-extrabold text-lg mr-2 capitalize">
											{data.services}
										</p>
										<p>{`${data.isService === true ? 'services' : ''}`}</p>
									</div>
									{data.trending > 0 ? (
										<div className="flex flex-row items-center bg-[#b3f1c6] text-[#066c4a] text-xs font-semibold px-1.5 py-0.5 rounded-md">
											<HiTrendingUp />
											<p className="pl-1">+{data.trending}%</p>
										</div>
									) : (
										<div className="flex flex-row items-center bg-[#f1b3b3] text-[#e82525] text-xs font-semibold px-1.5 py-0.5 rounded-md">
											<HiTrendingDown />
											<p className="pl-1">-{data.trending}%</p>
										</div>
									)}
								</div>
								<div>
									<p className="flex flex-row text-xs items-center capitalize">
										{data.time}{' '}
										<p
											className={`font-extrabold pl-2 ${
												typeof data.number === 'string' && ' text-[#066c4a]'
											}`}
										>
											{data.number}
										</p>
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Overview;
