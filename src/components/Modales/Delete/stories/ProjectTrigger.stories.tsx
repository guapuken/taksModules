import React from 'react';

import { storiesOf } from '@storybook/react';
import { useModalWithData, IconDropdown } from '../../../../components';
import MdlDeleteProject from '../Project/MdlDeleteProject';

storiesOf('Modales/Delete Project/Examples/Icon Trigger', module).add('Icon Trigger', () => {
	const { isOpened, setData, data } = useModalWithData();
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
							setData({
								id: '1',
								projectName: 'UBER EATS-2563-ESP-NOV',
							} as any),
					},
				]}
			/>
			<MdlDeleteProject
				isOpened={isOpened()}
				setData={setData}
				modo="Dark"
				onCl_confirm={() => {}}
				data={data}
			/>
		</div>
	);
});
