import React, { useEffect, useState } from 'react';

// types
import { aside } from './types/types';

// componentes principales
import { ErrorNc, NoTasks } from './principalComponents';

// componentes auxiliares
import { /* IconDropdown, */ Carousel, Dropdown } from '../../components';
import { SimpleContainer, ValidationComponent } from '../Atoms';
// import { ButtonItem } from '../../utils/asideUtils';

// funciones
import { useWindowSize } from '../../utils/windowSize';
import { aspectRatio } from '../../utils/functions/functions';
import IconDropdown from '../iconDropdown/iconDropdown';

// // archivos multimedia
// import filter from '../../img/filter.svg';
// import orderIcon from '../../img/order.svg';

// types que se utilizan en documentación ----------------------------------------------------------------------
import { Modo, onChangeType, optionsDropdown, optionsIcnDrp } from '../../types';
//--------------------------------------------------------------------------------------------------------------

// styles
import './styles/aside.scss';

/** documentación del componente
 * @param {boolean} isWhite - define si el Aside contiene un color de fondo
 * @param {any} children - obtiene el componente o el children que será usado
 * @param {Modo} modo - define el tema en el que se encuentra el componente
 * @param {boolean} visible - define si el aside será visible o no

 * @returns - renderiza un aside que recibe elementos y los muestra con un bg dependiendo el color
 */
const AsideTemplates = ({
	modo = 'Light',
	visible,
	imageNoTasks,
	priText,
	secText,
	tasks = [],
	legendBtn,
	idSection,
	onCl_btn,
	onCh_dropdown,
	initialValueDropdown,
	optionsDropdown = [],
	Card,
	// optionsFilter,
	// onCl_reorder,
	placeholderDropdown,
	themeStyle,
}: aside) => {
	const scrnH = useWindowSize().height;

	/*
	TODO: Activar los filtros

	const [order, setOrder] = useState(true);
	const [filterBy, setFilterBY] = useState('');

	function filterResult(array: any, property: any, order: any) {
		array.sort((a: any, b: any) => {
			let sortOrder = order ? -1 : 1;
			if (a[property] > b[property]) {
				return sortOrder;
			} else if (a[property] < b[property]) {
				return -1 * sortOrder;
			} else {
				return 0;
			}
		});
		return array;
	}
	useEffect(() => {
		if (tasks) {
			filterResult(tasks, filterBy, order);
		}
	}, [order, filterBy]);
	*/
	return (
		<SimpleContainer
			labels={{
				className: `aside`,
				'theme-config': visible ? 'Dark' : modo,
				'theme-style': themeStyle,
				'vs-asd': visible ? 'visible' : 'noVisible',
			}}
		>
			<SimpleContainer className="aside__children">
				<ValidationComponent validate={optionsDropdown}>
					<SimpleContainer className="aside__children-dropdown">
						<Dropdown
							modo={visible ? 'Dark' : modo}
							onCh={onCh_dropdown as onChangeType}
							options={optionsDropdown}
							placeHolder={placeholderDropdown}
							initialValue={initialValueDropdown}
							style={{
								// width: `calc(100% - ${!aspectRatio() ? '40px' : '0px'})`,
								width: `100%`,
							}}
						/>
						{/* 
						FIXME: Cuando se vayan a activar los filtros se activará esta parte 

						 <ValidationComponent validate={!aspectRatio()}>
							<IconDropdown
								modo={visible ? 'Dark' : modo}
								icon={filter}
								options={optionsFilter as optionsIcnDrp[]}
							/>
							<ButtonItem id="orderArray" img={orderIcon} onClick={onCl_reorder} />
						</ValidationComponent>
						*/}
					</SimpleContainer>
				</ValidationComponent>
				{(!tasks || tasks.length === 0) && !priText && !secText ? (
					<ErrorNc modo={visible ? 'Dark' : modo} />
				) : (
					<SimpleContainer className="aside__children-contenido">
						<ValidationComponent validate={!aspectRatio() && tasks.length > 0}>
							{tasks?.map((individualTask) => (
								<Card
									key={individualTask.id}
									modo={visible ? 'Dark' : modo}
									{...individualTask}
								/>
							))}
						</ValidationComponent>
						<ValidationComponent validate={aspectRatio() && tasks.length > 0}>
							<Carousel
								data={tasks}
								Card={(e: any) => (
									<Card modo={visible ? 'Dark' : modo} {...e.property} />
								)}
								height={scrnH / 4 - 90}
							/>
						</ValidationComponent>
					</SimpleContainer>
				)}
				<ValidationComponent
					validate={(!tasks || tasks.length < 1) && (priText || secText)}
				>
					<NoTasks
						modo={modo}
						idSection={idSection}
						imageNoTasks={imageNoTasks}
						legendBtn={legendBtn}
						onCl_btn={onCl_btn}
						priText={priText}
						secText={secText}
					/>
				</ValidationComponent>
			</SimpleContainer>
		</SimpleContainer>
	);
};

export default AsideTemplates;
