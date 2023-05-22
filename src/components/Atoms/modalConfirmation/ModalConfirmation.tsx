import React from 'react';

import { SimpleContainer, ValidationComponent } from '../../Atoms';
import './styles/modalConfirmation.scss';
import close from '../../../img/close.svg';

const ModalConfirmation = ({ modo = 'Light', children, handleClose, footer, isActive, header }) => {
	return (
		<ValidationComponent validate={isActive}>
			{/* Modal Bg */}
			<SimpleContainer className="modalBgFW" onClick={handleClose} children={null} />
			<SimpleContainer className={`ctn_MdlConfirmation ${modo}`}>
				{/* Modal content */}
				<SimpleContainer className={`ctnModal`} draggable={true}>
					<SimpleContainer className="children">
						<SimpleContainer className="header">
							<img src={close} alt="" className="iconClose" onClick={handleClose} />
						</SimpleContainer>
						{/* content */}
						<SimpleContainer className="content">
							<ValidationComponent validate={header}>
								<SimpleContainer children={header} />
							</ValidationComponent>
							{children}
						</SimpleContainer>
						<SimpleContainer children={footer} />
					</SimpleContainer>
				</SimpleContainer>
			</SimpleContainer>
		</ValidationComponent>
	);
};

export default ModalConfirmation;
