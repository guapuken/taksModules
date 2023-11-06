import React, { CSSProperties, useState } from 'react';
import addUserIcon from '../../../img/addUser.svg';
import { Modo, submenusArray } from '../../../types';
import { TextBoldLight, Texts, Title, ValidationComponent } from '../../Atoms';
import DropdownWithPopup from '../../DropdownWithPopup/DropdownWithPopup';
import { ButtonCompound } from '../../../CompoundComponents';
import GetIcons from '../../../CompoundComponents/Atoms/Icon/getIcons';

interface IconAsignProps {
	style?: CSSProperties;
	responsables?: submenusArray[];
	equipos: submenusArray[];
	revision?: submenusArray[];
	className?: string;
	valueResponsable?: string;
	valueRevision?: string;
	valueTeam?: string;
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
	valueTeam,
	isPM,
	haveSubPersonal,
}: IconAsignProps) => {
	const [overAsign, setOverAsign] = useState(false);

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
	/* isPM && */ menusOperativos.push(menusExclusivosPM);
	/* (haveSubPersonal || isPM) && */ menusOperativos.push(personalBajoSuMando);

	return (
		<div
			style={{
				position: 'relative',
				maxWidth: '30px',
				zIndex: 1,
			}}
		>
			<ButtonCompound color="transparent" style={{ padding: 0 }}>
				{involucrados > 0 && (
					<ButtonCompound.Counter
						style={{ background: 'red' }}
						onMouseEnter={() => setOverAsign(true)}
						onMouseLeave={() => setOverAsign(false)}
					>
						{involucrados}
					</ButtonCompound.Counter>
				)}
				<ButtonCompound.Svg>
					<GetIcons size={30}>
						<GetIcons.AsignUser />
					</GetIcons>
				</ButtonCompound.Svg>
			</ButtonCompound>

			{overAsign && (
				<div
					style={{
						background: 'var(--bg)',
						boxShadow: 'var(--boxShadow)',
						maxWidth: '200px',
						padding: '5px 10px',
						borderRadius: '5px',
						top: '15px',
						right: '-215px',
						position: 'absolute',
						zIndex: 1,
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					{valueResponsable && (
						<Texts modo={modo} style={{ display: 'flex', flexDirection: 'column' }}>
							<strong>Responsable:</strong> {valueResponsable}
						</Texts>
					)}
					{valueRevision && (
						<Texts modo={modo} style={{ display: 'flex', flexDirection: 'column' }}>
							<strong>Responsable de revisión:</strong> {valueRevision}
						</Texts>
					)}
					{valueTeam && (
						<Texts modo={modo} style={{ display: 'flex', flexDirection: 'column' }}>
							<strong>Equipo responsable:</strong> {valueTeam}
						</Texts>
					)}
				</div>
			)}
		</div>
	);
};

export default IconAsign;
