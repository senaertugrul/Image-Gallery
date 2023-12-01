import React from "react";
const Image = ({data}) => {
    console.log(data);
  return (
    <>
      <h1>Image Gallery</h1>
      <div className="container">
        {data.map((item) => (
          <div key={item.index} className="images">
            <img src={item.src.large} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};
export default Image;
