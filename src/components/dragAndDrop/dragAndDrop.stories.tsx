import { Meta, Story } from '@storybook/react';
import React from 'react';
import CardTask from '../cardTask';
import Cards from '../cards';
import Task from '../task/task';
import DragAndDrop from './dragAndDrop';
import { dragAndDrop } from './types';

const Template: Story<dragAndDrop> = (args) => <DragAndDrop {...args} {...args.tasks} />;
const tasks = [
	{
		id: '15',
		idNotification: '15',
		status: 'En proceso',
		taskName: 'Dummies CDMX',
		taskDescription: 'Dummies de la campaña de UBER-sitios-1253-noviembre',
		statusTask: 'outOfTime',
		percentTask: 15,
		onCh_follow: (e) => !e,
		subtasks: 10,
	},
	{
		id: '16',
		idNotification: '16',
		status: 'En proceso',
		taskName: 'Bloqueos',
		taskDescription: 'Dummies de la campaña de UBER-sitios-1253-noviembre',
		statusTask: 'outOfTime',
		percentTask: 35,
		onCh_follow: (e) => !e,
		subtasks: 10,
	},
	{
		id: '19',
		idNotification: '19',
		status: 'Completas / Revisión',
		taskName: 'Impresión de comidas',
		taskDescription: 'Dummies de la campaña de UBER-sitios-1253-noviembre',
		statusTask: 'outOfTime',
		percentTask: 59,
		onCh_follow: (e) => !e,
		subtasks: 10,
		approved: true,
	},
	{
		id: '17',
		idNotification: '17',
		status: 'Completas / Revisión',
		taskName: 'Negociaciones',
		taskDescription: 'Dummies de la campaña de UBER-sitios-1253-noviembre',
		statusTask: 'outOfTime',
		percentTask: 10,
		onCh_follow: (e) => !e,
		subtasks: 10,
	},
	{
		id: '18',
		idNotification: '18',
		status: 'Por hacer',
		taskName: 'Impresión',
		taskDescription: 'Dummies de la campaña de UBER-sitios-1253-noviembre',
		statusTask: 'outOfTime',
		percentTask: 0,
		onCh_follow: (e) => !e,
		subtasks: 10,
	},
	{
		id: '20',
		idNotification: '20',
		status: 'Por hacer',
		taskName: 'Impresión de locas',
		taskDescription: 'Dummies de la campaña de UBER-sitios-1253-noviembre',
		statusTask: 'outOfTime',
		percentTask: 60,
		onCh_follow: (e) => !e,
		subtasks: 10,
	},
	{
		id: '21',
		idNotification: '21',
		status: 'Por hacer',
		taskName: 'Impresión por medio de Bigfoot print para ayr',
		taskDescription: 'Dummies de la campaña de UBER-sitios-1253-noviembre',
		statusTask: 'outOfTime',
		percentTask: 99,
		onCh_follow: (e) => !e,
		subtasks: 10,
	},
];
export const Initial = Template.bind({});

Initial.args = {
	tasks: tasks,
	nameBoards: {
		'Por hacer': '1',
		'En proceso': 'progress',
		'Completas / Revisión': 'done',
	},
	Card: CardTask,
	modo: 'Dark',
};

export default {
	title: 'DragAndDrop',
	component: DragAndDrop,
} as Meta;
