import React from 'react';
import axios from 'axios';


export const VideoContext = React.createContext()

const VideoProvider = ({children}) => {

    const [slide,setSlide] = React.useState([]);
    const [recommend,setRecommend] = React.useState([]);
    const [ngay,setNgay] = React.useState([]);
    const [tuan,setRemain] = React.useState([]);
    const [thang,setThang] = React.useState([]);
    const [nam,setNam] = React.useState([]);
    const [anime,setData] = React.useState([]);
    
    React.useEffect(() => {
        const getData = async () =>{
            const slide =  await axios.get('https://netime.glitch.me/api/v1/slide')
            setSlide(slide.data.data);
            const recommend =  await axios.get('https://netime.glitch.me/api/v1/recommended')
            setRecommend(recommend.data.data);
            const ngay =  await axios.get('https://netime.glitch.me/api/v1/ranking/ngay')
            setNgay(ngay.data.data);
            const tuan =  await axios.get('https://netime.glitch.me/api/v1/ranking/tuan')
            setRemain(tuan.data.data);
            const thang =  await axios.get('https://netime.glitch.me/api/v1/ranking/thang')
            setThang(thang.data.data);
            const nam =  await axios.get('https://netime.glitch.me/api/v1/ranking/nam')
            setNam(nam.data.data);
            const anime = await axios.get('https://netime.glitch.me/api/v1/anime/vua-hai-tac')
            setData(anime.data.data);
        }
        getData()
    },[])


    return (
        <VideoContext.Provider value ={{slide,recommend,ngay,tuan,thang,nam,anime}}>
            {children}
        </VideoContext.Provider>
    );
};

export default VideoProvider;