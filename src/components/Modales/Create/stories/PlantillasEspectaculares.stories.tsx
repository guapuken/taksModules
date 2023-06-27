import React, { useState } from 'react';
// utilidades del storybook
import { storiesOf } from '@storybook/react';
// componentes principales
import { autoIncrementalId } from '../../../../utils/functions/functions';
import { equipos, responsable, revision, templateOptions } from '../../data/exampleData';
import ModalTemplates from '../Templates/modalPlantillas';

function DemoComponent() {
	const [template, setTemplate] = useState(undefined);
	return (
		<ModalTemplates
			onCl_close={() => {}}
			idTemplate="1"
			modo="Light"
			isMannager
			onCh_checkboxMedio={() => {}}
			onCh_dropDownTipoMedio={() => {}}
			onCh_templateName={(e) => setTemplate(e.target.value)}
			onCl_abort={() => {}}
			onCl_addTask={() => {}}
			onCl_confirm={() => {}}
			templateNameValue="Espectaculares"
			optionsTipoMedio={[
				{ id: String(autoIncrementalId()), title: 'Urbanos' },
				{ id: String(autoIncrementalId()), title: 'Espectaculares' },
				{ id: String(autoIncrementalId()), title: 'Muros' },
				{ id: String(autoIncrementalId()), title: 'Vallas móviles' },
			]}
			onCh_checkboxCampaign={() => {}}
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
									valueDescription: 'Proveedor 1',
									valueResponsable: 'Gabriela Serna',
									valueTask: 'Proveedor 1',
								},
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
									valueDescription: 'Proveedor 2',
									valueResponsable: 'Gabriela Serna',
									valueTask: 'Proveedor 2',
								},
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
									valueDescription: 'Proveedor 3',
									valueResponsable: 'Gabriela Serna',
									valueTask: 'Proveedor 3',
								},
							],
						},
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
							valueDescription: 'MTY',
							valueResponsable: 'Gabriela Serna',
							valueTask: 'MTY',
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
