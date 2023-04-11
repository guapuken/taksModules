import React from 'react';
// componentes auxiliares
import { Modal } from '../../components';
// componentes principales
import { Content, Footer } from './files';
// types
import { modalTeams } from './types';

const ModalTeams = (props: modalTeams) => {
	return (
		<Modal
			header="Creación de equipos"
			Content={() => <Content {...props} Footer={() => <Footer {...props} />} />}
		/>
	);
};

export default ModalTeams;
