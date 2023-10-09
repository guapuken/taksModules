import React from 'react';
import Aside from './helpers/Aside';
//styles
import './Styles/Wizard.scss';

const Content = ({ children, ...props }: any) => {
	return (
		<div {...props} style={{ width: props.width, height: props.height, ...props.style }}>
			{children}
		</div>
	);
};
const Wizard = ({ children, ...props }: any) => {
	return (
		<div
			{...props}
			style={{ width: props.width, height: props.height, ...props.style }}
			className={`_GTL_Wizard ${props.className}`}
		>
			{children}
		</div>
	);
};

Wizard.Aside = Aside;
Wizard.Content = Content;

export default Wizard;
