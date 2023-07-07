import React, { useState } from 'react';
// types
import { carousel, elements } from './types/types';
// estilos
import './styles/carousel.scss';
// elemento auxiliares
import { ButtonsPrevNext, Examples, dataExample } from './principalComponents';
import { asignIndex, sizeElement } from './functions/functions';
import { SimpleContainer, Title } from '../Atoms';

const Carousel = ({ Card, data = dataExample, height = 264, titleContent, modo }: carousel) => {
	// recibe la data y les asigna un index automático
	asignIndex(data, 'index');
	// seleciona la propiedad activa
	const [property, setProperty] = useState(data[0]);

	return (
		<SimpleContainer className="carrusel" style={{}}>
			<ButtonsPrevNext property={property} setProperty={setProperty} data={data} />
			<SimpleContainer
				className={`carrusel__slider carrusel__active-slide-${property?.index}`}
				// className={`cards-slider active-slide-${property?.index}`}
				style={{ width: '100%', overflow: 'hidden' }}
			>
				<SimpleContainer
					style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
				>
					<Title modo={modo} style={{ margin: '5px 0' }}>
						{titleContent}
					</Title>
				</SimpleContainer>
				<SimpleContainer
					className={`carrusel__slider-wrapper`}
					style={{
						display: 'flex',
						marginLeft: '8px',
						transform: `translateX(-${
							property?.index * (sizeElement(data)?.width ?? 0)
						}px)`,
					}}
				>
					{data.map((prop: elements) => {
						return (
							<SimpleContainer
								className={`carrusel__slider-wrapper-card card${prop.index}`}
								style={{}}
								key={prop.id ?? prop.index}
								id={`card${prop.id}`}
							>
								{Card ? (
									<Card key={prop.id} property={prop} />
								) : (
									<Examples property={prop} />
								)}
							</SimpleContainer>
						);
					})}
				</SimpleContainer>
			</SimpleContainer>
		</SimpleContainer>
	);
};

export default Carousel;
