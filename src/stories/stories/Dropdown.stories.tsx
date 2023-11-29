import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../../CompoundComponents/Atoms/Dropdown/Dropdown';

const meta: Meta<typeof Dropdown> = {
	title: 'Sistema/Dropdown',
	component: Dropdown,
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Story = {
	name: 'Dropdown',
	render: () => {
		const [valueDrop, setValueDrop] = useState(null);
		return (
			<Dropdown
				value={valueDrop || null}
				onChange={(e) => setValueDrop(e?.target?.value)}
				placeholder="Selecciona un elemento"
			>
				<Dropdown.Option value="Hola1">Hola</Dropdown.Option>
				<Dropdown.Option value="Hola2">Hola que</Dropdown.Option>
				<Dropdown.Option value="Hola3">Hola hace</Dropdown.Option>
				<Dropdown.Option value="Hola4">Hola o</Dropdown.Option>
				<Dropdown.Option value="Hola5">Hola quésos</Dropdown.Option>
				<Dropdown.Option value="Hola6">Hola la villita</Dropdown.Option>
			</Dropdown>
		);
	},
};
