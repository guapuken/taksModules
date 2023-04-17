import React from 'react';
// utilidades del storybook
import { Meta, Story } from '@storybook/react';
// componente principal
import InputTask from './inputTask';
// types
import { inputTasks } from './types';
// utilidades de controles del storybook
import { boolean, text } from '../../storyUtils';

const Template: Story<inputTasks> = (args) => <InputTask {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {
	id: '1',
};

//estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	id: '1',
	principalTask: true,
	valueTask: 'Hacer dummies',
	valueDescription: 'Realizar dummies de las principales plazas',
};

export default {
	title: 'Átomos/input task',
	component: InputTask,
	argTypes: {
		id: text(),
		disabled: boolean(),
		tarea: boolean(),
		subtarea: boolean(),
	},
} as Meta;
