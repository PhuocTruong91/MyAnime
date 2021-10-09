import Carousel from '../components/Carousel/Carousel'
import CategoryCarousel from '../components/CategoryCarousel/CategoryCarousel'
import React from 'react';
import { getRecommend, getRank } from '../service/Service'
import Search from '../components/Search/Search';

const Home = () => {

    const [recommend, setRecommend] = React.useState([]);
    const [ngay, setNgay] = React.useState([]);
    const [tuan, setTuan] = React.useState([]);
    const [thang, setThang] = React.useState([]);
    const [nam, setNam] = React.useState([]);

    React.useEffect(() => {
        getRecommend()
            .then((res) => { setRecommend(res) })
            .catch((err) => { console.log(err) })

        getRank('ngay')
            .then((res) => { setNgay(res) })
            .catch((err) => { console.log(err) })

        getRank('tuan')
            .then((res) => { setTuan(res) })
            .catch((err) => { console.log(err) })

        getRank('thang')
            .then((res) => { setThang(res) })
            .catch((err) => { console.log(err) })

        getRank('nam')
            .then((res) => { setNam(res) })
            .catch((err) => { console.log(err) })
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }, [])

    // const {recommend,ngay,tuan,thang,nam,data} = React.useContext(VideoContext)

    return (
        <div>
            <Carousel></Carousel>     
            <Search> </Search>
            <CategoryCarousel data={recommend} name="Thịnh Hành"></CategoryCarousel>
            <CategoryCarousel data={ngay} name="Xem Nhiều Trong Ngày"></CategoryCarousel>
            <CategoryCarousel data={tuan} name="Xem Nhiều Trong Tuần"></CategoryCarousel>
            <CategoryCarousel data={thang} name="Xem Nhiều Trong Tháng"></CategoryCarousel>
            <CategoryCarousel data={nam} name="Xem Nhiều Trong Năm"></CategoryCarousel>
        </div>
    );
};

export default Home;