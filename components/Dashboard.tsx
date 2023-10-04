'use client';
import React from 'react';
import Overview from './Overview';
import TableArea from './TableArea';

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
			{/* <Overview /> */}

			<TableArea />
		</div>
	);
}

export default Dashboard;
