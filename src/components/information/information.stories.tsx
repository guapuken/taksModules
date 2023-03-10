import { Meta, Story } from '@storybook/react';
import React from 'react';
import Information, { InformationProps } from './information';

const Template: Story<InformationProps> = (args) => <Information {...args} />;

export const Initial = Template.bind({});
Initial.args = {};

export const Example = Template.bind({});
Example.args = {
	width: 3,
	height: 3,
	info: `Para agregar puntos tienes que seleccionar los campos y presionar el botón:  ctrl + shift`,
	positionInfo: 'right_bottom',
	color: 'red',
	iconInfo: '!',
	style: {},
	className: '',
};

export default {
	title: 'Information',
	component: Information,
	argTypes: {
		width: {
			control: 'number',
		},
		height: {
			control: 'number',
		},
		info: {
			control: 'text',
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
			control: 'color',
		},
		iconInfo: {
			control: {
				options: ['!', '?'],
				type: 'text',
			},
		},
		style: {
			control: 'object',
		},
		className: {
			control: 'text',
		},
	},
} as Meta;
