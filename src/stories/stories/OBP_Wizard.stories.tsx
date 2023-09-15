import React, { useState } from 'react';
import Wizard from '../../components/Layouts/Wizard/Wizard';
import { Meta, StoryObj } from '@storybook/react';

//archivos multimedia
import addUser from '../../img/addUser.svg';
import sitios from '../../img/icons/sitios_amarillo.svg';
import urbanos from '../../img/icons/urbanos_amarillo.svg';
import centroscomerciales from '../../img/icons/centroscomerciales_amarillo.svg';
import vallas from '../../img/icons/vallas_amarillo.svg';
import { Texts } from '../../components/Atoms';

const meta: Meta = {
	title: 'OBP / Layouts / Wizard',
	component: Wizard,
};
export default meta;

type Story = StoryObj<typeof Wizard>;

export const Primary: Story = {
	name: ' Wizard',
	render: () => {
		const [activeIndex, setActiveIndex] = useState(0);
		const [dashboardActive, setDashboardActive] = useState(false);
		function getOptions() {
			switch (activeIndex) {
				case 1:
					return <div>Pautado</div>;
				case 2:
					return <div>Sitios</div>;
				case 3:
					return <div>urbanos</div>;
				case 4:
					return <div>Indoors</div>;
				case 6:
					return <div>Vallas móviles</div>;
				default:
					break;
			}
		}
		return (
			<div style={{ position: 'absolute', right: '0', top: '0', display: 'flex' }}>
				{dashboardActive && (
					<div
						style={{
							boxShadow: 'inset 0 0 0 2px *red',
							width: '10vw',
							height: 'auto',
							background: '#ffffff75',
							padding: '15px	',
						}}
					>
						<Texts modo="Light">Dashboard</Texts>
					</div>
				)}
				<Wizard
					modo="Light"
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					icons={[
						{
							image: addUser,
							nameToShow: 'Dashboard',
							onClick: () => setDashboardActive(!dashboardActive),
							description: 'Visualiza la información en tiempo real de tu pauta',
						},
						{
							image: addUser,
							nameToShow: 'Tráfico',
							newCategory: true,
						},
						{
							image: addUser,
							nameToShow: 'Pautar',
							index: 1,
						},
						{
							image: addUser,
							nameToShow: 'Minimizar',
							index: 5,
							close: true,
							newCategory: true,
						},
						{
							image: sitios,
							nameToShow: 'Sitios',
							index: 2,
						},
						{
							image: urbanos,
							nameToShow: 'Urbanos',
							index: 3,
						},
						{
							image: centroscomerciales,
							nameToShow: 'Indoors',
							index: 4,
						},
						{
							image: vallas,
							nameToShow: 'Vallas',
							index: 6,
						},
					]}
				>
					{getOptions()}
				</Wizard>
			</div>
		);
	},
};
