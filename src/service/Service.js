import axios from 'axios';


const API_URL = 'https://netime.glitch.me/api/v1';

const instance = axios.create({
    baseURL: API_URL,
  });

export const getSlide = async () => {
    const res = await instance.get('/slide')
    return res.data.data;
}

export const getRecommend = async () => {
    const res = await instance.get('/recommended')
    return res.data.data;
}

export const getRank = async (rank) => {
    const res = await instance.get(`/ranking/${rank}`)
    return res.data.data;
}

export const getAnime = async (anime) => {
    const res = await instance.get(`/anime/${anime}`)
    return res.data.data;
}

export const search = async  (props) => {
    const {data} = await instance.get(`/search/`,{
        params: props
    })

    return data;
}

export const getSource = async (animeId,episodeIndex) => {
    const {data} = await instance.get(`/anime/${animeId}/episodes/${episodeIndex}`);

    return data;
}