import React from 'react';

// importación de types
import { Modo, onClickType, statusTask } from '../../types';
// importación de componente a usar
import Cards from '../cards';
import { Content } from './files/contentCard';

export interface CardTaskReviewProps {
	statusTask?: statusTask;
	onClickShowDetails?: onClickType;
	modo?: Modo;
	taskName?: string;
	taskDescription?: string;
}
const CardTaskReview = (props: CardTaskReviewProps) => {
	return <Cards rounded modo={props.modo} Content={() => <Content {...props} />} />;
};
export default CardTaskReview;
