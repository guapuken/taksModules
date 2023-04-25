import React from 'react';
// types
import { carousel, elements } from './types';
// estilos
import './carousel.scss';
// elemento auxiliares
import { Examples } from './files';

import img_example from '../../img/example_1.jpg';

const dataExample = [
	{
		_id: '544',
		index: 0,
		price: 95426,
		picture: 'https://google.com.mx',
	},
	{
		_id: '25',
		index: 1,
		price: 452,
		picture: 'https://google.com.mx',
	},
	{
		_id: '485',
		index: 2,
		price: 153,
		picture: 'https://google.com.mx',
	},
	{
		_id: '2563',
		index: 3,
		price: 2456,
		picture: 'https://google.com.mx',
	},
	{
		_id: '544',
		index: 4,
		price: 95426,
		picture: 'https://google.com.mx',
	},
	{
		_id: '25',
		index: 5,
		price: 452,
		picture: 'https://google.com.mx',
	},
	{
		_id: '485',
		index: 6,
		price: 153,
		picture: 'https://google.com.mx',
	},
	{
		_id: '2563',
		index: 7,
		price: 2456,
		picture: 'https://google.com.mx',
	},
	{
		_id: '544',
		index: 8,
		price: 95426,
		picture: 'https://google.com.mx',
	},
	{
		_id: '25',
		index: 9,
		price: 452,
		picture: 'https://google.com.mx',
	},
	{
		_id: '485',
		index: 10,
		price: 153,
		picture: 'https://google.com.mx',
	},
	{
		_id: '2563',
		index: 11,
		price: 2456,
		picture: 'https://google.com.mx',
	},
	{
		_id: '544',
		index: 12,
		price: 95426,
		picture: 'https://google.com.mx',
	},
	{
		_id: '25',
		index: 13,
		price: 452,
		picture: 'https://google.com.mx',
	},
	{
		_id: '485',
		index: 14,
		price: 153,
		picture: 'https://google.com.mx',
	},
	{
		_id: '2563',
		index: 15,
		price: 2456,
		picture: 'https://google.com.mx',
	},
	{
		_id: '544',
		index: 16,
		price: 95426,
		picture: 'https://google.com.mx',
	},
	{
		_id: '25',
		index: 17,
		price: 452,
		picture: 'https://google.com.mx',
	},
	{
		_id: '485',
		index: 18,
		price: 153,
		picture: 'https://google.com.mx',
	},
	{
		_id: '2563',
		index: 19,
		price: 2456,
		picture: 'https://google.com.mx',
	},
];

const Carousel = ({ Card, width = 500, data = dataExample }: carousel) => {
	// const [properties, setProperties] = React.useState(elements || data.properties);
	const [properties, setProperties] = React.useState(data);
	// const [property, setProperty] = React.useState(elements ? elements[0] : data.properties[0]);
	const [property, setProperty] = React.useState(data[0]);

	function nextProperty() {
		const newIndex = property.index + 1;
		setProperty(data[newIndex]);
	}

	function prevProperty() {
		const newIndex = property.index - 1;
		setProperty(data[newIndex]);
	}
	console.log(`-${property.index * width}px`);
	return (
		<div style={{ position: 'relative', height: '264px' }}>
			<button
				className="arrow arrowLeft"
				onClick={prevProperty}
				disabled={property.index === 0}
			></button>
			<button
				className="arrow arrowRight"
				onClick={nextProperty}
				disabled={property.index === data.length - 1}
			></button>
			<div
				number-cards={properties.length}
				className={`cards-slider active-slide-${property.index}`}
				style={{
					width: width,
				}}
			>
				<div
					className="cards-slider-wrapper"
					style={{
						// transform: `translateX(-${property.index * (width / properties.length)}%)`,
						transform: `translateX(-${property.index * width}px)`,
						// transform: `translateX(-100%)`,
					}}
				>
					{properties.map((property: any) => (
						<div
							className={`card card${property.index}`}
							style={{ display: 'grid', placeItems: 'center' }}
						>
							{Card ? (
								<Card key={property.id} property={property} />
							) : (
								<div key={property.id} className="noCtn">
									<p style={{ fontWeight: 'bold' }}>
										Precio:
										<span style={{ fontWeight: 'lighter', marginLeft: '5px' }}>
											{`$${property.price}.00`}
										</span>
									</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
