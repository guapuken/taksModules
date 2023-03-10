
import React, { useState } from  "react";
import "./notifications.scss";



type stringTypes= {};

export interface NotificationsProps {
    color?: string;
    switch?: string;
    width?: number;
    height?: number;
    checkValue?: boolean;
   
}

const Notifications= (props:NotificationsProps) => {
  const {width=3, checkValue=false}=props

  const [check, setCheck] = useState(checkValue)
    return(
      <>
        <div className="switch">
        <input id="switch-1" type="checkbox" className="switch-input" checked={check} onChange={()=>setCheck(!check)}/>
        <label htmlFor="switch-1" className=" switch-label" icon-name={'../../'}><button onClick={()=>setCheck(!check)}><img src="" alt="" /></button></label>   
        </div>
      </>
    )    
}


export default Notifications;