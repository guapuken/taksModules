import React, { useEffect, useState } from 'react';
import { LateIcon } from '../../utils/cardsUtils';
import { Modo, onClickType, statusTask } from '../../types';
// estilos
import './progressBar.scss';
import { Texts, Title, ValidationComponent } from '../Atoms';

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
		<div
			className={`progressBar`}
			stts-tsk={status}
			style={{ width: '100%', ...styleContent }}
			onClick={onClick}
			theme-config={modo}
		>
			{(status === 'delayed' || status === 2 || status === 'outOfTime' || status === 3) && (
				<div className="progressBar__icon" children={null} />
			)}
			<div className="progressBar__barra" style={{ width: 'calc(100% - 50px)' }}>
				<div
					className="progressBar__barra-avance"
					style={{ width: `${valor}%` }}
					children={null}
				/>
			</div>
			<Title modo={modo} className="progressBar__text">{`${valor}%`}</Title>
		</div>
	);
};

//exports
export default ProgressBar;
