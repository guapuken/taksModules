import { Meta, Story } from '@storybook/react';
import React from 'react';
import ModalPlantillas, { ModalPlantillasProps } from './modalPlantillas';

const Template: Story<ModalPlantillasProps> = (args) => <ModalPlantillas {...args} />;

export const Initial = Template.bind({});
Initial.args = {};

export default {
	title: 'ModalPlantillas',
	component: ModalPlantillas,
} as Meta;
