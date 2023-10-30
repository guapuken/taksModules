import React from 'react';

const CloseIcons = (props) => (
	<>
		<line stroke={props?.fill ?? '#000000'} x1="46.6" y1="46.6" x2="3.4" y2="3.4" />
		<line stroke={props?.fill ?? '#000000'} x1="46.6" y1="3.4" x2="3.4" y2="46.6" />
	</>
);

const GetIcons = ({ children, ...props }) => (
	<div style={{ width: props.size ?? 50, height: props.size ?? 50 }} title={props.title}>
		<svg viewBox="0 0 50 50" width={props.size ?? 50} height={props.size ?? 50} {...props}>
			{children}
		</svg>
	</div>
);

GetIcons.Close = CloseIcons;

export default GetIcons;
