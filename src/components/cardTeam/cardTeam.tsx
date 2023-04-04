import React, { useState } from 'react';
import editIcon from '../../img/editar.svg';
import '../../styles.scss';
import { AsideContainer, ButtonsArray } from '../../utils/asideUtils';
import { CardContainer, returnSize } from '../../utils/cardsUtils';
import { Hover } from '../../utils/hover';
import Cards from '../cards';
import '../../global.scss';
import css from './cardTeam.module.scss';

export interface CardTeamProps {
	teamName?: string;
	members?: string[];
	onClickEdit?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickDelete?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickView?: (e: React.MouseEvent<HTMLElement>) => void;
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
	const heightCard = 10;

	//Componente que regresa el contenido de la card
	const ContentCard = () => {
		const [mouseEnter, setMouseEnter] = useState(false);
		return (
			<CardContainer>
				<div className={css.containerText}>
					<div className={css.teamName}>
						<h3>{teamName}</h3>
						<p
							onMouseEnter={Hover(setMouseEnter).enter}
							onMouseLeave={Hover(setMouseEnter).exit}
							onClick={() => {
								setMouseEnter(!mouseEnter);
								onClickView;
							}}
						>{`${members.length} Integrantes...`}</p>
						{mouseEnter && (
							<span className={css.memberTeam}>
								{members.map((e) => (
									<span>{e}</span>
								))}
							</span>
						)}
					</div>
				</div>
				<div className={css.EtiquetaColor} style={{ background: teamColor }}></div>
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
				<ButtonsArray
					buttons={[
						{
							img: editIcon,
							onClick: onClickEdit,
							titleToShow: 'Visualizar equipo',
						},
						{
							onClick: onClickView,
							titleToShow: 'Previsualizar equipo',
						},
						{
							onClick: onClickDelete,
							titleToShow: 'Eliminar equipo',
						},
					]}
					vertical
					size={heightCard}
				/>
			</AsideContainer>
		);
	};

	//Definición de los argumentos
	const properties = {
		rounded: true,
		width: returnSize(),
		height: heightCard,
		Content: ContentCard,
		Aside: ContentAside,
	};

	return <Cards {...properties} />;
};

export default CardTeam;
