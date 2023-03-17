import { Meta, Story } from '@storybook/react';
import React from 'react';
import ModalTareas, { ModalTareasProps } from './modalTareas';

const Template: Story<ModalTareasProps> = (args) => <ModalTareas {...args} />;

export const Initial = Template.bind({});

export default {
	title: 'ModalTareas',
	component: ModalTareas,
} as Meta;
