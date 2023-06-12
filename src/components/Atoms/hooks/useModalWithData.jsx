import {useEffect, useState} from "react";
// este hook funciona cuando se le va a pasar información adicional a un modal que necesita mostrar información dependiendo la selección que se realizó
 const useModalWithData = ( initialData = null) => {

	const [data, setData] = useState(initialData);
	
	useEffect(() => {
		setData(initialData);
	}, [initialData]);

	const isOpened = ()=>{
		if(data){
			return true;
		}
		return false
	}
	return { data, setData, isOpened };
};

export default useModalWithData;