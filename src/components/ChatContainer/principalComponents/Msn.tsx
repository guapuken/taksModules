import React, { Fragment, useState } from 'react';
// archivos multimedia
import { chatProps } from '../types/types';
import messagesExample from '../data/example.js';
import { arrayMsns } from '../functions/functions';
import { autoIncrementalId, initialLetters } from '../../../utils/functions/functions';

function getTimeElapsed(timeStamp) {
	const date = new Date(timeStamp);
	const now = new Date();
	console.log(now);
	const diff = Math.abs(now.getTime() - date.getTime());

	const seconds = Math.floor(diff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30);
	const years = Math.floor(months / 12);

	if (years > 0) {
		return `Hace ${years} año${years > 1 ? 's' : ''}`;
	} else if (months > 0) {
		return `Hace ${months} mes${months > 1 ? 'es' : ''}`;
	} else if (days > 0) {
		return `Hace ${days} día${days > 1 ? 's' : ''}`;
	} else if (hours > 0) {
		return `Hace ${hours} hora${hours > 1 ? 's' : ''}`;
	} else if (minutes > 0) {
		return `Hace ${minutes} minuto${minutes > 1 ? 's' : ''}`;
	} else {
		return `Hace ${seconds} segundo${seconds > 1 ? 's' : ''}`;
	}
}
console.log(getTimeElapsed('2023-05-09 GMT-0600 09:42:00'));
const Msn = ({ messages = messagesExample }: chatProps) => {
	return arrayMsns(messages).map((user: any) => (
		<div className="ctnMsn" ty-msn={user.type} key={autoIncrementalId(user.userName)}>
			{user.userName && (
				<Fragment>
					<div className="avatar_user">
						{user.avatar ? (
							<p
								className="image"
								style={{ backgroundImage: `url(${user.avatar})` }}
							></p>
						) : (
							<p className="noImage">{initialLetters(user.userName)}</p>
						)}
						<p className="userName">{user.userName}</p>
					</div>
				</Fragment>
			)}
			<div className="blockMsns">
				{user.messages.map((message: { message: string; date: string }) => (
					<div className={`msn`} key={autoIncrementalId(user.userName ?? '')}>
						<div className="msn_text">
							<span>{message.message}</span>
							<span className="date">{getTimeElapsed(message.date)}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	));
};

export default Msn;
