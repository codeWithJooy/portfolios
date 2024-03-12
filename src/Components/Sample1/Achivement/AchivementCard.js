import React from "react";

const AchivementCard = ({tag,tagBg,title,desc,img}) => {
  return (
    <div className="achCard">
      <div className="achTag" style={{ background: {tagBg} }}>
        <p>{tag}</p>
      </div>
      <div className="achTitle">
        <p>{title}</p>
      </div>
      <div className="achDesc">
        <p>
          {desc}
        </p>
      </div>
      <div className="achPic">
        <img src={img} />
      </div>
    </div>
  );
};

export default AchivementCard;