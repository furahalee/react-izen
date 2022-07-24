import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const NewsContainer = styled.div`
    width: 1400px; margin: 15px auto; display: flex;
    flex-wrap: wrap; justify-content: space-between;
`
const Article = styled.article`
    width: 300px; border: 1px solid #999; margin-bottom: 20px;
    padding: 10px;
    a {
        text-decoration: none; color: #000;
        h2 {
            font-size: 20px; margin-bottom: 15px; text-overflow: ellipsis;
            white-space: nowrap; overflow: hidden;
        }
        img { width: 300px; height: 300px; }
        p {font-size: 15px; line-height: 1.6}
    }
`

const News = () => {
    const [data, setData] = useState([]);
    useEffect( () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=d1d15153f51748208ff9d0ba6d3dcbf6';
        axios.get(url) 
            .then(res => {
                const temp = res.data.articles;
                setData( res.data.articles);
                console.log(res.data)
            }
            
            );
    }, [] )
    return (
        <NewsContainer>
            {
                data.map((item, index) => 
                    <Article key={index}>
                        <a href={item.url} target="_blank">
                            <h2>{item.title}</h2>
                            <img src={item.urlToImage} alt={item.title} />
                            <p>{item.description}</p>
                        </a>
                    </Article>
                )
            }
        </NewsContainer>
    );
};

export default News;