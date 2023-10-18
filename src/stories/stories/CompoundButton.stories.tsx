import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../CompoundComponents/Button/Button';

const meta: Meta<typeof Button> = {
	title: 'Compound/Button',
	component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const CompoundButton: Story = {
	name: 'Button',
	render: () => (
		<div theme-config="Dark">
			<Button color="#7BAFFF" border>
				<Button.Counter>Cerrada ganada</Button.Counter>
				<Button.Legend>Cerrar ganada la campaña</Button.Legend>
			</Button>
		</div>
	),
};
