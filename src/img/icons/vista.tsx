import React from 'react';

export const Vista = ({ fill, vista }: any) => {
	return vista === 'Natural' ? (
		<svg x="0px" y="0px" width={50} height={50}>
			<g>
				<path
					fill={fill}
					d="M46.3,24H24.1V9.9h22.1L46.3,24L46.3,24z M25,23.1h20.3V10.8H25V23.1z"
				/>
			</g>
			<g>
				<path
					fill={fill}
					d="M36.6,39.2l-2.8-2.1V23.1h2.8V39.2z M34.6,36.6l1,0.7V24h-1V36.6z"
				/>
			</g>
			<g>
				<path
					fill={fill}
					d="M47.1,45.3H2.6l20.3-14.1h3.9L47.1,45.3z M5.5,44.4h38.6L26.5,32.1h-3.3L5.5,44.4z"
				/>
			</g>
			<g>
				<rect x="24.7" y="31.7" fill={fill} width="0.5" height="1" />
			</g>
			<g>
				<polygon fill={fill} points="25.5,35.4 24.2,35.4 24.4,33.2 25.3,33.2 	" />
			</g>
			<g>
				<polygon fill={fill} points="26.1,39.5 23.6,39.5 24.3,36.2 25.4,36.2 	" />
			</g>
			<g>
				<polygon fill={fill} points="26.5,44.9 23.1,44.9 24,40.4 25.6,40.4 	" />
			</g>
		</svg>
	) : (
		<svg x="0px" y="0px" width={50} height={50}>
			<g>
				<path
					fill={fill}
					d="M3.4,24L3.5,9.9h22.1V24H3.4L3.4,24z M24.7,10.8H4.4v12.3h20.3V10.8z"
				/>
			</g>
			<g>
				<path
					fill={fill}
					d="M13.1,23.1h2.8l0,14l-2.8,2.1L13.1,23.1z M15.1,24h-1l0,13.3l1-0.7L15.1,24z"
				/>
			</g>
			<g>
				<path
					fill={fill}
					d="M22.9,31.2h3.9l20.3,14.1H2.6L22.9,31.2z M26.5,32.1h-3.3L5.6,44.4h38.6L26.5,32.1z"
				/>
			</g>
			<g>
				<rect x="24.5" y="31.7" fill={fill} width="0.5" height="1" />
			</g>
			<g>
				<polygon fill={fill} points="24.4,33.2 25.3,33.2 25.5,35.4 24.2,35.4 	" />
			</g>
			<g>
				<polygon fill={fill} points="24.3,36.2 25.4,36.2 26.1,39.5 23.6,39.5 	" />
			</g>
			<g>
				<polygon fill={fill} points="24.1,40.4 25.7,40.4 26.6,44.9 23.2,44.9 	" />
			</g>
		</svg>
	);
};
