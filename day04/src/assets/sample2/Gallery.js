import React, { useState } from 'react';
import '../css/reset.css'
import './style.css';
import GalleryBig from './GalleryBig';
import GalleryView from './GalleryView';
import GalleryText from './GalleryText';
import dataList from '../api/catData';

const Gallery = () => {
    const [ data, setData ] = useState( dataList );
    const [ cat, setCat ] = useState( data[0] );
    const onView = ( id ) => {
        setCat(data.find(element => element.id === id ))
    }
    return (
        <div className="wrap">
            <GalleryView data={data} cat={cat} onView={onView}/>
            <GalleryText cat={cat} />
        </div>
    );
};

export default Gallery;