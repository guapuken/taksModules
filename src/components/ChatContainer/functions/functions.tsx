import { msns } from '../types/types';

/**  EXPLICACIÓN DE LA FUNCIÓN
 *
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
export function arrayMsns(msns: msns[]) {
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
