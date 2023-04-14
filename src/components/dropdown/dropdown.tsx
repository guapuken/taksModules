import React from 'react';
// componentes principales
import { CloseIcon, Icon } from './files';
// types
import { dropdown } from './types';
import { optionsDropdown } from '../../types';
// estilos
import './dropdown.scss';

const Dropdown = (props: dropdown) => {
	const datos = { ...props };
	const [showMenu, setShowMenu] = React.useState(false);
	const [selectedValue, setSelectedValue] = React.useState<any>(
		datos.isMulti ? datos.values || [] : datos.initialValue || null
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
	const handleInputClick = (e: any) => {
		setShowMenu(!showMenu);
	};

	const getDisplay = () => {
		if (!selectedValue || (datos.isMulti && selectedValue.length) === 0) {
			return datos.placeHolder;
		}
		if (datos.isMulti) {
			return (
				<div className={'dropdownTags'}>
					{selectedValue.map((option: optionsDropdown) => (
						<div key={option.value} className={'dropdownTagItem'}>
							{option.label}
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
		}
		return selectedValue.label;
	};

	const removeOption = (option: any) => {
		return selectedValue?.filter((o: any) => o.value !== option.value);
	};

	const onTagRemove = (e: any, option: any) => {
		e.stopPropagation();
		const newValue = removeOption(option);
		setSelectedValue(newValue ? newValue : null);
		if (datos.onChange) {
			datos.onChange(newValue ? newValue : null);
		}
	};

	const onItemClick = (option: any) => {
		let newValue;
		if (datos.isMulti) {
			if (selectedValue.findIndex((o: any) => o.value === option.value) >= 0) {
				newValue = removeOption(option);
			} else {
				newValue = [...selectedValue, option];
			}
		} else {
			newValue = option;
		}
		setSelectedValue(newValue);
		if (datos.onChange) {
			datos.onChange(newValue);
		}
	};

	const isSelected = (option: any) => {
		if (datos.isMulti) {
			return selectedValue.filter((o: any) => o.value === option.value).length > 0;
		}

		if (!selectedValue) {
			return false;
		}

		return selectedValue.value === option.value;
	};

	const onSearch = (e: any) => {
		setSearchValue(e.target.value);
		if (datos.onChange) {
			datos.onChange(e);
		}
	};

	const getOptions = () => {
		if (!searchValue) {
			return datos.options;
		}

		return datos.options?.filter(
			(option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
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
								key={option.value}
								className={`${'dropdownItem'} ${isSelected(option) && 'selected'}`}
							>
								{option.label}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
