import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { AsideTemplates, CardMannageProjects } from '../../../components';
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
			modo={'Light'}
			chat
			chatValue={chat}
			projectName="1526-Uber_Eats-Noviembre"
			multiplesChats
			chats={[
				{
					id: '1',
					title: 'Chat con comercial',
				},
				{
					id: '2',
					title: 'Chat con operaciones',
				},
			]}
			onCh_dropdownChat={(e) => setChat(e)}
			messages={
				chat?.id === '1' ? messages.comercial : chat?.id === '2' ? messages.operativo : null
			}
			AsideContent={
				// null
				<AsideTemplates
					Card={CardMannageProjects}
					modo="Light"
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
			<h1>Contenedor</h1>
		</Container>
	);
});
