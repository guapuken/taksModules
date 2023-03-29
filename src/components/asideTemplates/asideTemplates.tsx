import React from 'react';
import { returnSize } from '../../utils/cardsUtils';
import '../../styles.scss';
import css from './aside.module.scss';

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
					? `${isWhite ? css.ctnWhite : css.ctnDark}`
					: `${isWhite ? css.ctnWhite : css.ctn}`
			}
		>
			{!Content && (
				<div className={modo === 'Dark' || !isWhite ? css.noCtnDark : css.noCtn}>
					<h1>Ups!</h1>
					<p>parece que olvidaste agregar tu contenido</p>
				</div>
			)}
			{Content && <Content />}
		</div>
	);
};

export default AsideTemplates;
