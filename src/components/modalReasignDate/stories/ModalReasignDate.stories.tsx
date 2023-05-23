import React from 'react';
import { Story, Meta } from '@storybook/react';
import { functions, modo, text } from '../../../storyUtils';

import ModalReasignDate from '../ModalReasignDate';
import { modalReasignDateProps } from '../types/types';

const Template: Story<modalReasignDateProps> = (args) => <ModalReasignDate {...args} />;
export const InitialState = Template.bind({});
InitialState.args = {};

export default {
	title: 'Modales/ModalReasignDate/Initial State',
	component: ModalReasignDate,
	argTypes: {
		Trigger: functions(),
		modo: modo(),
		endDateValue: text(),
		startDateValue: text(),
		onCh_startDate: functions(),
		onCh_endDate: functions(),
		onCl_confirm: functions(),
	},
} as Meta;
