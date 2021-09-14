import  { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
export const useQuery = () => {
    const location = useLocation()
    const [queryState, setqueryState] = useState(new URLSearchParams(
        useLocation().search
    ))
    useEffect(() => {
        setqueryState(new URLSearchParams(
            location.search
        ))
        return () => {
        }
    }, [])
    return queryState
}