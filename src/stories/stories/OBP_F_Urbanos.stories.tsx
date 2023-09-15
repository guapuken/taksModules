import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import FichaRutas from '../../components/OBP/Fichas/Urbanos/FichaRutas';

import image1 from '../../img/example_1.jpg';
import image2 from '../../img/example_2.jpg';

const meta: Meta<typeof FichaRutas> = {
	title: 'OBP / Fichas / Urbanos',
	component: FichaRutas,
};
export default meta;

type Story = StoryObj<typeof FichaRutas>;

export const Primary: Story = {
	name: 'Urbanos',
	render: () => {
		const [activeIndex, setActiveIndex] = useState(0);

		function getImageToShow() {
			switch (activeIndex) {
				case 0:
					return <div style={{ backgroundImage: `url(${image1})` }}></div>;
				case 1:
					return <div style={{ backgroundImage: `url(${image2})` }}></div>;
				default:
					break;
			}
		}
		return (
			<FichaRutas
				image={getImageToShow()}
				modo={'Light'}
				tiposExhibicion={[
					{
						title: 'Medio medallón',
						onCl_text: () => setActiveIndex(1),
					},
					{
						title: 'Medallón',
					},
					{
						title: 'Integral',
					},
					{
						title: 'Semi-integral',
					},
					{
						title: 'Urbano Medallón AAA',
					},
				]}
				male_users={1256354}
				female_users={1556354}
				frequency={7.57}
				total_hits={3284494}
				total_users={433883}
				reach={12.5}
				derrotero={
					'Agustín Yañez- Glorieta Minerva- Av. Adolfo López Mateos Nte.- Av. de las Américas- Patria- Av. Fidel Velázquez Sánchez- Uxmal- Av. Belisario Domínguez- Monte la Luna- San Patricio- Cafe San Baltazar- San Pedro- Basilio Vadillo- Monte Padilla- Olímpica- Salvador Gonzalez Chavez- Dr R Michel- Héroes Ferrocarrileros- Washington.'
				}
				ruta={'T-18 Antes 622'}
				eco={25}
			/>
		);
	},
};
