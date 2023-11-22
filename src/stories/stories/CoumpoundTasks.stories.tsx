import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Tasks from '../../CompoundComponents/Tasks/Tasks';
import { ButtonCompound, GetIcons } from '../../CompoundComponents';
import { Texts } from '../../components/Atoms';

const meta: Meta<typeof Tasks> = {
	title: 'Compound/Tasks',
	component: Tasks,
};
export default meta;

type Story = StoryObj<typeof Tasks>;

export const CompoundTasks: Story = {
	name: 'Tasks',
	render: () => {
		const [isOverAsign, setIsOverAsign] = useState(false);
		return (
			<Tasks disabled={false}>
				<Tasks.Icons
					size={'50px'}
					counter={3}
					style={{ marginTop: 10 }}
					icon={<GetIcons icon="newUser" size={30} fill="red" />}
					onMouseEnter={() => setIsOverAsign(true)}
					onMouseLeave={() => setIsOverAsign(false)}
				>
					<Tasks.Icons.Popup visible={isOverAsign}>
						<Texts modo="Light">
							<strong>Responsable:</strong> Juan C. Almada
						</Texts>
						<Texts modo="Light">
							<strong>Creativo responsable:</strong> Hilenni Ascencio
						</Texts>
						<Texts modo="Light">
							<strong>Equipo responsable:</strong> Creative
						</Texts>
					</Tasks.Icons.Popup>
				</Tasks.Icons>
				<Tasks.Icons
					style={{ marginTop: 10 }}
					size="50px"
					icon={<GetIcons icon="puntosSupensivos" size={30} />}
					counter={'2 más'}
				>
					<Tasks.Icons.Popup visible>
						<ButtonCompound color={'#ffffff'}>
							<ButtonCompound.Legend>Editar</ButtonCompound.Legend>
						</ButtonCompound>
					</Tasks.Icons.Popup>
				</Tasks.Icons>
			</Tasks>
		);
	},
};
