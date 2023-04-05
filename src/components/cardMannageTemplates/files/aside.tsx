import React from 'react';
import { AsideContainer, ButtonsArray } from '../../../utils/asideUtils';
import del from '../../../img/vaciar.svg';
import prev from '../../../img/previsualizar.svg';

const Aside = ({ onClickDelete, onClickPreview }: any) => (
	<AsideContainer>
		<ButtonsArray
			buttons={[
				{
					img: del,
					onClick: onClickDelete,
					titleToShow: 'Eliminar',
				},
				{
					img: prev,
					onClick: onClickPreview,
					titleToShow: 'Previsualizar',
				},
			]}
			vertical
		/>
	</AsideContainer>
);
export default Aside;
