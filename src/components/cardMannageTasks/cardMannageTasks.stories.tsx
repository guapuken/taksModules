import React from 'react';

import { Meta, Story } from '@storybook/react';
import CardMannageTask from './cardMannageTasks';
import { cardMannageTasks } from './types';
import { functions, modo, number, statusTasks, text } from '../../storyUtils';

const Template: Story<cardMannageTasks> = (args) => <CardMannageTask {...args} />;

//estado inicial del componente
export const initialState = Template.bind({});
initialState.args = {};

// estado del componente con propiedades
export const withProperties = Template.bind({});
withProperties.args = {
	title: 'Dummies MTY',
	tasks: 25,
	modo: 'Dark',
	percentTask: 25,
	// statusTask: 'outOfTime',
	statusTask: 3,
	onCl_preview: () => alert('Previsualizar'),
	onCl_delete: () => alert('Eliminar'),
	onCl_edit: () => alert('Editar'),
};

export default {
	title: 'Cards de gestión/tasks',
	component: CardMannageTask,
	// definición de argumentos
	argTypes: {
		onCl_delete: functions(),
		onCl_preview: functions(),
		onCl_edit: functions(),
		title: text(),
		pendingTasks: number(),
		percentTask: number(),
		statusTask: statusTasks(),
		modo: modo(),
	},
} as Meta;
