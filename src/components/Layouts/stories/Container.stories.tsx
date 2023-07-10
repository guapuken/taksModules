import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import {
	AsideTemplates,
	Button,
	CardMannageProjects,
	CardMembersTeam,
	CardTask,
	CardTaskReview,
	DragAndDrop,
	Dropdown,
} from '../../../components';
import Container from '../Container/Container';
import { SimpleContainer } from '../../Atoms';
import { aspectRatio } from '../../../utils/functions/functions';

storiesOf('Layouts/Contenedor/Ejemplos/Contenedor', module).add('Contenedor', () => {
	const [chat, setChat] = useState({
		id: undefined,
		title: undefined,
	});

	const messages = {
		comercial: [
			{
				date: '2023-06-06 GMT-600 18:21:00',
				message: 'Hola Frank',
				type: 'Sent',
				userName: 'Ivonne López',
			},
			{
				date: '2023-06-06 GMT-600 18:21:00',
				message: 'Ya está la campaña arriba?',
				type: 'Received',
				userName: 'Francisco Olivares',
			},
		],
		operativo: [
			{
				date: '2023-06-06 GMT-600 18:21:00',
				message: 'Hola',
				type: 'Sent',
				userName: 'Jesús García',
			},
			{
				date: '2023-06-06 GMT-600 18:21:00',
				message: 'Qué pasión',
				type: 'Received',
				userName: 'Olaf Ruvalcaba',
			},
			{
				date: '2023-06-06 GMT-600 18:21:00',
				message: 'Qué necesitas?',
				type: 'Received',
				userName: 'Olaf Ruvalcaba',
			},
			{
				date: '2023-06-06 GMT-600 18:21:00',
				message: 'Ahora qué?',
				type: 'Received',
				userName: 'Adan Ismael',
			},
		],
	};
	return (
		<Container
			onCh_commentChat={() => {}}
			onCl_addCommentChat={() => {}}
			modo="Dark"
			//
			// chat
			// chatValue={chat}
			// projectName="1526-Uber_Eats-Noviembre"
			// multiplesChats
			// chats={[
			// 	{
			// 		id: '1',
			// 		title: 'Chat con comercial',
			// 	},
			// 	{
			// 		id: '2',
			// 		title: 'Chat con operaciones',
			// 	},
			// ]}
			// onCh_dropdownChat={(e) => setChat(e)}
			// messages={
			// 	chat?.id === '1' ? messages.comercial : chat?.id === '2' ? messages.operativo : null
			// }
			//
			AsideContent={
				<AsideTemplates
					Card={CardTaskReview}
					modo="Dark"
					onCl_reorder={() => {}}
					visible
					optionsDropdown={[
						{ id: '1', title: 'Tareas pendientes' },
						{ id: '2', title: 'Tareas por revisar' },
					]}
					placeholderDropdown="Selecciona que traeas quieres ver"
					tasks={[
						{
							id: '1',
							taskName: 'Bloqueos - 2563-Uber_Eats-Noviembre',
							taskDescription: 'Dummies de las plazas principales',
							percentTask: 25,
							statusTask: 3,
						},
						{
							id: '2',
							taskName: 'Dummies - 2563-Electrolit-Enero',
							taskDescription: 'Realizar dummies de todas las plazas',
							percentTask: 75,
							statusTask: 3,
						},
						{
							id: '2',
							taskName: 'Pdc - 2563-Electrolit-Enero',
							taskDescription: 'Realizar dummies de todas las plazas',
							percentTask: 75,
							statusTask: 3,
						},
						{
							id: '2',
							taskName: 'Impresión - 2563-Electrolit-Enero',
							taskDescription: 'Realizar dummies de todas las plazas',
							percentTask: 75,
							statusTask: 3,
						},
					]}
				/>
			}
			header={{
				legend: 'Tareas asignadas a mi',
				legendBtn: 'Nuevo tarea',
			}}
			FooterContent={
				<SimpleContainer
					style={{
						display: 'flex',
						gap: ' 20px',
						flexDirection: !aspectRatio().mobile ? 'column' : 'column-reverse',
						padding: '0 15px',
					}}
				>
					<SimpleContainer
						style={{
							display: 'flex',
							gap: ' 20px',
							justifyContent: !aspectRatio().mobile ? '' : 'space-between',
						}}
					>
						<Dropdown
							modo="Dark"
							onCh={() => {}}
							values={{ id: '1', title: 'TI' }}
							options={[
								{ id: '1', title: 'TI' },
								{ id: '2', title: 'UX / UI' },
							]}
							placeHolder="Selecciona tus equipos"
							style={{ width: '30vw' }}
						/>
						<Button
							modo="Dark"
							onCl={() => {}}
							legend="Tarea rápida"
							primary
							size="small"
						/>
					</SimpleContainer>
					<SimpleContainer style={{ display: 'flex', gap: ' 20px' }}>
						<CardMembersTeam
							modo="Dark"
							colorTeam="red"
							name="Olaf Ruvalcaba"
							role="Fullstack"
						/>
						<CardMembersTeam
							modo="Dark"
							colorTeam="red"
							name="Adán Moreno"
							role="Fullstack"
						/>
						<CardMembersTeam
							modo="Dark"
							colorTeam="red"
							name="Rene Darío"
							role="Desarrollador"
						/>
					</SimpleContainer>
				</SimpleContainer>
			}
		>
			<DragAndDrop
				modo="Dark"
				tasks={[
					{
						id: '1',
						followNotificationsValue: false,
						idNotification: '1',
						modo: 'Dark',
						onCh_follow: () => {},
						onCl_asignTask: () => {},
						onCl_edit: () => {},
						onCl_follow: () => {},
						onCl_reasignDate: () => {},
						onCl_remimder: () => {},
						onCl_showDetails: () => {},
						onCl_status: () => {},
						percentTask: 10,
						status: 'done',
						statusTask: 'onTime',
						taskDescription: '',
						taskName: 'Dummies',
						valueResponsable: 'Adan',
					},
					{
						id: '2',
						followNotificationsValue: false,
						idNotification: '2',
						modo: 'Dark',
						onCh_follow: () => {},
						onCl_asignTask: () => {},
						onCl_edit: () => {},
						onCl_follow: () => {},
						onCl_reasignDate: () => {},
						onCl_remimder: () => {},
						onCl_showDetails: () => {},
						onCl_status: () => {},
						percentTask: 10,
						status: 'in_progress',
						statusTask: 'onTime',
						taskDescription: '',
						taskName: 'Dummies',
						valueResponsable: 'Adan',
					},
					{
						id: '3',
						followNotificationsValue: false,
						idNotification: '3',
						modo: 'Dark',
						onCh_follow: () => {},
						onCl_asignTask: () => {},
						onCl_edit: () => {},
						onCl_follow: () => {},
						onCl_reasignDate: () => {},
						onCl_remimder: () => {},
						onCl_showDetails: () => {},
						onCl_status: () => {},
						percentTask: 10,
						status: 'in_progress',
						statusTask: 'onTime',
						taskDescription: '',
						taskName: 'Dummies',
						valueResponsable: 'Adan',
					},
					{
						id: '4',
						followNotificationsValue: false,
						idNotification: '4',
						modo: 'Dark',
						onCh_follow: () => {},
						onCl_asignTask: () => {},
						onCl_edit: () => {},
						onCl_follow: () => {},
						onCl_reasignDate: () => {},
						onCl_remimder: () => {},
						onCl_showDetails: () => {},
						onCl_status: () => {},
						percentTask: 10,
						status: 'to_do',
						statusTask: 'onTime',
						taskDescription: '',
						taskName: 'Dummies',
						valueResponsable: 'Adan',
					},
					{
						id: '5',
						followNotificationsValue: false,
						idNotification: '4',
						modo: 'Dark',
						onCh_follow: () => {},
						onCl_asignTask: () => {},
						onCl_edit: () => {},
						onCl_follow: () => {},
						onCl_reasignDate: () => {},
						onCl_remimder: () => {},
						onCl_showDetails: () => {},
						onCl_status: () => {},
						percentTask: 10,
						status: 'to_do',
						statusTask: 'onTime',
						taskDescription: '',
						taskName: 'Dummies',
						valueResponsable: 'Adan',
					},
					{
						id: '6',
						followNotificationsValue: false,
						idNotification: '4',
						modo: 'Dark',
						onCh_follow: () => {},
						onCl_asignTask: () => {},
						onCl_edit: () => {},
						onCl_follow: () => {},
						onCl_reasignDate: () => {},
						onCl_remimder: () => {},
						onCl_showDetails: () => {},
						onCl_status: () => {},
						percentTask: 10,
						status: 'to_do',
						statusTask: 'onTime',
						taskDescription: '',
						taskName: 'Dummies',
						valueResponsable: 'Adan',
					},
					{
						id: '7',
						followNotificationsValue: false,
						idNotification: '4',
						modo: 'Dark',
						onCh_follow: () => {},
						onCl_asignTask: () => {},
						onCl_edit: () => {},
						onCl_follow: () => {},
						onCl_reasignDate: () => {},
						onCl_remimder: () => {},
						onCl_showDetails: () => {},
						onCl_status: () => {},
						percentTask: 10,
						status: 'to_do',
						statusTask: 'onTime',
						taskDescription: '',
						taskName: 'Dummies',
						valueResponsable: 'Adan',
					},
					{
						id: '8',
						followNotificationsValue: false,
						idNotification: '4',
						modo: 'Dark',
						onCh_follow: () => {},
						onCl_asignTask: () => {},
						onCl_edit: () => {},
						onCl_follow: () => {},
						onCl_reasignDate: () => {},
						onCl_remimder: () => {},
						onCl_showDetails: () => {},
						onCl_status: () => {},
						percentTask: 10,
						status: 'to_do',
						statusTask: 'onTime',
						taskDescription: '',
						taskName: 'Dummies',
						valueResponsable: 'Adan',
					},
					{
						id: '9',
						followNotificationsValue: false,
						idNotification: '4',
						modo: 'Dark',
						onCh_follow: () => {},
						onCl_asignTask: () => {},
						onCl_edit: () => {},
						onCl_follow: () => {},
						onCl_reasignDate: () => {},
						onCl_remimder: () => {},
						onCl_showDetails: () => {},
						onCl_status: () => {},
						percentTask: 10,
						status: 'to_do',
						statusTask: 'onTime',
						taskDescription: '',
						taskName: 'Dummies',
						valueResponsable: 'Adan',
					},
					{
						id: '10',
						followNotificationsValue: false,
						idNotification: '4',
						modo: 'Dark',
						onCh_follow: () => {},
						onCl_asignTask: () => {},
						onCl_edit: () => {},
						onCl_follow: () => {},
						onCl_reasignDate: () => {},
						onCl_remimder: () => {},
						onCl_showDetails: () => {},
						onCl_status: () => {},
						percentTask: 10,
						status: 'to_do',
						statusTask: 'onTime',
						taskDescription: '',
						taskName: 'Dummies',
						valueResponsable: 'Adan',
					},
					{
						id: '11',
						followNotificationsValue: false,
						idNotification: '4',
						modo: 'Dark',
						onCh_follow: () => {},
						onCl_asignTask: () => {},
						onCl_edit: () => {},
						onCl_follow: () => {},
						onCl_reasignDate: () => {},
						onCl_remimder: () => {},
						onCl_showDetails: () => {},
						onCl_status: () => {},
						percentTask: 10,
						status: 'to_do',
						statusTask: 'onTime',
						taskDescription: '',
						taskName: 'Dummies',
						valueResponsable: 'Adan',
					},
					{
						id: '12',
						followNotificationsValue: false,
						idNotification: '4',
						modo: 'Dark',
						onCh_follow: () => {},
						onCl_asignTask: () => {},
						onCl_edit: () => {},
						onCl_follow: () => {},
						onCl_reasignDate: () => {},
						onCl_remimder: () => {},
						onCl_showDetails: () => {},
						onCl_status: () => {},
						percentTask: 10,
						status: 'to_do',
						statusTask: 'onTime',
						taskDescription: '',
						taskName: 'Dummies',
						valueResponsable: 'Adan',
					},
				]}
				Card={CardTask}
				nameBoards={{
					to_do: [] as any,
					in_progress: [] as any,
					done: [] as any,
				}}
			/>
		</Container>
	);
});
