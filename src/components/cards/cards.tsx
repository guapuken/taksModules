import React from 'react';

export interface CardsProps {
	width?: number;
	height?: number;
	rounded?: boolean;
	Content?: any;
	Aside?: any;
	data?: any;
}

const Cards = (props: CardsProps) => {
	const { width = 30, height = 10, rounded = false, Content, data, Aside } = props;
	return (
		<div
			style={{
				height: `${height}rem`,
				width: Aside ? `${width + 5}rem` : `${width}rem`,
				borderRadius: rounded ? '20px' : '0px',
				background: '#fff',
				boxShadow: '-.7rem .7rem 2rem #dedede',
			}}
		>
			{!Content && (
				<div style={{ display: 'flex', height: `${height}rem` }}>
					<div
						style={{
							width: `${width - 2}rem`,
							height: `${height - 2}rem`,
							margin: 'auto',
							marginTop: `${height / 2 - 2.5}rem`,
						}}
					>
						<p style={{ fontSize: '2rem', marginBlock: '0' }}>Without content 😥</p>
						<p style={{ fontSize: '1.4rem', marginBlock: '0' }}>
							Add property Content and see it{' '}
						</p>
					</div>
				</div>
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
