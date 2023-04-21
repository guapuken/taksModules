import React from 'react';
// utilidades de storybook
import { Meta, Story } from '@storybook/react';
import { color, number, object, selects, text } from '../../storyUtils';
import Information from './information';
import { information } from './types';

const Template: Story<information> = (args) => <Information {...args} />;

//estado inicial del component
export const InitialState = Template.bind({});
InitialState.args = {};

export const WithProperties = Template.bind({});
WithProperties.args = {
	width: 30,
	height: 30,
	info: `Para agregar puntos tienes que seleccionar los campos y presionar el botón:  ctrl + shift`,
	positionInfo: 'right_bottom',
	color: 'red',
	iconInfo: '!',
	className: '',
};

export default {
	title: 'Átomos/information',
	component: Information,
	// definición de argumentos
	argTypes: {
		width: number(),
		height: number(),
		info: text(),
		positionInfo: selects([
			'left',
			'right',
			'top',
			'bottom',
			'left_top',
			'left_bottom',
			'right_top',
			'right_bottom',
			'center',
		]),
		color: color(),
		iconInfo: selects(['!', '?']),
		style: object(),
		className: text(),
	},
} as Meta;
