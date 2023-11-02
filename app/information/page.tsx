"use client";

import React from "react";
import css from "./inform.module.scss";
import Rightarrow from "@/ui/icons/Rightarrow.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import SearchIcon from "@/ui/icons/SearchIcon.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import TrashsIcon from "@/ui/icons/Trashs.icon";
import TrashIcon from "@/ui/icons/Trash.Icon";
import DustIcon from "@/ui/icons/Dust.icon";
import StarIcon from "@/ui/icons/Star.icon";
import Link from "next/link";
import CheckIcon from "@/ui/icons/Check.icon";

const infoenable = () => {
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
              <p>Driver Details</p>
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
            <p className={css["para"]}>
              Details of Advertising Official Riddhi Siddhi
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
              <a
                href="information
              "
              >
                Information
              </a>
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
              <p>Wallet Information</p>
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
                <p>8770377341</p>
              </div>
              <div className={css["email"]}>
                <p>Email :</p>
                <p>testnmh1@gmail.com</p>
              </div>
            </div>
            <div className={css["phone"]}>
              <div className={css["phone1"]}>
                <p>Bank Name:</p>
                <p>Lena Dena Bank</p>
              </div>
              <div className={css["creat"]}>
                <p>Branch Name:</p>
                <p>NEEMUCH</p>
              </div>
            </div>
            <div className={css["status"]}>
              <div className={css["stat"]}>
                <p>Status:</p>
                <button className={css["btn"]}>Disabled</button>
              </div>
              <div className={css["creat"]}>
                <p>Holder Name:</p>
                <p>Fraud</p>
              </div>
            </div>

            <div className={css["phone"]}>
              <div className={css["phone1"]}>
                <p>Account Number :</p>
                <p>65465465646</p>
              </div>
              <div className={css["email"]}>
                <p>IFSC Code :</p>
                <p>SMNB0000006</p>
              </div>
            </div>
            <div className={css["phone"]}>
              <div className={css["phone1"]}>
                <p>Other Information :</p>
                <p>dnfgndfn</p>
              </div>
              <div className={css["email"]}>
                <p>Created At :</p>
                <p>07 October 2023 07:18 AM</p>
              </div>
            </div>
            <div className={css["phone"]}>
              <div className={css["phone1"]}>
                <p>Edited :</p>
                <p>07 October 2023 07:19 AM</p>
              </div>
              <div className={css["email"]}>
                <p>Wallet Balance :</p>
                <p className={css["green"]}>₹100,000.00</p>
              </div>
            </div>
            <div className={css["phone2"]}>
              <div className={css["phone1"]}>
                <p>Rating :</p>
                <p>
                  <StarIcon />
                  0.0
                </p>
              </div>
              <div>
                <Link href="./driverdetails">
                  <p className={css["disable"]}>
                    Enable account&nbsp;
                    <CheckIcon />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default infoenable;
