import React from "react";
import FriendItem from "./FriendItem";

const FriendList = ({ data, onDel }) => {
  return (
    <div>
      <ul>
        {data.map(item => (
          <FriendItem key={item.id} item={item} onDel={onDel} />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
