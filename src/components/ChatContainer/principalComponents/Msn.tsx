import React, { Fragment, useState } from 'react';
// archivos multimedia
import { chatProps, msns } from '../types/types';
import messagesExample from '../data/example.js';
import { arrayMsns } from '../functions/functions';
import { initialLetters } from '../../../utils/functions/functions';

const Msn = ({ messages = messagesExample }: chatProps) => {
	return arrayMsns(messages).map((user: any) => {
		return (
			<div className="ctnMsn" ty-msn={user.type}>
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
						<div className="msn">
							<div className="msn_text">
								<span>{message.message}</span>
								<span className="date">{message.date}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	});
};

export default Msn;
