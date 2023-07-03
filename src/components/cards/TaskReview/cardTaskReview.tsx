import React from 'react';

// importación de types
import { cardTaskReview } from './types/types';
// importación de componente a usar
import Cards from '../cards';
import { Content } from './files/contentCard';

const CardTaskReview = (props: cardTaskReview) => {
	const { modo } = props;

	return <Cards rounded modo={modo} Content={() => <Content {...props} />} />;
};
export default CardTaskReview;
