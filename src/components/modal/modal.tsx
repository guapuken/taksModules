import React from 'react';
// interface
import { modalProps } from './types';
// componentes principales
import { ErrorNC, FooterStr, HeaderStr, ContentStr } from './files';
// estilos
import './modal.scss';

// construcción del componente principal
const Modal = (props: modalProps) => {
	const { header, Content, Footer, modo = 'Light', style } = props;
	return (
		<div className={`ctn${modo}_MC`} style={style}>
			{header && <HeaderStr {...props} />}
			{Content ?? <ErrorNC />}
			{Content && <ContentStr {...props} />}
			{Footer && <FooterStr {...props} />}
		</div>
	);
};

export default Modal;
