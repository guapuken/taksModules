import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import ReproductorVideo from '../../CompoundComponents/ReproductorVideos/ReproductorVideo';

const meta: Meta<typeof ReproductorVideo> = {
	title: 'Reproductor de videos',
	component: ReproductorVideo,
};
export default meta;

type Story = StoryObj<typeof ReproductorVideo>;

export const ReproductorVideoStory: Story = {
	name: 'Reproductor de videos',
	render: () => (
		<>
			<div style={{ width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex' }}>
				<div style={{ width: 'calc(100% / 3)', height: '100vh', overflow: 'hidden' }}>
					<ReproductorVideo
						url="https://youtu.be/UKzyYT-njOU"
						height={'100%'}
						width={'100%'}
					/>
				</div>
			</div>
		</>
	),
};
