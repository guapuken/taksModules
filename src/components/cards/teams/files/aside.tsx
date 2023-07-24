import React from 'react';
// importación de elementos auxiliares--------------------------------------------------------------------------
// componentes
import { AsideContainer, ButtonsArray } from '../../../../utils/asideUtils';
//archivos multimedia
import editIcon from '../../../../img/editar.svg';
import prevIcon from '../../../../img/previsualizar.svg';
import del from '../../../../img/vaciar.svg';
// types
import { aside } from '../types/types';

//Componente que regresa el aside de la card
const Aside = ({ onCl_edit, onCl_preview, onCl_delete, modo = 'Light' }: aside) => {
	return (
		<AsideContainer>
			<ButtonsArray
				buttons={[
					{
						id: 'edit',
						img: editIcon,
						onClick: onCl_edit,
						titleToShow: 'Editar',
					},
					{
						id: 'preview',
						img: prevIcon,
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
				modo={modo}
				vertical
			/>
		</AsideContainer>
	);
};

export default Aside;
