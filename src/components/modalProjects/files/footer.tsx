import React from 'react';

//componentes auxiliares
import { Buttons } from '../../../components';
// types
import { clickButtons } from '../types';

// footer que regresa los botones que se renderizarán
const Footer = (props: clickButtons) => {
	const { onCl_confirm, onCl_abort } = props;
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Buttons
				buttons={{ primary: true, secondary: true }}
				legends={{ primary: 'Crear proyecto', secondary: 'Cancelar' }}
				onCl_buttons={{ primary: onCl_confirm, secondary: onCl_abort }}
			/>
		</div>
	);
};
export default Footer;
