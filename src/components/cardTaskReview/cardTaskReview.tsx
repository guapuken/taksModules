import React from 'react';

// importación de types
import { cardTaskReview } from './types';
// importación de componente a usar
import Cards from '../cards';
import { Content } from './files/contentCard';

const CardTaskReview = (props: cardTaskReview) => {
	return <Cards rounded modo={props.modo} Content={() => <Content {...props} />} />;
};
export default CardTaskReview;
