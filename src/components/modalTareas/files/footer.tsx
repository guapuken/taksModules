import React from 'react';
import { Buttons } from '../../../components';
// types
import { footer } from '../types';

const Footer = (props: footer) => {
	const datos = { ...props };
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Buttons
				buttons={{ primary: true, secondary: true }}
				legends={{
					primary: datos.edit ? 'Guardar cambios' : 'Crear tarea',
					secondary: datos.edit ? 'Descartar cambios' : 'Cancelar',
				}}
				onCl_buttons={{ primary: datos.onCl_confirm, secondary: datos.onCl_abort }}
			/>
		</div>
	);
};

export default Footer;
