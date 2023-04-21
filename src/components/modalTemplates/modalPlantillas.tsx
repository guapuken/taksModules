import React from 'react';
import Buttons from '../buttons';
import InputLabel from '../inputLabel';
import Modal from '../modal';
import Task from '../task';
import AddTask from '../task/files/addTask';
import { onChangeType, onClickType, optionsIcnDrp, tasksTemplates } from '../../types';

//INTERFACES
export interface ModalTemplatesProps {
	onClickCrear?: onClickType;
	onClickCancelar?: onClickType;
	onClickAddTask?: onClickType;
	onChangeTemplateName?: onChangeType;
	templateNameValue?: string;
	idTemplate?: string;
	tasks?: tasksTemplates[];
}
const ModalTamplates = (props: ModalTemplatesProps) => {
	//DESESTRUCTURACIÓN DEL PROPIEDADES COMPONENTE PRINCIPAL
	const {
		onClickCrear,
		onClickCancelar,
		onClickAddTask,
		onChangeTemplateName = () => {},
		templateNameValue,
		tasks,
		idTemplate,
	} = props;

	//COMPONENTE QUE REGRESA LOS BOTONES DEL MODAL
	const Footer = () => (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Buttons
				buttons={{ primary: true, secondary: true }}
				legends={{ primary: 'Crear plantilla', secondary: 'Cancelar' }}
				onClick={{ primary: onClickCrear, secondary: onClickCancelar }}
			/>
		</div>
	);

	//COMPONENTE QUE REGRESA TODO EL CONTENIDO DEL MODAL
	const Content = () => (
		<div>
			<InputLabel
				id={idTemplate as any}
				legend="Nombre de la plantilla"
				onChange={onChangeTemplateName}
				style={{ maxWidth: '98%' }}
				initialValue={templateNameValue}
			/>
			<AddTask legend="+ Añadir tarea" onClick={onClickAddTask} />
			<div
				style={{
					borderLeft: '3px solid #28282830',
					paddingLeft: '20px',
				}}
			>
				{tasks && tasks.map((indTask: tasksTemplates) => <Task plantillas {...indTask} />)}
			</div>
		</div>
	);

	//DESESTRUCTURACIÓN DE PROPIEDADES DEL COMPONENTE DE MODAL
	const args = {
		header: 'Creación de plantillas',
		Content: Content,
		Footer: Footer,
	};
	return <Modal {...args} />;
};

export default ModalTamplates;
