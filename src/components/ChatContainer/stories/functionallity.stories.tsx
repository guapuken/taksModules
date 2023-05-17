import React, { useEffect, useState } from 'react';

import { storiesOf } from '@storybook/react';
import Chat from '../Chat';

import kaori from '../../../img/kaori.jpg';
import frank from '../../../img/frank.jpg';
import giselle from '../../../img/giselle.png';
import dani from '../../../img/DanielCor.png';

function DemoComponent() {
	const [chatCanal, setChatCanal] = useState({ id: '1', title: 'Chat comercial' });
	const [comment, setComment] = useState('');

	const comercialMsns = [
		// estructura de mensajes de sitema
		{
			message: 'Frank se unió el grupo',
			date: '2023-05-09 GMT-0600 07:00:00', //2023-22-02 00:00:00
			type: 'System',
		},
		{
			message: 'Kaori se unió el grupo',
			date: '2023-05-09 GMT-0600 07:00:00', //2023-22-02 00:00:00
			type: 'System',
		},
		{
			userName: 'Francisco Olivera',
			avatar: frank,
			message: 'Hola Ivonne ya casi salimos?',
			date: '2023-05-09 GMT-0600 07:00:00', //2023-22-02 00:00:00
			type: 'Received',
		},
		{
			userName: 'Kaori Soto',
			avatar: kaori,
			message: 'Estamos atorados con la impresión te mantengo al tanto',
			date: '2023-05-09 GMT-0600 09:00:00',
			type: 'Sent',
		},
		{
			message: 'Error en la conexión',
			date: '2023-05-09 GMT-0600 09:05:00', //2023-22-02 00:00:00
			type: 'System',
		},
		{
			userName: 'Francisco Olivera',
			avatar: frank,
			message: 'cómo crees?, si vamos a salir a tiempo?',
			date: '2023-05-09 GMT-0600 09:15:00',
			type: 'Received',
		},
		{
			userName: 'Francisco Olivera',
			avatar: frank,
			message: 'o informo al cliente que va a haber un atraso',
			date: '2023-05-09 GMT-0600 09:49:00',
			type: 'Received',
		},
	];
	const operacionalMsns = [
		// estructura de mensajes de sitema
		{
			message: 'Hilenni se unió el grupo',
			date: 'Hace 3 días', //2023-22-02 00:00:00
			type: 'System',
		},
		{
			message: 'Kaori se unió el grupo',
			date: 'Hace 3 días', //2023-22-02 00:00:00
			type: 'System',
		},
		{
			message: 'Daniel se unió el grupo',
			date: 'Hace 3 días', //2023-22-02 00:00:00
			type: 'System',
		},
		{
			userName: 'Hilenni Ascencio',
			avatar: giselle,
			message: 'Hola Ivonne tenemos un problema con los dummies',
			date: 'Hace 3 días',
			type: 'Received',
		},
		{
			userName: 'Kaori Soto',
			avatar: kaori,
			message: 'qué pasó?',
			date: 'Hace 3 días',
			type: 'Sent',
		},
		{
			userName: 'Hilenni Ascencio',
			avatar: giselle,
			message: 'el cliente no está autorizando',
			date: 'Hace 3 días',
			type: 'Received',
		},
		{
			userName: 'Hilenni Ascencio',
			avatar: giselle,
			message: 'por consecuente nos está atorando en la parte de impresión',
			date: 'Hace 3 días',
			type: 'Received',
		},
		{
			userName: 'Hilenni Ascencio',
			avatar: giselle,
			message: 'por consecuente nos está atorando en la parte de impresión',
			date: 'Hace 3 días',
			type: 'Received',
		},
		{
			userName: 'Daniel Corona',
			avatar: dani,
			message: 'por consecuente nos está atorando en la parte de impresión',
			date: 'Hace 3 días',
			type: 'Received',
		},
	];
	return (
		<Chat
			modo="Light"
			messages={chatCanal.title === 'Chat comercial' ? comercialMsns : operacionalMsns}
			multiplesChats
			onCh_dropdown={(e) => setChatCanal(e)}
			onCh_comment={(e) => setComment(e.target.value)}
			onCl_addComment={(e) =>
				operacionalMsns.push({
					userName: 'Ivonne López',
					avatar: undefined,
					date: 'hace 5 minuto',
					message: comment,
					type: 'Sent',
				})
			}
			chatValue={chatCanal}
			chats={[
				{
					id: '1',
					title: 'Chat comercial',
				},
				{
					id: '2',
					title: 'Chat operacional',
				},
			]}
			projectName="AT&T NEW MODELS-2635-ESP-NOV"
		/>
	);
}

storiesOf('Pruebas funcionalidad/chat', module).add('setData', () => <DemoComponent />);
