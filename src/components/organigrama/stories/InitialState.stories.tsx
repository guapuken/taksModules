import React from 'react';
import { Meta, Story } from '@storybook/react';
import Organigrama from '../Organigrama';

const Template: Story = (args) => <Organigrama {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {};

export default {
	title: 'Organigrama',
	component: Organigrama,
	argTypes: {},
} as Meta;
