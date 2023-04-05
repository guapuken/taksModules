import React from 'react';
import '../../global.scss';
import './aside.scss';

export interface AsideTemplatesProps {
	isWhite?: boolean;
	Content?: any;
	modo?: 'Light' | 'Dark';
}

const AsideTemplates = (props: AsideTemplatesProps) => {
	const { Content, isWhite, modo } = props;

	return (
		<div
			className={
				modo === 'Dark'
					? `${isWhite ? 'ctnWhite_ATC' : 'ctnDark_ATC'}`
					: `${isWhite ? 'ctnWhite_ATC' : 'ctn_ATC'}`
			}
		>
			{!Content && (
				<div className={modo === 'Dark' || !isWhite ? 'noCtnDark' : 'noCtn'}>
					<h1>Ups!</h1>
					<p>parece que olvidaste agregar tu contenido</p>
				</div>
			)}
			{Content && <Content />}
		</div>
	);
};

export default AsideTemplates;
