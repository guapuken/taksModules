import React from 'react';

const CloseIcons = (props: any) => (
	<>
		<line stroke={props?.fill ?? '#000000'} x1="46.6" y1="46.6" x2="3.4" y2="3.4" />
		<line stroke={props?.fill ?? '#000000'} x1="46.6" y1="3.4" x2="3.4" y2="46.6" />
	</>
);
const AsigUsersIcons = (props: any) => (
	<>
		<g>
			<path
				fill={props?.fill ?? '#000000'}
				d="M25,2.5c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S30.5,2.5,25,2.5L25,2.5z"
			/>
		</g>
		<path
			d="M41.8,29.4h-4.2v-4.2c0-1-0.8-1.9-1.9-1.9c-1,0-1.9,0.8-1.9,1.9v4.2h-4.2c-1,0-1.9,0.8-1.9,1.9c0,1,0.8,1.9,1.9,1.9h4.2v4.2
	c0,1,0.8,1.9,1.9,1.9c1,0,1.9-0.8,1.9-1.9v-4.2h4.2c1,0,1.9-0.8,1.9-1.9C43.6,30.3,42.8,29.4,41.8,29.4z"
		/>
		<g>
			<g>
				<path
					fill={props?.fill ?? '#000000'}
					d="M42.9,44.8c0,2-1.5,2.7-3.9,2.7c-3.5,0-8.9-1.3-14.3-1.3h-0.2c-5.2,0-10.4,1.2-13.8,1.2c-2.3,0-3.8-0.6-3.8-2.6
			c0-9.9,8.1-18,18-18c1.2,0,2.4,0.1,3.6,0.4c-1.8,0.5-3.1,2.1-3.1,4.1c0,2.3,1.9,4.2,4.2,4.2h1.9v1.9c0,2.3,1.9,4.2,4.2,4.2
			s4.2-1.9,4.2-4.2v-1.9h0.3C41.9,38.2,42.9,41.4,42.9,44.8z"
				/>
			</g>
		</g>
	</>
);

const GetIcons = ({ children, ...props }: any) => (
	<div
		style={{ width: props.size ?? 50, height: props.size ?? 50 }}
		title={props.title}
		onClick={props?.onClick}
	>
		<svg viewBox="0 0 50 50" width={props.size ?? 50} height={props.size ?? 50} {...props}>
			{children}
		</svg>
	</div>
);

GetIcons.Close = CloseIcons;
GetIcons.AsignUser = AsigUsersIcons;

export default GetIcons;
