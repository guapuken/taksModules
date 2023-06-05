import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import MdlCambiarStatus from '../CambiarStatus/MdlCambiarStatus';
import Button from '../../../button/Button';
import useModalWithData from '../../../Atoms/hooks/useModalWithData';

storiesOf('Modales/Update/Cambiar Status/Ejemplo/disparador de botón', module).add(
	'disparador de botón',
	() => {
		const { isOpened, setData } = useModalWithData();
		return (
			<Fragment>
				<Button modo="Light" onCl={() => setData({ id: '1' } as any)} />
				<MdlCambiarStatus
					modo="Light"
					isOpened={isOpened()}
					setData={setData}
					data={{ taskName: 'Dummies - UberEats-2035-Noviembre' }}
				/>
			</Fragment>
		);
	}
);
