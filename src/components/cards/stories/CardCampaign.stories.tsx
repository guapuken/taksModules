import { Meta, Story } from '@storybook/react';
import React from 'react';
import { modo } from '../../../storyUtils';
import CardCampaign from '../Campaigns/CardCampaign';

const Template: Story = (args) => <CardCampaign {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {
	// porcentajeFijos: 34,
	// porcentajeUrbanos: 0,
	// porcentajeIndoors: 0,
	// porcentajeVallas: 45,
	// statusFijos: 2,
	// statusUrbanos: 2,
	// statusIndoors: 1,
	// statusVallas: 'outOfTime',
	nombreProyecto: 'uber',
	modo: 'Light',
	// campaignColor: '',
};

export default {
	title: 'Cards/Campaigns/InitialState',
	component: CardCampaign,
	argTypes: {
		modo: modo(),
	},
} as Meta;
