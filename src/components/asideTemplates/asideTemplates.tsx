import React from 'react';

// types
import { aside } from './types';
// styles
import './aside.scss';

const AsideTemplates = (props: aside) => {
	const datos = { ...props };
	const { modo = 'Light' } = props;

	return (
		<div className={`ctn${datos.isWhite ? 'White' : ''}${modo}_ATC`}>
			{!datos.children && (
				<div className={`noCtn${modo}`}>
					<h1>Ups!</h1>
					<p>parece que olvidaste agregar tu contenido</p>
				</div>
			)}
			{datos.children && datos.children}
		</div>
	);
};

export default AsideTemplates;
