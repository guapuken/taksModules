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
	onClickCreate: () => alert('crear'),
	onClickAbort: () => alert('cancelar'),
	onClickAddTask: () => alert('añadir tarea'),
	onClickCreateTemplate: () => alert('crear plantilla'),
};

//exportación default de los valores
export default {
	title: 'Modales/tareas',
	component: ModalTareas,
} as Meta;
