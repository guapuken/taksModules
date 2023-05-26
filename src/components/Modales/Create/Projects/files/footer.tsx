import React from 'react';

//componentes auxiliares
import { Buttons } from '../../../../../components';
// types
import { clickButtons } from '../types/types';

// footer que regresa los botones que se renderizarán
const Footer = (props: clickButtons) => {
	const { onCl_confirm, onCl_abort, edit, modo } = props;
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Buttons
				modo={modo}
				buttons={{ primary: true, secondary: true }}
				legends={{
					primary: edit ? 'Guardar cambios' : 'Crear proyecto',
					secondary: edit ? 'Descartar cambios' : 'Cancelar',
				}}
				onCl_buttons={{ primary: onCl_confirm, secondary: onCl_abort, tertiary: () => {} }}
				composition="horizontal"
			/>
		</div>
	);
};
export default Footer;
