"use client";

import React from "react";
import css from "./payout-requests.module.scss";
import ArrowrightIcon from "@/ui/icons/Arrow-right.icon";

const Payoutrequests = () => {
  return (
    <div className={css["page-container"]}>
      <div className={css["header-bar"]}>
        <div className={css["cms-text"]}>
          <h2>Payout Requests</h2>
        </div>
        <div className={css["left-side-header-bar"]}>
          <p className={css["dashbord-text"]}>Dashboard</p>
          <p className={css["lamda-text"]}>
            <ArrowrightIcon />
          </p>
          <p className={css["lamda-text"]}>Payout Requests</p>
        </div>
      </div>

      <div className={css["table-div"]}>
        <div className={css["inner-page-div"]}>
          <table className={css["table"]}>
            <tr>
              <th className={css["th"]}>Driver</th>
              <th className={css["th"]}>Paid Amount</th>
              <th className={css["th"]}>Note</th>
              <th className={css["th"]}>Paid Date</th>
              <th className={css["th"]}>Status</th>
              <th className={css["th"]}>Actions</th>
            </tr>
             </table>
              <div  className={css["noresult-div"]}>
              No results found
            </div>
           
            
         
        </div>
      </div>
    </div>
  );
};

export default Payoutrequests;
