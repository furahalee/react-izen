import React, { useState } from 'react';
import Test1Sub from './Test1Sub';

const dataList = [
    {id: 1, name: '김철수'},
    {id: 2, name: '김다미'},
    {id: 3, name: '최진수'},
]

const Test1 = () => {
    const [data, setData]= useState( dataList );
    const onAdd1 = (name) => {
        setData( data.concat({
            id:4, name: name
        }))
    }
    const onAdd2 = (text) => {
        setData([
            ...data,
            {
                id:5,
                name: text
            }
        ])
    }

    const onDel1 = () => {}
    const onDel2 = () => {}

    const onMod1 = (id) => {
        setData( data.map( item => {
            if(item.id ===id){
                return {
                    ...item,
                    name: '유재석',
                }
            }else {
                return item
            }
        }))
    }
    const onMod2 = (id) => {
        setData(data.map(item => item.id===id ? {...item,
        name: '강호동'} : item))
    }

    return (
        <div>
            <Test1Sub onAdd1={onAdd1} onAdd2={onAdd2} 
            onDel1={onDel1} onDel2={onDel2}
            onMod1={onMod1} onMod2={onMod2}
            />
        </div>
    );
};

export default Test1;