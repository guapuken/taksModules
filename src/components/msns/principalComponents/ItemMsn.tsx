import React from 'react';
import { getTimeElapsed } from '../functions/functions';
import { itemMsn } from '../types/types';
import { SimpleContainer, Texts } from '../../Atoms';

const ItemMsn = ({ message, date, modo }: itemMsn) => {
	return (
		<SimpleContainer className="mensajes__contenedor-bloquesMsn-cuerpo">
			<SimpleContainer className="mensajes__contenedor-bloquesMsn-cuerpo-contenido">
				<Texts modo={modo} className="contenidoMsn">
					{message}
				</Texts>
				<Texts modo={modo} className="date">
					{date ? getTimeElapsed(date) : 'No se pudo recuperar la fecha'}
				</Texts>
			</SimpleContainer>
		</SimpleContainer>
	);
};

export default ItemMsn;
