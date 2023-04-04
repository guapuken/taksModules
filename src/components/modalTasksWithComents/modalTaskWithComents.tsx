import React from 'react';
import { Modal } from '../../components';
import { Content, Footer } from './files';

const ModalTaskWithComents = (props: any) => {
	const args = {
		Content: () => <Content {...props} />,
		Footer: () => <Footer {...props} />,
	};
	return <Modal {...args} />;
};

export default ModalTaskWithComents;
