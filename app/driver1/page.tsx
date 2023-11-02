"use client";

import React from "react";
import css from "./driver1.module.scss";
import Rightarrow from "@/ui/icons/Rightarrow.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import SearchIcon from "@/ui/icons/SearchIcon.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import TrashsIcon from "@/ui/icons/Trashs.icon";
import TrashIcon from "@/ui/icons/Trash.Icon";
import DustIcon from "@/ui/icons/Dust.icon";

const Driver = () => {
  const [state, setState] = React.useState("information");
  return (
    <div className={css["container"]}>
      <div className={css["main-head"]}>
        <div className={css["main"]}>
          <div className={css["country"]}>
            <p>Driver Detail</p>
          </div>
          <div className={css["sidecon"]}>
            <div className={css["dash"]}>
              <p>Dashboard</p>
            </div>
            <div>
              <Rightarrow />
            </div>
            <div className={css["dash"]}>
              <p>Drivers</p>
            </div>
            <div className={css["icon1"]}>
              <Rightarrow />
            </div>
            <div className={css["dash1"]}>
              <p>Driver Detail</p>
            </div>
          </div>
        </div>
      </div>
      <div className={css["box"]}>
        <div className={css["blue-box"]}>
          <div>
            <img
              className={css["image"]}
              src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696326130.jpg"             
               alt=""
            />
          </div>
          <div>
            <p className={css["para"]}>
              Details of Fozi Fozi
            </p>
          </div>
          <div className={css["wallet"]}>
            <div className={css["add"]}>
              <p className={css["para1"]}>+Add Wallet Amount</p>
            </div>
          </div>
        </div>
        <div className={css["info"]}>
          <div className={css["inform"]}>
            <a onClick={() => setState("information")}>
              <p>Information</p>
            </a>
          </div>

          <div className={css["ride"]}>
            <a onClick={() => setState("information")}>
              <p>Rides</p>
            </a>
          </div>
          <div className={css["ride"]}>
            <a onClick={() => setState("information")}>
              <p>Vehicle</p>
            </a>
          </div>
          <div className={css["ride1"]}>
            <a onClick={() => setState("information")}>
              <p>Wallet Transaction</p>
            </a>
          </div>
        </div>
        <div className={css["horizontal"]}>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Driver;
