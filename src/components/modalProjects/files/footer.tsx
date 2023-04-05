import React from 'react';

//componentes auxiliares
import { Buttons } from '../../../components';

//COMPONENTE QUE REGRESA LOS BOTONES DEL MODAL
const Footer = (props: any) => {
	const { onClickCrear, onClickCancelar } = props;
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Buttons
				buttons={{ primary: true, secondary: true }}
				legends={{ primary: 'Crear proyecto', secondary: 'Cancelar' }}
				onClick={{ primary: onClickCrear, secondary: onClickCancelar }}
			/>
		</div>
	);
};
export default Footer;
