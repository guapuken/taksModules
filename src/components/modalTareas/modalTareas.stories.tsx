import React from 'react';
// utilidades del storybook
import { Meta, Story } from '@storybook/react';
// componente principal
import ModalTareas from './modalTareas';
// types
import { tasksProps } from './types';

const Template: Story<tasksProps> = (args) => <ModalTareas {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

//estado de componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	projectNameValue: 'UBER-EATS-1235-ESP-NOV',
	onCl_confirm: () => alert('crear'),
	onCl_abort: () => alert('cancelar'),
	onCl_addTask: () => alert('añadir tarea'),
	onCl_newTemplate: () => alert('crear plantilla'),
	startDateValue: '2023-05-06 18:00:00',
	endDateValue: '2023-05-06 19:00:00',
	maxStartDate: '2023-05-09 00:00:00',
	minStartDate: '2023-05-01 00:00:00',
	maxEndDate: '2023-05-09 00:00:00',
	minEndDate: '2023-05-01 00:00:00',
	edit: true,
	subtasks: [
		{
			taskName: 'Dummies',
		},
	],
};

//exportación default de los valores
export default {
	title: 'Modales/tareas',
	component: ModalTareas,
} as Meta;
