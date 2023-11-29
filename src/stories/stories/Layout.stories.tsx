import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Container from '../../CompoundComponents/Layouts/Container/Container';
import { ButtonCompound } from '../../CompoundComponents';
import { CardMembersTeam, CardTask, DragAndDrop } from '../../components';

const meta: Meta = {
	title: 'Compound/Container',
	component: Container,
};
export default meta;

type Story = StoryObj<typeof Container>;

export const Story = {
	name: 'Container',
	render: () => {
		return (
			<Container height="100vh" width="100vw" style={{ boxShadow: 'inset 0 0 0 2px red' }}>
				<Container.Aside
					style={{
						boxShadow: 'inset 0 0 0 2px red',
					}}
				>
					Tareas Asignadas
				</Container.Aside>
				<Container.Contenido style={{ height: '100%', width: '75%', paddingLeft: '15px' }}>
					<Container.Contenido.Header>
						<Container.Contenido.Header.Title>
							Registro de tareas
						</Container.Contenido.Header.Title>
						<ButtonCompound color="blue">
							<ButtonCompound.Legend>Crear nueva</ButtonCompound.Legend>
						</ButtonCompound>
					</Container.Contenido.Header>
					<div
						style={{
							maxHeight: 'calc(100% - 130px)',
							minHeight: 'calc(100% - 130px)',
							overflowY: 'auto',
							overflowX: 'hidden',
						}}
					>
						<DragAndDrop
							Card={CardTask}
							modo="Light"
							nameBoards={{
								'Por hacer': 'Por hacer',
								'En progreso': 'En progreso',
								Finalizadas: 'Finalizadas',
							}}
							tasks={[
								{
									id: '1',
									followNotificationsValue: false,
									idNotification: '1Not',
									modo: 'Light',
									onCh_follow: () => {},
									onCl_asignTask: () => {},
									onCl_edit: null as any,
									onCl_follow: null as any,
									onCl_reasignDate: null as any,
									onCl_remimder: null as any,
									onCl_showDetails: null as any,
									onCl_status: null as any,
									percentTask: 75,
									status: 'Por hacer',
									statusTask: 1,
									taskDescription: 'Porque se los ganaron',
									taskName: 'Pegar sapes',
									valueResponsable: '',
								},
								{
									id: '2',
									followNotificationsValue: false,
									idNotification: '2Not',
									modo: 'Light',
									onCh_follow: () => {},
									onCl_asignTask: () => {},
									onCl_edit: null as any,
									onCl_follow: null as any,
									onCl_reasignDate: null as any,
									onCl_remimder: null as any,
									onCl_showDetails: null as any,
									onCl_status: null as any,
									percentTask: 75,
									status: 'Por hacer',
									statusTask: 1,
									taskDescription: 'Porque se los ganaron',
									taskName: 'Pegar sapes 2',
									valueResponsable: '',
								},
								{
									id: '4',
									followNotificationsValue: false,
									idNotification: '4Not',
									modo: 'Light',
									onCh_follow: () => {},
									onCl_asignTask: () => {},
									onCl_edit: null as any,
									onCl_follow: null as any,
									onCl_reasignDate: null as any,
									onCl_remimder: null as any,
									onCl_showDetails: null as any,
									onCl_status: null as any,
									percentTask: 75,
									status: 'Por hacer',
									statusTask: 1,
									taskDescription: 'Porque se los ganaron',
									taskName: 'Pegar sapes 4',
									valueResponsable: '',
								},
								{
									id: '5',
									followNotificationsValue: false,
									idNotification: '5Not',
									modo: 'Light',
									onCh_follow: () => {},
									onCl_asignTask: () => {},
									onCl_edit: null as any,
									onCl_follow: null as any,
									onCl_reasignDate: null as any,
									onCl_remimder: null as any,
									onCl_showDetails: null as any,
									onCl_status: null as any,
									percentTask: 75,
									status: 'Por hacer',
									statusTask: 1,
									taskDescription: 'Porque se los ganaron',
									taskName: 'Pegar sapes 5',
									valueResponsable: '',
								},
								{
									id: '3',
									followNotificationsValue: false,
									idNotification: '3Not',
									modo: 'Light',
									onCh_follow: () => {},
									onCl_asignTask: () => {},
									onCl_edit: null as any,
									onCl_follow: null as any,
									onCl_reasignDate: null as any,
									onCl_remimder: null as any,
									onCl_showDetails: null as any,
									onCl_status: null as any,
									percentTask: 75,
									status: 'Finalizadas',
									statusTask: 1,
									taskDescription: 'Porque se los ganaron',
									taskName: 'Pegar sapes 3',
									valueResponsable: '',
								},
							]}
						/>
					</div>
					<Container.Footer>
						<CardMembersTeam
							colorTeam="red"
							modo="Light"
							name="Denisse Alejandra"
							role="Ux Designer"
						/>
					</Container.Footer>
				</Container.Contenido>
			</Container>
		);
	},
};
