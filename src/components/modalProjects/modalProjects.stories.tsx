import React, { useState } from 'react';
import { Meta, Story, storiesOf } from '@storybook/react';
import ModalProjects from './modalProjects';
import { ModalProjectsProps } from './types';

const Template: Story<ModalProjectsProps> = (args) => <ModalProjects {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

// estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	projectNameValue: 'UBER-EATS-1235-ESP-NOV',
	onClickCrear: () => alert('crear'),
	onClickCancelar: () => alert('cancelar'),
	onClickAddTask: () => alert('añadir tarea'),
	onClickCreateTemplate: () => alert('crear plantilla'),
};

//exportación default de valores
export default {
	title: 'Modales/project',
	component: ModalProjects,
	//definición de argumentos
	argTypes: {
		onClickCrear: { type: 'function' },
		onClickCancelar: { type: 'function' },
		onClickAddTask: { type: 'function' },
		onChangeTemplateName: { type: 'function' },
		projectNameValue: { type: 'string' },
		Children: { control: { type: 'object' } },
		templateOptions: { control: { type: 'object' } },
		onClickCreateTemplate: { type: 'function' },
	},
} as Meta;
