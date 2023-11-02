"use client";

import React from "react";
import css from "./driverspayouts.module.scss";
import AddIcon from "@/ui/icons/Add-fill.icon";
import ArrowdownIcon from "@/ui/icons/Arrow-down.icon";
import SearchIcon from "@/ui/icons/Search.icon";
import ArrowrightIcon from "@/ui/icons/Arrow-right.icon";
const Driverpayouts = () => {
  return (
    <div className={css["page-container"]}>
      <div className={css["header-bar"]}>
        <div className={css["cms-text"]}>
          <h2>Drivers Payouts</h2>
        </div>
        <div className={css["left-side-header-bar"]}>
          <p className={css["dashbord-text"]}>Dashboard</p>
          <p className={css["lamda-text"]}><ArrowrightIcon/></p>
          <p className={css["lamda-text"]}>Drivers Payouts</p>
        </div>
      </div>
      <div className={css["table-div"]}>
        <div className={css["inner-page-div"]}>
          <div className={css["header-box"]}>
            <div className={css["left-side-button"]}>
              <button className={css["create-button"]}>
                {" "}
                <AddIcon /> Create Driver Payouts
              </button>
            </div>
            <div className={css["right-side-info"]}>
              <p className={css["Search-by-text"]}> Search By : </p>
              <div className={css["field-box"]}>
                <input
                  className={css["name-text"]}
                  type="text"
                  placeholder="Name"
                />
                <ArrowdownIcon />
              </div>
              <div className={css["field-box-2"]}>
                <SearchIcon />
                <input className={css["search-bar"]} type="text" />
              </div>

              <button className={css["clear-button"]}>Clear</button>
            </div>
          </div>

          <table className={css["table"]}>
            <tr>
              <th className={css["th"]}>Driver</th>
              <th className={css["th"]}>Paid Amount</th>
              <th className={css["th"]}>Page Slug</th>
              <th className={css["th"]}>Paid Date</th>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>Cabme Driver</td>
              <td className={css["td"]}><span className={css["span-1"]}>(₹1.00)</span></td>
              <td className={css["td"]}>tes</td>
              <td className={css["td"]}>05 October 2023 05:17 PM</td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>Cabme Driver</td>
              <td className={css["td"]}><span className={css["span-1"]}>(₹20.00)</span></td>
              <td className={css["td"]}>done</td>
              <td className={css["td"]}>05 October 2023 05:15 PM</td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>Cabme Driver</td>
              <td className={css["td"]}><span className={css["span-1"]}>(₹1.00)</span></td>
              <td className={css["td"]}>Admin</td>
              <td className={css["td"]}>05 October 2023 12:10 PM</td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>Cabme Driver</td>
              <td className={css["td"]}><span className={css["span-1"]}>(₹20.00)</span></td>
              <td className={css["td"]}></td>
              <td className={css["td"]}>05 October 2023 12:09 PM</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Driverpayouts;
