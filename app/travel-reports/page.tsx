"use client";

import React from "react";
import css from "./travel-reports.module.scss";
import ArrowrightIcon from "@/ui/icons/Arrow-right.icon";
import FiledownloadIcon from "@/ui/icons/File-download.icon";

const Travelreports = () => {
  return (
    <div className={css["page-container"]}>
      <div className={css["header-bar"]}>
        <div className={css["cms-text"]}>
          <h2>Travel Report</h2>
        </div>
        <div className={css["left-side-header-bar"]}>
          <p className={css["dashbord-text"]}>Dashboard</p>
          <p className={css["lamda-text"]}>
            <ArrowrightIcon />
          </p>
          <p className={css["report-text"]}>Reports</p>
          <p className={css["lamda-text"]}>
            <ArrowrightIcon />
          </p>
          <p className={css["travel-report"]}>Travel Report</p>
        </div>
      </div>

      {/* <div className={css["table-div"]}>
       
      </div> */}
      <div className={css["body-outer-part"]}>
      <div className={css["body-part"]}>
<div className={css["table-border-outside"]}>
        <fieldset className={css["fileld-set"]}>
          <legend>
            <div>
              <button className={css["user-button"]}>Travel Report</button>
            </div>
          </legend>

          <div className={css["middle-info"]}>
            <div className={css["first-box-div"]}>
              <div className={css["select-statu-div"]}>
                <p className={css["status"]}>Select Status</p>
                <select className={css["select-bar"]}>
                  <option>Select Status</option>
                  <option>Select Status</option>
                </select>
              </div>
              <div>
                <p className={css["status"]}>Date</p>
                <select className={css["select-bar"]}>
                  <option>Select Status</option>
                  <option>Select Data</option>
                </select>
              </div>
            </div>
            <div className={css["second-box-div"]}>
              <div>
                <p className={css["status"]}>From</p>
                <input type="date" className={css["input-bar"]} />
              </div>
              <div>
                <p className={css["status"]}>To</p>
                <input type="date" className={css["input-bar"]} />
              </div>
            </div>
            <div className={css["bottom-box-div"]}>
              <p className={css["status"]}>Select File Format</p>
              <select className={css["select-bar"]}>
                <option>Select File Format</option>
                <option>pdf</option>
              </select>
            </div>
          </div>
        </fieldset>
      </div>

      <div className={css["download-div"]}>
        <button className={css["user-button"]}>
          <span className={css["icon"]}>
            <FiledownloadIcon />
          </span>{" "}
          Download
        </button>
      </div>
</div>
      </div>

      
    </div>
  );
};

export default Travelreports;
