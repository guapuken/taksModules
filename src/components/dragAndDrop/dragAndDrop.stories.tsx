import React from 'react';
import { Meta, Story } from '@storybook/react';
import DragAndDrop, { DragAndDropProps } from './dragAndDrop';
import Task from '../task/task';

const Template: Story<DragAndDropProps> = (args) => <DragAndDrop {...args} />;

export const Initial = Template.bind({});
const tasks = [
	{
		id: '15',
		status: 'Pendientes',
		taskName: 'Dummies CDMX',
		taskDescription: 'Dummies de la campaña de UBER-sitios-1253-noviembre',
		statusTask: 'outOfTime',
		percentTask: 15,
		onChangeNotificationSwitch: (e) => !e,
		subtasks: 10,
	},
	{
		id: '16',
		status: 'Pendientes',
		taskName: 'Bloqueos',
		taskDescription: 'Dummies de la campaña de UBER-sitios-1253-noviembre',
		statusTask: 'outOfTime',
		percentTask: 15,
		onChangeNotificationSwitch: (e) => !e,
		subtasks: 10,
	},
	{
		id: '17',
		status: 'Pendientes',
		taskName: 'Negociaciones',
		taskDescription: 'Dummies de la campaña de UBER-sitios-1253-noviembre',
		statusTask: 'outOfTime',
		percentTask: 15,
		onChangeNotificationSwitch: (e) => !e,
		subtasks: 10,
	},
	{
		id: '18',
		status: 'Pendientes',
		taskName: 'Impresión',
		taskDescription: 'Dummies de la campaña de UBER-sitios-1253-noviembre',
		statusTask: 'outOfTime',
		percentTask: 15,
		onChangeNotificationSwitch: (e) => !e,
		subtasks: 10,
	},
];
Initial.args = {
	tasks: tasks,
};

export default {
	title: 'DragAndDrop',
	component: DragAndDrop,
} as Meta;
