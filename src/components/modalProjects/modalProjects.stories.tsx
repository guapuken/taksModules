import React, { useState } from 'react';
import { Meta, Story, storiesOf } from '@storybook/react';
import { functions, modo, object, text } from '../../storyUtils';
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
	onCl_confirm: () => alert('crear'),
	onCl_abort: () => alert('cancelar'),
	onCl_addTask: () => alert('añadir tarea'),
	onCl_newTemplate: () => alert('crear plantilla'),
};

//exportación default de valores
export default {
	title: 'Modales/project',
	component: ModalProjects,
	//definición de argumentos
	argTypes: {
		onCl_confirm: functions(),
		onCl_abort: functions(),
		onCl_addTask: functions(),
		onCh_nameProject: functions(),
		projectNameValue: text(),
		subtasks: object(),
		templateOptions: object(),
		onCl_newTemplate: functions(),
		modo: modo(),
		idProject: text(),
		onCh_asignTeam: functions(),
		teamOptions: object(),
		initialTeamValue: object(),
	},
} as Meta;
