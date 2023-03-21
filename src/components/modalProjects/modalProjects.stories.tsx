import React from 'react';
import { Meta, Story } from '@storybook/react';
import ModalProjects, { ModalProjectsProps } from './modalProjects';

const Template: Story<ModalProjectsProps> = (args) => <ModalProjects {...args} />;

export const Initial = Template.bind({});
Initial.args = {};

export const Basic = Template.bind({});
Basic.args = {
	projectNameValue: 'UBER-EATS-1235-ESP-NOV',
};

export default {
	title: 'ModalProject',
	component: ModalProjects,
} as Meta;
