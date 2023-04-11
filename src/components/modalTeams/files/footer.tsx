import React from 'react';
import { Buttons } from '../../../components';

//COMPONENTE QUE REGRESA LOS BOTONES DEL MODAL
const Footer = (props) => {
	const { onClickCrear, onClickCancelar } = props;
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Buttons
				buttons={{ primary: true, secondary: true }}
				legends={{ primary: 'Crear equipo', secondary: 'Cancelar' }}
				onClick={{ primary: onClickCrear, secondary: onClickCancelar }}
			/>
		</div>
	);
};

export default Footer;
