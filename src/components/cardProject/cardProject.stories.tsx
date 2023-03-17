import { Meta, Story } from '@storybook/react';
import React from 'react';
import CardProject, { CardProjectProps } from './cardProject';

const Template: Story<CardProjectProps> = (args) => <CardProject {...args} />;

export const Initial = Template.bind({});
Initial.args = {};

export const Basic = Template.bind({});
Basic.args = {
	projectName: 'ETERNO VERANO- CALYPSO PRODUCCIONES - AUTOBUSES - CDMX 8 MARZ',
	ejecutivo: 'Juan C. Almada',
	completedTask: 15,
	incompletedTask: 10,
	status: 'outOfTime',
};

export default {
	title: 'CardProject',
	component: CardProject,
} as Meta;
