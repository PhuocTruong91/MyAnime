import { useQuery } from 'react-query'
import { search } from '../service/Service'


export const useFetchSearch= (data) => {
    return useQuery('info', () => search(data))
}