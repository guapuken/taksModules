import { Meta, Story } from '@storybook/react';
import React from 'react';
import CardProject, { CardProjectProps } from './cardProject';

const Template: Story<CardProjectProps> = (args) => <CardProject {...args} />;

export const initialState = Template.bind({});
initialState.args = {};

export const withProperties = Template.bind({});
withProperties.args = {
	projectName: 'UBER EATS-1253 Sitios Noviembre',
	ejecutivo: 'Juan C. Almada',
	completedTask: 15,
	incompletedTask: 10,
	status: 'outOfTime',
	// modo: 'Dark',
};

export default {
	title: 'Cards/project',
	component: CardProject,
} as Meta;
