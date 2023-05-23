import { useEffect, useState } from 'react';

export const useModal = (initialMode = false) => {
	const [isOpened, setIsOpened] = useState(initialMode);

	useEffect(() => {
		setIsOpened(initialMode);
	}, [initialMode]);

	const toggle = () => setIsOpened(!isOpened);

	return {isOpened, setIsOpened, toggle};
};

// este hook funciona cuando se le va a pasar información adicional a un modal que necesita mostrar información dependiendo la selección que se realizó
export const useModalWithData = (initialIsOpened = false, initialData = null) => {
	const [isModalOpened, setIsModalOpened] = useModal(initialIsOpened);
	// setteo de la data inicial
	const [data, setData] = useState(initialData);
	
	useEffect(() => {
		setData(initialData);
	}, [initialData]);

	const customSetIsModalOpened = (isModalOpened) => {
		setIsModalOpened(isModalOpened);
		if (isModalOpened === false) {
			setData(null);
		}
	};
	return [customSetIsModalOpened, isModalOpened, data, setData];
};
