import React, { useEffect, useState } from 'react';
import './circularProgressBar.scss';
import { circularProgressBar } from './types';
import { LateIcon } from '../../utils/cardsUtils';
import * as Files from './files';
import { SimpleContainer } from '../Atoms';

const CircularProgressBar = ({
	strokeColor,
	strokeWidth = 5,
	percentTask = 0,
	trailStrokeColor = '#dedede',
	size = 50,
	statusTask,
}: circularProgressBar) => {
	const [progressBar, setProgressBar] = useState(percentTask);

	useEffect(() => {
		setProgressBar(percentTask);
	}, [percentTask]);

	const circleConfig = {
		x: '19',
		y: '19',
		radio: '15.91549430918954',
	};

	return (
		// <SimpleContainer className="ctn_CPB" style={{ width: size, height: size }}>
		<SimpleContainer className="circularProgressBar" style={{ width: size, height: size }}>
			<SimpleContainer style={{ height: size, width: size }}>
				<svg viewBox="0 0 38 38">
					<circle
						cx={circleConfig.x}
						cy={circleConfig.y}
						r={circleConfig.radio}
						fill="transparent"
						stroke={trailStrokeColor}
						strokeWidth={strokeWidth - 3}
						strokeDasharray={0}
					/>

					<Files.Circle
						progressBar={progressBar}
						cx={circleConfig.x}
						cy={circleConfig.y}
						r={circleConfig.radio}
						fill="transparent"
						stroke={
							strokeColor
								? strokeColor
								: statusTask === 'outOfTime' || statusTask === 3
								? '#FC3D38'
								: statusTask === 'onTime' || statusTask === 1
								? '#1CBF59'
								: statusTask === 'delayed' || statusTask === 2
								? '#FCB24F'
								: '#525252'
						}
						strokeWidth={strokeWidth}
						strokeDashoffset={0}
					/>
				</svg>
				{statusTask === 'outOfTime' || statusTask === 3 ? (
					<SimpleContainer className="circularProgressBar__icon">
						<LateIcon height={40} />
					</SimpleContainer>
				) : (
					<></>
				)}
			</SimpleContainer>
		</SimpleContainer>
	);
};

export default CircularProgressBar;
