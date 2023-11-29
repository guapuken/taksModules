import React, { useState } from 'react';
import Tab from './Helpers/Tab';
import Button from '../Button/Button';
//styles
import './Styles/Tabs.scss';

const Tabs = ({ children, ...props }: any) => {
	const [activeTab, setActiveTab] = useState(0);
	const handleTabClick = (index) => {
		setActiveTab(index);
	};
	return (
		<div>
			<div>
				{React.Children.map(children, (child, index) => (
					<Button key={index} onClick={() => handleTabClick(index)}>
						{child.props.label}
					</Button>
				))}
			</div>
			<div>
				{React.Children.map(children, (child, index) => (
					<div style={{ display: activeTab === index ? 'block' : 'none' }}>{child}</div>
				))}
			</div>
		</div>
	);
};

Tabs.Tab = Tab;

export default Tabs;
