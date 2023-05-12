import React from 'react';
import Buttons from '../buttons';
import InputLabel from '../inputLabel';
import Modal from '../modal';
import Task from '../task';
import AddTask from '../task/files/addTask';
import { tasksTemplates } from '../../types';
import { modalTemplates } from './types';

const ModalTemplates = (props: modalTemplates) => {
	//DESESTRUCTURACIÓN DEL PROPIEDADES COMPONENTE PRINCIPAL

	//COMPONENTE QUE REGRESA LOS BOTONES DEL MODAL
	const Footer = ({ edit, onCl_confirm, onCl_abort, modo }: modalTemplates) => (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Buttons
				buttons={{ primary: true, secondary: true }}
				legends={{
					primary: edit ? 'Guardar cambios' : 'Crear plantilla',
					secondary: edit ? 'Descartar cambios' : 'Cancelar',
				}}
				composition="horizontal"
				onCl_buttons={{ primary: onCl_confirm, secondary: onCl_abort, tertiary: () => {} }}
				modo={modo}
			/>
		</div>
	);

	//COMPONENTE QUE REGRESA TODO EL CONTENIDO DEL MODAL
	const Content = ({
		idTemplate,
		onCh_templateName,
		templateNameValue,
		onCl_addTask,
		tasks,
	}: modalTemplates) => (
		<div>
			<InputLabel
				id={idTemplate as any}
				legend="Nombre de la plantilla"
				onCh={onCh_templateName}
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
						<Task
							key={indTask.idTask}
							plantillas
							{...indTask}
							onCh_endDate={{} as any}
							onCh_startDate={{} as any}
						/>
					))}
			</div>
		</div>
	);

	//DESESTRUCTURACIÓN DE PROPIEDADES DEL COMPONENTE DE MODAL
	const args = {
		header: 'Creación de plantillas',
		Content: <Content {...props} />,
		Footer: <Footer {...props} />,
		modo: props.modo,
	};
	return <Modal {...args} />;
};

export default ModalTemplates;
