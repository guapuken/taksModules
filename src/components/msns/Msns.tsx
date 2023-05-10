import React from 'react';
// types
import { message, messageWorked, msnsProps } from './types/types';
// data de ejemplo al iniciar el componente
import messagesExample from './data/example.js';
// funciones
import { arrayMsns } from './functions/functions';
import { autoIncrementalId } from '../../utils/functions/functions';
// componentes principales
import { Avatar } from './principalComponents';
// styles
import './styles/msns.scss';
import ItemMsn from './principalComponents/ItemMsn';

const Msns = ({ messages = messagesExample, height = 'auto', modo = 'Light' }: msnsProps) => {
	return (
		<div className={`ctn${modo}_MsnsC`} style={{ height: `${height}` }}>
			{messages.length === 0 ? (
				<></>
			) : (
				arrayMsns(messages).map((user: messageWorked) => (
					<div
						className="ctnMsn"
						ty-msn={user.type}
						key={autoIncrementalId(user.userName)}
					>
						{user.userName && <Avatar avatar={user.avatar} userName={user.userName} />}
						<div className="blockMsns">
							{user.messages.map((message: message) => (
								<ItemMsn
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
