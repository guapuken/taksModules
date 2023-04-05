import React from 'react';
import '../../global.scss';
import { LateIcon } from '../../utils/cardsUtils';

//interface
export interface ProgressBarProps {
	valor?: number;
	status?: 'onTime' | 'delayed' | 'outOfTime';
	width?: number;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	styleContent?: {};
}

const ProgressBar = (props: ProgressBarProps) => {
	const { valor = 0, status = 'onTime', width = 35, onClick, styleContent } = props;

	//Styles
	let containerStyles = {
		display: 'flex',
		width: `${width * 10}px`,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '30px',
	};
	let progressContainerStyles = {
		boxShadow: `inset 0 0 0 3px ${
			status === 'outOfTime'
				? '#FC3D38'
				: status === 'onTime'
				? '#1CBF59'
				: status === 'delayed'
				? '#FCB24F'
				: '#282828'
		}`,
		height: '20px',
		width: `${width * 10 - 55}px`,
		borderRadius: '100px',
	};
	let percentStyles = {
		fontSize: '20px',
		color: status === 'outOfTime' ? '#FC3D38' : '#282828',
		fontFamily: "'Open Sans', sans-serif",
		fontWeight: 'lighter',
		justifyContent: 'right',
	};
	let progressStyles = {
		height: '100%',
		background:
			status === 'outOfTime'
				? '#FC3D38'
				: status === 'onTime'
				? '#1CBF59'
				: status === 'delayed'
				? '#FCB24F'
				: '#282828',
		borderRadius: '100px',
		width: `${valor}%`,
	};

	return (
		<div style={{ ...containerStyles, ...styleContent }} onClick={onClick}>
			<div style={{ position: 'relative', ...progressContainerStyles }}>
				{status === 'outOfTime' && <LateIcon />}
				<div style={{ ...progressStyles }}></div>
			</div>
			<p style={{ ...percentStyles }}>{`${valor}%`}</p>
		</div>
	);
};

//exports
export default ProgressBar;
