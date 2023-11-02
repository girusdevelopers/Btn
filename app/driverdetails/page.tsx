"use client";

import React from "react";
import css from "./driverdetails.module.scss";
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
import MoreIcon from "@/ui/icons/More.icon";

const Driverdetails = () => {
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
            <a onClick={() => setState("Rides")}>
              <p>Rides</p>
            </a>
          </div>
          <div className={css["ride"]}>
            <a onClick={() => setState("Vehicle")}>
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
          {state === "information" && (
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
                  <button className={css["btn"]}>Enabled</button>
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
                  <Link href="./information">
                    <p className={css["disable"]}>
                      Disable account&nbsp;
                      <CheckIcon />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          )}
          {state === "Rides" && (
            <div>
              <div className={css["tablecontainer"]}>
                <div className={css["tablemain-page"]}>
                  <div className={css["tablephone"]}>
                    <div className={css["table"]}>
                      <table className={css["table"]}>
                        <tr className={css["table"]}>
                          <td className={css["table1"]}>Ride Id</td>
                          <td className={css["table1"]}>Driver Name</td>
                          <td className={css["table1"]}>Ride Type</td>
                          <td className={css["table1"]}>Status</td>
                          <td className={css["table1"]}>Created</td>
                          <td className={css["table1"]}>Actions</td>
                        </tr>
                        <tr className={css["table"]}>
                          <td className={css["th1"]}>2442</td>
                          <td className={css["th2"]}>
                            Advertising official riddhi siddhi
                          </td>
                          <td className={css["th3"]}>Normal</td>
                          <td className={css["th4"]}>
                            <button className={css["complt"]}>completed</button>
                          </td>
                          <td className={css["th5"]}>
                            07 October 2023 07:24 AM
                          </td>
                          <th className={css["th"]}>
                            <div className={css["action"]}>
                              <span className={css["icon-around"]}>
                                <MoreIcon />
                              </span>
                              &nbsp;
                              <span className={css["edit1"]}>
                                <TrashsIcon />
                              </span>
                            </div>
                          </th>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {state === "Vehicle" && (
            <div className={css["container1"]}>
              <div className={css["main-page1"]}>
                <div className={css["phone3"]}>
                  <div className={css["phone4"]}>
                    <p className={css["brand"]}>Brand:</p>
                    <p>Modelo teste</p>
                  </div>
                  <div className={css["email1"]}>
                    <p className={css["brand"]}>Model:</p>
                    <p>Teste Clássico</p>
                  </div>
                </div>
                <div className={css["edited1"]}>
                  <div className={css["edit1"]}>
                    <p className={css["brand"]}>Car Number:</p>
                    <p>35215</p>
                  </div>
                  <div className={css["creat1"]}>
                    <p className={css["brand"]}>No of passenger:</p>
                    <p>1</p>
                  </div>
                </div>
                <div className={css["status1"]}>
                  <div className={css["stat1"]}>
                    <p className={css["brand"]}>Color:</p>
                    <p>#ff0000</p>
                  </div>
                  <div className={css["creat1"]}>
                    <p className={css["brand"]}>Milage:</p>
                    <p>5</p>
                  </div>
                </div>

                <div className={css["phone3"]}>
                  <div className={css["phone4"]}>
                    <p className={css["brand"]}>KM:</p>
                    <p>1000</p>
                  </div>
                  <div className={css["email1"]}>
                    <p className={css["brand"]}>Created At :</p>
                    <p>07 October 2023 07:18 AM</p>
                  </div>
                </div>
                <div className={css["vehicle"]}>
                  <div className={css["phone4"]}>
                    <p className={css["brand"]}>Edited :</p>
                    <p>07 October 2023 07:19 AM</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Driverdetails;
