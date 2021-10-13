import React from 'react';
// import Hls from 'hls.js'
// import "plyr/dist/plyr.css";
// import Plyr from 'plyr'
// import "./plyr.css"
import useQueryParams from '../../hooks/useQueryParams'
import { getSource } from '../../service/Service'
import { useLocation, useParams } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons'
// import { useFectchSource } from '../../hooks/useFectchSource';
// import { useFectchInfo } from '../../hooks/useFectchInfo';

const Video = () => {
    const { data } = useLocation();
    const query = useQueryParams();
    const [videoSource, setVideoSource] = React.useState();
    const [episodeIndex, setEpisodeIndex] = React.useState(
        Number(query.get("episode_index")) || 0
    );
    // const { slug } = useParams()
    // console.log(slug);
    // const { data, isloading } = useFectchInfo(slug)

    // if (data) {
    //     console.log(data.id);
    // }


    React.useEffect(() =>  {
        const res = getSource(data.id, data.index)
        res
            .then((data) => {
                console.log(data.data.videoSource);
                setVideoSource(data.data.videoSource)
            })
            .catch((err) => { console.log(err) })
    }, [data])

    

    // React.useEffect(() => {
    //     const controls = [
    //         'play-large', // The large play button in the center
    //         'rewind', // Rewind by the seek time (default 10 seconds)
    //         'play', // Play/pause playback
    //         'fast-forward', // Fast forward by the seek time (default 10 seconds)
    //         'progress', // The progress bar and scrubber for playback and buffering
    //         'current-time', // The current time of playback
    //         'duration', // The full duration of the media
    //         'mute', // Toggle mute
    //         'volume', // Volume control
    //         'captions', // Toggle captions
    //         'settings', // Settings menu
    //         'pip', // Picture-in-picture (currently Safari only)
    //         'airplay', // Airplay (currently Safari only)
    //         'fullscreen' // Toggle fullscreen
    //     ];
    //     Plyr.setup('.plyr__video-embed', { controls });

    // });

    // React.useEffect(() => {
    //     if (Hls.isSupported()) {
    //         const video = document.getElementById('player');
    //         const hls = new Hls();
    //         const source = videoSource;

    //         hls.attachMedia(video);
    //         hls.loadSource(source);
    //         hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
    //             video.play();
    //         });
    //     }

    // })

    return (
        videoSource ?
        <video style={{ width: '100%', height: '40%' }} controls>
            <source src={videoSource} type="video/mp4" ></source>
        </video>:
        <div style={{ width: '97vw', height: '90vh',display:'flex',alignItems: 'center',justifyContent: 'center'}}>
            <LoadingOutlined style={{color: 'gray', fontSize: '80px'}} ></LoadingOutlined>
        </div>
    );
};

export default Video;




