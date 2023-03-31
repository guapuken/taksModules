import React from 'react';
import { Meta, Story } from '@storybook/react';
import AsideTemplates, { AsideTemplatesProps } from './asideTemplates';

import Cards from '../cards';
import { useWindowSize as scrSize } from '../../utils/widthSize';

const Template: Story<AsideTemplatesProps> = (args) => <AsideTemplates {...args} />;

export const Initial = Template.bind({});
Initial.args = {};

export const Basic = Template.bind({});
const modo = 'Dark';
Basic.args = {
	Content: () => (
		<Cards
			height={scrSize().width <= 390 ? scrSize().height / 4 / 10 - 5 : 15}
			width={scrSize().width <= 415 ? scrSize().width / 10 - 3 : scrSize().width / 10 / 4 - 3}
			rounded
			modo={modo}
		/>
	),
	modo: modo,
	// isWhite: true,
};

export default {
	title: 'Aside',
	component: AsideTemplates,
} as Meta;
