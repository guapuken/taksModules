import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import { Dropdown, InputLabel, Task, Texts, Title } from '../../components';
import { ButtonCompound } from '..';
import SwitchSiNo from '../Switch/Switch';
import { AddTask } from '../../components/task/files';
import { tasksTemplates } from '../../types';
import { modalTemplates } from '../../components/Modales/Create/Templates/types/types';

const ModalTemplates = ({
	idTemplate,
	onCh_templateName,
	templateNameValue,
	onCl_addTask,
	tasks,
	modo,
	onCh_dropDownTipoMedio,
	optionsTipoMedio,
	valueTipoMedio,
	onCl_plantillaCampania,
	isMannager,
	onCh_checkboxPrintBF,
	valueCheckboxPrintBF,
	valueTipoPlantillaVenta,
	valueTipoPlantillaPostventa,
	onCl_plantillaMedio,
	onCl_plantillaReporte,
	disabledPreventa,
	disabledVenta,
	disabledPostventa,
	valueTemplateType,
	onCl_postventaTemplate,
	onCl_ventaTemplate,
	onCl_preventaTemplate,
	onCl_abort,
	edit,
	disabledPlantillaMedio,
	disabledPlantillaCampania,
	disabledPlantillaReporte,
	disabledCheckboxPrintBF,
	tipoPlantillaRuta,
	onCl_confirm,
}: modalTemplates) => {
	const [tipoPlantilla, setTipoPlantilla] = useState<string | any>(valueTemplateType || null);
	const [tipoPlantillaVenta, setTipoPlantillaVenta] = useState<string | any>(
		valueTipoPlantillaVenta || null
	);
	const [tipoPlantillaPostventa, setTipoPlantillaPostventa] = useState<string | any>(
		valueTipoPlantillaPostventa || null
	);

	useEffect(() => {
		setTipoPlantilla(valueTemplateType);
	}, [valueTemplateType]);

	useEffect(() => {
		setTipoPlantillaVenta(valueTipoPlantillaVenta);
	}, [valueTipoPlantillaVenta]);

	useEffect(() => {
		setTipoPlantillaPostventa(valueTipoPlantillaPostventa);
	}, [valueTipoPlantillaPostventa]);

	const handleClick = (e: any, tipo: 'Preventa' | 'Venta' | 'Postventa') => {
		e?.preventDefault();
		if (!disabledPreventa && !disabledVenta && !disabledPostventa) setTipoPlantillaVenta(null);
		if (!disabledPreventa && !disabledVenta && !disabledPostventa)
			setTipoPlantillaPostventa(null);
		if (tipo === tipoPlantilla && !disabledPreventa && !disabledVenta && !disabledPostventa)
			setTipoPlantilla(null);
		if (tipo === 'Postventa' && onCl_postventaTemplate) onCl_postventaTemplate(e);
		if (tipo === 'Venta' && onCl_ventaTemplate) onCl_ventaTemplate(e);
		if (tipo === 'Preventa' && onCl_preventaTemplate) onCl_preventaTemplate(e);
		else setTipoPlantilla(tipo);
	};

	const getDropdownTipoMedio = () => (
		<>
			<Texts modo={modo}>Selecciona el tipo de medio</Texts>
			<Dropdown
				modo={modo}
				onCh={onCh_dropDownTipoMedio}
				options={optionsTipoMedio as any}
				initialValue={valueTipoMedio}
				isSearchable
				placeHolder="Tipos de medio"
				disabled={edit}
			/>
		</>
	);

	const tiposPlantillaToShow = {
		Preventa: () => getDropdownTipoMedio(),
		Venta: () => (
			<>
				<div style={{ width: '100%', display: 'flex' }}>
					<ButtonCompound
						color={
							tipoPlantillaVenta === 'PlantillaMedio'
								? 'var(--detailFont)'
								: 'var(--fc30)'
						}
						style={{ width: '100%', borderRadius: '5px 0 0 5px' }}
						onClick={(e: any) => {
							setTipoPlantillaVenta('PlantillaMedio');
							if (onCl_plantillaMedio) onCl_plantillaMedio(e);
						}}
						disabled={disabledPlantillaMedio}
					>
						<ButtonCompound.Legend>Plantilla de medio</ButtonCompound.Legend>
					</ButtonCompound>
					<ButtonCompound
						onClick={(e: any) => {
							setTipoPlantillaVenta('PlantillaCampania');
							if (onCl_plantillaCampania) onCl_plantillaCampania(e);
						}}
						color={
							tipoPlantillaVenta === 'PlantillaCampania'
								? 'var(--detailFont)'
								: 'var(--fc30)'
						}
						style={{ width: '100%', borderRadius: '0 5px 5px 0' }}
						disabled={disabledPlantillaCampania}
					>
						<ButtonCompound.Legend>Plantilla de campaña</ButtonCompound.Legend>
					</ButtonCompound>
				</div>

				{tipoPlantillaVenta !== null && (
					<div style={{ display: 'flex', marginTop: '15px', gap: '15px' }}>
						{tipoPlantillaVenta === 'PlantillaMedio' && (
							<div style={{ width: '50%' }}>
								<SwitchSiNo
									check={valueCheckboxPrintBF}
									onChange={onCh_checkboxPrintBF}
									label="Impresión en BF"
									id="1"
									disabled={disabledCheckboxPrintBF}
								/>
							</div>
						)}
						<div style={{ width: '150%' }}>{getDropdownTipoMedio()}</div>
					</div>
				)}
			</>
		),
		Postventa: () => (
			<>
				<div style={{ width: '100%', display: 'flex' }}>
					<ButtonCompound
						color={
							disabledPlantillaMedio
								? 'var(--fc60)'
								: tipoPlantillaPostventa === 'PlantillaMedio'
								? 'var(--detailFont)'
								: 'var(--fc30)'
						}
						style={{ width: '100%', borderRadius: '5px 0 0 5px' }}
						onClick={(e: any) => {
							setTipoPlantillaPostventa('PlantillaMedio');
							if (onCl_plantillaMedio) onCl_plantillaMedio(e);
						}}
						disabled={disabledPlantillaMedio}
					>
						<ButtonCompound.Legend>Plantilla de medio</ButtonCompound.Legend>
					</ButtonCompound>
					<ButtonCompound
						onClick={(e: any) => {
							setTipoPlantillaPostventa('PlantillaReporte');
							if (onCl_plantillaReporte) onCl_plantillaReporte(e);
						}}
						color={
							disabledPlantillaReporte
								? 'var(--fc60)'
								: tipoPlantillaPostventa === 'PlantillaReporte'
								? 'var(--detailFont)'
								: 'var(--fc30)'
						}
						style={{ width: '100%', borderRadius: '0 5px 5px 0' }}
						disabled={disabledPlantillaReporte}
					>
						<ButtonCompound.Legend>Plantilla de reporte</ButtonCompound.Legend>
					</ButtonCompound>
				</div>
				{tipoPlantillaPostventa === 'PlantillaMedio' && (
					<>
						<div style={{ marginTop: '15px' }}>{getDropdownTipoMedio()}</div>
						{tipoPlantillaRuta && (
							<Title
								modo={modo}
								style={{ marginTop: '15px' }}
							>{`Plantilla de ${tipoPlantillaRuta}`}</Title>
						)}
					</>
				)}
			</>
		),
	};

	const getTipoPlantilla = (tipo: 'Preventa' | 'Venta' | 'Postventa') => {
		if (tiposPlantillaToShow[tipo]) return tiposPlantillaToShow[tipo]();
	};

	return (
		<Modal
			height={'100%'}
			modo={modo}
			width={'50vw'}
			style={{ maxWidth: 700 }}
			onClickBg={onCl_abort}
		>
			<Modal.Header closeIcon onClickClose={onCl_abort} modo={modo}>
				Registro de plantillas
			</Modal.Header>
			<Modal.Contenido height={'calc(100% - 100px)'}>
				<InputLabel
					id={idTemplate}
					legend="Nombre de la plantilla"
					onCh={onCh_templateName}
					initialValue={templateNameValue}
					modo={modo}
				/>
				{isMannager && (
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<div style={{ display: 'flex', width: '100%', marginTop: '15px' }}>
							<ButtonCompound
								onClick={(e: any) => handleClick(e, 'Preventa')}
								color={
									disabledPreventa
										? 'var(--fc60)'
										: tipoPlantilla === 'Preventa'
										? 'var(--detailFont)'
										: 'var(--fc30)'
								}
								style={{ width: '100%', borderRadius: '5px 0 0 5px' }}
								disabled={disabledPreventa}
							>
								<ButtonCompound.Legend>Plantilla de preventa</ButtonCompound.Legend>
							</ButtonCompound>
							<ButtonCompound
								onClick={(e: any) => handleClick(e, 'Venta')}
								color={
									disabledVenta
										? 'var(--fc60)'
										: tipoPlantilla === 'Venta'
										? 'var(--detailFont)'
										: 'var(--fc30)'
								}
								disabled={disabledVenta}
								style={{ width: '100%', borderRadius: '0' }}
							>
								<ButtonCompound.Legend>Plantilla de venta</ButtonCompound.Legend>
							</ButtonCompound>
							<ButtonCompound
								onClick={(e: any) => handleClick(e, 'Postventa')}
								color={
									disabledPostventa
										? 'var(--fc60)'
										: tipoPlantilla === 'Postventa'
										? 'var(--detailFont)'
										: 'var(--fc30)'
								}
								disabled={disabledPostventa}
								style={{ width: '100%', borderRadius: '0 5px 5px 0' }}
							>
								<ButtonCompound.Legend>
									Plantilla de postventa
								</ButtonCompound.Legend>
							</ButtonCompound>
						</div>
						{tipoPlantilla !== null && (
							<div
								style={{
									boxShadow: 'inset 0 0 0 2px var(--detailFont)',
									padding: '15px',
								}}
							>
								{getTipoPlantilla(tipoPlantilla)}
							</div>
						)}
					</div>
				)}
				<AddTask modo={modo} legend="+ Añadir tarea" onClick={onCl_addTask} />
				<div
					style={{
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
								valueTeam={indTask?.valueTeam}
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
				</div>
			</Modal.Contenido>
			<Modal.Footer
				style={{
					display: 'flex',
					gap: 15,
					justifyContent: 'center',
					alignItems: 'center',
				}}
				height={50}
			>
				<ButtonCompound
					onClick={onCl_abort}
					color="var(--sec-btn)"
					style={{ width: '50%' }}
				>
					<ButtonCompound.Legend>
						{edit ? 'Descartar cambios' : 'Cancelar'}
					</ButtonCompound.Legend>
				</ButtonCompound>
				<ButtonCompound
					onClick={onCl_confirm}
					color="var(--pri-btn)"
					style={{ width: '50%' }}
				>
					<ButtonCompound.Legend>
						{edit ? 'Guardar cambios' : 'Crear plantilla'}
					</ButtonCompound.Legend>
				</ButtonCompound>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalTemplates;
