import { Meta, Story } from '@storybook/react';
import React from 'react';
import AsideTemplates, { AsideTemplatesProps } from './asideTemplates';

const Template: Story<AsideTemplatesProps> = (args) => <AsideTemplates {...args} />;
export const Initial = Template.bind({});
Initial.args = {
	Content: () => <h1> hola </h1>,
	isWhite: true,
};
export default {
	title: 'AsideTemplates',
	component: AsideTemplates,
	argTypes: {},
} as Meta;
