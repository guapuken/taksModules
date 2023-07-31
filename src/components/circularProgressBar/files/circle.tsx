import React, { useState } from 'react';
import '../circularProgressBar.scss';
import { Texts } from '../../Atoms';

const Circle = ({ cx, cy, r, fill, stroke, strokeWidth, strokeDashoffset, progressBar }: any) => {
	return (
		<svg className="circleProgressBar">
			<circle
				style={{ strokeDasharray: `${progressBar} ${100 - progressBar}` }}
				cx={cx}
				cy={cy}
				r={r}
				fill={fill}
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeDashoffset={strokeDashoffset}
			/>
		</svg>
	);
};

export default Circle;
