import React from 'react';

// elementos del storybook a utilizar
import { Meta, Story } from '@storybook/react';
// componentes principales
import Container from './container';
import { container } from './types/container';
// componentes auxiliares
import AsideTemplates from '../asideTemplates/asideTemplates';
import CardTaskReview from '../cardTaskReview/cardTaskReview';
import CardMembersTeam from '../cardMembersTeam/cardMembersTeam';
import DragAndDrop from '../dragAndDrop/dragAndDrop';
import CardTask from '../cardTask/cardTask';

// creación de plantilla donde se colocará el elemento
const Template: Story<container> = (args) => <Container {...args} />;

// componente en su estado inicial
export const InitialState = Template.bind({});

// estado del componente con propiedaades
export const WithProperties = Template.bind({});
const modo = 'Light';
WithProperties.args = {
	children: (
		<DragAndDrop
			tasks={[
				{
					id: '1',
					idNotification: '1',
					status: 'Pendientes',
					taskName: 'Hacer dummies',
					taskDescription: 'Hacer dummies de ayer',
					modo: 'Light',
				},
				{
					id: '2',
					idNotification: '2',
					status: 'En Proceso',
					taskName: 'Hacer dummies',
					taskDescription: 'Hacer dummies de antier',
					modo: 'Light',
				},
				{
					id: '3',
					idNotification: '3',
					status: 'Pendientes',
					taskName: 'Hacer dummies',
					taskDescription: 'Pegarle un sape a Adan',
					modo: 'Light',
				},
				{
					id: '4',
					idNotification: '4',
					status: 'Pendientes',
					taskName: 'Hacer dummies',
					taskDescription: 'Pergarle un sape a Olaf',
					modo: 'Light',
				},
				{
					id: '5',
					idNotification: '5',
					status: 'Finalizadas',
					taskName: 'Hacer dummies del día que se tenúian que acer o sea ayer',
					taskDescription: 'Pergarle un sape a Olaf porque se pasó de lanza',
					modo: 'Light',
				},
			]}
			nameBoards={{
				Pendientes: 'Pendientes',
				'En Proceso': 'En Proceso',
				Finalizadas: 'Finalizadas',
			}}
			Card={CardTask}
		/>
	),
	AsideContent: /* (
		<AsideTemplates
			modo={modo}
			visible
			children={
				<div
					style={{
						// marginTop: '10vh',
						display: 'flex',
						gap: '20px',
						flexDirection: 'column',
						overflowY: 'auto',
						height: '100%',
					}}
				>
					<CardTaskReview
						modo={'Dark'}
						taskName="Como van con las tareas que se les asignaron"
						taskDescription="Hacer el mayor número de tareas que puedas realizar sino ya valio madres"
					/>
					<CardTaskReview modo={'Dark'} />
					<CardTaskReview modo={'Dark'} />
					<CardTaskReview modo={'Dark'} />
					<CardTaskReview modo={'Dark'} />
					<CardTaskReview modo={'Dark'} />
					<CardTaskReview modo={'Dark'} />
					<CardTaskReview modo={'Dark'} />
					<CardTaskReview modo={'Dark'} />
					<CardTaskReview modo={'Dark'} />
					<CardTaskReview modo={'Dark'} />
					<CardTaskReview modo={'Dark'} />
				</div>
			}
		/>
	) */ null,
	FooterContent: (
		<div style={{ display: 'flex', gap: '20px' }}>
			<CardMembersTeam />
			<CardMembersTeam />
			<CardMembersTeam />
			<CardMembersTeam />
			<CardMembersTeam />
			<CardMembersTeam />
			<CardMembersTeam />
			<CardMembersTeam />
		</div>
	),
	header: {
		legend: 'Tareas personales',
		legendBtn: 'Crear nueva',
		onCl_btn: () => alert('Crear nueva'),
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
