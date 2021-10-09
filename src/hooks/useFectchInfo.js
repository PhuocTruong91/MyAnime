import { useQuery } from 'react-query'
import { getAnime } from '../service/Service'


export const useFectchInfo = (slug) => {
    return useQuery('info', () => getAnime(slug))
}