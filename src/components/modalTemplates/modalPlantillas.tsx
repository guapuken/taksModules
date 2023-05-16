import React, { useState } from 'react';
import Buttons from '../buttons';
import InputLabel from '../inputLabel';
import Modal from '../modal';
import Task from '../task';
import AddTask from '../task/files/addTask';
import { optionsDropdown, subtaskTemplates, tasksTemplates } from '../../types';
import { modalTemplates } from './types';
import { CheckboxInput } from '../inputTask/complements/checkboxInput';
import Dropdown from '../dropdown/dropdown';
import Information from '../information/information';

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
		modo,
		onCh_dropDownTipoMedio,
		optionsTipoMedio,
		valueTipoMedio,
		onCh_checkboxCampaign,
		onCh_checkboxMedio,
		isMannager,
	}: modalTemplates) => {
		const [tipoMedio, setTipoMedio] = useState(false);
		const [campanha, setCampanha] = useState(false);

		return (
			<div>
				<InputLabel
					id={idTemplate as any}
					legend="Nombre de la plantilla"
					onCh={onCh_templateName}
					style={{ maxWidth: '98%' }}
					initialValue={templateNameValue}
				/>

				{!campanha && isMannager && (
					<div
						style={{ display: 'flex', width: '98%', gap: '20px', alignItems: 'center' }}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								margin: '20px 0',
								gap: '10px',
								width: '100%',
							}}
						>
							<CheckboxInput
								idCheckbox=""
								onCh_checkbox={(e) => {
									setTipoMedio(!tipoMedio);
									if (onCh_checkboxMedio) onCh_checkboxMedio(e);
								}}
							/>
							<p>Plantilla de medio</p>
							<Information
								modo={modo}
								positionInfo="center"
								info="Tareas que se asignarán en un tipo de medio en específico"
								style={{ zIndex: 10 }}
							/>
						</div>
						{tipoMedio && (
							<Dropdown
								style={{ width: '100%', height: '30px' }}
								modo={modo}
								placeHolder="Selecciona el medio"
								onCh={onCh_dropDownTipoMedio}
								options={optionsTipoMedio as optionsDropdown[]}
								initialValue={valueTipoMedio}
							/>
						)}
					</div>
				)}
				{!tipoMedio && isMannager && (
					<div
						style={{ display: 'flex', width: '98%', gap: '20px', alignItems: 'center' }}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								margin: campanha ? '20px 0' : '0 0 20px 0',
								gap: '10px',
								width: '100%',
							}}
						>
							<CheckboxInput
								idCheckbox=""
								onCh_checkbox={(e) => {
									setCampanha(!campanha);
									if (onCh_checkboxCampaign) onCh_checkboxCampaign(e);
								}}
							/>
							<p>Plantilla de campaña</p>
							<Information
								modo={modo}
								positionInfo="center"
								info="Tareas que se asignarán a los miembros del equipo de contabilidad de la campaña completa"
								style={{ zIndex: 10 }}
							/>
						</div>
					</div>
				)}
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
								modo={modo}
								equipos={indTask.equipos}
								idTask={indTask.idTask}
								onCh_descriptionTask={indTask.onCh_descriptionTask}
								onCh_nameTask={indTask.onCh_nameTask}
								onCl_newTemplate={indTask.onCl_newTemplate}
								responsables={indTask.responsables}
								revision={indTask.revision}
								templateOptions={indTask.templateOptions}
								valueDescription={indTask.valueDescription}
								valueTask={indTask.valueTask}
								durationValue={indTask.durationValue}
								onCh_duration={indTask.onCh_duration}
								onCl_addTask={indTask.onCl_addTask}
								onCl_delete={indTask.onCl_delete}
								valueResponsable={indTask.valueResponsable}
								valueRevision={indTask.valueRevision}
								moreOptions={indTask.moreOptions}
								subtasks={indTask.subtasks as any}
								// definición de la tarea como plantilla
								plantillas
								// no necesarios
								check={false}
								onCh_checkbox={{} as any}
								disabledEndDate={false}
								disabledStartDate={false}
								endDateValue={undefined}
								onCh_endDate={{} as any}
								onCh_startDate={{} as any}
							/>
						))}
				</div>
			</div>
		);
	};

	//DESESTRUCTURACIÓN DE PROPIEDADES DEL COMPONENTE DE MODAL
	const args = {
		header: 'Creación de plantillas',
		Content: <Content {...props} />,
		Footer: <Footer {...props} />,
		modo: props.modo,
		onCl_close: props.onCl_close,
	};
	return <Modal {...args} />;
};

export default ModalTemplates;
