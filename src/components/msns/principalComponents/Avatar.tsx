import React from 'react';
import { initialLetters } from '../../../utils/functions/functions';
import { avatar } from '../types/types';

const Avatar = ({ avatar, userName }: avatar) => {
	return (
		<div className="avatar_user">
			{avatar ? (
				<span className="image" style={{ backgroundImage: `url(${avatar})` }}></span>
			) : (
				<p className="noImage">{initialLetters(userName ?? 'NU')}</p>
			)}
			<p className="userName">{userName}</p>
		</div>
	);
};

export default Avatar;
