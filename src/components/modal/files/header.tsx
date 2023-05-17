import React from 'react';
import { header } from '../types';
import close from '../../../img/close.svg';

const HeaderStr = (props: header) => {
	const { styleHeader, header, onCl_close } = props;
	return (
		<div
			className={'headerCtn'}
			style={{ display: 'flex', justifyContent: 'space-between', ...styleHeader }}
		>
			<h3>{header}</h3>
			<img
				src={close}
				alt=""
				style={{ height: '30px', paddingRight: '15px', cursor: 'pointer' }}
				onClick={onCl_close}
			/>
		</div>
	);
};
export default HeaderStr;
