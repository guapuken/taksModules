import React from 'react';
import IconDropdown from '../../iconDropdown';
import optionsIcon from '../../../img/opciones.svg';
import { Modo, onClickType, optionsIcnDrp, submenusArray } from '../../../types';

interface IconMoreOptionsProps {
	onCl_delete?: onClickType;
	onCl_reminder?: onClickType;
	options?: optionsIcnDrp[];
	modo?: Modo;
}
//Construye el icono de más opciones donde se puede agregar más opciones de las que vienen por defecto
const IconMoreOptions = (props: IconMoreOptionsProps) => {
	const { onCl_delete, onCl_reminder, options, modo } = props;
	return (
		<div
			style={{
				width: 'auto',
			}}
		>
			<IconDropdown
				modo={modo as Modo}
				options={
					options ?? [
						{
							id: 'delete',
							title: 'Eliminar',
							onClick: onCl_delete,
						},
						{
							id: 'remembered',
							title: 'Crear recordatorio',
							onClick: onCl_reminder,
						},
					]
				}
				icon={optionsIcon}
			/>
		</div>
	);
};
export default IconMoreOptions;
