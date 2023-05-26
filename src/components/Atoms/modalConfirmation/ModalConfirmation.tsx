import React from 'react';

import { SimpleContainer, ValidationComponent } from '../../Atoms';
import { modalConfirmationProps } from './types/types';
import './styles/modalConfirmation.scss';

import close from '../../../img/close.svg';

const ModalConfirmation = ({
	modo = 'Light',
	children,
	handleClose,
	footer,
	isActive,
	header,
}: modalConfirmationProps) => {
	return (
		<ValidationComponent validate={isActive}>
			<SimpleContainer
				// contenedor general del componente
				className={`ctn_MdlConfirmation ${modo}`}
			>
				<SimpleContainer
					// background que permite cerrar el modal dando clic fuera del modal
					className="modalBgFW_MdlConfirmation"
					children={undefined}
					onClick={handleClose}
				/>
				<SimpleContainer className={`ctnModal_MdlConfirmation`}>
					<SimpleContainer className="children_MdlConfirmation">
						<SimpleContainer className="header_MdlConfirmation">
							<img
								src={close}
								alt="Cerrar"
								className="iconClose_MdlConfirmation"
								onClick={handleClose}
							/>
						</SimpleContainer>
						<SimpleContainer
							//comienza contenido del modal
							className="content_MdlConfirmation"
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
