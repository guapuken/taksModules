import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import MdlSeguirTarea from '../SeguirTarea/MdlSeguirTarea';
import Button from '../../../button/Button';
import useModalWithData from '../../../Atoms/hooks/useModalWithData';

storiesOf('Modales/Update/Seguir Tarea/Ejemplos/disparador en botón', module).add(
	'disparador en botón',
	() => {
		const { isOpened, setData } = useModalWithData();
		return (
			<Fragment>
				<Button
					modo="Light"
					onCl={() => setData({ id: '12', taskName: 'dummies' } as any)}
				/>
				<MdlSeguirTarea
					modo="Light"
					onCl_confirm={() => {}}
					notificacionesActivas
					isOpened={isOpened()}
					setData={setData}
					data={{ id: '12', taskName: 'dummies' }}
				/>
			</Fragment>
		);
	}
);
