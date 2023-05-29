import React from 'react';
// componentes auxiliares
import Modal from '../../../Atoms/modal/modal';

// componentes principales
import { Content, Footer } from './files';
// types
import { modalTeams } from './types/types';

const ModalTeams = (props: modalTeams) => {
	return (
		<Modal
			modo={props.modo}
			header="Creación de equipos"
			Content={<Content {...props} />}
			Footer={<Footer {...props} />}
			onCl_close={props.onCl_close}
		/>
	);
};

export default ModalTeams;
