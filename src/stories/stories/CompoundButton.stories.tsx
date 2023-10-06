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
		<Button color="#f1e323">
			<Button.Counter>1</Button.Counter>
			<Button.Legend>Comprar ahora</Button.Legend>
		</Button>
	),
};
