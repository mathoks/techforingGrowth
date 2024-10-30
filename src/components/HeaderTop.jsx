import React from 'react';
import h from '../style/header.module.css';
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SocialLinks } from './SharedComponents';

const HeaderTop = () => {
	return (
		<div className={h.headerTop}>
			<div className='custom-container'>
				<div className="text-white flex items-center justify-between py-3">
					<div className="flex items-center justify-center lg:gap-8 gap-3">
						{/* <div className="flex items-center justify-center lg:gap-2 gap-0">
							<AiOutlineMail className='text-primary lg:text-[16px] text-[10px]' />
							<a href="mailto:info@techforing.com" className='lg:text-sm text-[8px] leading-[6px] ml-1'>info@techforing.com</a>
						</div> */}
						<div className="flex items-center justify-center lg:gap-2 gap-0">
							<BsFillTelephoneFill className='text-primary lg:text-[16px] text-[10px]' />
							<a href="tel:+1 616 271 8544" className='lg:text-sm text-[8px] leading-[6px] ml-1'>+1 616 271 8544</a>
						</div>
					</div>
					<SocialLinks style={{ fill: "#ffffff", gap: 'gap-3', width: '18', height: '18' }} />
				</div>
			</div>
		</div>
	)
}

export default HeaderTop