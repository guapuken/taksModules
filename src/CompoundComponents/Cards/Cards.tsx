import React, { useState } from 'react';
import { Image, Precio } from './Helpers';
//styles
import './Styles/Cards.scss';

const Cards = ({ children, width, height, ...props }: any) => {
	const [openCard, setOpenCard] = useState(false);
	return (
		<div
			{...props}
			className={`_GTL_Cards`}
			style={{
				width: width,
				height: height,
				position: 'relative',
				...props.style,
			}}
		>
			{children}
		</div>
	);
};

Cards.Image = Image;
Cards.Precio = Precio;
export default Cards;
