import React from 'react';
import { Story, Meta } from '@storybook/react';
import { functions, modo, text } from '../../../../storyUtils';

import MdlReasignDate from '../ReasignDate/ModalReasignDate';
import { modalReasignDateProps } from '../ReasignDate/types/types';

const Template: Story<modalReasignDateProps> = (args) => <MdlReasignDate {...args} />;
export const InitialState = Template.bind({});
InitialState.args = {};

export default {
	title: 'Modales/Reasign Date/Initial State',
	component: MdlReasignDate,
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
