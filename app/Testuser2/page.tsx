import React from "react";
import css from "./testuser.module.scss";
import Rightarrow from "@/ui/icons/Rightarrow.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import SearchIcon from "@/ui/icons/SearchIcon.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import TrashsIcon from "@/ui/icons/Trashs.icon";
import TrashIcon from "@/ui/icons/Trash.Icon";
import DustIcon from "@/ui/icons/Dust.icon";

const Testuser2 = () => {
  return (
    <div className={css["container"]}>
      <div className={css["main-head"]}>
        <div className={css["main"]}>
          <div className={css["country"]}>
            <p>User Details</p>
          </div>
          <div className={css["sidecon"]}>
            <div className={css["dash"]}>
              <p>Dashboard</p>
            </div>
            <div>
              <Rightarrow />
            </div>
            <div className={css["dash1"]}>
              <p>Administration tools</p>
            </div>
            <div className={css["icon1"]}>
              <Rightarrow />
            </div>
            <div className={css["dash1"]}>
              <p>User Details</p>
            </div>
          </div>
        </div>
      </div>
      <div className={css["box"]}>
        <div className={css["blue-box"]}>
          <div>
            <img
              className={css["image"]}
              src="https://cabme.siswebapp.com/assets/images/dispatcher_users/dispatcher_user_profile1696344424.png"
              alt=""
            />
          </div>
          <div>
            <p className={css["para"]}>Details of Test User</p>
          </div>
        </div>
        <div className={css["info"]}>
          <div className={css["inform"]}>
            <a href="contact">
              <p>Information</p>
            </a>
          </div>

          <div className={css["ride"]}>
            <a href="noresult">
              <p>Rides</p>
            </a>
          </div>
        </div>
        <div className={css["horizontal"]}>
          <hr />
        </div>
        <div className={css["minicontainer"]}>
          <div className={css["minimain-page"]}>
            <div className={css["phone"]}>
              <div className={css["phone1"]}>
                <p>Phone:</p>
                <p>777777777</p>
              </div>
              <div className={css["email"]}>
                <p>Email :</p>
                <p>A@gmail.com</p>
              </div>
            </div>
            <div className={css["status"]}>
              <div className={css["stat"]}>
                <p>Status:</p>
                <button className={css["btn"]}>Enabled</button>
              </div>
              <div className={css["creat"]}>
                <p>Created At :</p>
                <p>08 October 2023 09:06 AM</p>
              </div>
            </div>
            <div className={css["edited"]}>
              <div className={css["edit"]}>
                <p>Edited :</p>
                <p>08 October 2023 09:06 AM</p>
              </div>
            </div>
            <div className={css["disa"]}>
              <div className={css["disable"]}>
                <a href="enableaccount">
                  <p>
                    Disable account&nbsp;
                    <input type="checkbox" />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testuser2;
