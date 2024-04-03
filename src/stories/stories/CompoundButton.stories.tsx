import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { GetIcons } from '../../CompoundComponents';
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
			<Button color="#126EFA">
				{/* <Button.Counter>Cerrada ganada</Button.Counter> */}
				<Button.Legend>Cerrar ganada la campaña</Button.Legend>
			</Button>
			<GetIcons icon='list' fill="blue" size={500} strokeWidth={1} />
		</div>
	),
};
