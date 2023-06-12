import React from 'react';
import { header } from '../types/types';
import close from '../../../../img/close.svg';

const HeaderStr = (props: header) => {
	const { styleHeader, header, onCl_close } = props;
	return (
		<div className={'modal__header'} style={styleHeader}>
			<h3 className="modal__header-title">{header}</h3>
			<img src={close} alt="" className="modal__header-img" onClick={onCl_close} />
		</div>
	);
};
export default HeaderStr;
