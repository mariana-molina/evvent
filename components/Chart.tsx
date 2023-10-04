'use client';

import React from 'react';
import { Card, Title, AreaChart } from '@tremor/react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const chartdata = [
	{
		date: '17 - 24 Sep 2023',
		Income: 50000,
	},
	{
		date: '25 - 1 Ago 2023',
		Income: 37000,
	},
	{
		date: '2 -9 Ago 2023',
		Income: 35000,
	},
	{
		date: '9 -17 Ago 2023',
		Income: 40000,
	},
	{
		date: '18 -25 Ago 2023',
		Income: 45000,
	},
];

const dataFormatter = (number: number) => {
	return Intl.NumberFormat('us').format(number).toString();
};

function Chart() {
	return (
		<div className="m-2 max-w-4xl">
			<Card>
				<div className="flex flex-row items-center justify-between">
					<Title className="font-extrabold">Sale Statistic</Title>
					<div className="flex flex-row space-x-2 text-xs md:text-base">
						<button className="border border-gray-300 rounded-md font-semibold p-1 md:p-1 md:px-3 flex flex-row items-center space-x-2">
							<p>Last Month</p>
							<MdKeyboardArrowDown />
						</button>
						<button className="border bg-[#ec1c7b] rounded-md p-1 md:p-1 md:px-3 text-white">
							Download CSV
						</button>
					</div>
				</div>

				<AreaChart
					className="mt-4 text-sm"
					data={chartdata}
					index="date"
					categories={['Income']}
					colors={['pink', 'indigo']}
					valueFormatter={dataFormatter}
					showLegend={false}
					minValue={25000}
				/>
				<div className="flex justify-center items-center">
					<button className="capitalize border-2 border-[#e04e92] text-[#e04e92] font-bold rounded-md py-1 px-3 mt-6">
						See More Statistics
					</button>
				</div>
			</Card>
		</div>
	);
}

export default Chart;
