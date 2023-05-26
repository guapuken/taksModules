import React from 'react';

import { storiesOf } from '@storybook/react';
import MdlDeleteTeam from '../Team/MdlDeleteTeam';
import { useModalWithData, IconDropdown } from '../../../../components';

storiesOf('Modales/Delete Team/Examples/Icon Trigger', module).add('Icon Trigger', () => {
	const {
		isOpened: isOpenedDeleteTeam,
		setData: setDataDeleteTeam,
		data: dataDeleteTeam,
	} = useModalWithData();
	return (
		<div>
			<IconDropdown
				modo="Dark"
				icon={'https://cdn-icons-png.flaticon.com/512/4701/4701482.png'}
				options={[
					{
						id: '1',
						title: 'Eliminar',
						onClick: () =>
							setDataDeleteTeam({ id: '1', teamName: 'Equipo Dinamita' } as any),
					},
				]}
			/>
			<MdlDeleteTeam
				isOpened={isOpenedDeleteTeam()}
				setData={setDataDeleteTeam}
				modo="Dark"
				onCl_confirm={() => {}}
				data={dataDeleteTeam}
			/>
		</div>
	);
});
