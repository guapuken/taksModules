import React from 'react';
import { initialLetters } from '../../../utils/functions/functions';
// types
import { avatar } from './types/types';
// componentes auxiliares
import { Texts, SimpleContainer } from '../../Atoms';
// styles
import './styles/avatar.scss';

const Avatar = ({ avatar, userName, modo, className, style }: avatar) => {
	return avatar ? (
		<SimpleContainer
			className={`ctn_Avtr ${modo} ${className}`}
			style={{ backgroundImage: `url(${avatar})`, ...style }}
			children={null}
		/>
	) : (
		<Texts modo={modo} className={`ctn_Avtr ${modo} ${className}`} style={style}>
			{initialLetters(userName ?? 'NU')}
		</Texts>
	);
};

export default Avatar;
