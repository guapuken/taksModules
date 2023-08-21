import React from 'react';
import Donut from '../../components/DonutGraphic/Donut';

import { StoryObj, Meta } from '@storybook/react';
import { Texts } from '../../components/Atoms';

const meta: Meta<typeof Donut> = {
	title: 'Gráficas/ Donut',
	component: Donut,
	argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Donut>;

export const Primary: Story = {
	name: 'Donut',
	render: () => {
		return (
			<Donut
				size={'50px'}
				grados={360}
				modo={'Light'}
				porcentajes={[75, 25]}
				colores={['red', '#dedede']}
			/>
		);
	},
};

export const Secondary: Story = {
	name: 'DonutComposition',
	render: () => {
		return (
			<div style={{ position: 'relative' }}>
				<Texts
					modo="Light"
					style={{
						position: 'absolute',
						left: '0',
						top: '47.5%',
						zIndex: '1',
						transform: 'translateY(-50%)',
						fontSize: '16px',
					}}
				>
					75%
				</Texts>
				<Donut
					size={'50px'}
					grados={235}
					modo={'Light'}
					porcentajes={[75, 25]}
					colores={['red', '#dedede']}
				/>
			</div>
		);
	},
};
