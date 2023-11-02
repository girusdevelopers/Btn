"use client";

import React from "react";
import css from "./editbrand.module.scss";
import ArrowrightIcon from "@/ui/icons/Arrow-right.icon";
import FiledownloadIcon from "@/ui/icons/File-download.icon";
import CheckedIcon from "@/ui/icons/checked";
import BacktoIcon from "@/ui/icons/Backto";

const Userreports = () => {
  return (
    <div className={css["page-container"]}>
      <div className={css["header-bar"]}>
        <div className={css["cms-text"]}>
          <h2>Edit Brand</h2>
        </div>
        <div className={css["left-side-header-bar"]}>
          <p className={css["dashbord-text"]}>Dashboard</p>
          <p className={css["lamda-text"]}>
            <ArrowrightIcon />
          </p>
          <p className={css["report-text"]}>  Brand</p>
          <p className={css["lamda-text"]}>
            <ArrowrightIcon />
          </p>
          <p className={css["user-report"]}> Edit Brand</p>
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
                  <button className={css["user-button"]}>
                  EDIT BRAND
                  </button>
                </div>
              </legend>
              <div className={css["part-one"]}>
                <div>
                  <div>
                    <h3>Name</h3>
                  </div>
                  <input
                    type="text"
                    name="libelle"
                    value="Modelo teste"
                    className={css["input-type"]}
                  />
                </div>
                
              </div>
              <div className={css["text"]}>
                {" "}
                <h3>
                  {" "}
                  <input
                          type="checkbox"
                          id={`check-data-${1}`}
                          className={css["check"]}
                        />
                 Status{" "}
                </h3>
              </div>
            </fieldset>
          </div>
          
          <div className={css["download-div"]}>
            <button className={css["user-button"]}>
              <span className={css["icon"]}>
                <FiledownloadIcon />
              </span>{" "}
              Save
            </button>
            <button className={css["user-button"]}>
              <span className={css["icon"]}>
                <BacktoIcon />
              </span>{" "}
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userreports;
