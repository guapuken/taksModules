import React from 'react';
//styles
import './Styles/Ficha.scss';
import Image from './helpers/Image';
import Pleca from './helpers/Pleca';
import { Measures } from '../Atoms';

const Ficha = ({ children, modo, ...props }: any) => {
	return (
		<div className="_GTL_Fichas" theme-config={modo}>
			<div className="_GTL_Fichas__bg" />
			<div
				{...props}
				className={`_GTL_Fichas__ficha ${props.className}`}
				style={{ width: props.width, height: props.height, ...props.style }}
			>
				{children}
			</div>
		</div>
	);
};

Ficha.Image = Image;
Ficha.Pleca = Pleca;
Ficha.Measures = Measures;

export default Ficha;
