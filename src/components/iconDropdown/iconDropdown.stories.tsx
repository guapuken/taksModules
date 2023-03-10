import { Meta, Story } from '@storybook/react';
import React from 'react';

import IconDropdown, { IconDropdownProps } from './iconDropdown';

const Template: Story<IconDropdownProps> = (args) => <IconDropdown {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const AddUser = Template.bind({});
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
AddUser.args = {
	options: [
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
	],
	icon: require('../../img/addUser.svg'),
};

export default {
	title: 'IconDropdown',
	component: IconDropdown,
	argTypes: {
		icon: {
			control: 'text',
		},
		legend: { control: 'text' },
		options: { control: 'object' },
	},
} as Meta;
