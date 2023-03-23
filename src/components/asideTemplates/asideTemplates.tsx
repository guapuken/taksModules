import React from 'react';
import { returnSize, sizeCard } from '../../utils/cardsUtils';
import { windowSize } from '../../utils/widthSize';
import '../../styles.scss';

export interface AsideTemplatesProps {
	isWhite?: boolean;
	Content?: any;
}

const AsideTemplates = (props: AsideTemplatesProps) => {
	const { Content, isWhite } = props;

	return (
		<div
			style={{
				height: windowSize().width < 391 ? '20vh' : '100vh',
				width: `calc(${returnSize()}rem + 2rem)`,
				background: isWhite ? '#fff' : '#282828',
				position: 'relative',
				marginBlock: 0,
				paddingTop: '1rem',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			{!Content && (
				<div style={{ display: 'flex' }}>
					<div style={{}}>
						<p style={{ fontSize: '2rem', marginBlock: '0' }}>Cards</p>
						<p style={{ fontSize: '1.4rem', marginBlock: '0' }}>
							Nueva Tarea {'Cards'}
						</p>
					</div>
				</div>
			)}
			{Content && <Content />}
		</div>
	);
};

export default AsideTemplates;
