import { Meta, Story } from '@storybook/react';
import React from 'react';
import CardMembersTeam, { CardMembersTeamProps } from './cardMembersTeam';

const Template: Story<CardMembersTeamProps> = (args) => <CardMembersTeam {...args} />;
export const Initial = Template.bind({});
Initial.args = {};
export default {
	title: 'CardMembersTeam',
	component: CardMembersTeam,
} as Meta;
