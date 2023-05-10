import React from 'react';
import { getTimeElapsed } from '../functions/functions';
import { itemMsn } from '../types/types';

const ItemMsn = ({ message, date }: itemMsn) => {
	return (
		<div className={`msn`}>
			<div className="msn_text">
				<span>{message}</span>
				<span className="date">
					{date ? getTimeElapsed(date) : 'No se pudo recuperar la fecha'}
				</span>
			</div>
		</div>
	);
};

export default ItemMsn;
