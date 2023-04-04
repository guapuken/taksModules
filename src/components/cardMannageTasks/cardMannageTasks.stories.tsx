import React from 'react';

import { Meta, Story } from '@storybook/react';
import CardMannageTask, { cardMannageTasks } from './cardMannageTasks';

const Template: Story<cardMannageTasks> = (args) => <CardMannageTask {...args} />;

//estado inicial del componente
export const initialState = Template.bind({});
initialState.args = {};

// estado del componente con propiedades
export const withProperties = Template.bind({});
withProperties.args = {
	title: 'Dummies MTY',
	tasks: 25,
	percentTask: 25,
	statusTask: 'outOfTime',
	onClickDelete: () => alert('delete'),
	onClickPreview: () => alert('preview'),
};

export default {
	title: 'Cards de gestión/tasks',
	component: CardMannageTask,
} as Meta;
