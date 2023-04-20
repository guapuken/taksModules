import React from 'react';

import { Meta, Story } from '@storybook/react';
import DragAndDrop0 from '.';

const Template: Story = (args) => <DragAndDrop0 {...args} />;

export const InitialState = Template.bind({});

export default {
	title: 'DragAndDrop0',
	component: DragAndDrop0,
} as Meta;
