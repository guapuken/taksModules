import React from 'react';

// elementos del storybook a utilizar
import { Meta, Story } from '@storybook/react';
// componentes principales
import Container from './container';
import { container } from './types';
// componentes auxiliares
import AsideTemplates from '../asideTemplates/asideTemplates';
import CardTaskReview from '../cardTaskReview/cardTaskReview';
import CardMembersTeam from '../cardMembersTeam/cardMembersTeam';

// creación de plantilla donde se colocará el elemento
const Template: Story<container> = (args) => <Container {...args} />;

// componente en su estado inicial
export const InitialState = Template.bind({});

// estado del componente con propiedaades
export const WithProperties = Template.bind({});
const modo = 'Dark';
WithProperties.args = {
	children: (
		<div
			style={{
				marginTop: '10vh',
				display: 'flex',
				flexWrap: 'wrap',
				gap: '20px',
			}}
		>
			<CardTaskReview modo={modo} />
			<CardTaskReview modo={modo} />
			<CardTaskReview modo={modo} />
			<CardTaskReview modo={modo} />
			<CardTaskReview modo={modo} />
			<CardTaskReview modo={modo} />
			<CardTaskReview
				modo={modo}
				taskName="Como van con las tareas que se les asignaron"
				taskDescription="Hacer el mayor número de tareas que puedas realizar sino ya valio madres"
			/>
		</div>
	),
	AsideContent: (
		<AsideTemplates
			modo={modo === 'Dark' ? 'Light' : 'Dark'}
			children={
				<div
					style={{
						marginTop: '10vh',
						display: 'flex',
						gap: '20px',
						flexDirection: 'column',
						overflowY: 'auto',
						height: '100%',
					}}
				>
					<CardTaskReview
						modo={modo}
						taskName="Como van con las tareas que se les asignaron"
						taskDescription="Hacer el mayor número de tareas que puedas realizar sino ya valio madres"
					/>
					<CardTaskReview modo={modo} />
					<CardTaskReview modo={modo} />
					<CardTaskReview modo={modo} />
					<CardTaskReview modo={modo} />
					<CardTaskReview modo={modo} />
					<CardTaskReview modo={modo} />
					<CardTaskReview modo={modo} />
					<CardTaskReview modo={modo} />
					<CardTaskReview modo={modo} />
					<CardTaskReview modo={modo} />
					<CardTaskReview modo={modo} />
				</div>
			}
		/>
	),
	FooterContent: (
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
} as Meta;
