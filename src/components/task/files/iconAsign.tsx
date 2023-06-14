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
	isPM?: boolean;
	haveSubPersonal?: boolean;
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
	isPM,
	haveSubPersonal,
}: IconAsignProps) => {
	//Opciones de usuarios
	let menusOperativos = [
		{
			id: '3',
			title: 'Encargado de revisión:',
			submenus: revision,
		},
	];
	const menusExclusivosPM = {
		id: '2',
		title: 'Asignar a equipo:',
		submenus: equipos,
	};
	const personalBajoSuMando = {
		id: '1',
		title: 'Asignar responsable:',
		submenus: responsables,
	};

	// se hace la validación de si es PM o si tiene personal bajo su mando
	isPM && menusOperativos.push(menusExclusivosPM);
	haveSubPersonal && menusOperativos.push(personalBajoSuMando);

	return (
		<div className={`ContainerIconAsignUsers ${className}`} style={style}>
			<DropdownWithPopup
				dropdownIcon={addUserIcon}
				dropdownOptions={menusOperativos}
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
