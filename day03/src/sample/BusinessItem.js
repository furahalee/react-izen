import React from "react";

const BusinessItem = ({data}) => {
  const {imgurl, title, titleEng, des } = data;
  return (
    <>
      {
          <li>
          <a href="#">
            <div>
              <img
                src={imgurl}
                alt=""
              />
            </div>
            <h3>
              {title}
              <span>{titleEng}</span>
            </h3>
            <p>
              {des}
            </p>
          </a>
        </li>
      }
    </>
  );
};

export default BusinessItem;
