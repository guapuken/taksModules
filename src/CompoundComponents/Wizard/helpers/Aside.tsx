import React from 'react';
import Image from '../../Ficha/helpers/Image';
import { Svg } from '../../Atoms';
//styles
import '../Styles/Aside.scss';

const Aside = ({ children, ...props }: any) => {
	return (
		<div {...props} className="_GTL_Aside-wizard">
			{children}
		</div>
	);
};

Aside.Icon = Image;
Aside.Svg = Svg;

export default Aside;
