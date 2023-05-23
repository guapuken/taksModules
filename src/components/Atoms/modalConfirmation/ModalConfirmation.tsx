import React from 'react';

import { SimpleContainer, ValidationComponent } from '../../Atoms';
import './styles/modalConfirmation.scss';
import close from '../../../img/close.svg';

const ModalConfirmation = ({ modo = 'Light', children, handleClose, footer, isActive, header }) => {
	return (
		<ValidationComponent validate={isActive}>
			<SimpleContainer
				// contenedor general del componente
				className={`ctn_MdlConfirmation ${modo}`}
			>
				<SimpleContainer
					// background que permite cerrar el modal dando clic fuera del modal
					className="modalBgFW"
					children={undefined}
					onClick={handleClose}
				/>
				<SimpleContainer className={`ctnModal`}>
					<SimpleContainer className="children">
						<SimpleContainer className="header">
							<img src={close} alt="" className="iconClose" onClick={handleClose} />
						</SimpleContainer>
						<SimpleContainer
							//comienza contenido del modal
							className="content"
						>
							<ValidationComponent
								//Se valida si existe o no el header
								validate={header}
								children={<SimpleContainer children={header} />}
							/>
							{
								//Se construye el children del modal
								children
							}
						</SimpleContainer>
						<ValidationComponent
							//Se valida si existe o no el footer
							validate={footer}
							children={<SimpleContainer children={footer} />}
						/>
					</SimpleContainer>
				</SimpleContainer>
			</SimpleContainer>
		</ValidationComponent>
	);
};

export default ModalConfirmation;
