import React, { useState } from 'react';
// utilidades del storybook
import { storiesOf } from '@storybook/react';
// componentes principales
import { autoIncrementalId } from '../../../../utils/functions/functions';
import { equipos, responsable, revision, templateOptions } from '../../data/exampleData';
import ModalTemplates from '../Templates/modalPlantillas';

function DemoComponent() {
	const [template, setTemplate] = useState(undefined);
	const [checkTem, setCheckTem] = useState(false);
	const [checkCam, setCheckCam] = useState(false);
	const [tiposMedio, setTiposMedio] = useState(null);

	console.clear();
	console.log('campaña: ', checkCam, 'Template', checkTem, 'tiposMedio', tiposMedio);
	return (
		<ModalTemplates
			onCl_close={() => {}}
			idTemplate="1"
			modo="Light"
			isMannager
			isEditingTemplate
			onCh_checkboxMedio={() => {
				setCheckTem(!checkTem);
			}}
			onCh_dropDownTipoMedio={(e) => {
				setTiposMedio(e);
			}}
			onCh_templateName={(e) => setTemplate(e.target.value)}
			onCl_abort={() => {}}
			onCl_addTask={() => {}}
			onCl_confirm={() => {
				setCheckTem(false);
				setTiposMedio(null);
			}}
			valueCheckboxMedio={checkTem}
			// isEditingTemplate
			valueCheckboxCampaign={true}
			templateNameValue="Espectaculares"
			optionsTipoMedio={[
				{ id: String(autoIncrementalId()), title: 'Urbanos' },
				{ id: String(autoIncrementalId()), title: 'Espectaculares' },
				{ id: String(autoIncrementalId()), title: 'Muros' },
				{ id: String(autoIncrementalId()), title: 'Vallas móviles' },
			]}
			onCh_checkboxCampaign={() => {
				setCheckCam(!checkCam);
			}}
			tasks={[
				{
					dependence: { id: '1', title: 'Dummies' },
					dependenciesOptions: [
						{
							id: '1',
							title: 'Dummies',
						},
						{
							id: '2',
							title: 'Bloqueos',
						},
					],
					idTask: String(autoIncrementalId()),
					valueTask: 'Bloqueos',
					valueDescription: 'Realizar los bloqueos de los siguientes sitios',
					modo: 'Light',
					valueDificultad: { id: '2', title: 'Fácil' },
					onCh_descriptionTask: (e) => console.log(e.target.value),
					onCh_nameTask: (e) => console.log(e.target.value),
					onCl_addTask: () => {},
					onCh_duration: (e) => console.log(e.target.value),
					onCl_delete: () => {},
					equipos: equipos,
					templateOptions: templateOptions,
					onCl_newTemplate: () => {},
					durationValue: '2',
					responsables: responsable,
					revision: revision,
					subtasks: [
						{
							equipos: [],
							idTask: '1',
							modo: 'Light',
							onCh_descriptionTask: {} as any,
							onCh_nameTask: {} as any,
							onCl_addTask: {} as any,
							onCl_delete: {} as any,
							onCl_newTemplate: {} as any,
							responsables: [],
							revision: [],
							templateOptions: [],
							valueDescription: 'CDMX',
							valueResponsable: 'Gabriela Serna',
							valueTask: 'CDMX',
							subtasks: [
								{
									equipos: [],
									idTask: '2',
									modo: 'Light',
									onCh_descriptionTask: {} as any,
									onCh_nameTask: {} as any,
									onCl_addTask: {} as any,
									onCl_delete: {} as any,
									onCl_newTemplate: {} as any,
									responsables: [],
									revision: [],
									templateOptions: [],
									valueDescription: 'Proveedor 1',
									valueResponsable: 'Gabriela Serna',
									valueTask: 'Proveedor 1',
									subtasks: [
										{
											equipos: [],
											idTask: '8',
											modo: 'Light',
											onCh_descriptionTask: {} as any,
											onCh_nameTask: {} as any,
											onCl_addTask: {} as any,
											onCl_delete: {} as any,
											onCl_newTemplate: {} as any,
											responsables: [],
											revision: [],
											templateOptions: [],
											valueDescription: 'Proveedor 1',
											valueResponsable: 'Gabriela Serna',
											valueTask: 'Proveedor 1',
										},
										{
											equipos: [],
											idTask: '9',
											modo: 'Light',
											onCh_descriptionTask: {} as any,
											onCh_nameTask: {} as any,
											onCl_addTask: {} as any,
											onCl_delete: {} as any,
											onCl_newTemplate: {} as any,
											responsables: [],
											revision: [],
											templateOptions: [],
											valueDescription: 'Proveedor 1',
											valueResponsable: 'Gabriela Serna',
											valueTask: 'Proveedor 1',
										},
										{
											equipos: [],
											idTask: '10',
											modo: 'Light',
											onCh_descriptionTask: {} as any,
											onCh_nameTask: {} as any,
											onCl_addTask: {} as any,
											onCl_delete: {} as any,
											onCl_newTemplate: {} as any,
											responsables: [],
											revision: [],
											templateOptions: [],
											valueDescription: 'Proveedor 1',
											valueResponsable: 'Gabriela Serna',
											valueTask: 'Proveedor 1',
										},
									],
								},
								{
									equipos: [],
									idTask: '5',
									modo: 'Light',
									onCh_descriptionTask: {} as any,
									onCh_nameTask: {} as any,
									onCl_addTask: {} as any,
									onCl_delete: {} as any,
									onCl_newTemplate: {} as any,
									responsables: [],
									revision: [],
									templateOptions: [],
									valueDescription: 'Proveedor 1',
									valueResponsable: 'Gabriela Serna',
									valueTask: 'Proveedor 1',
									subtasks: [
										{
											equipos: [],
											idTask: '8',
											modo: 'Light',
											onCh_descriptionTask: {} as any,
											onCh_nameTask: {} as any,
											onCl_addTask: {} as any,
											onCl_delete: {} as any,
											onCl_newTemplate: {} as any,
											responsables: [],
											revision: [],
											templateOptions: [],
											valueDescription: 'Proveedor 1',
											valueResponsable: 'Gabriela Serna',
											valueTask: 'Proveedor 1',
										},
										// {
										// 	equipos: [],
										// 	idTask: '9',
										// 	modo: 'Light',
										// 	onCh_descriptionTask: {} as any,
										// 	onCh_nameTask: {} as any,
										// 	onCl_addTask: {} as any,
										// 	onCl_delete: {} as any,
										// 	onCl_newTemplate: {} as any,
										// 	responsables: [],
										// 	revision: [],
										// 	templateOptions: [],
										// 	valueDescription: 'Proveedor 1',
										// 	valueResponsable: 'Gabriela Serna',
										// 	valueTask: 'Proveedor 1',
										// },
									],
								},
							],
						},
						{
							equipos: [],
							idTask: '3',
							modo: 'Light',
							onCh_descriptionTask: {} as any,
							onCh_nameTask: {} as any,
							onCl_addTask: {} as any,
							onCl_delete: {} as any,
							onCl_newTemplate: {} as any,
							responsables: [],
							revision: [],
							templateOptions: [],
							valueDescription: 'MTY',
							valueResponsable: 'Gabriela Serna',
							valueTask: 'MTY',
							subtasks: [
								{
									equipos: [],
									idTask: '6',
									modo: 'Light',
									onCh_descriptionTask: {} as any,
									onCh_nameTask: {} as any,
									onCl_addTask: {} as any,
									onCl_delete: {} as any,
									onCl_newTemplate: {} as any,
									responsables: [],
									revision: [],
									templateOptions: [],
									valueDescription: 'Proveedor 1',
									valueResponsable: 'Gabriela Serna',
									valueTask: 'Proveedor 1',
								},
								{
									equipos: [],
									idTask: '7',
									modo: 'Light',
									onCh_descriptionTask: {} as any,
									onCh_nameTask: {} as any,
									onCl_addTask: {} as any,
									onCl_delete: {} as any,
									onCl_newTemplate: {} as any,
									responsables: [],
									revision: [],
									templateOptions: [],
									valueDescription: 'Proveedor 1',
									valueResponsable: 'Gabriela Serna',
									valueTask: 'Proveedor 1',
								},
							],
						},
						{
							equipos: [],
							idTask: '4',
							modo: 'Light',
							onCh_descriptionTask: {} as any,
							onCh_nameTask: {} as any,
							onCl_addTask: {} as any,
							onCl_delete: {} as any,
							onCl_newTemplate: {} as any,
							responsables: [],
							revision: [],
							templateOptions: [],
							valueDescription: 'MTY',
							valueResponsable: 'Gabriela Serna',
							valueTask: 'MTY',
							subtasks: [
								{
									equipos: [],
									idTask: '8',
									modo: 'Light',
									onCh_descriptionTask: {} as any,
									onCh_nameTask: {} as any,
									onCl_addTask: {} as any,
									onCl_delete: {} as any,
									onCl_newTemplate: {} as any,
									responsables: [],
									revision: [],
									templateOptions: [],
									valueDescription: 'Proveedor 1',
									valueResponsable: 'Gabriela Serna',
									valueTask: 'Proveedor 1',
								},
								// {
								// 	equipos: [],
								// 	idTask: '9',
								// 	modo: 'Light',
								// 	onCh_descriptionTask: {} as any,
								// 	onCh_nameTask: {} as any,
								// 	onCl_addTask: {} as any,
								// 	onCl_delete: {} as any,
								// 	onCl_newTemplate: {} as any,
								// 	responsables: [],
								// 	revision: [],
								// 	templateOptions: [],
								// 	valueDescription: 'Proveedor 1',
								// 	valueResponsable: 'Gabriela Serna',
								// 	valueTask: 'Proveedor 1',
								// },
							],
						},
					],
				},
				{
					idTask: String(autoIncrementalId()),
					valueTask: 'Dummies',
					valueDescription: 'Realizar los Dummies',
					modo: 'Light',
					onCh_descriptionTask: (e) => console.log(e.target.value),
					onCh_nameTask: (e) => console.log(e.target.value),
					onCl_addTask: () => {},
					onCh_duration: (e) => console.log(e.target.value),
					onCl_delete: () => {},
					valueDificultad: { id: '4', title: 'Dificil' },

					equipos: equipos,
					templateOptions: templateOptions,
					onCl_newTemplate: () => {},
					responsables: responsable,
					revision: revision,
					durationValue: '1',
				},
				{
					idTask: String(autoIncrementalId()),
					valueTask: 'PDC',
					valueDificultad: { id: '5', title: 'Muy dificil' },

					valueDescription: 'Realizar la prueba de color',
					modo: 'Light',
					onCh_descriptionTask: (e) => console.log(e.target.value),
					onCh_nameTask: (e) => console.log(e.target.value),
					onCl_addTask: () => {},
					onCh_duration: (e) => console.log(e.target.value),
					onCl_delete: () => {},
					equipos: equipos,
					templateOptions: templateOptions,
					onCl_newTemplate: () => {},
					responsables: responsable,
					revision: revision,
					durationValue: '1',
				},
			]}
		/>
	);
}

// creación de stories
storiesOf('Modales/Creación/Plantillas/Ejemplos/Espectaculares', module).add(
	'Espectaculares',
	() => <DemoComponent />
);
