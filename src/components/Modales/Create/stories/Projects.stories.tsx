import React from 'react';
import { Meta, Story } from '@storybook/react';
import { functions, modo, object, text } from '../../../../storyUtils';
import ModalProjects from '../Projects/modalProjects';
import { ModalProjectsProps } from '../Projects/types/types';

const Template: Story<ModalProjectsProps> = (args) => <ModalProjects {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

//exportación default de valores
export default {
	title: 'Modales/Creación/Proyectos/Initial State',
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
