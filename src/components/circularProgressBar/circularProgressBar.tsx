import React, { useEffect, useState } from 'react';
import './circularProgressBar.scss';
import { circularProgressBar } from './types';
import { LateIcon } from '../../utils/cardsUtils';
import * as Files from './files';

const CircularProgressBar = ({
	strokeColor = '#282828',
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
		<div className="ctn_CPB" style={{ width: size, height: size }}>
			<div style={{ height: size, width: size }}>
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
						stroke={strokeColor}
						strokeWidth={strokeWidth}
						strokeDashoffset={0}
					/>
				</svg>
				{statusTask === 'outOfTime' ||
					(statusTask === 3 && (
						<div className="iconOtOfTm">
							<LateIcon />
						</div>
					))}
			</div>
		</div>
	);
};

export default CircularProgressBar;
