import React from "react";
import { mainmediacards } from "../../static/router";
const MainProducttop = () => {
  let mainMmediaItems = mainmediacards?.map((el) => (
    <div key={el.id} className="mainMedia__card">
      <img src="" alt="rasm" />
      <p className="mainMedia__card__title">{el.title}</p>
    </div>
  ));

  return <div className="mainMedia__cards">{mainMmediaItems}</div>;
};

export default MainProducttop;
