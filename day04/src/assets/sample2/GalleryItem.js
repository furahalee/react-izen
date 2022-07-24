import React from 'react';

const GalleryItem = ({ item, index, onView }) => {
    const { id, imgurl, title } = item;
    return (
        <li onClick={()=>onView(id)}>
            <img src={imgurl} alt={title} />
        </li>
    );
};

export default GalleryItem;