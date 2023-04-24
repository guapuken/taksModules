import React from 'react';

// componentes auxiliares
import { AsideContainer, ButtonsArray } from '../../../utils/asideUtils';
// types
import { aside } from '../types';
// archivos multimedia
import del from '../../../img/vaciar.svg';
import prev from '../../../img/previsualizar.svg';
import edit from '../../../img/editar.svg';

export const Aside = ({ onCl_delete, onCl_preview, onCl_edit, modo = 'Light' }: aside) => (
	<AsideContainer>
		<ButtonsArray
			modo={modo}
			buttons={[
				{
					img: edit,
					onClick: onCl_edit,
					titleToShow: 'Editar',
				},
				{
					img: prev,
					onClick: onCl_preview,
					titleToShow: 'Previsualizar',
				},
				{
					img: del,
					onClick: onCl_delete,
					titleToShow: 'Eliminar',
				},
			]}
			vertical
		/>
	</AsideContainer>
);
