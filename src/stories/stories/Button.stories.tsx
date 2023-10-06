import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	boolean,
	color,
	filesNoBG,
	functions,
	modo,
	object,
	sizeBtns,
	text,
} from '../../storyUtils';

import { Button } from '../../components';
import { useState } from 'react';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	name: 'Botón primario',
	render: () => (
		<div>
			{/* <Button>
				<Button.Legend>Hola</Button.Legend>
			</Button> */}
			<Button modo="Light" onCl={() => alert('Has hecho clic')} primary />
		</div>
	),
};

// Cuando se quieren hacer
const ButtonWithHooks = () => {
	const [styleButton, setStyleButton] = useState({
		primary: true,
		secondary: false,
	});
	const [legend, setLegend] = useState('Presiona');
	return (
		<Button
			primary={styleButton.primary}
			secondary={styleButton.secondary}
			modo="Light"
			onCl={() => {
				setStyleButton({
					primary: !styleButton.primary,
					secondary: !styleButton.secondary,
				});
				setLegend(
					legend === 'Presiona'
						? 'Puto el que presionó'
						: 'Lo volví a presionar porque me gustá la ver....'
				);
			}}
			legend={legend}
		/>
	);
};

export const ChangeStateWithButton: Story = {
	name: 'Cambio de estilo',
	render: () => <ButtonWithHooks />,
};

export const border: Story = {
	render: () => <Button modo="Light" onCl={() => {}} border color="#f1e323" />,
};
