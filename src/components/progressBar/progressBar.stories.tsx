import React from 'react';
//imports storybook
import { Meta, Story } from '@storybook/react';
//import component
import ProgressBar, { ProgressBarProps } from './progressBar';

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

// estado del componente con propiedades
export const OnTime = Template.bind({});
OnTime.args = {
	valor: 75,
	status: 'onTime',
};
export const Delayed = Template.bind({});
Delayed.args = {
	valor: 75,
	status: 'delayed',
};
export const OutOfTime = Template.bind({});
OutOfTime.args = {
	valor: 75,
	status: 3,
};

//exportación de valores default
export default {
	//nombre de la carpeta en la que se agrupará y el nombre del componente
	title: 'Átomos/progress Bar',
	component: ProgressBar,
	//definición de argumentos
	argTypes: {
		valor: {
			control: {
				type: 'number',
				min: 0,
				max: 100,
			},
		},
		width: {
			control: 'number',
		},
		status: {
			control: {
				type: 'select',
				options: ['onTime', 'delayed', 'outOfTime'],
			},
		},
	},
} as Meta;
