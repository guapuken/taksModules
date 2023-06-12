import { useState } from 'react';

const useModal = (initialMode = false) => {
	const [isOpened, setIsOpened] = useState(initialMode);

	const toggle = () => setIsOpened(!isOpened);

	return {isOpened, setIsOpened, toggle};
};

export default useModal

