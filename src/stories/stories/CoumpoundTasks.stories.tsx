import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Tasks from '../../CompoundComponents/Tasks/Tasks';
import { ButtonCompound } from '../../CompoundComponents';
import GetIcons from '../../CompoundComponents/Atoms/Icon/getIcons';
import { PopUp, Texts, Title } from '../../components/Atoms';

const meta: Meta<typeof Tasks> = {
	title: 'Compound/Tasks',
	component: Tasks,
};
export default meta;

type Story = StoryObj<typeof Tasks>;

export const CompoundTasks: Story = {
	name: 'Tasks',
	render: () => {
		const [overAsign, setOverAsign] = useState(false);
		return (
			<Tasks disable={false}>
				<Tasks.Icons style={{ marginTop: '15px' }}>
					<div style={{ position: 'relative', maxWidth: '30px' }}>
						<ButtonCompound color="transparent">
							<ButtonCompound.Counter
								style={{ background: 'red' }}
								onMouseEnter={() => setOverAsign(true)}
								onMouseLeave={() => setOverAsign(false)}
							>
								1
							</ButtonCompound.Counter>
							<ButtonCompound.Svg>
								<GetIcons size={30}>
									<GetIcons.AsignUser />
								</GetIcons>
							</ButtonCompound.Svg>
						</ButtonCompound>

						{overAsign && (
							<div
								style={{
									background: 'var(--bg)',
									boxShadow: 'var(--boxShadow)',
									maxWidth: '200px',
									padding: '5px 10px',
									borderRadius: '5px',
									top: '15px',
									right: '-215px',
									position: 'absolute',
								}}
							>
								<Texts modo="Light">
									<strong>Responsable:</strong> Juan C. Almada
								</Texts>
								<Texts modo="Light">
									<strong>Creativo responsable:</strong> Hilenni Ascencio
								</Texts>
								<Texts modo="Light">
									<strong>Equipo responsable:</strong> Creative
								</Texts>
							</div>
						)}
					</div>
				</Tasks.Icons>
			</Tasks>
		);
	},
};
