import React from 'react';
import { initialLetters } from '../../../utils/functions/functions';
// types
import { avatar } from './types/types';
// componentes auxiliares
import { Texts } from '../../Atoms';
// styles
import './styles/avatar.scss';

const Avatar = ({ avatar, userName, modo, className, style, size }: avatar) => {
	return (
		<div
			className={`avatar ${className}`}
			theme-config={modo}
			style={{
				height: size && size,
				width: size && size,
				borderRadius: size && size,
				...style,
			}}
			title={userName ?? 'Usuario no identificado'}
		>
			{avatar && (
				<img
					className="avatar__image"
					src={avatar}
					alt={userName ?? 'Usuario no identificado'}
				/>
			)}
			{!avatar && (
				<Texts modo={modo} className="avatar__iniciales">
					{initialLetters(userName ?? 'NU')}
				</Texts>
			)}
		</div>
	);
};
export default Avatar;
