import React from 'react';
import Legend from '../Legend/Legend';
import Image from '../../Ficha/helpers/Image';
import { Iluminacion } from '../../../img/icons/iluminacion';
import { Svg } from '../../Atoms';

const IconWithPleca = ({ children, ...props }: any) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center', ...props.style }} {...props}>
			{children}
		</div>
	);
};

IconWithPleca.Icon = Svg;
IconWithPleca.Legend = Legend;

export default IconWithPleca;
