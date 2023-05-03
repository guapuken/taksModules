import React, { useState } from 'react';
// types
import { carousel, elements } from './types';
// estilos
import './carousel.scss';
// elemento auxiliares
import { ButtonsPrevNext, Examples, dataExample } from './files';
import { asignIndex } from './functions/functions';

const Carousel = ({
	Card,
	width = 500,
	data = dataExample,
	height = 264,
	titleContent,
}: carousel) => {
	// recibe la data y les asigna un index automático
	asignIndex(data, 'index');
	// seleciona la propiedad activa
	const [property, setProperty] = useState(data[0]);

	return (
		<div style={{ position: 'relative', height: height, width: '100%' }}>
			<ButtonsPrevNext property={property} setProperty={setProperty} data={data} />
			<div
				className={`cards-slider active-slide-${property?.index}`}
				style={{ width: '100%', overflow: 'hidden' }}
			>
				<div>{titleContent}</div>
				<div
					className={`cards-slider-wrapper`}
					style={{
						transform: `translateX(-${property?.index * width}px)`,
					}}
				>
					{data.map((prop: elements) => {
						return (
							<div
								className={`card card${prop.index}`}
								style={{
									display: 'grid',
									placeItems: 'center',
								}}
								key={prop.id}
							>
								{Card ? (
									<Card key={prop.id} property={prop} />
								) : (
									<Examples property={prop} />
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
