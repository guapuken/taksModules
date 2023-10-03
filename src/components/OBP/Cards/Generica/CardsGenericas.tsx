import React, { useState } from 'react';

import { Title } from '../../../Atoms';
import './styles/C_Genericas.scss';
import { Modo } from '../../../../types';

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

//#region getOptions
/**
 * Generates React elements for menu options to display in the header.
 *
 * @param menus - Array of menu objects with title and index properties.
 * @param modo - The theme mode recives Dark or Light theme.
 * @param activeIndex - The index of the currently active menu.
 * @param setActiveIndex - Callback to set the active index on click.
 *
 * @returns React elements for each menu option.
 */
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
//#endregion

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
