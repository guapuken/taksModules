import { Meta, Story } from '@storybook/react';
import React from 'react';
import { returnSize } from '../../utils/cardsUtils';
import { windowSize } from '../../utils/widthSize';
import Cards from '../cards';
import CardTask from '../cardTask';
import AsideTemplates, { AsideTemplatesProps } from './asideTemplates';

const Template: Story<AsideTemplatesProps> = (args) => <AsideTemplates {...args} />;
export const Initial = Template.bind({});
Initial.args = {
	Content: () => <h1> hola </h1>,
	isWhite: true,
};
export const Basic = Template.bind({});
const modo = 'Dark';
Basic.args = {
	Content: () => (
		<Cards
			height={windowSize().width <= 390 ? windowSize().height / 4 / 10 - 5 : 15}
			width={windowSize().width <= 390 ? windowSize().width / 10 - 2 : returnSize()}
			rounded
			modo={modo}
		/>
	),
	modo: modo,
	// isWhite: true,
};
export default {
	title: 'AsideTemplates',
	component: AsideTemplates,
	argTypes: {},
} as Meta;
