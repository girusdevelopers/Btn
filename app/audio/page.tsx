import React from "react";
import css from "./audio.module.scss";

function Video() {
  return (
    <div>
      <div className={css["main-div"]}>
        <div className={css["first-div"]}>
          <img
            className={css["img"]}
            src="https://www.teachhub.com/wp-content/uploads/2019/10/Our-Top-10-Songs-About-School-768x569.png"
          />
        </div>
        <div className={css["second-div"]}>
          <h2>Songs like you</h2>
        </div>
      </div>
    </div>
  );
}

export default Video;
