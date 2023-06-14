import React, { Fragment } from 'react';
import MdlCambiarDificultad from '../CambiarDificultad/MdlCambiarDificultad';
import { storiesOf } from '@storybook/react';
import useModalWithData from '../../../Atoms/hooks/useModalWithData';
import Button from '../../../button/Button';

storiesOf('Modales/Update/CambiarDificultad/button trigger', module).add('button trigger', () => {
	const { isOpened, data, setData } = useModalWithData();
	return (
		<Fragment>
			<Button modo="Light" onCl={() => setData({ id: '1', taskName: 'Dummies' } as any)} />
			<MdlCambiarDificultad
				data={data}
				isOpened={isOpened()}
				modo={'Light'}
				onCh_dropdown={() => {}}
				onCl_confirm={() => {}}
				opcionesDropdown={[]}
				setData={setData}
				valorDropdown={null}
			/>
		</Fragment>
	);
});
