import { Modo } from '../../types';
//definición de interfaces
export interface cardIntrfc {
	// tema de visualización
	modo?: Modo;
	//componentes
	Content?: any;
	Aside?: any;
	data?: any;
	// booleanos
	rounded?: boolean;
}
