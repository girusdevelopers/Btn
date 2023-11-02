import React from "react";
import css from "./addwallet.module.scss";
import StarIcon from "@/ui/icons/Star.icon";
import MoreIcon from "@/ui/icons/More.icon";
import TrashsIcon from "@/ui/icons/Trashs.icon";
import CancelIcon from "@/ui/icons/Cancel.icon";

const Addwallet = () => {
  return (
    <div className={css["container"]}>
      <div className={css["main-page"]}>
        <div className={css["phone"]}>
          <div className={css["add"]}>
            <p className={css["parah"]}>Add Wallet Amount</p>
            <p><CancelIcon/></p>
          </div>
          <div className={css["hor"]}>
            <p>
              <hr />
            </p>
          </div>
          <div className={css["amount"]}>
            <p className={css["para"]}>Amount</p>
          </div>
          <div className={css["text"]}>
            <p>
              <input
                className={css["text"]}
                type="text"
                placeholder="Enter Amount"
              />
            </p>
          </div>
          <div className={css["hor"]}>
            <p className={css["hor"]}>
              <hr />
            </p>
          </div>
          <div className={css["button"]}>
            <button className={css["btn"]}>submit</button>
            &nbsp;&nbsp;&nbsp;
            <button className={css["btn"]}>close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addwallet;
