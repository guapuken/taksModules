import React, { useState } from 'react';
// types
import { carousel, elements } from './types/types';
// estilos
import './styles/carousel.scss';
// elemento auxiliares
import { ButtonsPrevNext, Examples, dataExample } from './principalComponents';
import { asignIndex, sizeElement } from './functions/functions';

const Carousel = ({ Card, data = dataExample, height = 264, titleContent }: carousel) => {
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
						transform: `translateX(-${
							property?.index * (sizeElement(data)?.width ?? 0)
						}px)`,
					}}
				>
					{data.map((prop: elements) => {
						return (
							<div
								className={`card card${prop.index}`}
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
								key={prop.id}
								id={`card${prop.id}`}
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
