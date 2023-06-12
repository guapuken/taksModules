import React from 'react';
import { header } from '../types/types';
import close from '../../../../img/close.svg';

const HeaderStr = (props: header) => {
	const { styleHeader, header, onCl_close } = props;
	return (
		<div className={'header__modal'} style={styleHeader}>
			<h3 className="header__modal-title">{header}</h3>
			<img src={close} alt="" className="header__modal-img" onClick={onCl_close} />
		</div>
	);
};
export default HeaderStr;
