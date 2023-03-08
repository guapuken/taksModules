import { Meta, Story } from '@storybook/react';
import React from 'react';
import InputLabel, { InputLabelProps } from './inputLabel';

const Template: Story<InputLabelProps> = (args) => <InputLabel {...args} />;
export const Initial = Template.bind({});
Initial.args = {
	type: 'date',
};

export default {
	title: 'InputLabel',
	component: InputLabel,
} as Meta;
