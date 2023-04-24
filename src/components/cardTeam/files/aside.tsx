import React from 'react';
// importación de elementos auxiliares--------------------------------------------------------------------------
// componentes
import { AsideContainer, ButtonsArray } from '../../../utils/asideUtils';
//archivos multimedia
import editIcon from '../../../img/editar.svg';
import prevIcon from '../../../img/previsualizar.svg';
import { aside } from '../types';

//Componente que regresa el aside de la card
const Aside = ({ onCl_edit, onCl_preview, onCl_delete, modo = 'Light' }: aside) => {
	return (
		<AsideContainer>
			<ButtonsArray
				buttons={[
					{
						img: editIcon,
						onClick: onCl_edit,
						titleToShow: 'Editar',
					},
					{
						img: prevIcon,
						onClick: onCl_preview,
						titleToShow: 'Previsualizar',
					},
					{
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
