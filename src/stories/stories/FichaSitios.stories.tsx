import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import FichaSitios from '../../components/OBP/Fichas/Sitios/FichaSitios';
import image from '../../img/example_1.jpg';

const meta: Meta<typeof FichaSitios> = {
	title: 'OBP / Fichas / Sitios',
	component: FichaSitios,
};

export default meta;

type Story = StoryObj<typeof FichaSitios>;

export const Primary: Story = {
	name: 'Sitios',
	render: () => (
		<FichaSitios
			modo="Light"
			onCl_addToCar={() => {}}
			// datos en imagen
			image={image}
			base={12.5}
			altura={7.2}
			vista="Cruzada"
			iluminacion
			// infoGeneral del sitio
			nombreSitio="IMJ-PUE-ESP-O-14509B"
			tipoMedio="Espectaculares"
			latitud={19.075603195294445}
			longitud={-98.28862408852547}
			direccion={'Boulevard de los reyes, esquina a camino real a santa clara'}
			acabados="10cm de bolsa perimetral"
			material="Lona front"
			comentarios="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			especiales
			income_a_users={25}
			income_b_users={10}
			income_c_users={0}
			income_d_users={30}
			income_e_users={35}
			a13_17_users={13}
			a18_25_users={31}
			a26_40_users={26}
			a41_55_users={20}
			a55_users={10}
			male_users={13285468}
			female_users={15263515}
			frequency={7.5}
			total_hits={12852360}
			total_users={12852360 / 7.5}
			reach={10}
			addedToCar
		/>
	),
};
//26 570 936
