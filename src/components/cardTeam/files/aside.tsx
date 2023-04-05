import React from 'react';
// importación de elementos auxiliares--------------------------------------------------------------------------
// componentes
import { AsideContainer, ButtonsArray } from '../../../utils/asideUtils';
//archivos multimedia
import editIcon from '../../../img/editar.svg';
import prevIcon from '../../../img/previsualizar.svg';

//Componente que regresa el aside de la card
const Aside = (props: any) => {
	const { onClickEdit, onClickView, onClickDelete } = props;
	return (
		<AsideContainer>
			<ButtonsArray
				buttons={[
					{
						img: editIcon,
						onClick: onClickEdit,
						titleToShow: 'Editar equipo',
					},
					{
						img: prevIcon,
						onClick: onClickView,
						titleToShow: 'Previsualizar equipo',
					},
					{
						onClick: onClickDelete,
						titleToShow: 'Eliminar equipo',
					},
				]}
				vertical
			/>
		</AsideContainer>
	);
};

export default Aside;
