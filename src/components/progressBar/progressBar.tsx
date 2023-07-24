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
			<ValidationComponent
				validate={
					status === 'delayed' || status === 2 || status === 'outOfTime' || status === 3
				}
			>
				<SimpleContainer className="progressBar__icon" children={null} />
			</ValidationComponent>
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
			<Title modo={modo} className="progressBar__text">{`${valor}%`}</Title>
		</SimpleContainer>
	);
};

//exports
export default ProgressBar;
