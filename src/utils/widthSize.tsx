import { useEffect, useState } from 'react';

function getWindowSize() {
	const { innerWidth, innerHeight } = window;
	return {
		innerWidth,
		innerHeight,
	};
}

export function windowSize() {
	//las variables hacen el seguimiento de alto y ancho del objeto 'window'
	const [windowSize, setWindowSize] = useState(getWindowSize());

	//El use effect se envía una dependencia vacia en el arreglo porque sólo se necesita agregar el event listener para el evento de 'resize' sólo en el render inicial
	useEffect(() => {
		//El evento 'resize' es disparado cuando la ventana ha cambiado su tamaño
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}
		window.addEventListener('resize', handleWindowResize);

		//La función retorna el objeto del use effect, una vez que se desmonta podría invocarse
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return {
		width: windowSize.innerWidth,
		height: windowSize.innerHeight,
	};
}
