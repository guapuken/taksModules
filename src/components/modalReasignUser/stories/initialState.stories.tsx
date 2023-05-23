import React from 'react';
import { Story, Meta } from '@storybook/react';
import { functions, modo, object } from '../../../storyUtils';
import ModalReasignUser from '../ModalReasignUser';
import { modalReasignUserProps } from '../types/types';

const Template: Story<modalReasignUserProps> = (args) => <ModalReasignUser {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {};

export default {
	title: 'Modales/ModalReasignUser/InitialState',
	component: ModalReasignUser,
	argTypes: {
		Trigger: functions(),
		modo: modo(),
		onCl_confirm: functions(),
		optionsDropdown: object(),
		initialValueDropdown: object(),
		onCh_dropdown: functions(),
	},
} as Meta;
