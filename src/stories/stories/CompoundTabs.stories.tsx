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
			<Tabs.Tab>+ Nueva Carpeta</Tabs.Tab>
			<Tabs.Tab>
				Espectaculares
				<Tabs style={{ position: 'absolute', left: '100%', top: '0' }}>
					<Tabs.Tab> hola</Tabs.Tab>
					<Tabs.Tab> Que hace</Tabs.Tab>
					<Tabs.Tab> Mi viejón loco</Tabs.Tab>
					<Tabs.Tab> hola</Tabs.Tab>
				</Tabs>
			</Tabs.Tab>
			<Tabs.Tab>hola</Tabs.Tab>
			<Tabs.Tab>Muros</Tabs.Tab>
		</Tabs>
	),
};
