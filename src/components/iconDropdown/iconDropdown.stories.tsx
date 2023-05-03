import { Meta, Story } from '@storybook/react';
import React from 'react';

import IconDropdown from './iconDropdown';
import { iconDrps } from './types';

const Template: Story<iconDrps> = (args) => <IconDropdown {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {};

let integrantesIMJ = [
	{ id: '1', title: 'Kaori Soto' },
	{ id: '2', title: 'Halyt Aburto', onClick: () => alert('Adio Halyt') },
	{ id: '3', title: 'Adrian Romero Aldama' },
	{ id: '4', title: 'Juan Carlos' },
	{ id: '5', title: 'José Ramón' },
	{ id: '6', title: 'Gabriela Serna' },
	{ id: '7', title: 'Nancy Moreno' },
	{ id: '8', title: 'Alejandra Becerra' },
	{ id: '9', title: 'Ángeles Hernández' },
];
let equiposIMJ = [
	{ id: '10', title: 'Crear Equipo  +', onClick: () => alert('Crear equipo nuevo') },
	{ id: '11', title: 'Creative' },
	{ id: '12', title: 'Traffic' },
	{ id: '13', title: 'Planning' },
	{ id: '14', title: 'Contabilidad' },
	{ id: '15', title: 'Jurídico' },
	{ id: '16', title: 'Sales Mannager' },
];
const options = [
	{ id: '17', title: 'Asignar responsable:', submenus: integrantesIMJ },
	{ id: '18', title: 'Asignar equipo:', submenus: equiposIMJ },
	{ id: '19', title: 'Revisión', submenus: integrantesIMJ },
];

//estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	options: options,
	icon: 'https://cdn-icons-png.flaticon.com/512/20/20673.png',
};

//exportación default de valores
export default {
	//nombre de la carpeta en la que se agrupará y nombre del componente
	title: 'Átomos/iconDropdown',
	component: IconDropdown,
	// definición de argumentos
	argTypes: {
		icon: {
			control: 'text',
		},
		legend: { control: 'text' },
		options: { control: 'object' },
	},
} as Meta;
