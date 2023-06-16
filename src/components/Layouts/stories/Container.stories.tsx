import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { AsideTemplates, CardMannageProjects, CardTask, DragAndDrop } from '../../../components';
import Container from '../Container/Container';
import { SimpleContainer } from '../../Atoms';

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
			modo={'Dark'}
			// chat
			// chatValue={chat}
			// projectName="1526-Uber_Eats-Noviembre"
			// multiplesChats
			// chats={[
			// {
			// id: '1',
			// title: 'Chat con comercial',
			// },
			// {
			// id: '2',
			// title: 'Chat con operaciones',
			// },
			// ]}
			// onCh_dropdownChat={(e) => setChat(e)}
			// messages={
			// 	chat?.id === '1' ? messages.comercial : chat?.id === '2' ? messages.operativo : null
			// }
			AsideContent={
				// null
				<AsideTemplates
					Card={CardMannageProjects}
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
							projectName: 'Dummies',
						},
					]}
				/>
			}
			header={{
				legend: 'Tareas asignadas a mi',
				legendBtn: 'Nuevo tarea',
			}}
			FooterContent={
				<SimpleContainer>
					<h2>Hola</h2>
				</SimpleContainer>
			}
		>
			<DragAndDrop
				modo="Dark"
				tasks={[
					{
						followNotificationsValue: null,
						id: '1',
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
						status: 'In Progress:',
						statusTask: 'onTime',
						taskDescription: '',
						taskName: 'Dummies',
						valueResponsable: 'Adan',
					},
				]}
				Card={CardTask}
				nameBoards={{
					'To do: ': 'To do:',
					'In Progress:': 'In Progress:',
					'Done: ': 'Done:',
				}}
			/>
		</Container>
	);
});
