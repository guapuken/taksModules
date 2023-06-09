import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import TimelineMedio from '../TimelineMedio/TimelineMedio';
import Button from '../../../button/Button';
import useModalWithData from '../../../Atoms/hooks/useModalWithData';

storiesOf('Modales/Preview/TimelineMedio', module).add('Espectacular', () => {
	const { isOpened, setData, data } = useModalWithData();
	return (
		<Fragment>
			<Button modo="Light" onCl={() => setData({ id: '1' } as any)} />
			<TimelineMedio
				isActive={isOpened()}
				handleClose={() => setData(null)}
				modo={'Light'}
				tasks={[
					{
						taskName: 'Dummies - Uber_Eats-1526-noviembre - IMJ-CDMX-ESP-2562',
						duration: 2,
					},
					{
						taskName: 'Pdc -Uber_Eats-1526-noviembre',
						duration: 2,
					},
					{
						taskName: 'Impresión -Uber_Eats-1526-noviembre',
						duration: 2,
					},
				]}
			/>
		</Fragment>
	);
});
