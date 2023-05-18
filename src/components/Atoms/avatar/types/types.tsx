import { Modo } from '../../../../types';

/** Estructura que recibe el avatar en caso de exisstir un username
 * @example -
 * 		{
 * 			avatar: undefined, *** Puede ser indefinido o mandar la url de la imagen
 * 			userName:'Juan Pérez'
 * 		}
 */
export interface avatar {
	avatar?: string | undefined;
	userName: string;
	modo: Modo;
	className?: string;
}
