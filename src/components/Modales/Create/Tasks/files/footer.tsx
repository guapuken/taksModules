import React from 'react';
import { Buttons } from '../../../../../components';
// types
import { footer } from '../types/types';
import { ButtonCompound } from '../../../../../CompoundComponents';

const Footer = (props: footer) => {
	const datos = { ...props };
	return (
		<div style={{ margin: '0 auto', display: 'flex', gap: '20px' }}>
			<ButtonCompound
				style={{ width: '100%' }}
				onClick={datos.onCl_abort}
				color="var(--errorColor)"
			>
				<ButtonCompound.Legend>
					{datos.edit ? 'Descartar cambios' : 'Cancelar'}
				</ButtonCompound.Legend>
			</ButtonCompound>
			<ButtonCompound
				style={{ width: '100%' }}
				color="var(--successColor)"
				onClick={datos.onCl_confirm}
			>
				<ButtonCompound.Legend>
					{datos.edit ? 'Guardar cambios' : 'Crear tarea'}
				</ButtonCompound.Legend>
			</ButtonCompound>
		</div>
	);
};

export default Footer;
