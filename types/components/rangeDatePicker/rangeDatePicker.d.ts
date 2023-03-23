import { CSSProperties } from 'react';
import { onChangeType } from '../../utils/types/typesUtils';
import '../../styles.scss';
import './rangeDatePicker.scss';
export interface RangeDatePickerProps {
    startDateValue?: Date;
    endDateValue?: Date;
    style?: CSSProperties;
    disabledStartDate?: boolean;
    disabledEndDate?: boolean;
    onChangeStartDate?: onChangeType;
    onChangeEndDate?: onChangeType;
}
declare const RangeDatePicker: (props: RangeDatePickerProps) => JSX.Element;
export default RangeDatePicker;
