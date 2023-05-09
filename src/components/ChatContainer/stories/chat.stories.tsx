import React from 'react';
// utilidades del storyBook
import { Meta, Story } from '@storybook/react';
import { boolean, modo } from '../../../storyUtils';

// componente principal
import Chat from '../Chat';
import { chatProps } from '../types/types';

const Template: Story<chatProps> = (args) => <Chat {...args} />;

// estado inicial del componente
// export const InitialState = Template.bind({
// });
// Template.args = {multiplesChats: true,}
export const InitialState = {
	args: {
		modo: 'Dark',
		multiplesChats: true,
		projectName: 'Uber Eats-2536-Esp-Noviembre',
		// onCh_comment: (e) => console.log(e.target.value),
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
