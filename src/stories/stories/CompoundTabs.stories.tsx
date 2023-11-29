import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '../../CompoundComponents/Tabs/Tabs';

const meta: Meta<typeof Tabs> = {
	title: 'Compound/Tabs',
	component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const CompoundTabs: Story = {
	name: 'Tabs',
	render: () => (
		<Tabs color="#f1e323">
			<Tabs.Tab label="Nueva carpeta">+ Nueva Carpeta</Tabs.Tab>
			<Tabs.Tab label="Nueva carpeta">+ Nueva Carpeta</Tabs.Tab>
		</Tabs>
	),
};
