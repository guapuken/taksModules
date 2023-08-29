import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CardsGenericas from '../../components/OBP/Cards/Generica/CardsGenericas';

const meta: Meta<typeof CardsGenericas> = {
	title: 'OBP / Cards / Genericas',
	component: CardsGenericas,
};
export default meta;

type Story = StoryObj<typeof CardsGenericas>;

export const Primary: Story = {
	name: 'Genericas',
	render: () => {
		const [activeIndex, setActiveIndex] = useState(1);
		const [openCard, setOpenCard] = useState(false);
		function getInfoToShow() {
			switch (activeIndex) {
				case 1:
					return <div>Soy detalles</div>;
				case 2:
					return <div>Soy comentarios y precios</div>;
				case 3:
					return <div>Soy Data</div>;
				case 4:
					return <div>Soy Opciones extras</div>;
				case 5:
					return <div>Soy Dudas del sitio</div>;
				default:
					break;
			}
		}
		function getMenus() {
			return [
				{
					title: 'detalles',
					index: 1,
				},
				{
					title: 'Comentarios y Precios',
					index: 2,
				},
				{
					title: 'Data',
					index: 3,
				},
			];
		}
		return (
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				<CardsGenericas
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					modo="Light"
					menus={getMenus()}
					openCard={openCard}
					setOpenCard={setOpenCard}
					initialView={
						<div
							style={{
								width: '100%',
								height: '100%',
								background: 'red',
								display: 'grid',
								placeItems: 'center',
							}}
						>
							Hola
						</div>
					}
				>
					{getInfoToShow()}
				</CardsGenericas>
			</div>
		);
	},
};
