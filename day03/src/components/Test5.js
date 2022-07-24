import React, { useState } from 'react';
import '../assets/css/Test5.css'
import '../assets/css/reset.css'
const user = [
    {id:1, name: '최우식', age: 22, addr: '제주도', done: true},
    {id:2, name: '최순심', age: 42, addr: '서울', done: false},
    {id:3, name: '방정환', age: 65, addr: '안양', done: true},
    {id:4, name: '유관순', age: 15, addr: '울릉도', done: false},
    {id:5, name: '김남길', age: 19, addr: '대전', done: true},
]
const Test5 = () => {
    const[data, setData] = useState(user)
    return (
        <div>
            <table className="list">
                <caption>그해 우리는 출연진</caption>
                <colgroup>
                <col className="num" />
                <col className="name" />
                <col className="age" />
                <col className="addr" />
                <col className="consent" />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                        <th>동의여분</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index)=>(
                            <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.addr}</td>
                            <td>{item.done ? '동의' : '비동의'}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Test5;