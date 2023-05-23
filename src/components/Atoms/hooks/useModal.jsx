import { useEffect, useState } from 'react';

const useModal = (initialMode = false) => {
	const [isOpened, setIsOpened] = useState(initialMode);

	useEffect(() => {
		setIsOpened(initialMode);
	}, [initialMode]);

	const toggle = () => setIsOpened(!isOpened);

	return {isOpened, setIsOpened, toggle};
};

export default useModal

