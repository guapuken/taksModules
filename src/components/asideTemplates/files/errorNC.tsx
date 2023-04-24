import React from 'react';
import { Modo } from '../../../types';

const ErrorNc = ({ modo = 'Light' }: any) => {
	return (
		<div className={`noCtn${modo}`}>
			<h1>Ups!</h1>
			<p>parece que olvidaste agregar tu contenido</p>
		</div>
	);
};

export default ErrorNc;
