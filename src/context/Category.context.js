import {createContext, useState} from "react";

export const PageContext = createContext("")


export const PageProvider =({children})=>{
    const [isOpen, setIsOpen] = useState(false)
    const value = {
        isOpen,
        setIsOpen
    }
    return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}