import React from 'react';
import { nextPrevProp } from '../functions/functions';

const ButtonsPrevNext = ({ property, setProperty, data }: any) => {
	return (
		<>
			<button
				className="carrusel__arrow arrowLeft"
				onClick={() => nextPrevProp(false, property, setProperty, data)}
				disabled={property?.index === 0}
			></button>
			<button
				className="carrusel__arrow arrowRight"
				onClick={() => nextPrevProp(true, property, setProperty, data)}
				disabled={property?.index === data.length - 1}
			></button>
		</>
	);
};

export default ButtonsPrevNext;
