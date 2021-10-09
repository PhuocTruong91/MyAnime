import React, { useCallback } from 'react';
import { search } from '../../service/Service'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons'
import { useFetchSearch } from '../../hooks/useFetchSearch'
import { debounce } from 'lodash';
import {
    Wrap,
    SearchInput,
    Input,
    Icon,
    WrapResult,
    Result,
    Image,
    Title,
} from './Search.elements'

const Search = () => {
    const [data, setData] = React.useState([]);
    const [display, setDisplay] = React.useState(false);
    // const [input, setInput] = React.useState()
    const [isLoading, setIsloading] = React.useState(true);


    // React.useEffect(() => {
    //     const res = search({
    //         q: input,
    //         pageParam: 3,
    //         limit: 6
    //     })
    //     res
    //         .then((data) => {
    //             setData(data.data)
    //         })
    //         .catch((err) => { console.error(err) })
    //     setIsloading(false)
    // }, [input])

    // const {isLoading} = useFetchSearch({
    //     q: input,
    //     pageParam: 3,
    //     limit: 6
    // })


    const debounceDropDown =
        debounce((value) => {
            const res = search({
                q: value,
                pageParam: 3,
                limit: 6
            })
            res.then((data) => {
                setData(data.data)
            })
            console.log(123)
            setIsloading(false)
            return true;
        }
            ,
            3000)

    const handleChange = (event) => {
        const input = event.target.value;
        if (input !== '') {
            // setIsloading(true)
            // setInput(input)
            setDisplay(true)
        } else {
            setDisplay(false)
        }
        debounceDropDown(input);
    }


    const handleFocus = () => {
        setDisplay(true);
    }


    return (
        <Wrap>
            <SearchInput>
                <Input show={display} onChange={handleChange} placeholder="Tìm kiếm" onFocus={handleFocus}></Input>
                <Icon show={display}>
                    <AiOutlineSearch size={20}></AiOutlineSearch>
                </Icon>
            </SearchInput>
            <WrapResult show={display}>
                {
                    // isLoading ? <LoadingOutlined style={{ fontSize: '16px', color: 'white' }} /> :
                        (
                            data.map((data, index) => (
                                <Link key={index} style={{ textDecoration: 'none' }} to={{
                                    pathname: `/info/${data.slug}`,
                                    data: data
                                }}>
                                    <Result>
                                        <Image style={{ backgroundImage: `url(${data.thumbnail})` }}></Image>
                                        <Title>{data.name}</Title>
                                    </Result>
                                </Link>

                            ))
                        )

                }

            </WrapResult>
        </Wrap >
    );
};

export default Search;