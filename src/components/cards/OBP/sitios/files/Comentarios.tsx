import React from 'react';
import { Texts } from '../../../../Atoms';

const Comentarios = ({ comentarios }: any) => {
	return (
		<div>
			<Texts modo="Dark" maxLines={5} labels={{ title: comentarios }}>
				<span style={{ fontWeight: '700', userSelect: 'none' }}>Comentarios: </span>
				{comentarios ?? 'Sin comentarios'}
			</Texts>
		</div>
	);
};

export default Comentarios;
