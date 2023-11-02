"use client";

import React from "react";
import css from "./user.module.scss";
import Rightarrow from "@/ui/icons/Rightarrow.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import SearchIcon from "@/ui/icons/SearchIcon.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import TrashsIcon from "@/ui/icons/Trashs.icon";
import TrashIcon from "@/ui/icons/Trash.Icon";
import DustIcon from "@/ui/icons/Dust.icon";
import Link from "next/link";
import CheckIcon from "@/ui/icons/Check.icon";

const Userdetails = () => {
  const [state, setState] = React.useState("information");

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
              src="https://cabme.siswebapp.com/assets/images/dispatcher_users/dispatcher_user_profile1696702001.jpeg"
              alt=""
            />
          </div>
          <div>
            <p className={css["para"]}>Details of george souza</p>
          </div>
        </div>
        <div className={css["info"]}>
          <div className={css["inform"]}>
            <a onClick={() => setState("information")}>
              <p>Information</p>
            </a>
          </div>

          <div className={css["ride"]}>
            <a onClick={() => setState("rides")}>
              <p>Rides</p>
            </a>
          </div>
        </div>
        <div className={css["horizontal"]}>
          <hr />
        </div>
        <div className={css["minicontainer"]}>
          {state === "information" && (
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
                  <Link href="./enableaccount">
                    <p>
                      Disable account{" "}
                      <span className={css["check"]}>
                        <CheckIcon />
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          )}

<<<<<<< HEAD
          {state === "rides" && <div>
            second
            </div>}
=======

          {state === "rides" && <div>
            <div>
              <p className={css["no"]}>No Information</p>
            </div>
            
            </div>}
          

>>>>>>> 0ce0658227f9a1b13e36772a0c69088bcd2c9f4f
        </div>
      </div>
    </div>
  );
};

export default Userdetails;
