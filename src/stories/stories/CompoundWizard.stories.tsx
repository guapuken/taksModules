import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Wizard from '../../CompoundComponents/Wizard/Wizard';

const meta: Meta<typeof Wizard> = {
	title: 'Compound/Wizard',
	component: Wizard,
};

export default meta;

type Story = StoryObj<typeof Wizard>;

export const CompoundWizard: Story = {
	name: 'Wizard',
	render: () => {
		const [wizardOpen, setWizardOpen] = useState(false);
		const [dashboardOpen, setDashboardOpen] = useState(false);
		return (
			<div style={{ display: 'flex', position: 'fixed', top: '0', right: '0' }}>
				{dashboardOpen && (
					<div style={{ height: '100vh', width: '10vw', background: 'red' }}></div>
				)}
				<Wizard
					height="100vh"
					width={wizardOpen ? '20vw' : '70px'}
					style={{ display: 'flex', transition: 'all .5s ease-in-out' }}
				>
					<Wizard.Aside>
						<Wizard.Aside.Icon
							width={30}
							onClick={() => setDashboardOpen(!dashboardOpen)}
						>
							https://cdn-icons-png.flaticon.com/512/69/69856.png
						</Wizard.Aside.Icon>
						<Wizard.Aside.Icon width={30}>
							https://cdn-icons-png.flaticon.com/512/1384/1384031.png
						</Wizard.Aside.Icon>
						<Wizard.Aside.Icon width={30}>
							https://cdn-icons-png.flaticon.com/512/1384/1384031.png
						</Wizard.Aside.Icon>
						<Wizard.Aside.Icon
							width={30}
							style={{
								marginTop: '20px',
								rotate: wizardOpen ? '180deg' : '',
								transition: 'all .5s ease-in-out',
							}}
							onClick={() => setWizardOpen(!wizardOpen)}
						>
							https://cdn-icons-png.flaticon.com/512/3388/3388894.png
						</Wizard.Aside.Icon>
						<Wizard.Aside.Icon width={30}>
							https://cdn-icons-png.flaticon.com/512/1384/1384031.png
						</Wizard.Aside.Icon>
						<Wizard.Aside.Icon width={30} style={{ marginTop: '20px' }}>
							https://cdn-icons-png.flaticon.com/512/1384/1384031.png
						</Wizard.Aside.Icon>
						<Wizard.Aside.Icon width={30}>
							https://cdn-icons-png.flaticon.com/512/1384/1384031.png
						</Wizard.Aside.Icon>
						<Wizard.Aside.Icon width={30}>
							https://cdn-icons-png.flaticon.com/512/1384/1384031.png
						</Wizard.Aside.Icon>
					</Wizard.Aside>
					{wizardOpen && (
						<Wizard.Content
							width="calc(20vw - 70px)"
							height="100%"
							style={{ padding: '15px' }}
						>
							hola
						</Wizard.Content>
					)}
				</Wizard>
			</div>
		);
	},
};
