import { Meta, Story } from '@storybook/react';
import React from 'react';
import RangeDatePicker, { RangeDatePickerProps } from './rangeDatePicker';

const Template: Story<RangeDatePickerProps> = (args) => <RangeDatePicker {...args} />;

export const Initial = Template.bind({});
Initial.args = {};

export default {
	title: 'RangeDatePicker',
	component: RangeDatePicker,
} as Meta;
