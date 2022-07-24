import React, {useRef, useState} from 'react';
import './style.css';
import dataList from '../assets/api/friendData';
import FriendList from './FriendList';
import FriendInput from './FriendInput';

const Friend = () => {
    const [ data, setData ] = useState( dataList );
    const [isChk, setIsChk] = useState(false)
    const no = useRef(data.length);
    const onDel = (id) => {
        setData(data.filter(item => item.id !==id))
    }
    const onRemove = () => {
        setData([])
    }
    const onReset = () => {
        setData(dataList);
    }
    // const onAdd1 = (name, age, image) => {
    //     setData([
    //         ...data,
    //         {
    //             id: no.current++,
    //             name: name, 
    //             age: age, 
    //             image: image,
    //         }
    //     ])
    // }
    const onAdd = (form) => {
        form.id = ++no.current;
        setData([
            ...data,
            form
        ])
    }
    return (
        <div className="wrap">
            <h1>친구들 총인원: {data.length} </h1>
            <p className="chk"><input type="checkbox" checked={isChk} 
            onChange={e=> setIsChk(e.target.checked)}/> 
                추가활성
            </p>
            <FriendList data={data} onDel={onDel}/>
            <p className="btn">
                <button onClick={onRemove}>모두삭제</button>
                <button onClick={onReset}>초기복구</button>
            </p>
            {
                isChk && <FriendInput onAdd={onAdd} />
            }
            
        </div>
    );
};

export default Friend;