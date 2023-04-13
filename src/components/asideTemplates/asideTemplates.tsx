import React from 'react';
import '../../global.scss';
import './aside.scss';

export interface AsideTemplatesProps {
	isWhite?: boolean;
	Content?: any;
	modo?: 'Light' | 'Dark';
}

const AsideTemplates = (props: AsideTemplatesProps) => {
	const { Content, isWhite, modo = 'Light' } = props;

	return (
		<div className={`ctn${isWhite ? 'White' : ''}${modo}_ATC`}>
			{!Content && (
				<div className={`noCtn${modo}`}>
					<h1>Ups!</h1>
					<p>parece que olvidaste agregar tu contenido</p>
				</div>
			)}
			{Content && <Content />}
		</div>
	);
};

export default AsideTemplates;
