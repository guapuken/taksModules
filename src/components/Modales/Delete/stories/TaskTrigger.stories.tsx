import React from 'react';

import { storiesOf } from '@storybook/react';
import { useModalWithData, IconDropdown } from '../../../../components';
import MdlDeleteTask from '../Task/MdlDeleteTask';

storiesOf('Modales/Delete Task/Examples/Icon Trigger', module).add('Icon Trigger', () => {
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
							setDataDeleteTeam({
								id: '1',
								taskName: 'Dummies - UBER EATS-2536-ESP-NOV',
							} as any),
					},
				]}
			/>
			<MdlDeleteTask
				isOpened={isOpenedDeleteTeam()}
				setData={setDataDeleteTeam}
				modo="Light"
				onCl_confirm={() => {}}
				data={dataDeleteTeam}
			/>
		</div>
	);
});
