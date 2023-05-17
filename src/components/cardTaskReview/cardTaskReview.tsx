import React from 'react';

// importación de types
import { cardTaskReview } from './types';
// importación de componente a usar
import Cards from '../cards';
import { Content } from './files/contentCard';
import { useWindowSize } from '../../utils/windowSize';

const CardTaskReview = (props: cardTaskReview) => {
	const { modo } = props;
	const scrnW = useWindowSize().width;
	const scrnH = useWindowSize().height;

	function aspectRatio() {
		const size = scrnH / 10 > scrnW / 7 ? true : false;
		return size;
	}

	return (
		<Cards
			rounded
			height={aspectRatio() ? '90px' : ''}
			modo={modo}
			Content={() => <Content {...props} />}
		/>
	);
};
export default CardTaskReview;
