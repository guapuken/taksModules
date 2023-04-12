// ---------------------------------------------------------------------------------------------------------
//      Átomos
// ---------------------------------------------------------------------------------------------------------
/**
 * @returns - button que puede incluir un icono, ser flotante y su legenda
 */
export {default as Button} from './button';
/**
 * @returns - conjunto de botones que tienen cierta composición
 */
export {default as Buttons} from './buttons';
/**
 * @returns - barra de progreso que puede incluir el estatus de la tarea
 */
export {default as ProgressBar} from './progressBar';
/**
 * @returns - añade información por medio de un componente que muestra un signo a elegir
 */
export {default as Information} from './information';
/**
 * @returns - dropdown de cascada que proviene de un icono 
 */
export {default as IconDropdown} from './iconDropdown';
/**
 * @returns - dropdown que permite buscar y puede ser de selección múltiple
*/
export {default as Dropdown} from './dropdown';
/**
 * @returns - switch con icono de campana para activar notificaciones
 */
export {default as Notifications} from './notifications';
/**
 * @returns - menu que recibe los enlaces a los que se moverá
 */
export {default as OptionMenu} from "./optionmenu";

//Renderiza un text area múltiple donde se coloca la tarea y la subtarea
export {default as InputTask} from './inputTask';
export {default as AutoresizeInput} from './autoResizeInput';

//Renderiza un input con un label que se posiciona encima del texto una vez que se selecciona
export {default as InputLabel} from './inputLabel';

//regresa un calendario de múltiples fechas.
export {default as RangeDatePicker} from './rangeDatePicker';

//Renderiza un boton de notificaciones con su contador de notificaciones
export {default as NotificationBell} from './notificationBell';

//Renderiza el bloque de código de una tarea con su respectivos botones
export {default as Task} from './task';

//Cards preestablecidas
export {default as Cards} from './cards'; // genérica
export {default as CardTeam} from  './cardTeam';
export {default as CardProject} from './cardProject';
export {default as CardTask} from './cardTask';
export {default as CardMembersTeam} from './cardMembersTeam';
export {default as CardTaskReview} from './cardTaskReview';

//cards preestablecidas de gestión
export {default as CardMannageTemplates} from './cardMannageTemplates';
export {default as CardMannageProjects} from './cardMannageProjects';
export {default as CardMannageTasks} from './cardMannageTasks';

//Modales preestablecidos
export {default as Modal} from './modal'; // genérica
export {default as ModalTareas} from './modalTareas';
export {default as ModalTemplates} from './modalTemplates';
export {default as ModalProjects} from './modalProjects';
export {default as ModalTeams} from './modalTeams';
export {default as modalTaskWithComents} from './modalTasksWithComents';

//Contenedores generales
export {default as AsideTemplates} from './asideTemplates';
export {default as Container} from './containerComp'

//drag and drop
export {default as DragAndDrop} from './dragAndDrop';

//timeline
export {default as TimelineProject} from './timelineProject';
