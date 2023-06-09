import React from 'react';

//types
import { modalTemplates } from './types/types';

// componentes principales
import Modal from '../../../Atoms/modal/modal';

import { Content, Footer } from './principalComponents';

const ModalTemplates = (props: modalTemplates) => {
	//DESESTRUCTURACIÓN DE PROPIEDADES DEL COMPONENTE DE MODAL
	const args = {
		header: 'Creación de plantillas',
		Content: <Content {...(props as any)} />,
		Footer: <Footer {...props} />,
		modo: props.modo,
		onCl_close: props.onCl_close,
	};
	return <Modal {...args} />;
};

export default ModalTemplates;
