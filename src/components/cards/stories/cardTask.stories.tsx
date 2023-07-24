import { Meta, Story } from '@storybook/react';
import React from 'react';
import CardTask from '../Tasks/cardTask';
import { cardTask } from '../Tasks/types/types';
import { boolean, functions, modo, number, statusTasks, text } from '../../../storyUtils';
import { SimpleContainer } from '../../Atoms';

const Template: Story<cardTask> = (args) => {
	return (
		<SimpleContainer style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
			<CardTask {...args} />
		</SimpleContainer>
	);
};

export const Dummies = Template.bind({});
Dummies.args = {
	onCl_edit: () => alert('Editar'),
	onCl_reminder: () => alert('Recordatorio'),
	onCl_follow: () => alert('seguir'),
	onCl_reasignDate: () => alert('reasignar fecha'),
	onCl_asignTask: () => alert('asignar tarea'),
	follow: true,
	taskName: 'Dummies campaña 1526-UberEats-Sitios-Noviembre-Urbanos',
	taskDescription: 'Realizar os dummies de la plaza de Ciudad de méxico y Aguascalientes Sun sun',
	statusTask: 3,
	percentTask: 75,
	onCl_showDetails: () => alert('ver detalles'),
	subtasks: 15,
	modo: 'Dark',
	idTask: '1',
};
export default {
	title: 'Cards/Task/Ejemplos/Dummies',
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
