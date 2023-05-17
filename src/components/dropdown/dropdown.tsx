import React, { useEffect, useState } from 'react';
// componentes principales
import { CloseIcon, Icon } from './files';
// types
import { dropdown } from './types';
import { optionsDropdown } from '../../types';
// types de la documentación NO BORRAR
import { Modo, onChangeType } from '../../types';
// estilos
import './dropdown.scss';

/**documentación de componente
 * @param {optionsDropdown[]} props.options - recibe un arreglo de objetos con los siguientes datos:
		value,
		label
 * @param {onChangeType} props.onChange - recibe una función que se ejecuta cuando cambia el estado del componente
 * @param {optionsDropdown[]} props.values- recibe un arreglo de objetos con los siguientes datos:
		value,
		label
 * @param {optionsDropdown} props.initialValue - recibe un objeto con los siguientes datos:
		value,
		label
 * @param {string} props.placeholder - string que se colocará como placeholder
 * @param {boolean} props.isMulti - boolean que define si el dropdown será múltiple o no
 * @param {boolean} props.isSearchable - boolean que deefine si se podrá buscar un daato dentro del dropdown
 * @param {boolean} props.topPosition - boolean que define si el dropdoww se mostrará arriba o abajo
 * @param {React.CSSProperties} props.style - objeto con propiedades de css 
 * @param {Modo} props.modo - define el color del tema que se encuentra activo
 * 
 */
const Dropdown = (props: dropdown) => {
	// debugger;

	const datos = { ...props };
	const [showMenu, setShowMenu] = useState(false);
	const [selectedValue, setSelectedValue] = useState<any>(
		datos.isMulti ? datos.values : datos.initialValue
	);
	const [searchValue, setSearchValue] = React.useState<any>('');
	const searchRef = React.useRef<any>(null);
	const inputRef = React.useRef<any>(null);

	React.useEffect(() => {
		setSearchValue('');
		if (showMenu && searchRef.current) {
			searchRef.current.focus();
		}
	}, [showMenu]);

	React.useEffect(() => {
		const handler = (e: any) => {
			if (inputRef.current && !inputRef.current.contains(e.target)) {
				setShowMenu(false);
			}
		};

		window.addEventListener('click', handler);
		return () => {
			window.removeEventListener('click', handler);
		};
	});

	// use effect que vuelve a settear el valor inicial cuando cambia desde las props que recibe
	useEffect(() => {
		setSelectedValue(datos.initialValue || datos.values);
	}, [datos.initialValue || datos.values]);

	const handleInputClick = (e: any) => {
		setShowMenu(!showMenu);
	};

	// muestra los valores dentro del dropdown que se existen dependiendo si es de múltiple selección o de selección simple
	const getDisplay = () => {
		// si no enecuenta un valor seleccionado o valor inicial se coloca el placeholder
		if (!selectedValue || (datos.isMulti && selectedValue.length) === 0)
			return datos.placeHolder;
		// si el dropdown es de selección múltiple se crean las tags para encapsular las opciones seleccionadas
		if (datos.isMulti)
			return (
				<div className={'dropdownTags'}>
					{selectedValue.map((option: optionsDropdown) => (
						<div key={option.id} className={'dropdownTagItem'}>
							{option.title}
							<span
								onClick={(e) => onTagRemove(e, option)}
								className={'dropdownTagClose'}
							>
								<CloseIcon />
							</span>
						</div>
					))}
				</div>
			);
		// se regresa la propiedad de title del valor seleccionado
		return selectedValue.title;
	};

	const removeOption = (option: any) => {
		return selectedValue?.filter((o: any) => o.id !== option.id);
	};

	const onTagRemove = (e: any, option: any) => {
		e.stopPropagation();
		const newValue = removeOption(option);
		setSelectedValue(newValue ? newValue : null);
		if (datos.onCh) {
			datos.onCh(newValue ? newValue : null);
		}
	};

	const onItemClick = (option: any) => {
		let newValue;
		if (datos.isMulti) {
			if (selectedValue.findIndex((o: any) => o.id === option.id) >= 0) {
				newValue = removeOption(option);
			} else {
				newValue = [...selectedValue, option];
			}
		} else {
			newValue = option;
		}
		if (datos.onCh) {
			datos.onCh(newValue);
		}
		setSelectedValue(newValue);
	};

	const isSelected = (option: any) => {
		if (datos.isMulti) {
			return selectedValue.filter((o: any) => o.id === option.id).length > 0;
		}

		if (!selectedValue) {
			return false;
		}

		return selectedValue.id === option.id;
	};

	const onSearch = (e: any) => {
		if (datos.onCh) {
			datos.onCh(e);
		}
		setSearchValue(e.target.value);
	};

	const getOptions = () => {
		if (!searchValue) {
			return datos.options;
		}

		return datos.options?.filter(
			(option) => option.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
		);
	};

	function sizeDrop() {
		return getOptions().length < 5
			? (getOptions().length + (datos.isSearchable ? 1 : 0)) * 3
			: 15;
	}
	return (
		<div className={'dropdownContainer'} style={datos.style}>
			<div ref={inputRef} onClick={handleInputClick} className={'dropdownInput'}>
				<div className={'dropdownSelectedValue'}>{getDisplay()}</div>
				<div className={'dropdownTools'}>
					<div className={'dropdownTool'}>{Icon(undefined, showMenu ? true : false)}</div>
				</div>
			</div>
			{showMenu && (
				<div
					className={'dropdownMenu'}
					style={{
						maxHeight: `${sizeDrop() * 10}px`,
						transform: `translate(-5px, ${
							datos.topPosition ? `-${(sizeDrop() + 3) * 10}px` : '1px'
						})`,
					}}
				>
					{datos.isSearchable && (
						<div className={'searchBox'}>
							<input onChange={onSearch} value={searchValue} ref={searchRef} />
						</div>
					)}
					{getOptions()?.map((option) => {
						return (
							<div
								onClick={() => onItemClick(option)}
								key={option.id}
								className={`${'dropdownItem'} ${isSelected(option) && 'selected'}`}
							>
								{option.title}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
