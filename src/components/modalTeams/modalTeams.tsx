import React, { useState } from 'react';
import '../../styles.scss';
import { Spans } from '../../utils/cardsUtils';
import Buttons from '../buttons';
import Dropdown from '../dropdown';
import InputLabel from '../inputLabel';
import Modal from '../modal';
import { AddTask } from '../task/complements/addTask';
import css from './modalTeams.module.scss';

//TYPES
interface submenus {
	id?: number | string;
	className?: string;
	title?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
interface optionsType {
	id?: string;
	title?: string;
	className?: string;
	submenus?: submenus[];
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

//INTERFACES
export interface ModalTeamsProps {
	onClickCrear?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickCancelar?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickAddUser?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickCreateTemplate?: (e: React.MouseEvent<HTMLElement>) => void;
	onChangeTeamName?: (e: React.FormEvent<HTMLInputElement>) => void;
	onChangeTeamColor?: (e: React.FormEvent<HTMLInputElement>) => void;
	onChangeRolname?: (e: React.FormEvent<HTMLInputElement>) => void;
	templateOptions?: optionsType[];
	teamNameValue?: string;
	teamColor?: string;
	memberValue?: { value?: string | number; label?: string };
	role?: string;
	membersOptions?: any;
	Children?: any;
}

//COMPONENTE QUE REGRESA UN DROPDOWN CON LOS INTEGRANTES Y UN INPUT PARAA AGREGAR EL NOMBRE DEL PUESTO
export const Members = (props: any) => {
	const { style, principal, memberValue, membersOptions, role, onClickAddUser, Children } = props;
	return (
		<div>
			<div>
				<div style={{ width: '100%', ...style }}>
					{principal && <p style={{ width: '100%' }}> Encargado </p>}
					<Dropdown
						isSearchable
						// isMulti
						placeHolder="Selecciona el encargado"
						options={membersOptions}
						onChange={(value) => console.log(value)}
						initialValue={memberValue}
					/>
					<div style={{ marginTop: '.5rem' }}>
						<Spans legend={role ? role : 'Sin definir'} boldLegend={'Puesto: '} />
					</div>
				</div>
				<AddTask legend="+ Agregar Personal bajo su mando" onClick={onClickAddUser} />
			</div>
			<div
				style={{
					borderLeft: '.2rem solid #282828',
					paddingLeft: '1rem',
				}}
			>
				{Children && <Children />}
			</div>
		</div>
	);
};

const ModalTeams = (props: ModalTeamsProps) => {
	//DESESTRUCTURACIÓN DEL PROPIEDADES COMPONENTE PRINCIPAL
	const {
		onClickCrear,
		onClickCancelar,
		onClickAddUser,
		onChangeTeamName = () => {},
		teamNameValue,
		teamColor,
		onChangeTeamColor,
		membersOptions,
		memberValue,
		role,
		Children,
	} = props;

	//COMPONENTE QUE REGRESA LOS BOTONES DEL MODAL
	const Footer = () => (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Buttons
				buttons={{ primary: true, secondary: true }}
				legends={{ primary: 'Crear equipo', secondary: 'Cancelar' }}
				onClick={{ primary: onClickCrear, secondary: onClickCancelar }}
			/>
		</div>
	);

	//COMPONENTE QUE REGRESA TODO EL CONTENIDO DEL MODAL
	const Content = () => {
		const [asignColor, setAsignColor] = useState('');
		return (
			<div className="GeneralContainerTeamsComponent">
				<div className="InputsContainerTeamsComponent">
					<InputLabel
						legend="Nombre del equipo"
						onChange={onChangeTeamName}
						style={{ height: '3rem', width: '45%' }}
						initialValue={teamNameValue}
					/>
					<div>
						<Spans
							legend={asignColor}
							boldLegend={
								teamColor === undefined ? 'Color de equipo' : 'Color de quipo: '
							}
						/>
						<input
							className="LabelColorTeamComponent"
							id={asignColor}
							type="color"
							onChange={(e) => {
								setAsignColor(e.target.value);
								onChangeTeamColor;
							}}
						/>
					</div>
				</div>
				<div>
					<Members
						principal
						selectedMember={memberValue}
						membersOptions={membersOptions}
						role={role}
						onClickAddUser={onClickAddUser}
						style={{ marginTop: '2rem' }}
						Children={Children}
					/>
				</div>
			</div>
		);
	};

	//DESESTRUCTURACIÓN DE PROPIEDADES DEL COMPONENTE DE MODAL
	const args = {
		header: 'Creación de equipos',
		Content: Content,
		Footer: Footer,
	};
	return <Modal {...args} />;
};

export default ModalTeams;
