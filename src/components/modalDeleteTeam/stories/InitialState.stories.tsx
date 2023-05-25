import React from 'react';

import { Meta, Story } from '@storybook/react';
import ModalDeleteTeam from '../modalDeteleTeam';
import { modalDeleteTeamProps } from '../types/types';

const Template: Story<modalDeleteTeamProps> = (args) => <ModalDeleteTeam {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {};
export default {
	title: 'Modales/ModalDeleteTeam/Modal Delete Team',
	component: ModalDeleteTeam,
	argTypes: {},
} as Meta;
