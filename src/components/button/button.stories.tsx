import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button, { ButtonProps } from './button';

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {
	onClick: () => alert('Change the function'),
};
export const Primary = Template.bind({});
Primary.args = {
	onClick: () => alert('Change the function'),
	primary: true,
	legend: 'Botón primario',
};
export const Secondary = Template.bind({});
Secondary.args = {
	onClick: () => alert('Change the function'),
	secondary: true,
	legend: 'Botón secundario',
};
export const Tertiary = Template.bind({});
Tertiary.args = {
	onClick: () => alert('Change the function'),
	tertiary: true,
	legend: 'Botón terciario',
};

export default {
	//nombre de la carpeta en la que se agrupará y el título del elemento
	title: 'Átomos/button',
	component: Button,
	//Definición de argumentos
	argTypes: {
		legend: {
			control: 'text',
		},
		size: {
			control: {
				options: ['small', 'medium', 'large'],
				type: 'select',
			},
		},
		color: {
			control: {
				type: 'color',
				presetColors: ['#dedede', '#126EFA', '#FC3D38', '#7BAFFF'],
			},
		},
		colorHover: {
			control: {
				type: 'color',
				presetColors: ['#dedede', '#126EFA', '#FC3D38', '#7BAFFF'],
			},
		},
		style: {
			control: 'object',
		},
		className: {
			control: 'text',
		},
		styleIcon: {
			control: 'object',
		},
		primary: {
			control: 'boolean',
		},
		secondary: {
			control: 'boolean',
		},
		tertiary: {
			control: 'boolean',
		},
		rounded: {
			control: 'boolean',
		},
		disabled: {
			control: 'boolean',
		},
		border: {
			control: 'boolean',
		},
		float: {
			control: 'boolean',
		},
		id: {
			control: 'text',
		},
		key: {
			control: 'text',
		},
		icon: {
			control: {
				type: 'file',
				accept: '.svg , .png',
			},
		},
	},
} as Meta;
