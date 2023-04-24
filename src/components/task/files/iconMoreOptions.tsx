import React from 'react';
import IconDropdown from '../../iconDropdown';
import optionsIcon from '../../../img/opciones.svg';
import { Modo, onClickType, optionsIcnDrp, submenusArray } from '../../../types';

interface IconMoreOptionsProps {
	onClickEliminar?: onClickType;
	onClickRecordatorio?: onClickType;
	options?: optionsIcnDrp[];
	modo?: Modo;
}
//Construye el icono de más opciones donde se puede agregar más opciones de las que vienen por defecto
const IconMoreOptions = (props: IconMoreOptionsProps) => {
	const { onClickEliminar, onClickRecordatorio, options, modo } = props;
	return (
		<div
			style={{
				width: 'auto',
			}}
		>
			<IconDropdown
				modo={modo as Modo}
				options={
					options
						? options
						: [
								{
									id: 'delete',
									title: 'Eliminar',
									onClick: onClickEliminar,
								},
								{
									id: 'remembered',
									title: 'Crear recordatorio',
									onClick: onClickRecordatorio,
								},
						  ]
				}
				icon={optionsIcon}
			/>
		</div>
	);
};
export default IconMoreOptions;
