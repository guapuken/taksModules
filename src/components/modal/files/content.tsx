import React from 'react';
import { content } from '../types';

const ContentStr = (props: content) => {
	const { header, Footer, styleContent, Content } = props;
	return (
		<div
			className={`ctn${header ? 'Header' : ''}${Footer ? 'Footer' : ''}Children`}
			style={styleContent}
		>
			{Content}
		</div>
	);
};

export default ContentStr;
