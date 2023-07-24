import React from 'react';
import { header } from '../types/types';
import close from '../../../../img/close.svg';
import Title from '../../titles/Title';

const HeaderStr = (props: header) => {
	const { styleHeader, header, onCl_close, modo } = props;
	return (
		<div className={'modal__header'} style={styleHeader}>
			<Title modo={modo} className="modal__header-title">
				{header}
			</Title>
			<img src={close} alt="" className="modal__header-img" onClick={onCl_close} />
		</div>
	);
};
export default HeaderStr;
