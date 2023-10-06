import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Cards from '../../CompoundComponents/Cards/Cards';

const meta: Meta<typeof Cards> = {
	title: 'Compound/Cards',
	component: Cards,
};

export default meta;

type Story = StoryObj<typeof Cards>;

export const CompoundCards: Story = {
	name: 'Cards',
	render: () => {
		const [openCard, setOpenCard] = useState(false);
		return (
			<Cards
				height={'calc(50vh - 20px)'}
				width={openCard ? 'calc(50vw - 20px)' : 'calc(20vw - 20px)'}
				style={{ display: 'flex' }}
			>
				<Cards.Image
					style={{
						height: '100%',
						width: openCard ? '20%' : 'calc(20vw - 20px)',
					}}
				>
					https://www.bilbo.mx/wp-content/uploads/2021/04/Pantalla-aguascalientes-espectacular-av-universidad.jpg
				</Cards.Image>
				{openCard && <Cards.Precio>$23,500.00</Cards.Precio>}
			</Cards>
		);
	},
};
