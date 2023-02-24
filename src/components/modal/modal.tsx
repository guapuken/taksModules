import React from "react";
import './modal.scss'   

export interface ModalProps{
    Content?: any;
    data?: any;
    style?:{};
}
const Modal = (props:ModalProps)=>{
    const {Content, data, style}=props
    return (
        <div className="ContainerModal" style={style}>
            {!Content ? 
            <div className="NoModalContent">
                <div>
                    <h2>Without content 😥</h2>
                    <p>Add property Content and see it </p>
                </div>
            </div>
            :
            <div className="ModalContent">
                <Content {...data}/>
            </div>}
        </div>
    )
}

export default Modal;
