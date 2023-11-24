import React from 'react';
import ReactPlayer from 'react-player';
import './Styles.scss';

interface propsReproductor {
	url: string;
	width?: string | number;
	height?: string | number;
	top?: string | number;
	left?: string | number;
	[key: string]: any;
}
const ReproductorVideo = ({ url, width, height, top, left, ...props }: propsReproductor) => {
	return (
		<div className="React-Multiplayer">
			<ReactPlayer
				playing={props?.playing ?? true}
				loop={props?.loop ?? true}
				url={url}
				className="React-Multiplayer__component"
				style={{ top: top ?? '50%', left: left ?? '20%', pointerEvents: 'none' }}
				width={width}
				height={height}
				playsinline={props?.playsinline ?? true}
				muted={props?.muted ?? true}
				controls={false}
				{...props}
			/>
		</div>
	);
};

export default ReproductorVideo;
