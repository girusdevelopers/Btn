"use client";

import React from "react";
import css from "./cms-pages.module.scss";
import AddIcon from "@/ui/icons/Add-fill.icon";
import ArrowdownIcon from "@/ui/icons/Arrow-down.icon";
import SearchIcon from "@/ui/icons/Search.icon";
import DeleteIcon from "@/ui/icons/Delete-bin.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import EditboxIcon from "@/ui/icons/Edit.icon";

const cms = () => {
  return (
    <div className={css["page-container"]}>
      <div className={css["header-bar"]}>
        <div className={css["cms-text"]}>
          <h3>CMS Pages</h3>
        </div>
        <div className={css["left-side-header-bar"]}>
          <p className={css["dashbord-text"]}>Dashboard</p>
          <p className={css["lamda-text"]}>&gt;</p>
          <p className={css["lamda-text"]}>CMS Pages</p>
        </div>
      </div>
     
      <div className={css["table-div"]}>
        <div className={css["inner-page-div"]}>
          <div className={css["header-box"]}>
            <div className={css["left-side-button"]}>
              <button className={css["create-button"]}>
                {" "}
                <AddIcon /> Create a page
              </button>
            </div>
            <div className={css["right-side-info"]}>
              <p> Search By : </p>
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
              <th className={css["th"]}>
                <div className={css["combine-icons"]}>
                   <input type="checkbox" className={css["checkbox"]} />
                <p>
                  <DeleteIcon />
                </p>
                <p>All</p>
                </div>
             
              </th>
              <th className={css["th"]}>Page Name</th>
              <th className={css["th"]}>Page Slug</th>
              <th className={css["th"]}>Status</th>
              <th className={css["th"]}>Actions</th>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>
                <input type="checkbox" className={css["checkbox"]} />
              </td>
              <td className={css["td"]}>Contact us</td>
              <td className={css["td"]}>contact-us</td>
              <td className={css["td"]}>
                <ToggleIcon/>
              </td>
              <td className={css["td"]}>
                <div className={css["action-icons"]}>
                  
                    <span className={css["icon-around"]}>
                      <EditboxIcon/>
                      </span>
                    <span className={css["icon-around"]}>
                    <DeleteIcon />
                    </span>
               
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default cms;
