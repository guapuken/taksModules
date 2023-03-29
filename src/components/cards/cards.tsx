import React from 'react';
import '../../styles.scss';
import css from './cards.module.scss';

export interface CardsProps {
	width?: number;
	height?: number;
	rounded?: boolean;
	Content?: any;
	Aside?: any;
	data?: any;
	modo?: 'Light' | 'Dark';
}

const Cards = (props: CardsProps) => {
	const { width = 30, height = 10, rounded = false, Content, data, Aside, modo } = props;
	return (
		<div
			className={modo === 'Dark' ? css.contenedorDark : css.contenedor}
			style={{
				height: `${height}rem`,
				width: Aside ? `${width + 5}rem` : `${width}rem`,
				borderRadius: rounded ? '20px' : '0px',
			}}
		>
			{!Content && (
				<>
					<h3>Without content 😥</h3>
					<p>Add property Content and see it </p>
				</>
			)}
			{Content && (
				<div style={{ display: 'flex', height: `${height}rem`, position: 'relative' }}>
					<div
						style={{
							width: `${width - 2}rem`,
							height: `${height - 2}rem`,
							margin: 'auto',
						}}
					>
						<Content {...data} />
					</div>
					{Aside && (
						<div
							style={{
								width: '5rem',
								height: `${height}rem`,
								boxShadow: '-20px 0px 20px -20px #525252',
								margin: 'auto',
								display: 'flex',
							}}
						>
							<div
								style={{
									width: `${5 - 2}rem`,
									height: `${height - 2}rem`,
									margin: 'auto',
								}}
							>
								<Aside />
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Cards;
