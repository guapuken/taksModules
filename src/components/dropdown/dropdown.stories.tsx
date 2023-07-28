import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dropdown from './dropdown';
import { dropdown } from './types';
import { boolean, functions, modo, text } from '../../storyUtils';

const Template: Story<dropdown> = (args) => <Dropdown {...args} />;

// estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

// componente con propiedades
const options = [
	{
		id: '1',
		title: 'Jorge Correa',
	},
	{
		id: '2',
		title: 'Olaf Ruvalcaba',
	},
	{
		id: '3',
		title: 'René Carrillo',
	},
	{
		id: '4',
		title: 'Adan Moreno',
	},
	{
		id: '5',
		title: 'Jesús de la Cueva',
	},
	{
		id: '6',
		title: 'Ivan Flores',
	},
	{
		id: '7',
		title: 'Denisse Hernández',
	},
	{
		id: '8',
		title: 'Victor Galván',
	},
];
export const withProperties = Template.bind({});
withProperties.args = {
	isSearchable: true,
	isMulti: true,
	placeHolder: 'Selecciona el encargado',
	options: options,
	values: [],
	modo: 'Dark',
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
					id: {
						type: 'string',
					},
					title: {
						type: 'string',
					},
				},
			],
		},
		modo: modo(),
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
