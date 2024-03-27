import React from "react";

const CommonCard = ({pic,tag,header,desc}) => {
  return (
    <div className="hobbyCard">
      <div className="hobbyTag">
        <p>{tag}</p>
      </div>
      <img src={pic} />
      <div className="hobbyDetails">
        <div className="hobbyHeader">
          <p>{header}</p>
        </div>
        <div className="hobbyDesc">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
