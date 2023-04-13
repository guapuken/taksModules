import React from 'react';
import { header } from '../types';

const HeaderStr = (props: header) => {
	const { styleHeader, header } = props;
	return (
		<div className={'headerCtn'} style={styleHeader}>
			<h3>{header}</h3>
		</div>
	);
};
export default HeaderStr;
