import { Modo, msnsChats } from '../../../types';

export interface msnsProps {
	messages: msnsChats[];
	height?: string;
	modo: Modo;
}

/** Estructura que recibirán los messages al momento de hacer el mapeo de messages después de ser tratados
 * @example -
 *      {
 *          message:'Hola',
 *          date: '2023-09-05 GMT-0600 12:00:00'
 *      }
 */
export type message = {
	message: string;
	date: string;
};

/** Estructura de los mensajes al momento de ser tratados por la función
 * @example -
 *      {
 *          avatar: undefined,
 *          type: 'Received',
 *          userName:'Juan Pérez',
 *          messages:[
 *              {
 *                  message:'Hola',
 *                  date: '2023-09-05 GMT-0600 12:00:00'
 *              },{
 *                  message:'Cómo estás?',
 *                  date: '2023-09-05 GMT-0600 12:00:00'
 *              }
 *          ]
 *      }
 */
export type messageWorked = {
	avatar?: string | undefined;
	type: 'Received' | 'Sent' | 'System';
	userName?: string;
	messages: message[];
};

/** Estructura de los items que generarán los mensajes
 *
 */
export type itemMsn = {
	message: string;
	date: string;
	modo: Modo;
};
