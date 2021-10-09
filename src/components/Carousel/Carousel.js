import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { VideoContext } from '../../context/VideoProvider';
import { Wrap, Item } from './Carousel.element'
import { getSlide } from '../../service/Service';
import{Link} from 'react-router-dom'


const Carousel = () => {

    const [slide, setSlide] = React.useState([])


    React.useEffect(() => {
        getSlide()
            .then((res) => { setSlide(res) })
            .catch((err) => { console.log(err) })
    }, [])


    // const slide = React.useContext(VideoContext)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,

    };

    return (
        <Wrap>
            <Slider  {...settings}>
                {
                    slide.map((data, index) =>

                    (<div key={index}>
                        <Link to={{
                            pathname: `info/${data.slug}`,
                            data: data
                        }}>
                            <Item style={{ backgroundImage: `url(${data.thumbnail})` }}></Item>
                        </Link>
                    </div>))

                }
            </Slider>
        </Wrap >
    );
};

export default Carousel;