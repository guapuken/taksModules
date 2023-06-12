import React from 'react';
import { content } from '../types/types';

const ContentStr = (props: content) => {
	const { header, Footer, styleContent, Content } = props;
	return (
		<div
			// className={`ctn${header ? 'Header' : ''}${Footer ? 'Footer' : ''}Children`}
			className={`children__modal`}
			ctn-header={header ? 'header' : ''}
			ctn-footer={Footer ? 'footer' : ''}
			style={styleContent}
		>
			{Content}
		</div>
	);
};

export default ContentStr;
