import React from 'react';

//componentes auxiliares
import { Buttons } from '../../../components';
// types
import { clickButtons } from '../types';

// footer que regresa los botones que se renderizarán
const Footer = (props: clickButtons) => {
	const { onClickCreate, onClickAbort } = props;
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Buttons
				buttons={{ primary: true, secondary: true }}
				legends={{ primary: 'Crear proyecto', secondary: 'Cancelar' }}
				onClick={{ primary: onClickCreate, secondary: onClickAbort }}
			/>
		</div>
	);
};
export default Footer;
