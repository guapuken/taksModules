import React from 'react';

// componentes
import { Cards } from '../../../components';
import { onClickType } from '../../../types';
import { SimpleContainer, TextButton, Title } from '../../Atoms';

const Notification = (props: any) => {
	const { notifications, modo } = props;
	return notifications ? (
		notifications?.map((e: { id: string; title: string; onClick: onClickType }) => (
			<div style={{ marginBottom: '15px', cursor: 'pointer' }} key={e.id}>
				<Cards
					rounded
					Content={() => (
						<SimpleContainer style={{ padding: '20px', height: '100%' }}>
							<Title modo={modo} maxLines={2}>
								{e.title}
							</Title>
							<TextButton className={'showDetails'} modo={modo} onClick={e.onClick}>
								Mostrar detalles...
							</TextButton>
						</SimpleContainer>
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
