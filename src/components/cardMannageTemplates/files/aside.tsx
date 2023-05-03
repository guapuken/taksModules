import React from 'react';

// types
import { aside } from '../types';
// componentes auxiliares
import { AsideContainer, ButtonsArray } from '../../../utils/asideUtils';
// archivos multimedia
import del from '../../../img/vaciar.svg';
import prev from '../../../img/previsualizar.svg';
import edit from '../../../img/editar.svg';

const Aside = ({ onCl_delete, onCl_preview, onCl_edit, modo = 'Light' }: aside) => (
	<AsideContainer>
		<ButtonsArray
			modo={modo}
			buttons={[
				{
					id: 'edit',
					img: edit,
					onClick: onCl_edit,
					titleToShow: 'Editar',
				},
				{
					id: 'preview',
					img: prev,
					onClick: onCl_preview,
					titleToShow: 'Previsualizar',
				},
				{
					id: 'delete',
					img: del,
					onClick: onCl_delete,
					titleToShow: 'Eliminar',
				},
			]}
			vertical
		/>
	</AsideContainer>
);
export default Aside;
