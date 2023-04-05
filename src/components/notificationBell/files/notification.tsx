import React from 'react';

// componentes
import { Cards } from '../../../components';
import { TitleCard } from '../../../utils/cardsUtils';
import { onClickType } from '../../../types';

const Notification = (props: any) => {
	const { notifications, modo } = props;
	return notifications ? (
		notifications?.map((e: { title: string; onClick: onClickType }) => (
			<div style={{ marginBottom: '15px', cursor: 'pointer' }} onClick={e.onClick}>
				<Cards
					rounded
					Content={() => (
						<div style={{ padding: '20px' }}>
							<TitleCard modo={modo} title={e.title} />
							<button className={'showDetails'} onClick={e.onClick}>
								Mostrar detalles...
							</button>
						</div>
					)}
					modo={modo}
				/>
			</div>
		))
	) : (
		<></>
	);
};

export default Notification;
