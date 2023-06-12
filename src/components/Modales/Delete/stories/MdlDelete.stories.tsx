import React from 'react';

import { Meta, Story } from '@storybook/react';
import MdlDeleteTeam from '../Team/MdlDeleteTeam';
import { modalDeleteTeamProps } from '../Team/MdlDeleteTeam';

const Template: Story<modalDeleteTeamProps> = (args) => <MdlDeleteTeam {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {};
export default {
	title: 'Modales/Delete Team/InitialState',
	component: MdlDeleteTeam,
	argTypes: {},
} as Meta;
