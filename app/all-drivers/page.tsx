"use client";

import React from "react";
import css from "./all-drivers.module.scss";
import AddIcon from "@/ui/icons/Add-fill.icon";
import ArrowdownIcon from "@/ui/icons/Arrow-down.icon";
import SearchIcon from "@/ui/icons/Search.icon";
import DeleteIcon from "@/ui/icons/Delete-bin.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import EditboxIcon from "@/ui/icons/Edit.icon";
import Filetext from "@/ui/icons/file-text.icon";
import Eyefill from "@/ui/icons/eye-fill.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import ArrowleftdoubleIcon from "@/ui/icons/Arrow-left-double-line.icon";
import ArrowrightdoubleIcon from "@/ui/icons/Arrow-right-double-line.icon";
import Link from "next/link";
import Main from "../_layout/main";
import Sidebar from "../_layout/sidebar";
const Alldrivers = () => {
  return (
    <div className={css["page-container"]}>
      <div className={css["header-bar"]}>
        <div className={css["all-driver-text"]}>
          <h2>All Drivers</h2>
        </div>
        <div className={css["left-side-header-bar"]}>
          <p className={css["dashbord-text"]}>Dashboard</p>
          <p className={css["lamda-text"]}>&gt;</p>
          <p className={css["lamda-text"]}>All Drivers</p>
        </div>
      </div>

      {/* <div className={css["table-div"]}> */}
      <div className={css["inner-page-div"]}>
        <div className={css["header-box"]}>
          <div className={css["left-side-button"]}>
            <button className={css["create-button"]}>
              {" "}
              <AddIcon /> Create Driver
            </button>
          </div>
          <div className={css["right-side-info"]}>
            <p className={css["search-by-text"]}> Search By : </p>
            <div className={css["field-box-1"]}>
              {/* <input
                  className={css["name-text"]}
                  type="text"
                  placeholder="Name"
                />
                <ArrowdownIcon /> */}
              <select className={css["select-box-header"]}>
                <option value="">User Name</option>
                <option value="">Email</option>
                <option value="">Phone</option>
              </select>
            </div>
            <div className={css["field-box-2"]}>
              <SearchIcon />
              <input className={css["search-bar"]} type="text" />
            </div>

            <button className={css["clear-button"]}>Clear</button>
          </div>
        </div>
        <div className={css["table-div"]}>
          <table className={css["table"]}>
            <tr>
              <th className={css["th-1"]}>
                <div className={css["combine-icons"]}>
                  <input type="checkbox" className={css["checkbox"]} />
                  <p>
                    <DeleteIcon />
                  </p>
                  <p>All</p>
                </div>
              </th>

              <th className={css["th-2"]}>Image</th>
              <th className={css["th-3"]}>Driver Name</th>
              <th className={css["th-4"]}>Documents</th>
              <th className={css["th-5"]}>Email</th>
              <th className={css["th-6"]}>Phone</th>
              <th className={css["th-7"]}>Vehicle Type</th>
              <th className={css["th-8"]}>Total Rides</th>
              <th className={css["th-9"]}>Wallet History</th>
              <th className={css["th-10"]}>Status</th>
              <th className={css["th-11"]}>Actions</th>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>

              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
             <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>
                <img
                  className={css["images"]}
                  src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696923608.jpg"
                  alt=""
                />
              </td>
              <td className={css["td"]}> <Link href="/userdetails">M.Raghvan</Link> </td>
              <td className={css["td"]}>
                <Filetext />
              </td>
              <td className={css["td"]}>m.ramadan38.995@gmail.com</td>
              <td className={css["td"]}>+201120613617</td>
              <td className={css["td"]}>Mercado</td>
              <td className={css["td"]}>1</td>
              <td className={css["td"]}>Wallet History</td>
              <td className={css["for"]}>
                <div className={css["toggle"]}>
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </div>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  <span className={css["icon-white"]}>
                    <EyeIcon />
                  </span>

                  <span className={css["icon-green"]}>
                    <EditboxIcon />
                  </span>
                  <span className={css["icon-red"]}>
                    <DeleteIcon />
                  </span>
                </div>
              </td>
            </tr>
          </table>
          <div className={css["fotter-button"]}>
            <div className={css["previous-button"]}>
              <p>
                <ArrowleftdoubleIcon />
              </p>
              <button className={css["previous"]}>Previous</button>
            </div>
            <div className={css["next-button"]}>
              <button className={css["next"]}>Next</button>
              <p>
                <ArrowrightdoubleIcon />
              </p>
            </div>
          </div>
          <div className={css["end-div"]}>
          <p className={css["end"]}>Showing 1 to 20 of 61 results</p>
        </div>
        <li />
        </div>
      </div>
    </div>
  );
};

export default Alldrivers;
