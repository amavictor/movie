import {createContext, useState} from "react";

export const PageContext = createContext("")


export const PageProvider =({children})=>{
    const [noNav, setNoNav] = useState(false)
    const value = {
        noNav,
        setNoNav
    }
    return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}