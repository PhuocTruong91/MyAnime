import {useQuery} from 'react-query';
import {getSource} from '../service/Service'

export const useFectchSource = (animeId,episodeIndex) => {
    return useQuery(
        "source", 
        () => getSource(animeId, episodeIndex),
      );
}