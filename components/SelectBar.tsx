import React, { useState } from 'react';
import { HiChartPie } from 'react-icons/hi';
import { BiSolidBox } from 'react-icons/bi';
import { HiTrendingUp } from 'react-icons/hi';
import { AiFillDollarCircle } from 'react-icons/ai';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

type SelectBarProps = {
	icon: string;
	title: string;
	options: string[];
};

const BarIcon = ({ dropdown, icon }: any) => {
	switch (icon) {
		case 'HiChartPie':
			return (
				<HiChartPie className={`${dropdown && 'text-white'} text-black`} />
			);
		case 'BiSolidBox':
			return (
				<BiSolidBox className={`${dropdown && 'text-white'} text-black`} />
			);
		case 'HiTrendingUp':
			return (
				<HiTrendingUp className={`${dropdown && 'text-white'} text-black`} />
			);
		case 'AiFillDollarCircle':
			return (
				<AiFillDollarCircle
					className={`${dropdown && 'text-white'} text-black`}
				/>
			);
		default:
			return (
				<HiChartPie className={`${dropdown && 'text-white'} text-black`} />
			);
	}
};

function SelectBar({ title, icon, options }: SelectBarProps) {
	const [dropdown, setDropdown] = useState(false);
	return (
		<div className="flex flex-col">
			<button onClick={() => setDropdown(!dropdown)} className="mb-2">
				<div
					className={`justify-between sidebarButton ${
						dropdown && 'bg-black text-white hover:bg-black hover:text-white'
					}`}
				>
					<div className="flex flex-row items-center space-x-2 ">
						<BarIcon dropdown={dropdown} icon={icon} />

						<p>{title}</p>
					</div>
					{options.length > 1 ? <MdOutlineKeyboardArrowDown /> : ''}
				</div>
			</button>
			{dropdown && (
				<div className="flex flex-col space-y-2 px-2 mb-2 ">
					{options.map((o, i) => {
						return (
							<button
								onClick={() => setDropdown(!dropdown)}
								key={i + o}
								className="w-full hover:bg-slate-200 rounded-md hover:shadow-sm text-left p-1"
							>
								{o}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default SelectBar;
