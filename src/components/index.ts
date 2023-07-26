// ---------------------------------------------------------------------------------------------------------
//      Átomos
// ---------------------------------------------------------------------------------------------------------
export{default as Title} from '../components/Atoms/titles/Title';
export {default as Texts} from '../components/Atoms/texts/Texts';

// button que puede incluir un icono, ser flotante y su legenda
export {default as Button} from './button/Button';
// conjunto de botones que tienen cierta composición
export {default as Buttons} from './buttons';
// barra de progreso que puede incluir el estatus de la tarea
export {default as ProgressBar} from './progressBar';
export {default as CircularProgressBar} from './circularProgressBar'
// añade información por medio de un componente que muestra un signo a elegir
export {default as Information} from './information';
// dropdown de cascada que proviene de un icono 
export {default as IconDropdown} from './iconDropdown';
// dropdown que permite buscar y puede ser de selección múltiple
export {default as Dropdown} from './dropdown';
// switch con icono de campana para activar notificaciones
export {default as Notifications} from './notifications';
// menu que recibe los enlaces a los que se moverá
export {default as OptionMenu} from "./optionmenu";
// inputs donde se coloca el nombre de la tarea y la descripción
export {default as InputTask} from './inputTask';
// text area que se ajusta automaticamente al tamaño del texto
export {default as AutoresizeInput} from './autoResizeInput';
// contenedor lateral que recibe componentes o contenido en general
export {default as AsideTemplates} from './asideTemplates';
// input con label
export {default as InputLabel} from './inputLabel';
// rango de fechas
export {default as RangeDatePicker} from './rangeDatePicker';
// notificaciones 
export {default as NotificationBell} from './notificationBell';
// Tareas
export {default as Task} from './task';
// carrousel
export {default as Carousel} from './carousel';

// dificultad
export {default as Dificultad} from './Dificultad/Dificultad';

// ---------------------------------------------------------------------------------------------------------
//      Cards preestablecidas
// ---------------------------------------------------------------------------------------------------------
export {default as Cards} from './cards'; // genérica
export {default as CardTask} from '../components/cards/Tasks/cardTask';
export {default as CardCampaign} from './cards/Campaigns/CardCampaign';
export {default as CardTeam} from  './cards/teams';
export {default as CardProject} from './cards/Projects/cardProject';
export {default as CardMembersTeam} from './cards/MemberTeam/cardMembersTeam';
export {default as CardTaskReview} from './cards/TaskReview/cardTaskReview';

// ---------------------------------------------------------------------------------------------------------
//      Cards de gestión
// ---------------------------------------------------------------------------------------------------------
export {default as CardMannageTemplates} from './cards/MannageTemplates/cardMannageTemplate';
export {default as CardMannageProjects} from './cards/MannageProjects/cardMannageProjects';
export {default as CardMannageTasks} from './cards/MannageTasks/cardMannageTasks';

//CARD DE OBP
export {default as CardSitios} from './cards/OBP/sitios/cardSitios';

// ---------------------------------------------------------------------------------------------------------
//      Modales preestablecidos
// ---------------------------------------------------------------------------------------------------------
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
// Modales de previsualización
export {default as CommentsTask} from './commentsTask';
export {default as TimelineMedio} from './Modales/Preview/TimelineMedio/TimelineMedio';
export {default as MdlCambiarEstatus} from './Modales/Update/CambiarStatus/MdlCambiarStatus';

// ---------------------------------------------------------------------------------------------------------
//      componentes complejos
// ---------------------------------------------------------------------------------------------------------
export {default as DragAndDrop} from './dragAndDrop';
export {default as Timeline} from './timelineProject';
export {default as Chat} from './ChatContainer';
export {default as Msns} from './msns';

// ---------------------------------------------------------------------------------------------------------
//      layouts
// ---------------------------------------------------------------------------------------------------------
export {default as TimelineProject} from './Layouts/Timeline/TimelineProject';
// layout de página del módulo de tareas
// export {default as Container} from './containerComp'
export {default as Container} from './Layouts/Container/Container'
export {default as Organigrama} from './organigrama/Organigrama';

// ---------------------------------------------------------------------------------------------------------
//      Hooks
// ---------------------------------------------------------------------------------------------------------
export {default as useModal} from './Atoms/hooks/useModal.jsx';
export {default as useModalWithData} from './Atoms/hooks/useModalWithData.jsx';