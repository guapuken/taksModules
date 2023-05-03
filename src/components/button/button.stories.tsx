import React from 'react';
// utilidaes del storybook
import { Meta, Story } from '@storybook/react';
// componente principal
import Button from './Button';
// types
import { button } from './types/types';
// storybook utils
import {
	boolean,
	color,
	filesNoBG,
	functions,
	modo,
	object,
	sizeBtns,
	text,
} from '../../storyUtils';

// creación de la plantilla en la que se colocará el componente
const Template: Story<button> = (args) => <Button {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {
	onCl: () => alert('Change the function'),
};
export const Primary = Template.bind({});
Primary.args = {
	onCl: () => alert('Change the function'),
	primary: true,
	legend: 'Botón primario',
};
export const Secondary = Template.bind({});
Secondary.args = {
	onCl: () => alert('Change the function'),
	secondary: true,
	legend: 'Botón secundario',
};
export const Tertiary = Template.bind({});
Tertiary.args = {
	onCl: () => alert('Change the function'),
	tertiary: true,
	legend: 'Botón terciario',
};

export default {
	//nombre de la carpeta en la que se agrupará y el título del elemento
	title: 'Átomos/button',
	component: Button,
	//Definición de argumentos
	argTypes: {
		onCl: functions(),
		size: sizeBtns(),

		style: object(),
		styleIcon: object(),

		legend: text(),
		color: color(),
		id: text(),
		key: text(),
		icon: filesNoBG(),
		colorHover: color(),
		fontColor: color(),
		className: text(),

		primary: boolean(),
		secondary: boolean(),
		tertiary: boolean(),
		rounded: boolean(),
		disabled: boolean(),
		border: boolean(),
		float: boolean(),
		modo: modo(),
	},
} as Meta;
