import React, { useState } from 'react';

import { Title } from '../../../Atoms';
import './styles/C_Genericas.scss';
import { Modo } from '../../../../types';

/**
 *
 * @returns una opción con cada elemto que se le envía que sirve para poder hacer el setteo del index activo al momento de seleccionarlo, así como mostrar el nolmbre del mismo
 */
interface getOptionsProps {
	menus?: menusCard[];
	modo: Modo;
	activeIndex?: number;
	setActiveIndex?: any;
}
export type menusCard = {
	title: string;
	index: number;
};
function getOptions({ menus, modo, activeIndex, setActiveIndex }: getOptionsProps) {
	return menus?.map((menu: menusCard) => (
		<div className="OBP_cardsGenericas__details-header-option">
			<Title
				modo={modo}
				className={`OBP_cardsGenericas__details-header-option ${
					activeIndex === menu?.index ? 'active' : ''
				}`}
				labels={{
					onClick: () => {
						if (setActiveIndex) setActiveIndex(menu?.index);
					},
				}}
			>
				{menu?.title}
			</Title>
		</div>
	));
}
interface cardGenericasProps {
	modo: Modo;
	initialView?: any;
	menus?: menusCard[];
	activeIndex?: number;
	setActiveIndex?: any;
	children?: any;
	openCard?: boolean;
	setOpenCard?: any;
}
const CardsGenericas = (props: cardGenericasProps) => {
	const {
		modo,
		initialView,
		menus,
		activeIndex,
		setActiveIndex,
		children,
		openCard,
		setOpenCard,
	} = props;

	return (
		<div
			className="OBP_cardsGenericas"
			show-more={openCard ? 'open' : 'close'}
			theme-config={modo}
		>
			<div className="OBP_cardsGenericas__image">{initialView}</div>
			<button className="OBP_cardsGenericas__button" onClick={() => setOpenCard(!openCard)}>
				<span className="OBP_cardsGenericas__button-icon"></span>
			</button>
			{openCard && (
				<div className="OBP_cardsGenericas__details">
					{menus && (
						<div className="OBP_cardsGenericas__details-header">
							{getOptions({ menus, modo, activeIndex, setActiveIndex })}
						</div>
					)}
					<div className="OBP_cardsGenericas__details-children">{children}</div>
				</div>
			)}
		</div>
	);
};

export default CardsGenericas;
