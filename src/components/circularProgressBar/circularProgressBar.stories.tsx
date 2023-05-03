import React from 'react';
import { Meta, Story } from '@storybook/react';

import CircularProgressBar from './circularProgressBar';

const Template: Story = (args) => <CircularProgressBar {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {
	// percentTask: 5,
};

export const WithProperties = Template.bind({});
WithProperties.args = {
	strokeWidth: 5,
	percentTask: 75,
	trailStrokeColor: '#52525230',
	size: 50,
	statusTask: 3,
};

export default {
	title: 'Átomos/ CircularProgressBar',
	component: CircularProgressBar,
} as Meta;
