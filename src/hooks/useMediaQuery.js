import { useState,useEffect } from "react"
export const useMediaQuery = (query) => {
    const [mql,setMql] = useState(window.matchMedia(query))
    useEffect(() => {
        mql.onchange = e=>setMql(e);
    }, [mql]);
    return mql.matches
}