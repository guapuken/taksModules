import React from 'react';

import { Meta, Story } from '@storybook/react';
import MdlDeleteProject from '../Project/MdlDeleteProject';
import { modalDeleteProjectProps } from '../Project/MdlDeleteProject';

const Template: Story<modalDeleteProjectProps> = (args) => <MdlDeleteProject {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {};
export default {
	title: 'Modales/Delete Project/InitialState',
	component: MdlDeleteProject,
	argTypes: {},
} as Meta;
