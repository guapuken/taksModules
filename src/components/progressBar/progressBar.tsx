import React, { useEffect, useState } from 'react';
import { LateIcon } from '../../utils/cardsUtils';
import { Modo, onClickType, statusTask } from '../../types';
// estilos
import './progressBar.scss';

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
			className={`ctn_PBC ${modo}`}
			stts-tsk={status}
			style={{ width: '100%', ...styleContent }}
			onClick={onClick}
		>
			<div className={`ctnBarra`} style={{ width: 'calc(100% - 55px)' }}>
				{status === 'outOfTime' || (status === 3 && <LateIcon />)}
				<div className="progressBar" style={{ width: `${valor}%` }}></div>
			</div>
			<p className={`txtPrcnt`}>{`${valor}%`}</p>
		</div>
	);
};

//exports
export default ProgressBar;
