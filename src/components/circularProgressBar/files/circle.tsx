import React from 'react';

const Circle = ({ cx, cy, r, fill, stroke, strokeWidth, strokeDashoffset, progressBar }: any) => {
	return (
		<svg>
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
