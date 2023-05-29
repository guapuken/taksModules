import React, { useState } from 'react';
// utilidades del storybook
import { storiesOf } from '@storybook/react';
// componentes principales
import ModalTemplates from '../Templates/modalPlantillas';
import { autoIncrementalId } from '../../../../utils/functions/functions';
import { equipos, responsable, revision, templateOptions } from '../../data/exampleData';

function DemoComponent() {
	const [template, setTemplate] = useState(undefined);
	return (
		<ModalTemplates
			onCl_close={() => {}}
			idTemplate="1"
			modo="Light"
			// isMannager
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
					idTask: String(autoIncrementalId()),
					valueTask: 'Bloqueos',
					valueDescription: 'Realizar los bloqueos de los siguientes sitios',
					modo: 'Light',
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
