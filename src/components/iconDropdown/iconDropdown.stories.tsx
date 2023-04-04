import { Meta, Story } from '@storybook/react';
import React from 'react';

import IconDropdown, { IconDropdownProps } from './iconDropdown';

const Template: Story<IconDropdownProps> = (args) => <IconDropdown {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {};

let integrantesIMJ = [
	{ title: 'Kaori Soto' },
	{ title: 'Halyt Aburto', onClick: () => alert('Adio Halyt') },
	{ title: 'Adrian Romero Aldama' },
	{ title: 'Juan Carlos' },
	{ title: 'José Ramón' },
	{ title: 'Gabriela Serna' },
	{ title: 'Nancy Moreno' },
	{ title: 'Alejandra Becerra' },
	{ title: 'Ángeles Hernández' },
];
let equiposIMJ = [
	{ title: 'Crear Equipo  +', onClick: () => alert('Crear equipo nuevo') },
	{ title: 'Creative' },
	{ title: 'Traffic' },
	{ title: 'Planning' },
	{ title: 'Contabilidad' },
	{ title: 'Jurídico' },
	{ title: 'Sales Mannager' },
];
const options = [
	{
		title: 'Asignar responsable:',
		submenus: integrantesIMJ,
	},
	{
		title: 'Asignar equipo:',
		submenus: equiposIMJ,
	},
	{
		title: 'Revisión',
		submenus: integrantesIMJ,
	},
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
