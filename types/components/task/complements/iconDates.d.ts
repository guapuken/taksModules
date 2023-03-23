/// <reference types="react" />
import { onChangeType } from '../../../utils/types/typesUtils';
interface IconDatesProps {
    plantillas?: boolean;
    className?: string;
    onChangeDias?: onChangeType;
    onChangeEndDate?: onChangeType;
    onChangeStartDate?: onChangeType;
    endDateValue?: Date;
    startDateValue?: Date;
    disabledEndDate?: boolean;
    disabledStartDate?: boolean;
    durationValue?: string;
}
export declare const IconDates: (props: IconDatesProps) => JSX.Element;
export {};
