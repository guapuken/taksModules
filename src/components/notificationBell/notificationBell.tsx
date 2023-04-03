import React, { useState } from 'react';
import { selectRandomText } from '../../utils/randomTexts';
import Cards from '../cards';
// import { useTimeCounter } from './hooks/useCounter';
import bellIcon from '../../img/bell.svg';
import '../../styles.scss';
import css from './notificationBell.module.scss';

export interface NotificationBellProps {
	Children?: any;
	notifications?: {
		title?: string;
		onClick?: (e: React.MouseEvent<HTMLElement>) => void;
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
						<p onClick={e.onClick} className={css.TitleCards}>
							{e.title}
						</p>
						<button className={css.Details} onClick={e.onClick}>
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
					className={`${css.notification} ${counter > 0 ? css.showCount : ''}`}
				></div>
				<button
					className={`${css.Btn} ${counter > 0 ? css.notify : ''}`}
					style={{
						animation: counter > 0 ? `bell .7s` : '',
						left: '0',
					}}
					onClick={() => {
						setShowNotifications(!showNotifications);
						selectRandomText(texts, setSelectedText);
					}}
				>
					<img src={bellIcon} alt="" />
				</button>
			</div>
			{showNotifications && (
				<div className={css.Modal}>
					<div className={css.ContainerNoti}>
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
