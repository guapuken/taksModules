import React from 'react';

import { Meta, Story } from '@storybook/react';
import MdlDeleteTemplate from '../Template/MdlDeleteTemplate';
import { modalDeleteTemplateProps } from '../Template/MdlDeleteTemplate';

const Template: Story<modalDeleteTemplateProps> = (args) => <MdlDeleteTemplate {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {};
export default {
	title: 'Modales/Delete Template/InitialState',
	component: MdlDeleteTemplate,
	argTypes: {},
} as Meta;
