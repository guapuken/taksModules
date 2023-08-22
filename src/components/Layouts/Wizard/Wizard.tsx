import React, { useState } from 'react';
import { Texts } from '../../Atoms';
import icon1 from '../../../img/addUser.svg';
import './styles/Wizard.scss';
import { Modo, onClickType } from '../../../types';

type icons = {
	image?: string;
	nameToShow?: string;
	index?: number;
	close?: boolean;
	newCategory?: boolean;
	onClick?: onClickType;
	description?: string;
};
interface wizardProps {
	modo: Modo;
	icons: icons[];
	activeIndex?: number;
	setActiveIndex?: any;
	children: React.ReactNode;
	height?: string;
}
const Wizard = (props: wizardProps) => {
	const { modo, icons, activeIndex, setActiveIndex, children, height } = props;
	const [openModal, setOpenModal] = useState(false);

	function getIcons() {
		if (icons) {
			return icons.map((icon: icons) => (
				<div
					className={`OBP_Layouts_Wizard__icons-composition ${
						activeIndex === icon.index ? 'active' : ''
					}`}
					style={{ marginBottom: icon?.newCategory ? '20px' : '' }}
					onClick={(e) => {
						if (setActiveIndex && icon?.index) setActiveIndex(icon?.index);
						if (icon.close) {
							setOpenModal(false);
						} else {
							setOpenModal(true);
						}
						if (icon?.onClick) icon.onClick(e);
					}}
				>
					{icon.image && (
						<img src={icon.image} alt={icon.nameToShow} title={icon.description} />
					)}
					{icon.nameToShow && <Texts modo={modo}>{icon.nameToShow}</Texts>}
				</div>
			));
		}
	}
	return (
		<div
			open-modal={openModal ? 'open' : 'close'}
			className="OBP_Layouts_Wizard"
			theme-config={modo}
			style={{ height: height ?? '100vh' }}
		>
			<div className="OBP_Layouts_Wizard__icons">{getIcons()}</div>
			{openModal && <div className="OBP_Layouts_Wizard__children">{children}</div>}
		</div>
	);
};

export default Wizard;
