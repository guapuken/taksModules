import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Texto from '../../CompoundComponents/Atoms/Textos/Textos';

const meta: Meta<typeof Texto> = {
	title: 'Sistema/Texto',
	component: Texto,
};
export default meta;

type Story = StoryObj<typeof Texto>;

export const Story = {
	name: 'Textos',
	render: () => {
		return (
			<>
				<Texto>
					<Texto.Title tipo="h1">Título h1</Texto.Title>
				</Texto>
				<Texto>
					<Texto.Title tipo="h2">Título h2</Texto.Title>
				</Texto>
				<Texto>
					<Texto.Title tipo="h3">Título h3</Texto.Title>
				</Texto>
				<Texto>
					<Texto.Title tipo="h4">Título h4</Texto.Title>
				</Texto>
				<Texto>
					<Texto.Title tipo="h5">Título h5</Texto.Title>
				</Texto>
				<Texto>
					<Texto.Simple>Cuerpo de texto</Texto.Simple>
				</Texto>
			</>
		);
	},
};
