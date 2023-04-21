import React from 'react';
// utilidades de storybook
import { Meta, Story } from '@storybook/react';
// componente principal
import AutoresizeInput from '.';
import { autoresizeInput } from './types';
// utilidades de storybook
import { boolean, functions, number, object, taskType, text } from '../../storyUtils';

// creación de plantilla donde se almacenará el componente
const Template: Story<autoresizeInput> = (args) => <AutoresizeInput {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
// estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	initialValue: 'Hacer dummies',
	taskType: 'principal',
	placeholder: 'Ingresa el nombre de la tarea',
};

// exportación default de historia
export default {
	title: 'Átomos/autoresize input',
	component: AutoresizeInput,
	// definición de argumentos
	argTypes: {
		style: object(),
		onCh: functions(),
		taskType: taskType(),
		initialValue: text(),
		placeholder: text(),
		tabIndex: number(),
		disabled: boolean(),
	},
} as Meta;
