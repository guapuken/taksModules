import { Meta, Story } from '@storybook/react';
import React from 'react';
import Information, { InformationProps } from './information';

const Template: Story<InformationProps> = (args) => <Information {...args} />;

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
	argTypes: {
		width: {
			type: 'number',
		},
		height: {
			type: 'number',
		},
		info: {
			type: 'string',
		},
		positionInfo: {
			control: {
				options: [
					'left',
					'right',
					'top',
					'bottom',
					'left_top',
					'left_bottom',
					'right_top',
					'right_bottom',
					'center',
				],
				type: 'select',
			},
		},
		color: {
			control: { type: 'color' },
		},
		iconInfo: {
			control: {
				options: ['!', '?'],
				type: 'text',
			},
		},
		style: {
			control: {
				type: 'object',
			},
		},
		className: {
			type: 'string',
		},
	},
} as Meta;
