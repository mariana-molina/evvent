import Image from 'next/image';
import React from 'react';
import { AiFillMessage } from 'react-icons/ai';
import { BiSolidBox } from 'react-icons/bi';
import { HiLogout } from 'react-icons/hi';

type ButtonSideBarProps = {
	title: string;
	icon: string;
	imgUrl?: string | undefined;
};

const ButtonIcon = ({ imgUrl, icon }: any) => {
	switch (icon) {
		case 'AiFillMessage':
			return <AiFillMessage />;
		case 'BiSolidBox':
			return <BiSolidBox />;
		case 'HiLogout':
			return <HiLogout />;
		case 'profilePicture':
			console.log(imgUrl);
			return (
				<Image
					src={imgUrl}
					alt="profile pic"
					width={20}
					height={20}
					className="rounded-full"
				/>
			);
		default:
			return <BiSolidBox />;
	}
};
function ButtonSideBar({ title, icon, imgUrl }: ButtonSideBarProps) {
	return (
		<button className="sidebarButton mb-4 space-x-2">
			<ButtonIcon imgUrl={imgUrl} icon={icon} />
			<p>{title}</p>
		</button>
	);
}

export default ButtonSideBar;
