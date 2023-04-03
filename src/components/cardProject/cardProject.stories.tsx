import { Meta, Story } from '@storybook/react';
import React from 'react';
import CardProject, { CardProjectProps } from './cardProject';

const Template: Story<CardProjectProps> = (args) => <CardProject {...args} />;

export const initialState = Template.bind({});
initialState.args = {};

export const withProperties = Template.bind({});
withProperties.args = {
	projectName: 'ETERNO VERANO- CALYPSO PRODUCCIONES - AUTOBUSES - CDMX 8 MARZ',
	ejecutivo: 'Juan C. Almada',
	completedTask: 15,
	incompletedTask: 10,
	status: 'outOfTime',
};

export default {
	title: 'Cards/project',
	component: CardProject,
} as Meta;
