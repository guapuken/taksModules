import React, { useEffect, useState } from 'react';
import { LateIcon } from '../../utils/cardsUtils';
import { Modo, onClickType, statusTask } from '../../types';
// estilos
import './progressBar.scss';
import { SimpleContainer, Title, ValidationComponent } from '../Atoms';

//interface
export interface ProgressBarProps {
	status: statusTask;
	onClick: onClickType;
	styleContent?: React.CSSProperties;
	valor?: number;
	width?: number;
	modo: Modo;
}

const ProgressBar = ({
	valor = 0,
	status = 'onTime',
	onClick,
	styleContent,
	modo = 'Light',
}: ProgressBarProps) => {
	return (
		<SimpleContainer
			labels={{
				className: `progressBar`,
				'stts-tsk': status,
				style: { width: '100%', ...styleContent },
				onClick: onClick,
				'theme-config': modo,
			}}
		>
			<SimpleContainer
				labels={{
					className: 'progressBar__barra',
					style: { width: 'calc(100% - 50px)' },
				}}
			>
				<SimpleContainer
					className="progressBar__barra-avance"
					style={{ width: `${valor}%` }}
					children={null}
				/>
			</SimpleContainer>
			<Title modo={modo}>{`${valor}%`}</Title>
		</SimpleContainer>
	);
};

//exports
export default ProgressBar;
