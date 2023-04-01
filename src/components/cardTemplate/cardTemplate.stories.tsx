import React from 'react';

import { Meta, Story } from '@storybook/react';
import CardTemplate, { cardTemplate } from './cardTemplate';

const Template: Story<cardTemplate> = (args) => <CardTemplate {...args} />;

export const Initial = Template.bind({});
Initial.args = {
	onClickDelete: () => alert('Eliminar'),
	onClickPreview: () => alert('Previsualizar'),
	// modo: 'Dark',
	title: 'Espectaculares',
};
export const Basic = Template.bind({});
Basic.args = {
	onClickDelete: () => alert('Eliminar'),
	onClickPreview: () => alert('Previsualizar'),
	// modo: 'Dark',
	title: 'Espectaculares',
	tasks: 15,
};

export default {
	title: 'CardTemplate',
	component: CardTemplate,
} as Meta;
