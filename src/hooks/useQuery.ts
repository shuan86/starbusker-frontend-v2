import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom'
export const useQuery = () => {
    const [queryState, setqueryState] = useState(new URLSearchParams(
        useLocation().search
    ))
    const history = useHistory()
    useEffect(() => {
        history.listen((location) => {
            setqueryState(new URLSearchParams(
                location.search
            ))
        })

        return () => {
        }
    }, [])
    return queryState
}