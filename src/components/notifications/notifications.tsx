import React from  "react";
// import "./notifications.scss";

type stringTypes= {}

export interface NotificationsProps {
    icon?:string;
    color?: string;
    switch?: string
    widrh: 21,
    hwagth: 34,
    padding:7,
    mergin:1,
  
}

const Notifications= (props:NotificationsProps) => {
    return(
        <form action="#">
  <div className="switch">
    <input id="switch-1" type="checkbox" className="switch-input" />
    <label htmlFor="switch-1" className="switch-label">Switch</label>
  </div>
</form>
    )    
}


export default Notifications;