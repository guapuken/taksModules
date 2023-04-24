import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardMannageProjects from './cardMannageProjects';
import { cardMannageProjects } from './types';
import { functions, modo, number, statusTasks, text } from '../../storyUtils';

const Template: Story<cardMannageProjects> = (args) => <CardMannageProjects {...args} />;

export const initialState = Template.bind({});
initialState.args = {};

export const withProperties = Template.bind({});
withProperties.args = {
	onCl_delete: () => alert('Eliminar proyecto'),
	onCl_preview: () => alert('Previsualizar'),
	onCl_edit: () => alert('editar'),
	title: 'UBER EATS-1523-Sitios-Noviembre23',
	// statusTask: 'delayed',
	statusTask: 1,
	percentTask: 100,
	tasks: 35,
};

export default {
	title: 'Cards de gestión/projects',
	component: CardMannageProjects,
	argTypes: {
		title: text(),
		statusTask: statusTasks(),
		percentTask: number(),
		tasks: number(),
		onCl_delete: functions(),
		onCl_preview: functions(),
		onCl_edit: functions(),
		modo: modo(),
	},
} as Meta;
