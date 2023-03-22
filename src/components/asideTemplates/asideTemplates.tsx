import React, { useState } from 'react';
import { returnSize } from '../../utils/cardsUtils';
import { onChangeType } from '../../utils/types/typesUtils';
import { windowSize } from '../../utils/widthSize';

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
				width: `calc(${returnSize()}vh + 2rem)`,
				background: isWhite ? '#fff' : '#282828',
				position: 'relative',
				marginBlock: 0,
				padding: '1rem',
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
