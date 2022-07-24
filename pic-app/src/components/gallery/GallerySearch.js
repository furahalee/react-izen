import React from 'react';
import styled from "styled-components";
import {ImageSearch} from '../styled/pixastyle.js';

const GallerySearch = ({text, onChangeInput, onSearch}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        if(!text) return;
        onSearch(text);
    }
    return (
        <ImageSearch onSubmit={onSubmit}>
            <input type="text" placeholder='검색어를 입력하세요'
            value={text ||''} onChange={onChangeInput}
            />
            <button type="submit">검색</button>
        </ImageSearch>
    );
};

export default GallerySearch;