import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dropdown, { DropdownProps } from './dropdown';

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

// estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

// componente con propiedades
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
export const withProperties = Template.bind({});
withProperties.args = {
	isSearchable: true,
	isMulti: true,
	placeHolder: 'Selecciona el encargado',
	options: options,
	onChange: (value) => console.log(value),
};

// exportación default de valores
export default {
	title: 'Átomos/dropdown',
	component: Dropdown,
	argTypes: {
		placeHolder: { type: 'string' },
		options: {
			control: [
				{
					value: {
						type: 'string',
					},
					label: {
						type: 'string',
					},
				},
			],
		},
		isMulti: { type: 'boolean' },
		isSearchable: { type: 'boolean' },
		onChange: { type: 'function' },
		initialValue: {
			value: {
				type: 'string',
			},
			label: {
				type: 'string',
			},
		},
		values: [
			{
				value: {
					type: 'string',
				},
				label: {
					type: 'string',
				},
			},
		],
	},
} as Meta;
