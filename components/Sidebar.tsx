'use client';

import React from 'react';
import SelectBar from './SelectBar';

function Sidebar() {
	return (
		<div className=" bg-gray-100 shadow-md flex flex-col  md:w-1/4">
			<div className="bg-[#ec1c7b] rounded-md text-center text-white font-bold w-[120px] p-2 text-xl">
				<p>evvent.no</p>
			</div>
			<SelectBar />
		</div>
	);
}

export default Sidebar;
