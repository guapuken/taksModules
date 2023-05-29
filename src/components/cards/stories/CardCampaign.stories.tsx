import React from 'react';
import { Story, Meta } from '@storybook/react';
import CardCampaign from '../Campaigns/CardCampaign';

const Template: Story = (args) => <CardCampaign />;

export const InitialState = Template.bind({});

export default {
	title: 'Cards/Campaigns/InitialState',
	component: CardCampaign,
	argTypes: {},
} as Meta;
