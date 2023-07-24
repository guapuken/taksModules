import React from 'react';

// data de ejemplo al iniciar el componente
import messagesExample from './data/example.js';

// funciones
import { arrayMsns } from './functions/functions';
import { autoIncrementalId } from '../../utils/functions/functions';

// componentes principales
import ItemMsn from './principalComponents/ItemMsn';
import { Avatar, SimpleContainer, Title } from '../Atoms';

// types
import { message, messageWorked, msnsProps } from './types/types';

// styles
import './styles/msns.scss';

const Msns = ({ messages = messagesExample, height = 'auto', modo = 'Light' }: msnsProps) => {
	return (
		<div className={`mensajes`} theme-config={modo} style={{ height: `${height}` }}>
			{messages.length === 0 ? (
				<></>
			) : (
				arrayMsns(messages).map((user: messageWorked) => (
					<div
						className="mensajes__contenedor"
						ty-msn={user.type}
						key={autoIncrementalId(user.userName)}
					>
						{user.userName && (
							// <SimpleContainer className="avatar_user">
							<div className="mensajes__contenedor-user">
								<Avatar
									className={
										user.avatar
											? 'mensajes__contenedor-user-image'
											: 'mensajes__contenedor-user-noImage'
									}
									modo={modo}
									avatar={user.avatar}
									userName={user.userName}
								/>
								<Title modo={modo} className="mensajes__contenedor-user-name">
									{user.userName}
								</Title>
							</div>
						)}
						{/* <div className="blockMsns"> */}
						<div className="mensajes__contenedor-bloquesMsn">
							{user.messages.map((message: message) => (
								<ItemMsn
									modo={modo}
									key={autoIncrementalId(user.userName ?? '')}
									date={message.date}
									message={message.message}
								/>
							))}
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default Msns;
