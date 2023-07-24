import React from 'react';
import { Texts, Title } from '../../Atoms';

const ErrorNC = ({ modo }: any) => {
	return (
		<div className={`aside__children-noContent`}>
			<Title modo={modo} className={`aside__children-noContent-title`}>
				Ups!
			</Title>
			<Texts modo={modo}>parece que olvidaste agregar tu contenido</Texts>
		</div>
	);
};

export default ErrorNC;
