import React from "react";
import css from "./video.module.scss";

const Vidoe = () => {
  return (
    <div className={css["container"]}>
        <div className={css["main"]}>
            <div className={css["left"]}>
                <div>
                    <input type="file" />

                </div>
                <div className={css["image"]}>

                </div>
                <div>
                    <a className={css["link"]} href="">Play now</a>
                </div>

            </div>
            <div className={css["right"]}>
                <div>
                    <h4 className={css["tittle"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eveniet!</h4>
                </div>
                <div>
                    <p className={css["quires"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laborum!</p>
                </div>

            </div>

        </div>


    </div>
      
    
    
  );
};

export default Vidoe;
