import React, { useState } from 'react';
import { AsideButtonItem, AsideContainer } from '../../utils/asideUtils';
import { CardContainer } from '../../utils/cardsUtils';
import { Hover } from '../../utils/hover';
import { onClickType } from '../../utils/types/typesUtils';
import Cards from '../cards';
import IconDropdown from '../iconDropdown';
import './cardTeam.scss';

export interface CardTeamProps {
	teamName?: string;
	members?: string[];
	onClickEdit?: onClickType;
	onClickDelete?: onClickType;
	onClickView?: onClickType;
	teamColor?: string;
}
const CardTeam = (props: CardTeamProps) => {
	//desestruración de propiedades
	const {
		teamName = 'Nombre del equipo',
		members = [],
		onClickEdit = () => alert('Change the function onClickEdit'),
		onClickDelete = () => alert('Change the function onClickDelete'),
		onClickView = () => alert('Change the function onClickView'),
		teamColor = '#525252',
	} = props;

	//Componente que regresa el contenido de la card
	const ContentCard = () => {
		const [mouseEnter, setMouseEnter] = useState(false);
		return (
			<CardContainer>
				<div className="container-text">
					<div className="team-name">
						<h3>{teamName}</h3>
						<p
							onMouseEnter={Hover(setMouseEnter).enter}
							onMouseLeave={Hover(setMouseEnter).exit}
							onClick={() => {
								setMouseEnter(!mouseEnter);
								onClickView();
							}}
						>{`${members.length} Integrantes...`}</p>
						{mouseEnter && (
							<span className="member-team">
								{members.map((e) => (
									<span>{e}</span>
								))}
							</span>
						)}
					</div>
				</div>
				<div
					className="EtiquetaColorCardTeamComponent"
					style={{ background: teamColor }}
				></div>
			</CardContainer>
		);
	};

	//Opciones que se muestran en el ícono de más opciones, se pueden agregar más opciones si se necesita
	const moreOptions = [
		{
			title: 'Editar',
			onClick: onClickEdit,
		},
		{
			title: 'Eliminar',
			onClick: onClickDelete,
		},
	];

	//Componente que regresa el aside de la card
	const ContentAside = () => {
		return (
			<AsideContainer>
				<AsideButtonItem
					src={require('../../img/vaciar.svg')}
					title={'Editar'}
					onClick={onClickView}
				/>
				<IconDropdown
					icon={require('../../img/opciones.svg')}
					title={'Más opciones'}
					options={moreOptions}
				/>
			</AsideContainer>
		);
	};

	//Definición de los argumentos
	const properties = {
		rounded: true,
		width: 25,
		height: 10,
		Content: ContentCard,
		Aside: ContentAside,
	};

	return <Cards {...properties} />;
};

export default CardTeam;
