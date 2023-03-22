import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dropdown, { DropdownProps } from './dropdown';

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Initial = Template.bind({});
const options = [
	{
		value: 'Jorge Correa',
		label: 'Jorge Correa',
	},
	{
		value: 'Olaf',
		label: 'Olaf',
	},
	{
		value: 'Adan',
		label: 'Adan',
	},
];
Initial.args = {
	// isSearchable: true,
	// isMulti: true,
	placeHolder: 'Selecciona el encargado',
	options: options,
	onChange: (value) => console.log(value),
};

export default {
	title: 'Dropdown',
	component: Dropdown,
} as Meta;
