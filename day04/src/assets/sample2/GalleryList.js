import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryList = ({ data, onView }) => {
    return (
        <ul className="list">
            {
                data.map( (item, index) => <GalleryItem key={item.id} item={item}
                index={index} onView={onView} /> )
            }
        </ul>
    );
};

export default GalleryList;