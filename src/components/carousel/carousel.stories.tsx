import React from 'react';
// utilidades storybook
import { Meta, Story, storiesOf } from '@storybook/react';
import { object } from '../../storyUtils';
// componentes auxiliares
import { CardTask } from '../../components';

// componente principal
import Carousel from './carousel';
import { carousel } from './types';

// generación de plantilla donde se colocará el componente
storiesOf('carousel', module).add('setData', () => {
	return (
		<Carousel
			Card={(e) => {
				console.log(e);
				return <CardTask idTask="" taskName={e.property.price} />;
			}}
		/>
	);
});

// export default {
// 	// title: 'Atomo/Carousel',
// 	component: Carousel,
// 	argTypes: {
// 		Card: object(),
// 	},
// } as Meta;
