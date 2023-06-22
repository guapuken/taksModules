import React from 'react';
import { SimpleContainer, Texts } from '../../../Atoms';
import CircularProgressBar from '../../../circularProgressBar';
import { medios } from '../types/Types';
import { Modo } from '../../../../types';

const Medio = ({ nombre, porcentaje, status, modo, onClick }: medios) => (
	<SimpleContainer
		className="timelineProject__contenido-medios-individual-medio"
		onClick={onClick}
	>
		<SimpleContainer style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
			<CircularProgressBar percentTask={porcentaje} statusTask={status} />
			<Texts modo={modo as Modo}>{`${porcentaje}%`}</Texts>
		</SimpleContainer>
		<Texts modo={modo as Modo}>{nombre}</Texts>
	</SimpleContainer>
);

export default Medio;
