import React, { useEffect, useState } from 'react';
import { selectRandomText } from '../../utils/randomTexts';
import { onClickType } from '../../utils/types/typesUtils';
import Cards from '../cards';
// import { useTimeCounter } from './hooks/useCounter';
import '../../styles.scss';
import './notificationBell.scss';

export interface NotificationBellProps {
	Children?: any;
	notifications?: {
		title?: string;
		onClick?: onClickType;
	}[];
}

const NotificationBell = (props: NotificationBellProps) => {
	const { notifications } = props;
	const [counter] = useState(notifications?.length || 0);
	const [showNotifications, setShowNotifications] = useState(false);
	const [selectedText, setSelectedText] = useState('');

	const texts = [
		'¿Hay alguien aquí con vida?',
		'Porque estoy solito... no hay nadie aquí a mi lado',
	];

	const notification = notifications?.map((e) => (
		<div style={{ marginBottom: '1.5rem' }}>
			<Cards
				rounded
				Content={() => (
					<>
						<p onClick={e.onClick} className="TitleCardsNotificationComponent">
							{e.title}
						</p>
						<button className="ShowDetailsNotificationComponentet" onClick={e.onClick}>
							Mostrar detalles...
						</button>
					</>
				)}
				width={25}
			/>
		</div>
	));

	return (
		<div style={{ position: 'relative', width: '30rem' }}>
			<div
				style={{
					position: 'absolute',
					width: '5rem',
					height: '4rem',
					display: 'flex',
					right: '0',
				}}
			>
				<div
					id="notification"
					data-count={counter > 0 && counter}
					className={`notification ${counter > 0 ? 'show-count ' : ''}`}
				></div>
				<button
					className={`ButtonNotificationComponent ${counter > 0 ? 'notify' : ''}`}
					style={{
						animation: counter > 0 ? `bell .7s` : '',
						left: '0',
					}}
					onClick={() => {
						setShowNotifications(!showNotifications);
						selectRandomText(texts, setSelectedText);
					}}
				>
					<img src={require('../../img/bell.svg')} alt="" />
				</button>
			</div>
			{showNotifications && (
				<div className="ModalNotificationComponent">
					<div className="ContainerNotificationsComponent">
						{notification ? (
							notification
						) : (
							<div style={{ width: '90%', margin: '0 auto' }}>
								<h2>Sin notificaciones 😥</h2>
								<p>{selectedText}</p>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default NotificationBell;
