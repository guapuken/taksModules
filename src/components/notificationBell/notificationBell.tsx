import React, { useState } from 'react';
import { selectRandomText } from '../../utils/randomTexts';
import Cards from '../cards';
// import { useTimeCounter } from './hooks/useCounter';
import bellIcon from '../../img/bell.svg';
import '../../global.scss';
import './notificationBell.scss';
import { TitleCard } from '../../utils/cardsUtils';
import { Modo } from '../../types';
import Notification from './files/notification';
import WithoutNotifications from './files/withoutNotifications';

export interface NotificationBellProps {
	Children?: any;
	notifications?: {
		title: string;
		onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	}[];
	modo: Modo;
}

const NotificationBell = (props: NotificationBellProps) => {
	const { notifications, modo = 'Light' } = props;
	const [counter] = useState(notifications?.length || 0);
	const [showNotifications, setShowNotifications] = useState(false);
	const [selectedText, setSelectedText] = useState('');

	const texts = [
		'¿Hay alguien aquí con vida?',
		'Porque estoy solito... no hay nadie aquí a mi lado',
	];

	return (
		<div className={`ctn${modo}_BtnNB`}>
			<div className="ctnBtn">
				<div
					id="notification"
					data-count={counter > 0 && counter}
					className={`notification ${counter > 0 ? 'showCount' : ''}`}
				></div>
				<button
					className={`${'btnNotification'} ${counter > 0 ? 'notify' : ''}`}
					onClick={() => {
						setShowNotifications(!showNotifications);
						selectRandomText(texts, setSelectedText);
					}}
				>
					<img src={bellIcon} alt="bell" title="Notificaciones" />
				</button>
			</div>
			{showNotifications && (
				<div className={'mdlBtnNB'}>
					<div className={'CtnNotification'}>
						{notifications ? (
							<Notification notifications={notifications} modo={modo} />
						) : (
							WithoutNotifications(selectedText)
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default NotificationBell;
