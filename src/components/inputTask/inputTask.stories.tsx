import { Meta, Story } from '@storybook/react';
import React from 'react';
import InputTask, { InputTaskProps } from './inputTask';

const Template: Story<InputTaskProps> = (args) => <InputTask {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {};

//estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	principalTask: true,
	valueTask: 'Hacer dummies',
	valueDescription: 'Realizar dummies de las principales plazas',
};

export default {
	title: 'Átomos/input task',
	component: InputTask,
	argTypes: {
		disabled: {
			control: 'boolean',
		},
		tarea: {
			control: 'boolean',
		},
		subtarea: {
			control: 'boolean',
		},
	},
} as Meta;
