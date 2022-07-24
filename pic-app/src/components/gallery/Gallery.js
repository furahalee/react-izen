import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from '../styled/pixastyle.js'
import GallerySearch from "./GallerySearch";
import GalleyList from "./GalleyList";



const Gallery = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ text, setText ] = useState('cat');
    const API_KEY = '28673095-bc6ac2dc6546a3d0c03744889'
    const url = `https://pixabay.com/api/?key=${ API_KEY }&q=${text}&image_type=photo`

    const getDatas = (getUrl) => {
        axios.get(getUrl)
            .then(res => {
                setData(res.data.hits)
                setLoading(false)
                setError('')
                console.log(res.data)
            })
            .catch(error => {
                setData([])
                setLoading(true)
                setError('api주소를 확인하세요')
            })
    }

    const onSearch = (texts) => {
        //e.preventDefault();
        //const {value, name} = e.target;
        setText(texts);
        //getDatas(url);
        
    }

    const onChangeInput = (e) => {
        const {value, name} = e.target;
        setText(value);
    }

    useEffect(()=> {
        getDatas(url);
    }, [text])
    return (
        <Container width="1400px">
            <GallerySearch text={text} onChangeInput={onChangeInput} onSearch={onSearch} />
            {
                loading && data.length ===0 && ( <h1>
                    no images found
                </h1>)
            }
            {
                data&& !loading && <GalleyList data={data} />
            }
        </Container>
    );
};

export default Gallery;