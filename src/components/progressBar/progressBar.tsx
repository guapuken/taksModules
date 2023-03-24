import React from 'react';
import '../../styles.scss';

//interface
export interface ProgressBarProps {
	valor?: number;
	status?: 'onTime' | 'delayed' | 'outOfTime';
	width?: number;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	styleContent?: {};
}

//components
const LateIcon = () => {
	let outOfTimeICon = {
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
	};
	return (
		<div style={{ position: 'absolute', ...outOfTimeICon }}>
			<div>
				<h2
					style={{
						position: 'absolute',
						top: '30%',
						left: '45%',
						fontSize: '20px',
						color: '#fff',
					}}
				>
					!
				</h2>
				<svg width="54" height="54" viewBox="-50 -50 300 300">
					<polygon
						style={{ fill: '#FC3D38', stroke: '#fff', strokeWidth: '15' }}
						stroke-linejoin="round"
						points="100,0 0,200 200,200"
					/>
				</svg>
			</div>
		</div>
	);
};

const ProgressBar = (props: ProgressBarProps) => {
	const { valor = 0, status = 'onTime', width = 35, onClick, styleContent } = props;

	//Styles
	let containerStyles = {
		display: 'flex',
		width: `${width}rem`,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '3rem',
	};
	let progressContainerStyles = {
		boxShadow: `inset 0 0 0 .3rem ${
			status === 'outOfTime'
				? '#FC3D38'
				: status === 'onTime'
				? '#1CBF59'
				: status === 'delayed'
				? '#FCB24F'
				: '#282828'
		}`,
		height: '3rem',
		width: `${width - 8}rem`,
		borderRadius: '50rem',
	};
	let percentStyles = {
		fontSize: '3rem',
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
		borderRadius: '50rem',
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
