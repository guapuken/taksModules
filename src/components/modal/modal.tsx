import React from 'react';
import { useWindowSize } from '../../utils/windowSize';
import '../../global.scss';
import css from './modal.module.scss';

export interface ModalProps {
	Content?: any;
	Footer?: any;
	data?: any;
	style?: {};
	styleHeader?: {};
	styleContent?: {};
	styleFooter?: {};
	header?: string;
}
function heightModalContent({ Footer, header }: ModalProps) {
	return Footer && header
		? useWindowSize().height - useWindowSize().height * 0.14 - 40
		: header && !Footer
		? useWindowSize().height - 5
		: Footer && !header
		? useWindowSize().height - useWindowSize().height * 0.14
		: useWindowSize().height - 20;
}
const Modal = (props: ModalProps) => {
	const { Content, styleHeader, styleContent, styleFooter, header, Footer } = props;
	return (
		<div
			style={{
				position: 'fixed',
				left: '50%',
				top: '0',
				width:
					useWindowSize().width <= 768
						? `${useWindowSize().width}px`
						: `${useWindowSize().width / 2}px`,
				transform: 'translateX(-50%)',
				background: '#fff',
				boxShadow: '.7rem .7rem 2rem #dedede',
				height: `${useWindowSize().height}px`,
				maxHeight: `${useWindowSize().height}px`,
				margin: '0 auto',
				marginTop: !Footer && !header ? '10px' : 0,
			}}
		>
			{header && (
				<div
					className={css.TitleModalComponent}
					style={{
						height: `${useWindowSize().height * 0.06}px`,
						display: 'flex',
						alignItems: 'center',

						...styleHeader,
					}}
				>
					<h3 style={{ marginBlock: '0', fontWeight: 'lighter', marginLeft: '2rem' }}>
						{header}
					</h3>
				</div>
			)}
			{!Content || Content === null || Content === undefined ? (
				<div
					className={css.NoModalContent}
					style={{
						height: heightModalContent({ Footer, header }),
						width: '90%',
						margin: '0 auto',
						position: 'fixed',
						// background: 'blue',
						left: '50%',
						top: '0',
						transform: 'translateX(-50%)',
						...styleContent,
					}}
				>
					<div style={{ display: 'grid', placeItems: 'center', height: '100%' }}>
						<div>
							<h2>Without content 😥</h2>
							<p>Add property Content and see it </p>
						</div>
					</div>
				</div>
			) : (
				<div
					// className={
					// 	header && Footer
					// 		? css.ModalWithHeaderAndFooter
					// 		: header && !Footer
					// 		? css.ModalWithHeader
					// 		: !header && Footer
					// 		? css.ModalWithFooter
					// 		: css.ModalContent
					// }
					style={{
						height: heightModalContent({ header, Footer }),
						overflow: 'auto',
						width: '90%',
						overflowX: 'hidden',
						margin: '0 auto',
						// background: 'orange',
					}}
				>
					<Content />
				</div>
			)}
			{Footer && (
				<div
					style={{
						position: 'fixed',
						width: '100%',
						bottom: '0',
						height: `${useWindowSize().height * 0.14}px`,
						display: 'flex',
						alignItems: 'center',
						...styleFooter,
					}}
				>
					<Footer />
				</div>
			)}
		</div>
	);
};

export default Modal;
