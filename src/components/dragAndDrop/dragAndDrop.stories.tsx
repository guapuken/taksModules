import React from 'react';
import { Meta, Story } from '@storybook/react';
import DragAndDrop, { DragAndDropProps } from './dragAndDrop';
import Task from '../task/task';
import CardTask from '../cardTask';
import Cards from '../cards';
import { useWindowSize } from '../../utils/windowSize';

const Template: Story<DragAndDropProps> = (args) => <DragAndDrop {...args} />;

export const Initial = Template.bind({});
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
		percentTask: 15,
		onCh_follow: (e) => !e,
		subtasks: 10,
	},
	{
		id: '17',
		idNotification: '17',
		status: 'Completas / Revisión',
		taskName: 'Negociaciones',
		taskDescription: 'Dummies de la campaña de UBER-sitios-1253-noviembre',
		statusTask: 'outOfTime',
		percentTask: 15,
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
		percentTask: 15,
		onCh_follow: (e) => !e,
		subtasks: 10,
	},
	{
		id: '19',
		idNotification: '19',
		status: 'En proceso',
		taskName: 'Impresión de comidas',
		taskDescription: 'Dummies de la campaña de UBER-sitios-1253-noviembre',
		statusTask: 'outOfTime',
		percentTask: 15,
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
		percentTask: 15,
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
		percentTask: 15,
		onCh_follow: (e) => !e,
		subtasks: 10,
	},
];

Initial.args = {
	tasks: tasks,
	nameBoards: {
		'Por hacer': '1',
		'En proceso': 'progress',
		'Completas / Revisión': 'done',
	},
	Card: CardTask,
};

export default {
	title: 'DragAndDrop',
	component: DragAndDrop,
} as Meta;
