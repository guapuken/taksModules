import React from 'react';
import { Story, Meta } from '@storybook/react';

import TimelineProject from '../Timeline/TimelineProject';

const Template: Story = (args) => <TimelineProject {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {};

export default {
	title: 'Layouts/TimelineProject/InitialState',
	component: TimelineProject,
	argTypes: {},
} as Meta;
