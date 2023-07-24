import React from 'react';
//importación de elementos del storybook a usar
import { Meta, Story } from '@storybook/react';
import { modo, number, text } from '../../../storyUtils';

//importación del componente principal
import CardMembersTeam from '../MemberTeam/cardMembersTeam';
import { cardMembersTeam } from '../MemberTeam/types/types';
import { SimpleContainer } from '../../Atoms';

const Template: Story<cardMembersTeam> = (args) => (
	<SimpleContainer style={{ display: 'flex', gap: '20px', overflowX: 'auto' }}>
		<CardMembersTeam
			{...args}
			name={'René Carrillo'}
			role={'Dearrollador'}
			incompletedTasks={15}
		/>
		<CardMembersTeam
			{...args}
			name={'Jesús de la Vega'}
			role={'Dearrollador'}
			incompletedTasks={8}
		/>
		<CardMembersTeam
			{...args}
			name={'Adán Moreno'}
			role={'Dearrollador Fullstack'}
			incompletedTasks={4}
		/>
		<CardMembersTeam
			{...args}
			name={'Olaf Ruvalcaba'}
			role={'Dearrollador Fullstack'}
			incompletedTasks={14}
		/>
		<CardMembersTeam
			{...args}
			name={'Denisse Hernández'}
			role={'Diseñador Ux / Ui'}
			incompletedTasks={7}
		/>
		<CardMembersTeam
			{...args}
			name={'Victor Galván'}
			role={'Diseñador Ux / Ui'}
			incompletedTasks={3}
		/>
		<CardMembersTeam
			{...args}
			name={'Ivan Flores'}
			role={'Project Mannager'}
			incompletedTasks={9}
		/>
	</SimpleContainer>
);

//estado del componente con propiedades
export const Rene = Template.bind({});
Rene.args = {
	name: 'René Carrillo',
	role: 'Dearrollador',
	incompletedTasks: 10,
	modo: 'Light',
	colorTeam: '#525252',
};

//exportación de valores default
export default {
	//nombre de la carpeta en la que se agruparpá/nombre del componente
	title: 'Cards/Members team/Ejemplos/Rene',
	component: CardMembersTeam,
	//definición de argumentos
	argTypes: {
		name: text(),
		role: text(),
		incompletedTasks: number(),
		modo: modo(),
	},
} as Meta;
