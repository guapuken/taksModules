import React from 'react';
// componentes auxiliares
import { AsideContainer, ButtonsArray } from '../../../utils/asideUtils';
// types
import { aside } from '../types';
import { Modo } from '../../../types';
// archivos mutimedia
import prev from '../../../img/previsualizar.svg';
import del from '../../../img/vaciar.svg';
import edit from '../../../img/editar.svg';

const Aside = ({ onCl_delete, onCl_preview, onCl_edit, modo }: aside) => (
	<AsideContainer>
		<ButtonsArray
			modo={modo as Modo}
			buttons={[
				{
					id: 'edit',
					img: edit,
					onClick: onCl_edit,
					titleToShow: 'Eitar',
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
