import React from 'react';
import '../Styles/Tab.scss';

const Tab = ({ children, ...props }: any) => {
	return (
		<span className={`_GTL_Tab ${props.className}`} {...props}>
			{children}
		</span>
	);
};

export default Tab;
