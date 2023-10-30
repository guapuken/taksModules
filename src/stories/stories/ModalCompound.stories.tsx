import React from 'react';
import Modal from '../../CompoundComponents/Modal/Modal';
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Modal> = {
	title: 'Compound/Modal',
	component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const CompoundModal: Story = {
	render: () => {
		const modo = 'Dark';
		return (
			<Modal width="50vw" height="100%" modo={modo}>
				<Modal.Header modo={modo} closeIcon onClickClose={() => alert('Hola banda')}>
					Registro de indoors
				</Modal.Header>
				<Modal.Contenido>
					<div>Hola</div>
				</Modal.Contenido>
				<Modal.Footer>div</Modal.Footer>
			</Modal>
		);
	},
};
