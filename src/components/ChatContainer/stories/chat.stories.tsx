import React from 'react';
// utilidades del storyBook
import { Meta, Story } from '@storybook/react';
import { boolean, modo } from '../../../storyUtils';

// componente principal
import Chat from '../Chat';
import { chatProps } from '../types/types';

const Template: Story<chatProps> = (args) => <Chat {...args} />;

export const InitialState = {
	args: {
		modo: 'Dark',
		multiplesChats: true,
		projectName: 'Uber Eats-2536-Esp-Noviembre',
	},
};

Template.bind(InitialState);

// exportación default de componente y argumentos
export default {
	title: 'Chat',
	component: Chat,
	//argumentos
	argTypes: {
		modo: modo(),
		multiplesChats: boolean(),
	},
} as Meta;
