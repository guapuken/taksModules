import React from 'react';
import { Meta, Story } from '@storybook/react';
import DragAndDrop, { DragAndDropProps } from './dragAndDrop';

const Template: Story<DragAndDropProps> = (args) => <DragAndDrop {...args} />;

export const Initial = Template.bind({});

export default {
	title: 'DragAndDrop',
	component: DragAndDrop,
} as Meta;
