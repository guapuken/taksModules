import React from 'react';

// elementos del storybook a utilizar
import { Meta, Story } from '@storybook/react';
// componentes principales
import Container, { Containerprops } from './container';
import AsideTemplates from '../asideTemplates/asideTemplates';
import CardTaskReview from '../cardTaskReview/cardTaskReview';
import CardMembersTeam from '../cardMembersTeam/cardMembersTeam';

// creación de plantilla donde se colocará el elemento
const Template: Story<Containerprops> = (args) => <Container {...args} />;

// componente en su estado inicial
export const InitialState = Template.bind({});

// estado del componente con propiedaades
export const WithProperties = Template.bind({});
const modo = 'Dark';
WithProperties.args = {
	children: () => (
		<div
			style={{
				marginTop: '10vh',
				display: 'flex',
				gap: '20px',
			}}
		>
			<CardTaskReview modo={modo} />
			<CardTaskReview modo={modo} />
			<CardTaskReview modo={modo} />
			<CardTaskReview modo={modo} />
		</div>
	),
	AsideContent: (
		<AsideTemplates
			modo={modo === 'Dark' ? 'Light' : 'Dark'}
			Content={() => (
				<div
					style={{
						marginTop: '10vh',
						display: 'flex',
						gap: '20px',
						flexDirection: 'column',
					}}
				>
					<CardTaskReview modo={modo} />
					<CardTaskReview modo={modo} />
					<CardTaskReview modo={modo} />
					<CardTaskReview modo={modo} />
				</div>
			)}
		/>
	),
	FooterContent: () => (
		<div>
			<CardMembersTeam />
		</div>
	),
	header: {
		moduleName: 'Tareas',
		legendBtnModule: 'Crear nueva',
		onClickBtnModule: () => alert('Crear nueva'),
	},
	// onClick: onClicks,
	// style: CSSProperties,
	// headerStyle: CSSProperties,
	// contentStyle: CSSProperties,
	// footerStyle: CSSProperties,
	modo: modo,
};

// valores default
export default {
	title: 'Átomos/contenedor general',
	component: Container,
	//definiciaón de argumentos
	argTypes: {},
};
