import React from 'react';
import { onClickType } from '../../../utils/types/typesUtils';
import IconDropdown from '../../iconDropdown';

type submenus = {
	id?: number | string;
	className?: string;
	onClick?: onClickType;
	title?: string;
};
type optionsType = {
	id?: string;
	submenus?: submenus[];
	title?: string;
	onClick?: onClickType;
	className?: string;
};
interface IconMoreOptionsProps {
	onClickEliminar?: onClickType;
	onClickRecordatorio?: onClickType;
	options?: optionsType[];
}
//Construye el icono de más opciones donde se puede agregar más opciones de las que vienen por defecto
export const IconMoreOptions = (props: IconMoreOptionsProps) => {
	const { onClickEliminar, onClickRecordatorio, options } = props;
	return (
		<div
			style={{
				width: 'auto',
			}}
		>
			<IconDropdown
				options={
					options
						? options
						: [
								{
									title: 'Eliminar',
									onClick: onClickEliminar,
								},
								{
									title: 'Crear recordatorio',
									onClick: onClickRecordatorio,
								},
						  ]
				}
				icon={require('../../../img/opciones.svg')}
			/>
		</div>
	);
};
