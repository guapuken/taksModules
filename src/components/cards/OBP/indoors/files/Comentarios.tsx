import React from 'react';
import { Texts } from '../../../../Atoms';

const Comentarios = ({ comentarios, descripcion }: any) => {
	return (
		<div>
			<Texts modo="Dark" maxLines={3} labels={{ title: comentarios }}>
				<span style={{ fontWeight: '700', userSelect: 'none' }}>Comentarios: </span>
				{comentarios ?? 'Sin comentarios'}
			</Texts>
			<Texts modo="Dark" maxLines={3} labels={{ title: comentarios }}>
				<span style={{ fontWeight: '700', userSelect: 'none' }}>Descripción: </span>
				{descripcion ?? 'Sin descripcion'}
			</Texts>
		</div>
	);
};

export default Comentarios;
