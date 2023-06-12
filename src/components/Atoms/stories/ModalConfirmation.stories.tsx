import React from 'react';
import { storiesOf } from '@storybook/react';

import ModalConfirmation from '../modalConfirmation/ModalConfirmation';
import SimpleContainer from '../simpleContainer/SimpleContainer';
import TextButton from '../textButton/TextButton';
import { Buttons } from '../../../components';
import useModal from '../hooks/useModal.jsx';
import ImportantText from '../importantText/ImportantText';
import Texts from '../texts/Texts';

storiesOf('Gral-Atoms/ModalConfirmation', module).add('ModalConfirmation', () => {
	const { isOpened, setIsOpened, toggle } = useModal();
	return (
		<SimpleContainer>
			<TextButton modo="Dark" onClick={toggle}>
				Abrir Modal
			</TextButton>
			<ModalConfirmation
				handleClose={() => setIsOpened(false)}
				isActive={isOpened}
				modo="Dark"
				header={<ImportantText modo="Dark">Esta acción no puede deshacerse</ImportantText>}
				children={
					<Texts modo="Dark">
						¿Seguro que quieres eliminarlo?, una vez hecho tu tarea ya no podrá
						recuperarse
					</Texts>
				}
				footer={
					<Buttons
						buttons={{ primary: true, secondary: true }}
						composition="horizontal"
						modo="Dark"
						size="small"
						legends={{
							primary: 'Eliminar tarea',
							secondary: 'Cancelar',
						}}
						onCl_buttons={{
							primary: () => alert('Confirmar'),
							secondary: () => setIsOpened(false),
							tertiary: {} as any,
						}}
					/>
				}
			/>
		</SimpleContainer>
	);
});
