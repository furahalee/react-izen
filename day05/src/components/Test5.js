import React, { useRef, useState } from "react";

const Test5 = () => {
  const no = useRef(1);
  const textRef = useRef(null);
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    text: "",
    addr: "",
  });
  const { text, addr } = form;

  const onAdd = (e) => {
    e.preventDefault();
    if( !text || !addr ===0 ){
        return
    }
    setData([
      ...data,
      {
        id: no.current++,
        text,
        addr,
      },
    ]);
    setForm({
      text: "",
      addr: "",
    });
    textRef.current.focus();
  };
  const changeInput = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <form onSubmit={onAdd}>
        <input
          type="text"
          value={text}
          name="text"
          onChange={changeInput}
          ref={textRef}
        />
        <input type="text" value={addr} name="addr" onChange={changeInput} />
        <button type="submit">추가</button>
      </form>
      <hr />
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} / {item.text} / {item.addr}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test5;
