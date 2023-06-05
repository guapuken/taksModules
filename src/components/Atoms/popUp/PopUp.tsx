import React from 'react';
import { popupProps } from './types/Types';
const PopUp = ({ isHover, className, children }: popupProps) => {
	return (
		<span
			className={`TextInvolucradosTaskComponent ${className}`}
			style={{
				top: `calc(100% + ${className === 'TabletAndMobileVersion' ? '25px' : '20px'})`,
				right: className === 'TabletAndMobileVersion' ? '' : '0',
				left: className === 'TabletAndMobileVersion' ? 'calc(-160px + 55px)' : '',
				display: isHover ? 'block' : 'none',
				zIndex: '1',
			}}
		>
			<span className="IconMsnTaskComponent">{children}</span>
		</span>
	);
};

export default PopUp;
