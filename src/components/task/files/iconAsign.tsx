import React, { CSSProperties, useState } from 'react';
import addUserIcon from '../../../img/addUser.svg';
import { Modo, submenusArray } from '../../../types';
import { ValidationComponent } from '../../Atoms';
import DropdownWithPopup from '../../DropdownWithPopup/DropdownWithPopup';

interface IconAsignProps {
	style?: CSSProperties;
	responsables?: submenusArray[];
	equipos: submenusArray[];
	revision?: submenusArray[];
	className?: string;
	valueResponsable?: string;
	valueRevision?: string;
	involucrados?: number;
	disabled?: boolean;
	modo: Modo;
}
//Se construye el componente que regresa el icono de asignar usuario
const IconAsign = ({
	involucrados = 0,
	responsables,
	equipos,
	revision,
	className,
	style,
	valueResponsable,
	valueRevision,
	modo = 'Light',
	disabled,
}: IconAsignProps) => {
	//Opciones de usuarios
	const asignUsers = [
		{
			id: '1',
			title: 'Asignar responsable:',
			submenus: responsables,
		},
		{
			id: '2',
			title: 'Asignar a equipo:',
			submenus: equipos,
		},
		{
			id: '3',
			title: 'Encargado de revisión:',
			submenus: revision,
		},
	];

	return (
		<div className={`ContainerIconAsignUsers ${className}`} style={style}>
			<DropdownWithPopup
				dropdownIcon={addUserIcon}
				dropdownOptions={equipos ? asignUsers : [asignUsers[0], asignUsers[2]]}
				legend={involucrados}
				modo={modo}
				validateToShowIcon={involucrados > 0}
				title="Asignar responsable"
				disabledDropdown={disabled}
			>
				<ValidationComponent validate={valueResponsable}>
					<span>
						<strong>Responsable: </strong>
						{valueResponsable}
					</span>
				</ValidationComponent>
				<ValidationComponent validate={valueRevision}>
					<span>
						<strong>Encargado de revisión: </strong>
						{valueRevision}
					</span>
				</ValidationComponent>
			</DropdownWithPopup>
		</div>
	);
};

export default IconAsign;
