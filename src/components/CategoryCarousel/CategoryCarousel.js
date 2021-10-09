import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Wrap, Item, Header, ItemName, Episode, WrapItem } from './CategoryCarousel.element';
import { getAnime } from '../../service/Service'
import { Link } from 'react-router-dom'

const CategoryCarousel = (props) => {

    const [settings, setSettings] = React.useState();

    React.useEffect(() => {
        if (window.innerWidth < 960) {
            setSettings({
                dot: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 3,
                swipeToSlide: true,
                arrows: true,
                nextArrow: '',
                prevArrow: '',
            });
        } else {
            setSettings({
                dot: true,
                infinite: true,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 4,
                swipeToSlide: true,
                swipe: true,
                arrows: true,
                nextArrow: '',
                prevArrow: '',
            })
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth < 960) {
                setSettings({
                    dot: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    swipeToSlide: true,
                    swipe: true,
                    arrows: true,
                });
            } else {
                setSettings({
                    dot: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 5,
                    slidesToScroll: 4,
                    swipeToSlide: true,
                    swipe: true,
                    arrows: true,
                    nextArrow: '',
                    prevArrow: '',
                })
            }
        })
    }, [])


    return (
        <Wrap>
            <Header> {props.name}</Header>
            <Slider {...settings}>
                {
                    props.data.map((data, index) =>
                    (<div key={index}>
                        <WrapItem  >
                            <Link style ={{textDecoration: 'none'}} to={{
                            pathname : `/info/${data.slug}`,
                            data : data
                        }}>
                                <Item style={{ backgroundImage: `url(${data.thumbnail})` }}>
                                    <Episode>{data.time}</Episode>
                                </Item>
                                <ItemName>{data.name}</ItemName>
                            </Link>
                        </WrapItem>
                    </div>))
                }
            </Slider>
        </Wrap>
    );
};

export default CategoryCarousel;