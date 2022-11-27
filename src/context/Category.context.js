import {createContext, useState} from "react";

export const PageContext = createContext("")


export const PageProvider =({children})=>{
    const [noNav, setNoNav] = useState(false)
    const [moviesDay, setMoviesDay] = useState(true)

    const value = {
        noNav,
        setNoNav,
        moviesDay,
        setMoviesDay
    }
    return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}