import React, { useState } from 'react';
import { Title } from '../../../components/Atoms';
import { Modo } from '../../../types';
import GetIcons from '../../Atoms/Icon/getIcons';

// estilos del header
import './Header.scss';

interface HeaderModal {
	modo: Modo;
	children: string;
	closeIcon?: boolean;
	onClickClose?: () => any;
	[key: string]: any;
}
const Header = ({ closeIcon, onClickClose, modo, children, ...props }: HeaderModal) => {
	return (
		<div {...props} className="Compound_Modal__Header">
			<Title modo={modo} style={{ textTransform: 'none' }}>
				{children}
			</Title>
			{closeIcon && (
				<GetIcons
					strokeWidth={'6px'}
					size={30}
					onClick={onClickClose}
					style={{
						cursor: 'pointer',
					}}
				>
					<GetIcons.Close fill="var(--errorColor)" />
				</GetIcons>
			)}
		</div>
	);
};

export default Header;
