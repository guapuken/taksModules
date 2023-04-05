import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import '../../global.scss';
import css from './dropdown.module.scss';

const Icon = (fillColor?: string, isOpen?: Boolean) => {
	return (
		<svg
			height="20"
			width="20"
			viewBox="0 0 20 20"
			fill={fillColor || '#28282875'}
			style={{
				transform: isOpen ? 'rotate(180deg)' : '',
				transition: '.3s ease',
			}}
		>
			<path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
		</svg>
	);
};

const CloseIcon = () => {
	const [isHover, setIsHover] = useState(false);
	const ChangeOverState = () => {
		setIsHover(!isHover);
	};
	useEffect(() => {}, [isHover]);
	return (
		<svg
			onMouseEnter={ChangeOverState}
			onMouseLeave={ChangeOverState}
			height="15"
			width="15"
			viewBox="0 0 20 20"
			fill="#fff"
			style={{
				transform: isHover ? 'rotate(90deg)' : '',
				transition: '.3s ease',
			}}
		>
			<path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
		</svg>
	);
};

interface optionsDropdownTypes {
	value: string | number;
	label: string;
}
export interface DropdownProps {
	placeHolder?: string;
	options?: optionsDropdownTypes[];
	isMulti?: boolean;
	isSearchable?: boolean;
	topPosition?: boolean;
	onChange: (e: React.FormEvent<HTMLInputElement>) => void;
	initialValue?: optionsDropdownTypes;
	values?: optionsDropdownTypes[];
	style?: CSSProperties;
}

const Dropdown = (props: DropdownProps) => {
	const {
		placeHolder,
		options = [],
		isMulti,
		isSearchable = false,
		onChange,
		initialValue,
		values,
		topPosition,
		style,
	} = props;
	const [showMenu, setShowMenu] = useState(false);
	const [selectedValue, setSelectedValue] = useState<any>(
		isMulti ? values || [] : initialValue || null
	);
	const [searchValue, setSearchValue] = useState<any>('');
	const searchRef = useRef<any>(null);
	const inputRef = useRef<any>(null);

	useEffect(() => {
		setSearchValue('');
		if (showMenu && searchRef.current) {
			searchRef.current.focus();
		}
	}, [showMenu]);

	useEffect(() => {
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
		if (!selectedValue || (isMulti && selectedValue.length) === 0) {
			return placeHolder;
		}
		if (isMulti) {
			return (
				<div className={css.dropdownTags}>
					{selectedValue.map((option: optionsDropdownTypes) => (
						<div key={option.value} className={css.dropdownTagItem}>
							{option.label}
							<span
								onClick={(e) => onTagRemove(e, option)}
								className={css.dropdownTagClose}
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
		onChange(newValue);
	};

	const onItemClick = (option: any) => {
		let newValue;
		if (isMulti) {
			if (selectedValue.findIndex((o: any) => o.value === option.value) >= 0) {
				newValue = removeOption(option);
			} else {
				newValue = [...selectedValue, option];
			}
		} else {
			newValue = option;
		}
		setSelectedValue(newValue);
		onChange(newValue);
	};

	const isSelected = (option: any) => {
		if (isMulti) {
			return selectedValue.filter((o: any) => o.value === option.value).length > 0;
		}

		if (!selectedValue) {
			return false;
		}

		return selectedValue.value === option.value;
	};

	const onSearch = (e: any) => {
		setSearchValue(e.target.value);
	};

	const getOptions = () => {
		if (!searchValue) {
			return options;
		}

		return options?.filter(
			(option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
		);
	};

	function sizeDrop() {
		return getOptions().length < 5 ? (getOptions().length + (isSearchable ? 1 : 0)) * 3 : 15;
	}
	console.log(sizeDrop());
	return (
		<div className={css.dropdownContainer} style={style}>
			<div ref={inputRef} onClick={handleInputClick} className={css.dropdownInput}>
				<div className={css.dropdownSelectedValue}>{getDisplay()}</div>
				<div className={css.dropdownTools}>
					<div className={css.dropdownTool}>
						{Icon(undefined, showMenu ? true : false)}
					</div>
				</div>
			</div>
			{showMenu && (
				<div
					className={css.dropdownMenu}
					style={{
						maxHeight: `${sizeDrop() * 10}px`,
						transform: `translate(-5px, ${
							topPosition ? `-${sizeDrop() + 3 * 10}px` : '1px'
						})`,
					}}
				>
					{isSearchable && (
						<div className={css.searchBox}>
							<input onChange={onSearch} value={searchValue} ref={searchRef} />
						</div>
					)}
					{getOptions()?.map((option) => (
						<div
							onClick={() => onItemClick(option)}
							key={option.value}
							className={`${css.dropdownItem} ${isSelected(option) && 'selected'}`}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
