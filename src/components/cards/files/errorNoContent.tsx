import React from 'react';
import { Texts, Title } from '../../Atoms';

const ErrorNC = ({ modo }: any) => (
	<>
		<Title modo={modo}>Without content 😥</Title>
		<Texts modo={modo}>Add property Content and see it </Texts>
	</>
);

export default ErrorNC;
