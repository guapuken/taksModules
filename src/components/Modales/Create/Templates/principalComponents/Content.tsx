import React, { useEffect, useState } from 'react';
import { Dropdown, Information, InputLabel, Task } from '../../../../../components';
import { CheckboxInput } from '../../../../inputTask/complements/checkboxInput';
import { AddTask } from '../../../../task/files';
import { modalTemplates } from '../types/types';
import { optionsDropdown, tasksTemplates } from '../../../../../types';
import { SimpleContainer, Texts } from '../../../../Atoms';

//COMPONENTE QUE REGRESA TODO EL CONTENIDO DEL MODAL
export const Content = ({
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
	onCh_checkboxPrintBF,
	valueCheckboxPrintBF,
	isEditingTemplate /* = true */,
	valueCheckboxMedio,
	valueCheckboxCampaign,
}: modalTemplates) => {
	const [tipoMedio, setTipoMedio] = useState(valueCheckboxMedio);
	const [campanha, setCampanha] = useState(valueCheckboxCampaign);

	useEffect(() => {
		setTipoMedio(valueCheckboxMedio);
	}, [valueCheckboxMedio]);
	useEffect(() => {
		setCampanha(valueCheckboxCampaign);
	}, [valueCheckboxCampaign]);
	return (
		<div>
			<InputLabel
				id={idTemplate as any}
				legend="Nombre de la plantilla"
				onCh={onCh_templateName}
				initialValue={templateNameValue}
				modo={modo}
			/>

			<SimpleContainer style={{ display: 'flex' }}>
				{!campanha && isMannager && (
					<div
						style={{
							display: 'flex',
							width: '98%',
							alignItems: 'flex-start',
						}}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								width: '100%',
							}}
						>
							<CheckboxInput
								idCheckbox=""
								onCh_checkbox={(e) => {
									setTipoMedio(!tipoMedio);
									if (onCh_checkboxMedio) onCh_checkboxMedio(e);
								}}
								check={tipoMedio}
								disabled={isEditingTemplate}
								style={{ marginTop: '20px' }}
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
							<SimpleContainer
								style={{
									display: 'flex',
									flexDirection: 'column',
									gap: '10px',
									width: '100%',
									marginTop: '15px',
								}}
							>
								<Dropdown
									style={{ width: '100%', height: '30px' }}
									modo={modo}
									placeHolder="Selecciona el medio"
									onCh={onCh_dropDownTipoMedio}
									isSearchable
									options={optionsTipoMedio as optionsDropdown[]}
									initialValue={valueTipoMedio}
									disabled={isEditingTemplate}
								/>
								<SimpleContainer style={{ display: 'flex', gap: '10px' }}>
									<CheckboxInput
										idCheckbox={idTemplate}
										check={valueCheckboxPrintBF}
										modo={modo}
										onCh_checkbox={onCh_checkboxPrintBF}
										style={{ marginTop: '7px' }}
										disabled={isEditingTemplate}
									/>
									<Texts modo={modo}>Impresión en BF</Texts>
								</SimpleContainer>
							</SimpleContainer>
						)}
					</div>
				)}
				{!tipoMedio && isMannager && (
					<div
						style={{
							display: 'flex',
							width: '98%',
							alignItems: 'center',
						}}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								width: '100%',
							}}
						>
							<CheckboxInput
								idCheckbox=""
								onCh_checkbox={(e) => {
									setCampanha(!campanha);
									if (onCh_checkboxCampaign) onCh_checkboxCampaign(e);
								}}
								disabled={isEditingTemplate}
								check={campanha}
								style={{ marginTop: '20px' }}
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
			</SimpleContainer>
			<AddTask legend="+ Añadir tarea" onClick={onCl_addTask} />
			<SimpleContainer
				style={{
					// borderLeft: '3px solid #28282830',
					paddingLeft: '20px',
				}}
			>
				{tasks &&
					tasks.map((indTask: tasksTemplates) => (
						<Task
							isPM={indTask.isPM}
							haveSubPersonal={indTask.haveSubPersonal}
							valueDificultad={indTask.valueDificultad}
							onCh_dificultad={indTask.onCh_dificultad}
							key={indTask.idTask}
							modo={modo}
							equipos={indTask.equipos}
							idTask={indTask.idTask}
							onCh_descriptionTask={indTask.onCh_descriptionTask}
							onCh_nameTask={indTask.onCh_nameTask}
							dependence={indTask.dependence}
							dependenciesOptions={indTask.dependenciesOptions ?? []}
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
							onCh_checkbox={() => {}}
							disabledEndDate={false}
							disabledStartDate={false}
							endDateValue={undefined}
							onCh_endDate={() => {}}
							onCh_startDate={() => {}}
						/>
					))}
			</SimpleContainer>
		</div>
	);
};
