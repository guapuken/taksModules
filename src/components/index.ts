// ---------------------------------------------------------------------------------------------------------
//      Átomos
// ---------------------------------------------------------------------------------------------------------
/**
 * @returns - button que puede incluir un icono, ser flotante y su legenda
 */
export {default as Button} from './button/Button';
/**
 * @returns - conjunto de botones que tienen cierta composición
 */
export {default as Buttons} from './buttons';
/**
 * @returns - barra de progreso que puede incluir el estatus de la tarea
 */
export {default as ProgressBar} from './progressBar';
export {default as CircularProgressBar} from './circularProgressBar'
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
/**
 * @returns - inputs donde se coloca el nombre de la tarea y la descripción
 */
export {default as InputTask} from './inputTask';
/**
 * @returns - text area que se ajusta automaticamente al tamaño del texto
 */
export {default as AutoresizeInput} from './autoResizeInput';
/**
 * @returns - contenedor lateral que recibe componentes o contenido en general
 */
export {default as AsideTemplates} from './asideTemplates';
/**
 * @returns - layout de página del módulo de tareas
 */
export {default as Container} from './containerComp'
/**
 * @returns - input que contiene etiqueta que se mueve al momento de comenzar a escribir
 */
export {default as InputLabel} from './inputLabel';
/**
 * @returns - rango de fechas en un arreglo 
 */
export {default as RangeDatePicker} from './rangeDatePicker';
/**
 * @returns - notificaciones con el número de notificaciones que cuenta
 */
export {default as NotificationBell} from './notificationBell';
/**
 * @returns - regresa una estructura de las tareas
 */
export {default as Task} from './task';
/**
 * @returns - Carrousel de elementos
 */
export {default as Carousel} from './carousel';

// ---------------------------------------------------------------------------------------------------------
//      Cards preestablecidas
// ---------------------------------------------------------------------------------------------------------
export {default as Cards} from './cards'; // genérica
export {default as CardTeam} from  './cardTeam';
export {default as CardProject} from './cardProject';
export {default as CardTask} from './cardTask';
export {default as CardMembersTeam} from './cardMembersTeam';
export {default as CardTaskReview} from './cardTaskReview';

// ---------------------------------------------------------------------------------------------------------
//      Cards de gestión
// ---------------------------------------------------------------------------------------------------------
export {default as CardMannageTemplates} from './cardMannageTemplates';
export {default as CardMannageProjects} from './cardMannageProjects';
export {default as CardMannageTasks} from './cardMannageTasks';

// ---------------------------------------------------------------------------------------------------------
//      Modales preestablecidos
// ---------------------------------------------------------------------------------------------------------
// sin información, reciben un children
// export {default as Modal} from './Atoms/modal/'; // genérica
export {default as ModalConfirmation} from './Atoms/modalConfirmation/ModalConfirmation';
// Modales de creación
export {default as ModalProjects} from './Modales/Create/Projects/modalProjects';
export {default as ModalTask} from './Modales/Create/Tasks/modalTareas';
export {default as ModalTemplates} from './Modales/Create/Templates/modalPlantillas';
export {default as ModalTeams} from './Modales/Create/Teams/modalTeams';
export {default as ModalTaskWithComments} from './Modales/Create/TasksWithComments/modalTaskWithComents';
// Modales de eliminación
export {default as MdlDeleteTeam} from './Modales/Delete/Team/MdlDeleteTeam'; // equipos
export {default as MdlDeleteTask} from './Modales/Delete/Task/MdlDeleteTask'; // tareas
export {default as MdlDeleteTemplate} from './Modales/Delete/Template/MdlDeleteTemplate'; // plantillas
export {default as MdlDeleteProject} from './Modales/Delete/Project/MdlDeleteProject'; // proyectos
// Modales de actualización
export {default as MdlReasignDate} from './Modales/Update/ReasignDate/ModalReasignDate';
export {default as MdlReasignUser} from './Modales/Update/ReasignUser/ModalReasignUser';
// Casos específicos
export {default as CommentsTask} from './commentsTask';

// ---------------------------------------------------------------------------------------------------------
//      componentes complejos
// ---------------------------------------------------------------------------------------------------------
/**
 * @returns - drag and drop 
 */
export {default as DragAndDrop} from './dragAndDrop';
/**
 * @returns - timeline
 */
export {default as TimelineProject} from './timelineProject';
/**
 * @returns - chat que recibe distintas propiedades
 */
export {default as Chat} from './ChatContainer';

/**
 * @returns - estructura de los mensajes según su estatus y tipo de mensaje
 */
export {default as Msns} from './msns';


export {default as useModal} from './Atoms/hooks/useModal.jsx';
export {default as useModalWithData} from './Atoms/hooks/useModalWithData.jsx';