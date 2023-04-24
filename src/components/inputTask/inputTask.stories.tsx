import React from 'react';
// utilidades del storybook
import { Meta, Story } from '@storybook/react';
import { functions, boolean, text, object, modo } from '../../storyUtils';
// componente principal
import InputTask from './inputTask';
// types
import { inputTasks } from './types';

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
	// definición de argumentos
	argTypes: {
		onCh_nameTask: functions(),
		onCh_checkbox: functions(),
		onCh_descriptionTask: functions(),
		disabled: boolean(),
		principalTask: boolean(),
		isSubtask: boolean(),
		checked: boolean(),
		check: boolean(),
		showTask: boolean(),
		valueTask: text(),
		valueDescription: text(),
		idCheckbox: text(),
		data: object(),
		style: object(),
		modo: modo(),
		id: text(),
	},
} as Meta;
