import React from 'react';

import { Meta, Story } from '@storybook/react';
import MdlDeleteTask from '../Task/MdlDeleteTask';
import { modalDeleteTaskProps } from '../Task/MdlDeleteTask';

const Template: Story<modalDeleteTaskProps> = (args) => <MdlDeleteTask {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {};
export default {
	title: 'Modales/Delete Task/InitialState',
	component: MdlDeleteTask,
	argTypes: {},
} as Meta;
