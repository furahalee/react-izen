import React from "react";
import BusinessItem from "./BusinessItem";

const BusinessList = ({data}) => {
  return (
    <ul className="list">
      {
          data.map(item=><BusinessItem key={item.id} data={item} />)
      }
    </ul>
  );
};

export default BusinessList;
