import React from 'react';
import { Buttons } from '../../../components';
import { clickButtons } from '../types';

//COMPONENTE QUE REGRESA LOS BOTONES DEL MODAL
const Footer = (props: clickButtons) => {
	const { onCl_confirm, onCl_abort } = props;
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Buttons
				buttons={{ primary: true, secondary: true }}
				legends={{ primary: 'Crear equipo', secondary: 'Cancelar' }}
				onCl_buttons={{ primary: onCl_confirm, secondary: onCl_abort }}
			/>
		</div>
	);
};

export default Footer;
