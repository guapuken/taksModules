// este hook funciona cuando se le va a pasar información adicional a un modal que necesita mostrar información dependiendo la selección que se realizó
 const useModalWithData = (initialIsOpened = false, initialData = null) => {
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

export default useModalWithData;