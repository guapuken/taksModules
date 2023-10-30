import React from 'react';

//types
import { modalTemplates } from './types/types';

// componentes principales
// import Modal from '../../../Atoms/modal/modal';

import { Content, Footer } from './principalComponents';
import Modal from '../../../../CompoundComponents/Modal/Modal';

const ModalTemplates = (props: modalTemplates) => {
	return (
		<Modal modo={props?.modo}>
			<Modal.Header modo={props?.modo} onClickClose={props.onCl_close} closeIcon>
				Registro de plantillas
			</Modal.Header>
			<Modal.Contenido>
				<Content {...(props as any)} />
			</Modal.Contenido>
			<Modal.Footer>
				<Footer {...props} />
			</Modal.Footer>
		</Modal>
	);
};

export default ModalTemplates;
