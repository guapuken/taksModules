import React from 'react';
import { windowSize } from '../../utils/widthSize';
import '../../styles.scss';
import './modal.scss';

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
const Modal = (props: ModalProps) => {
	const { Content, styleHeader, styleContent, styleFooter, header, Footer } = props;
	return (
		<div
			style={{
				position: 'fixed',
				left: '50%',
				top: '0',
				width:
					windowSize().width <= 768
						? `${windowSize().width}px`
						: `${windowSize().width / 2}px`,
				transform: 'translateX(-50%)',
				background: '#fff',
				boxShadow: '.7rem .7rem 2rem #dedede',
				height: `${windowSize().height}px`,
				maxHeight: `${windowSize().height}px`,
				margin: '0 auto',
			}}
		>
			{header && (
				<div
					className="TitleModalComponent"
					style={{
						height: `${windowSize().height * 0.06}px`,
						// background: 'red',
						display: 'flex',
						alignItems: 'center',
						...styleHeader,
					}}
				>
					<h3 style={{ marginBlock: '0', marginLeft: '2rem' }}>{header}</h3>
				</div>
			)}
			{!Content ? (
				<div
					className={'NoModalContent'}
					style={{
						height: `${windowSize().height * 0.8}px`,
						maxWidth: '90%',
						margin: '0 auto',
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%,-10%)',
						...styleContent,
					}}
				>
					<div>
						<h2>Without content 😥</h2>
						<p>Add property Content and see it </p>
					</div>
				</div>
			) : (
				<div
					className={
						header && Footer
							? 'ModalWithHeaderAndFooter'
							: header && !Footer
							? 'ModalWithHeader'
							: !header && Footer
							? 'ModalWithFooter'
							: 'ModalContent'
					}
					style={{
						height: `${windowSize().height * 0.8}px`,
						overflow: 'auto',
						width: '90%',
						overflowX: 'hidden',
						margin: '0 auto',
					}}
				>
					<Content />
				</div>
			)}
			{Footer && (
				<div
					style={{
						position: 'relative',
						height: `${windowSize().height * 0.14}px`,
						// background: 'orange',
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
