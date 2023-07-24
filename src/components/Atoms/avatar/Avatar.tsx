import React from 'react';
import { initialLetters } from '../../../utils/functions/functions';
// types
import { avatar } from './types/types';
// componentes auxiliares
import { Texts, SimpleContainer, ValidationComponent } from '../../Atoms';
// styles
import './styles/avatar.scss';

const Avatar = ({ avatar, userName, modo, className, style }: avatar) => {
	return (
		<SimpleContainer
			className={`avatar ${className}`}
			labels={{ 'theme-config': modo }}
			style={{ backgroundImage: `url(${avatar})`, ...style }}
		>
			<ValidationComponent validate={!avatar}>
				<Texts modo={modo} className="avatar__iniciales">
					{initialLetters(userName ?? 'NU')}
				</Texts>
			</ValidationComponent>
			<ValidationComponent validate={avatar}>{null}</ValidationComponent>
		</SimpleContainer>
	);
};
export default Avatar;
