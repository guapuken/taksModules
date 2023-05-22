import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import ModalConfirmation from '../modalConfirmation/ModalConfirmation';
import SimpleContainer from '../simpleContainer/SimpleContainer';
import TextButton from '../textButton/TextButton';
import { Buttons } from '../../../components';
import { useModal } from '../hooks/useModal';
import ImportantText from '../importantText/ImportantText';
import Texts from '../texts/Texts';

storiesOf('Gral-Atoms/ModalConfirmation', module).add('ModalConfirmation', () => {
	const [isOpened, setIsOpened, toggle] = useModal();
	return (
		<SimpleContainer>
			<TextButton modo="Light" onClick={toggle}>
				Abrir Modal
			</TextButton>
			<ModalConfirmation
				handleClose={() => setIsOpened(false)}
				isActive={isOpened}
				modo="Light"
				header={<ImportantText modo="Light">Esta acción no puede deshacerse</ImportantText>}
				children={
					<Texts modo="Light">
						¿Seguro que quieres eliminarlo?, una vez hecho tu tarea ya no podrá
						recuperarse
					</Texts>
				}
				footer={
					<div style={{ display: 'flex' }}>
						{' '}
						<Buttons
							buttons={{ primary: true, secondary: true }}
							composition="horizontal"
							modo="Light"
							size="small"
							legends={{
								primary: 'Eliminar tarea',
								secondary: 'Cancelar',
							}}
							onCl_buttons={{} as any}
						/>
					</div>
				}
			/>
		</SimpleContainer>
	);
});
