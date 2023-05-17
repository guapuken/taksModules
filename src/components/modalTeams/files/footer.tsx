import React from 'react';
import { Buttons } from '../../../components';
import { clickButtons } from '../types';

//COMPONENTE QUE REGRESA LOS BOTONES DEL MODAL
const Footer = ({ onCl_confirm, onCl_abort, edit, modo }: clickButtons) => {
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Buttons
				buttons={{ primary: true, secondary: true }}
				legends={{
					primary: edit ? 'Guardar cambios' : 'Crear equipo',
					secondary: edit ? 'Descartar cambios' : 'Cancelar',
				}}
				onCl_buttons={{ primary: onCl_confirm, secondary: onCl_abort, tertiary: () => {} }}
				modo={modo}
				composition="horizontal"
			/>
		</div>
	);
};

export default Footer;
