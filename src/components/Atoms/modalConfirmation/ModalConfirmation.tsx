import React from 'react';

import { SimpleContainer, ValidationComponent } from '../../Atoms';
import './styles/modalConfirmation.scss';
import { modalConfirmationProps } from './types/types';

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
		<div className="modalConfirmation" theme-config={modo} theme-style={''}>
			<ValidationComponent validate={isActive}>
				<SimpleContainer
					className={`MdlConfirmation `}
					// labels={{
					// 	'theme-config': modo,
					// }}
				>
					<SimpleContainer
						// background que permite cerrar el modal dando clic fuera del modal
						className="MdlConfirmation__bg"
						children={undefined}
						onClick={handleClose}
					/>
					<SimpleContainer className={`MdlConfirmation__contenido`}>
						<SimpleContainer className="MdlConfirmation__contenido-children">
							<SimpleContainer className="MdlConfirmation__contenido-children-header">
								<img
									src={close}
									alt="Cerrar"
									className="MdlConfirmation__contenido-children-header-icon"
									onClick={handleClose}
								/>
							</SimpleContainer>
							<SimpleContainer
								//comienza contenido del modal
								className="MdlConfirmation__contenido-children-contenido"
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
		</div>
	);
};

export default ModalConfirmation;
