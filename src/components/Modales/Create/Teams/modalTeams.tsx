import React from 'react';
// componentes auxiliares
// import Modal from '../../../Atoms/modal/modal';

// componentes principales
import { Content, Footer } from './files';
// types
import { modalTeams } from './types/types';
import Modal from '../../../../CompoundComponents/Modal/Modal';

const ModalTeams = (props: modalTeams) => {
	return (
		<Modal modo={props?.modo}>
			<Modal.Header closeIcon onClickClose={props?.onCl_close} modo={props?.modo}>
				Registro de equipos
			</Modal.Header>
			<Modal.Contenido height="100%">
				<Content {...props} />
			</Modal.Contenido>
			<Modal.Footer>
				<Footer {...props} />
			</Modal.Footer>
		</Modal>
	);
};

export default ModalTeams;
