import { createContext, useContext } from "react"

const ButtonContext = createContext(null);

export function useButtonContext(){
    const context = useContext(ButtonContext);
    if(!context) throw new Error('')
    return context
}

export default ButtonContext;