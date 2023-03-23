/// <reference types="react" />
import '../../styles.scss';
export interface CardsProps {
    width?: number;
    height?: number;
    rounded?: boolean;
    Content?: any;
    Aside?: any;
    data?: any;
}
declare const Cards: (props: CardsProps) => JSX.Element;
export default Cards;
