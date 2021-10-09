import React from 'react';
import {useParams,useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
import {useFectchInfo} from '../../hooks/useFectchInfo'
import {
    Container,
    Banner,
    Header,
    AvatarMovie,
    Detail,
    Button,
    Title,
    Description,
    WrapDisplayEpisode,
    DisplayEpisode,
    WrapEpisode,
    AvatarEpisode,
    TitleEpisode,
    ViewEpisode
} from './InfoVideo.elements'


const InfoVideo = (props) => {

    const [episodeList, setEpisodeList] = React.useState();
    const [display, setDisplay] = React.useState(false)
    const [listEpisodeIndex, setListEpisodeIndex] = React.useState(0);
    const [anime, setAnime] = React.useState([]);
    const {slug} = useParams();
    const {data,isLoading} = useFectchInfo(slug);

    React.useEffect(() => {
        if (isLoading) return;
        setAnime(data);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [isLoading,data]);
    

    React.useEffect(() => {    
        if (anime.description) {
            const ArraySplit = (arr, number) => {
                let array = [];
                for (let i = 0; i < arr.length; i += number) {
                    array.push(arr.slice(i, i + number))
                }
                setEpisodeList(array);
            }
            ArraySplit(anime.episodes, 30)
        }
    }, [isLoading,anime])

    const handleDisplayEpisode = (index) => {
        setDisplay(!display)
        setListEpisodeIndex(index)
    }

    return (
        isLoading ?
            (
                <Container>
                    <Banner isloading={isLoading} style={{ background: 'gray' }}></Banner>
                    <Header>
                        <AvatarMovie isloading={isLoading} style={{ background: 'darkgray' }}></AvatarMovie>
                        <Detail>
                            <Title >{anime.name}</Title>
                            <Description >{anime.description}</Description>
                            <Title ></Title>
                            <Description></Description>
                        </Detail>
                    </Header>
                </Container>
            )
            :
            (
                <Container>
                    <Banner style={{ backgroundImage: `url(${anime.thumbnail})` }}></Banner>
                    <Header>
                        <AvatarMovie style={{ backgroundImage: `url(${anime.thumbnail})` }}></AvatarMovie>
                        <Detail>
                            <Button>Xem phim</Button>
                            <Title>{anime.name}</Title>
                            <Description>{anime.description}</Description>
                        </Detail>
                    </Header>
                    <WrapDisplayEpisode>
                        {
                            episodeList?.map((episodeList2, index1) => {
                                const firstEpisode = episodeList2[0].name;
                                const lastEpisode = episodeList2[(episodeList2.length - 1)].name;
                                return (
                                    <div style ={{width: '100%'}} key={index1}>
                                        <DisplayEpisode  onClick={() => handleDisplayEpisode(index1)}>Tập {firstEpisode} - Tập {lastEpisode}</DisplayEpisode>
                                        {episodeList2.map((episode, index2) => (
                                            <Link  style={{ textDecoration: 'none', width: '100%'}} to={{
                                                pathname: `/watch/${anime.slug}?episode_index=${episode.name}`,
                                                data: {
                                                    id: anime.id,
                                                    index: episode.name
                                                }
                                            }}>
                                                <WrapEpisode className={display === true && listEpisodeIndex === index1 ? 'display' : ''} display={display} key={index2}>

                                                    <AvatarEpisode style={{ backgroundImage: `url(${episode.thumbnail_medium})` }} ></AvatarEpisode>
                                                    <TitleEpisode>{episode.full_name}</TitleEpisode>
                                                    <ViewEpisode>Lượt Xem:  {episode.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</ViewEpisode>

                                                </WrapEpisode>
                                            </Link>

                                        ))
                                        }
                                    </div>
                                )
                            })
                        }
                    </WrapDisplayEpisode>
                </Container >
            )
    );
};

export default InfoVideo;