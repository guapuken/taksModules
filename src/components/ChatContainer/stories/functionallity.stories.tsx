import React, { useEffect, useState } from 'react';

import { storiesOf } from '@storybook/react';
import Chat from '../Chat';

function DemoComponent() {
	const [chatCanal, setChatCanal] = useState({ id: '1', title: 'Chat Comercial' });
	const [comment, setComment] = useState('');

	const comercialMsns = [
		{
			userName: 'Juan Almada',
			avatar: undefined,
			message: 'Hola Ivonne ya casi salimos?',
			date: 'Hace 3 días',
			type: 'Received',
		},
		{
			userName: 'Ivonne López',
			avatar: undefined,
			message: 'Estamos atorados con la impresión te mantengo al tanto',
			date: 'Hace 3 días',
			type: 'Sent',
		},
		{
			userName: 'Juan Almada',
			avatar: undefined,
			message: 'cómo crees?, si vamos a salir a tiempo?',
			date: 'Hace 3 días',
			type: 'Received',
		},
		{
			userName: 'Juan Almada',
			avatar: undefined,
			message: 'o informo al cliente que va a haber un atraso',
			date: 'Hace 3 días',
			type: 'Received',
		},
	];
	const operacionalMsns = [
		{
			userName: 'Hilenni Ascencio',
			avatar: undefined,
			message: 'Hola Ivonne tenemos un problema con los dummies',
			date: 'Hace 3 días',
			type: 'Received',
		},
		{
			userName: 'Ivonne López',
			avatar: undefined,
			message: 'qué pasó?',
			date: 'Hace 3 días',
			type: 'Sent',
		},
		{
			userName: 'Hilenni Ascencio',
			avatar: undefined,
			message: 'el cliente no está autorizando',
			date: 'Hace 3 días',
			type: 'Received',
		},
		{
			userName: 'Hilenni Ascencio',
			avatar: undefined,
			message: 'por consecuente nos está atorando en la parte de impresión',
			date: 'Hace 3 días',
			type: 'Received',
		},
	];
	useEffect(() => {
		console.log(operacionalMsns);
	}, [operacionalMsns]);
	return (
		<Chat
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
		/>
	);
}

storiesOf('Pruebas funcionalidad/chat', module).add('setData', () => <DemoComponent />);
