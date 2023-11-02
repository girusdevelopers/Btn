"use client";

import React from "react";
import css from "./editvehicle.module.scss";
import ArrowrightIcon from "@/ui/icons/Arrow-right.icon";
import FiledownloadIcon from "@/ui/icons/File-download.icon";
import CheckedIcon from "@/ui/icons/checked";
import BacktoIcon from "@/ui/icons/Backto";

const Userreports = () => {
  return (
    <div className={css["page-container"]}>
      <div className={css["header-bar"]}>
        <div className={css["cms-text"]}>
          <h2>Vehicle Type</h2>
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
          <p className={css["user-report"]}> Edit Vehicle Type</p>
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
                    EDIT VEHICLE TYPE
                  </button>
                </div>
              </legend>
              <div className={css["part-one"]}>
                <div>
                  <div>
                    <h3>Vehicle Type</h3>
                  </div>
                  <input
                    type="text"
                    name="libelle"
                    value="Mercado"
                    className={css["input-type"]}
                  />
                </div>
                <div>
                  <div>
                    <h3>Image</h3>
                  </div>
                  <input
                    type="file"
                    name="image"
                    className={css["input-type"]}
                  />
                  <img
                    className={css["round"]}
                    src="https://cabme.siswebapp.com/assets/images/type_vehicle/image_vehicleType1693671680.png"
                    alt=""
                  />
                </div>
              </div>
              <div className={css["text"]}>
                {" "}
                <h3>
                  {" "}
                  <CheckedIcon />
                  Active{" "}
                </h3>
              </div>
            </fieldset>
          </div>
          <div className={css["table-border-outside"]}>
            <fieldset className={css["fileld-set"]}>
              <legend>
                <div>
                  <button className={css["user-button"]}>
                  DELIVERY CHARGE
                  </button>
                </div>
              </legend>
              <div className={css["boxs"]}>
              <div>
                <h3>Delivery Charge Per KM</h3>
              </div>
              <div>
                {" "}
                <input className={css["input-types"]} />
              </div>
              </div>

              <div className={css["boxs"]}>
              <div>
                <h3>Minimum Delivery Charge</h3>
              </div>
              <div>
                <input className={css["input-types"]} />
              </div>
              </div>
              <div className={css["boxs"]}>
              <div>
                <h3> Minimum Delivery Charge Within KM</h3>
              </div>
              <div>
                <input className={css["input-types"]} />
              </div>
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
