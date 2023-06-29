import { Meta, Story } from '@storybook/react';
import React from 'react';
import CardTask from '../Tasks/cardTask';
import { cardTask } from '../Tasks/types/types';
import { boolean, functions, modo, number, statusTasks, text } from '../../../storyUtils';

const Template: Story<cardTask> = (args) => <CardTask {...args} />;

export const initialState = Template.bind({});
initialState.args = {};

export const withProperties = Template.bind({});
withProperties.args = {
	onCl_edit: () => alert('Editar'),
	onCl_reminder: () => alert('Recordatorio'),
	onCl_follow: () => alert('seguir'),
	onCl_reasignDate: () => alert('reasignar fecha'),
	onCl_asignTask: () => alert('asignar tarea'),
	follow: true,
	taskName: 'Dummies campaña 1526-UberEats-Sitios-Noviembre-Urbanos',
	taskDescription: 'Realizar os dummies de la plaza de Ciudad de méxico y Aguascalientes Sun sun',
	statusTask: 'outOfTime',
	percentTask: 20,
	onCl_showDetails: () => alert('ver detalles'),
	subtasks: 15,
	modo: 'Light',
	idTask: '1',
};
export default {
	title: 'Cards/task',
	component: CardTask,
	// definición de argumentos
	argTypes: {
		onCl_edit: functions(),
		onCl_reminder: functions(),
		onCl_follow: functions(),
		onCl_reasignDate: functions(),
		onCl_asignTask: functions(),
		follow: boolean(),
		taskName: text(),
		taskDescription: text(),
		statusTask: statusTasks(),
		percentTask: number(),
		onCl_showDetails: functions(),
		subtasks: number(),
		modo: modo(),
		idTask: text(),
	},
} as Meta;
