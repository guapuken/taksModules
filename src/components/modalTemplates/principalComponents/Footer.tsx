import React from 'react';
import { Buttons } from '../../../components';
import { modalTemplates } from '../types/types';
//COMPONENTE QUE REGRESA LOS BOTONES DEL MODAL
export const Footer = ({ edit, onCl_confirm, onCl_abort, modo }: modalTemplates) => (
	<div style={{ width: '90%', margin: '0 auto' }}>
		<Buttons
			buttons={{ primary: true, secondary: true }}
			legends={{
				primary: edit ? 'Guardar cambios' : 'Crear plantilla',
				secondary: edit ? 'Descartar cambios' : 'Cancelar',
			}}
			composition="horizontal"
			onCl_buttons={{ primary: onCl_confirm, secondary: onCl_abort, tertiary: () => {} }}
			modo={modo}
		/>
	</div>
);
