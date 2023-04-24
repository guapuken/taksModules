import React from 'react';
// utilidades del storybook
import { Meta, Story } from '@storybook/react';
import { boolean, functions, modo, number, statusTasks, text } from '../../storyUtils';
// componente principal
import CardProject from './cardProject';
import { cardProject } from './types';

const Template: Story<cardProject> = (args) => <CardProject {...args} />;

export const initialState = Template.bind({});
initialState.args = {};

export const withProperties = Template.bind({});
withProperties.args = {
	projectName: 'UBER EATS-1253-Sitios-Noviembre',
	ejecutivo: 'Juan C. Almada',
	completedTask: 15,
	incompletedTask: 10,
	status: 'outOfTime',
	onCh_follow: (e) => console.log(e.target.value),
	// modo: 'Dark',
};

export default {
	title: 'Cards/project',
	component: CardProject,
	argTypes: {
		statustask: statusTasks(),
		modo: modo(),
		onCl_followProject: functions(),
		onCl_showDetails: functions(),
		onCl_share: functions(),
		onCh_follow: functions(),
		idProject: text(),
		follow: boolean(),
		incompletedTask: number(),
		completedTask: number(),
		ejecutivo: text(),
		projectName: text(),
	},
} as Meta;
