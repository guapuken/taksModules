import React from 'react';
import Buttons from '../buttons';
import InputLabel from '../inputLabel';
import Modal from '../modal';
import Task from '../task';
import AddTask from '../task/files/addTask';
import { onChangeType, tasksTemplates } from '../../types';
import { modalTemplates } from './types';

const ModalTamplates = ({
	onCl_confirm,
	onCl_abort,
	onCl_addTask,
	onCh_templateName,
	templateNameValue,
	tasks,
	idTemplate,
	edit,
}: modalTemplates) => {
	//DESESTRUCTURACIÓN DEL PROPIEDADES COMPONENTE PRINCIPAL

	//COMPONENTE QUE REGRESA LOS BOTONES DEL MODAL
	const Footer = () => (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Buttons
				buttons={{ primary: true, secondary: true }}
				legends={{
					primary: edit ? 'Guardar cambios' : 'Crear plantilla',
					secondary: edit ? 'Descartar cambios' : 'Cancelar',
				}}
				onCl_buttons={{ primary: onCl_confirm, secondary: onCl_abort }}
			/>
		</div>
	);

	//COMPONENTE QUE REGRESA TODO EL CONTENIDO DEL MODAL
	const Content = () => (
		<div>
			<InputLabel
				id={idTemplate as any}
				legend="Nombre de la plantilla"
				onCh={onCh_templateName as onChangeType}
				style={{ maxWidth: '98%' }}
				initialValue={templateNameValue}
			/>
			<AddTask legend="+ Añadir tarea" onClick={onCl_addTask} />
			<div
				style={{
					borderLeft: '3px solid #28282830',
					paddingLeft: '20px',
				}}
			>
				{tasks &&
					tasks.map((indTask: tasksTemplates) => (
						<Task key={indTask.idTask} plantillas {...indTask} />
					))}
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
