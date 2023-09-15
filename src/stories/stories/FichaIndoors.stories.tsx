import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import FichaIndoors from '../../components/OBP/Fichas/Indoors/FichaIndoors';
import image1 from '../../img/descripcion.svg';
import image from '../../img/example_1.jpg';
const meta: Meta<typeof FichaIndoors> = {
	title: `OBP/Fichas/Indoor`,
	component: FichaIndoors,
};
export default meta;

type Story = StoryObj<typeof FichaIndoors>;

export const Primary: Story = {
	name: 'Indoor',
	render: () => (
		<FichaIndoors
			modo="Dark"
			onCl_addToCar={() => alert('Hoal que hace')}
			nivelIndoor="PB"
			clave="IMJCDMXESP1453"
			// descripcion="asjhkjhas ckhjnagd fhgahjdg cnhjka ckhjga cjhg"
			//datos en la imagen
			image={image}
			base={1.2}
			altura={1.75}
			afluencia={180000000}
			//informacion
			nombreIndoor="Centro comeral Galerías"
			tipoMedio="Escaleras eletricas"
			direccion={'Av San Rsfael Sanzio 150, Camichines Vallarta, 45020 Zapopan, Jal.'}
			tiendasAncla="Liverpool"
			mapa={image}
		/>
	),
};
