import React from 'react';
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
	width = 35,
	onClick,
	styleContent,
	modo = 'Light',
}: ProgressBarProps) => {
	return (
		<div
			className={`ctn${
				status === 'outOfTime' || status === 3
					? 'OtOfTm'
					: status === 'onTime' || status === 1
					? 'OnTm'
					: status === 'delayed' || status === 2
					? 'Dld'
					: ''
			}${modo}_PBC`}
			style={styleContent}
			onClick={onClick}
		>
			<div className={`ctnBarra`} style={{ width: `${width * 10 - 55}px` }}>
				{status === 'outOfTime' || (status === 3 && <LateIcon />)}
				<div className="progressBar" style={{ width: `${valor}%` }}></div>
			</div>
			<p className={`txtPrcnt`}>{`${valor}%`}</p>
		</div>
	);
};

//exports
export default ProgressBar;
