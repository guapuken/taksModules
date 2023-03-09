import { Meta, Story } from '@storybook/react';
import React from 'react';
import LoadScreen, { LoadScreenProps } from './loadScreen';

const Template: Story<LoadScreenProps> = (args) => <LoadScreen {...args} />;

export const Initial = Template.bind({});
Initial.args = {};

export default {
	title: 'LoadScreen',
	component: LoadScreen,
} as Meta;
