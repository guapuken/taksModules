import React from 'react';
import Image from '../../Ficha/helpers/Image';
import { Svg } from '../../Atoms';
//styles
import '../Styles/Aside.scss';

const Aside = ({ children, ...props }: any) => {
	return (
		<div
			{...props}
			style={{ width: props.width, height: props.height, ...props.style }}
			className={`_GTL_Aside-wizard ${props.className}`}
		>
			{children}
		</div>
	);
};

Aside.Icon = Image;
Aside.Svg = Svg;

export default Aside;
