import React from 'react';
import ShortLogo from './ShortLogo';
import { LiaFacebookSquare } from 'react-icons/lia';
import { BiLogoInstagram } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import { LiaYoutube } from 'react-icons/lia';

const footerInfo = [
	{
		id: Math.random(),
		title: 'Home',
		options: ['Medical Assistance'],
	},
	{
		id: Math.random(),
		title: 'Services',
		options: ['Photography', 'Catering', 'Henna', 'Hairstyling'],
	},
	{
		id: Math.random(),
		title: 'Dashboard',
		options: [
			'Dashboard',
			'Service',
			'Analytics',
			'Wallet',
			'My Profile',
			'My Messages',
		],
	},
	{
		id: Math.random(),
		title: 'Policy',
		options: [
			'Terms & conditions',
			'Privacy Policy',
			'Payment Policy',
			'Booking Policy',
			'FAQ',
		],
	},
];

function Footer() {
	return (
		<div className="flex flex-row flex-wrap w-full justify-between space-y-5 md:space-y-0">
			<div className="flex flex-col space-y-3">
				<div>
					<ShortLogo />
				</div>
				<div className="flex flex-row items-center space-x-2">
					<LiaFacebookSquare size={25} />
					<p>Facebook</p>
				</div>
				<div className="flex flex-row items-center space-x-2">
					<FaTwitter size={25} />
					<p>Twitter</p>
				</div>
				<div className="flex flex-row items-center space-x-2">
					<BiLogoInstagram size={25} />
					<p>Instagram</p>
				</div>
				<div className="flex flex-row items-center space-x-2">
					<LiaYoutube size={25} />
					<p>YouTube</p>
				</div>
			</div>
			{footerInfo.map(info => {
				return (
					<div key={info.id} className="flex flex-col space-y-2">
						<h1 className="font-bold mb-3">{info.title}</h1>
						{info.options.map((option, i) => {
							return (
								<button key={i + option} className="footerButton">
									{option}
								</button>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

export default Footer;
