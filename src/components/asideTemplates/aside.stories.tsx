import React from 'react';
import { Meta, Story } from '@storybook/react';
import AsideTemplates, { AsideTemplatesProps } from './asideTemplates';

import Cards from '../cards';
import { useWindowSize as scrSize } from '../../utils/windowSize';

const Template: Story<AsideTemplatesProps> = (args) => <AsideTemplates {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {
	isWhite: true,
};

//estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	Content: () => (
		<Cards
			// height={scrSize().width <= 390 ? scrSize().height / 4 / 10 - 5 : 15}
			// width={scrSize().width <= 415 ? scrSize().width / 10 - 3 : scrSize().width / 10 / 4 - 3}
			rounded
			modo={'Dark'}
		/>
	),
};

//exportación de valores default
export default {
	//nombre de la carpeta en la que se agrupará / nombre del componente
	title: 'Átomos/aside',
	component: AsideTemplates,
	//definición de argumentos
	argTypes: {},
} as Meta;
