import React from 'react';
import IconDropdown from '../../iconDropdown';
import optionsIcon from '../../../img/opciones.svg';

interface submenus {
	id?: number | string;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	title?: string;
}
interface optionsType {
	id?: string;
	submenus?: submenus[];
	title?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	className?: string;
}
interface IconMoreOptionsProps {
	onClickEliminar?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickRecordatorio?: (e: React.MouseEvent<HTMLElement>) => void;
	options?: optionsType[];
}
//Construye el icono de más opciones donde se puede agregar más opciones de las que vienen por defecto
const IconMoreOptions = (props: IconMoreOptionsProps) => {
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
				icon={optionsIcon}
			/>
		</div>
	);
};
export default IconMoreOptions;
