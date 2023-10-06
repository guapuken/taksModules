import React from 'react';
import Tab from './Helpers/Tab';
//styles
import './Styles/Tabs.scss';

const Tabs = ({ children, ...props }: any) => {
	return (
		<div {...props} className={`_GTL_Tabs ${props.className}`}>
			{children}
		</div>
	);
};

Tabs.Tab = Tab;

export default Tabs;
