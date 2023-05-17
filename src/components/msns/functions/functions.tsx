import { msnsChats } from '../../../types';

/** EXPLICACIÓN DE LA FUNCIÓN
 * @param {Date} timeStamp  - recibe una fecha en formato timestamp
 * @example - '2023-05-09 GTM0600 10:50:00'
 * @returns - regresa una cadena de texto con la información de la diferencia de fechas con texto adicionales
 * @example -'Hace 5 minutos'
 */
export function getTimeElapsed(timeStamp: any) {
	const date = new Date(timeStamp);
	const now = new Date();
	const diff = Math.abs(now.getTime() - date.getTime());

	const seconds = Math.floor(diff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30);
	const years = Math.floor(months / 12);

	if (years > 0) {
		return `Hace ${years} año${years > 1 ? 's' : ''}`;
	} else if (months > 0) {
		return `Hace ${months} mes${months > 1 ? 'es' : ''}`;
	} else if (days > 0) {
		return `Hace ${days} día${days > 1 ? 's' : ''}`;
	} else if (hours > 0) {
		return `Hace ${hours} hora${hours > 1 ? 's' : ''}`;
	} else if (minutes > 0) {
		return `Hace ${minutes} minuto${minutes > 1 ? 's' : ''}`;
	} else {
		return `Hace ${seconds} segundo${seconds > 1 ? 's' : ''}`;
	}
}

/**  EXPLICACIÓN DE LA FUNCIÓN
 * @param {msns[]} msns - recibe un arreglo de objetos que contienenlos siguientes elementos:
 * @example [
 *              {
 *                  username:'Juan',
 *                  avatar: undefined,
 *                  message: 'Cómo vamos con las tareas',
 *                  date: '05-05-2023',
 *                  type: 'Received'
 *              }, {...},{...}
 *          ]
 * @returns - regresa un nuevo arreglo con los mensajes agrupados por nombre de usuario
 * @example [
 *              {
 *                  userName:'Juan',
 *                  avatar: undefined,
 *                  messages : [
 *                      {
 *                          date: '05-05-2023',
 *                          message:'Cómo van con las tareas'
 *                      },{...},{...}
 *                  ]
 *                  type: 'Received'
 *              }
 *          ]
 */
export function arrayMsns(msns: msnsChats[]) {
	let newArray = [] as any;
	let temporaryObject = {} as any;
	let counter = 0;
	while (counter < msns.length) {
		if (counter - 1 < 0) {
			temporaryObject = {
				userName: msns[counter].userName,
				avatar: msns[counter].avatar,
				type: msns[counter].type,
				messages: [
					{
						message: msns[counter].message,
						date: msns[counter].date,
					},
				],
			};
		}
		if (counter - 1 >= 0) {
			if (msns[counter].userName !== msns[counter - 1].userName) {
				newArray.push(temporaryObject);
				temporaryObject = {
					userName: msns[counter].userName,
					avatar: msns[counter].avatar,
					type: msns[counter].type,
					messages: [
						{
							message: msns[counter].message,
							date: msns[counter].date,
						},
					],
				};
			}
			if (msns[counter].userName === msns[counter - 1].userName) {
				temporaryObject.messages.push({
					message: msns[counter].message,
					date: msns[counter].date,
				});
			}
		}
		counter++;
	}

	newArray.push(temporaryObject);
	return newArray;
}
