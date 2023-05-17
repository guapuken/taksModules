import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dropdown from './dropdown';
import { dropdown } from './types';
import { boolean, functions, text } from '../../storyUtils';

const Template: Story<dropdown> = (args) => <Dropdown {...args} />;

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
		value: 'Olaf',
		label: 'Olaf',
	},
	{
		value: 'Olaf',
		label: 'Olaf',
	},
	{
		value: 'Olaf',
		label: 'Olaf',
	},
	{
		value: 'Olaf',
		label: 'Olaf',
	},
	{
		value: 'Olaf',
		label: 'Olaf',
	},
];
export const withProperties = Template.bind({});
withProperties.args = {
	isSearchable: true,
	// isMulti: true,
	placeHolder: 'Selecciona el encargado',
	options: options,
	initialValue: { value: 'Jorge Correa', label: 'Jorge Correa' },
	// topPosition: true,
};

// exportación default de valores
export default {
	title: 'Átomos/dropdown',
	component: Dropdown,
	argTypes: {
		placeHolder: text(),
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
		isMulti: boolean(),
		isSearchable: boolean(),
		onCh: functions(),
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
